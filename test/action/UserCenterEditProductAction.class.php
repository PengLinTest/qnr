<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */
require_once 'ActionBase.class.php';
require_once '/lib/Tools.class.php';
require_once '/lib/ConstData.class.php';
require_once '/model/LoginModel.class.php';
require_once '/model/UserCenterProductModel.class.php';
require_once '/model/UserCenterEditProductModel.class.php';

class UserCenterEditProduct extends ActionBase {
	
	//构造函数
	public function __construct(){
		$this->need_login = 1;
		parent::__construct();
	}
	
	// 方法列表
	public $methodlist = array(
			"getHtml",
			"getProductCertiType",
			"saveProductRecord",
			"GetProductRecordDetailData"
	);
	
	/**
	 * 默认调用函数，分派调用方法
	 */
	public function action() {
		$method = Tools::getMethodParams();
		$exist = in_array ( $method, $this->methodlist );
		if ($exist) {
			// 方法存在
			$this->$method();
		} else {
			echo "no this method!";
		}
	}
	public function getHtml(){
		//获取静态页面
		$this->tpl->display('page/EditProduct.html');
	}
	/**
	 * 获取产品认证的类型列表
	 */
	public function getProductCertiType(){
		echo json_encode((new UserCenterEditProductModel())->getProductCertiType());
	}
	/**
	 * 保存产品(新建产品，编辑产品)
	 * 1、获取参数，打包成对象，传递给下一个参数
	 */
	public function saveProductRecord(){
		$res = array('result' => false);
		//$productID = null,表示新增产品，否则为编辑产品
		$productID = isset($_REQUEST['ProductID'])?$_REQUEST['ProductID']:null;
		$ProductIntro = isset($_REQUEST['ProductIntro'])?$_REQUEST['ProductIntro']:"";
		//product 表信息
		$product = array();
		if(!empty($productID)){
			$product['product_id'] = (int)$productID;
		}else{
			$product['product_id'] = null;
		}
		$product['product_intro'] = $ProductIntro;
		//product_basicinfo信息
		$resBasicinfo = $this->getBasicinfoParam();
		if($resBasicinfo['result']){
			$product['basicinfo'] = $resBasicinfo['basicinfo'];
		}else{
			echo json_encode($res);
			return ;
		}
		//product_growimages表参数
		$resGrowimages = $this->getGrowimagesParam();
		if($resGrowimages['result']){
			$product['growimages'] = $resGrowimages['growimages'];
		}else{
			echo json_encode($res);
			return ;
		}
		//获取农药，肥料参数 fertilizer_pesticides_use表
		$resFerPesUse = $this->getFerPesUseParam();
		if($resFerPesUse['result']){
			$product['fertilizer'] = $resFerPesUse['fertilizer'];
			$product['pesticides'] = $resFerPesUse['pesticides'];
		}else{
			echo json_encode($res);
			return ;
		}
		//产品认证参数 product_certi表
		$resCerti = $this->getProductCertiParam();
		if($resCerti['result']){
			$product['certi'] = $resCerti['certi'];
		}else{
			echo json_encode($res);
			return ;
		}
		//product_buyinfo 表
		$resBuyinfo = $this->getBuyinfoParam();
		if($resBuyinfo['result']){
			$product['buyinfo'] = $resBuyinfo['buyinfo'];
		}else{
			echo json_encode($res);
			return ;
		}
		
		//保存数据
		$res['result'] = (new UserCenterEditProductModel())->addProductRecord($product);
		
		echo json_encode($res);
	}
	/**
	 * 获取产品基本信息参数
	 */
	private function getBasicinfoParam(){
		$res  = array('result' => false);
		$ProductName = isset($_REQUEST['txtProductName'])?$_REQUEST['txtProductName']:null;
		$CropsIndex = isset($_REQUEST['selCrops'])?$_REQUEST['selCrops']:null;
		$VarietyIndex = isset($_REQUEST['txtCropVariety'])?$_REQUEST['txtCropVariety']:null;
		$selQuarter = isset($_REQUEST['selQuarter'])?$_REQUEST['selQuarter']:null;
		$txtContent = isset($_REQUEST['txtContent'])?$_REQUEST['txtContent']:"";
		$BasicinfoID = isset($_REQUEST['BasicinfoID'])?$_REQUEST['BasicinfoID']:null;
		//这个是图片地址
		$ProductLogoImg = isset($_REQUEST['ProductLogoImg'])?$_REQUEST['ProductLogoImg']:"";
		$productType = isset($_REQUEST['productType'])?$_REQUEST['productType']:null;
		$productLable = isset($_REQUEST['productLable'])?$_REQUEST['productLable']:null;
		if(empty($ProductName) || empty($CropsIndex) || empty($VarietyIndex) || empty($selQuarter)
				|| empty($productType) || empty($productLable) || empty($ProductLogoImg)){
			return $res;
		}
		$basicinfo = array("basicinfo_name" => $ProductName,"basicinfo_crops_index" =>$CropsIndex
				,"basicinfo_varieties_index" => $VarietyIndex,"basicinfo_season" =>$selQuarter
				,"basicinfo_remark" =>$txtContent,"basicinfo_type" =>$productType
				,"basicinfo_lable" =>$productLable,"basicinfo_img_loc"=>$ProductLogoImg
		);
		if(!empty($BasicinfoID)){
			$basicinfo['basicinfo_id'] = $BasicinfoID;
		}
		$res['result'] = true;
		$res['basicinfo'] = $basicinfo;
		return $res;
	}
	/**
	 * 获取产品生长周期参数
	 * $GrowImgTime,$GrowAddr,$Growintro,$GrowImg都是数组参数
	 */
	private function getGrowimagesParam(){
		$res = array("result" => false);
		$GrowImgTime = isset($_REQUEST['GrowImgTime'])?$_REQUEST['GrowImgTime']:null;
		$GrowAddr = isset($_REQUEST['GrowAddr'])?$_REQUEST['GrowAddr']:null;
		$Growintro = isset($_REQUEST['Growintro'])?$_REQUEST['Growintro']:null;
		$GrowImg = isset($_REQUEST['GrowImg'])?$_REQUEST['GrowImg']:null;
		if(empty($GrowImgTime) || empty($GrowAddr) || empty($Growintro) || empty($GrowImg)){
			$res['result'] = true;
			$res['growimages'] = null;
			return $res;
		}
		//获取产品图片位置
		$resImage = $this->saveImages($GrowImg);
		if(!$resImage['result']){
			return $res;
		}
		$growimages = array("img_datellist" => $GrowImgTime,"img_addresslist" =>$GrowAddr
				,"img_desclist" => $Growintro,"img_loclist" =>$resImage['src']
		);
		$res['result'] = true;
		$res['growimages'] = $growimages;
		return $res;
	}
	/**
	 * 获取农药，肥料参数
	 */
	private function getFerPesUseParam(){
		$res = array('result' => true);
		//肥料
		$ManureDateTime = isset($_REQUEST['ManureDateTime'])?$_REQUEST['ManureDateTime']:null;
		$ManureTypetxt = isset($_REQUEST['ManureTypetxt'])?$_REQUEST['ManureTypetxt']:null;
		$ManureName = isset($_REQUEST['ManureName'])?$_REQUEST['ManureName']:null;
		$ManureDosage = isset($_REQUEST['ManureDosage'])?$_REQUEST['ManureDosage']:null;
		$ManureBrand = isset($_REQUEST['ManureBrand'])?$_REQUEST['ManureBrand']:null;
		$ManureCompany = isset($_REQUEST['ManureCompany'])?$_REQUEST['ManureCompany']:null;
		if(empty($ManureDateTime) || empty($ManureTypetxt) || empty($ManureName) 
				|| empty($ManureDosage) || empty($ManureCompany)){
			$res['fertilizer'] = null;
		}else{
			$res['fertilizer'] = array("use_timelist" => $ManureDateTime,"use_namelist" =>$ManureName
					,"use_levellist" => $ManureDosage,"use_brandlist" => $ManureBrand
					,"use_supplierslist" => $ManureCompany,"use_typelist"=>$ManureTypetxt
			);
		}
		//农药		
		$PesticideDateTime = isset($_REQUEST['PesticideDateTime'])?$_REQUEST['PesticideDateTime']:null;
		$PesticideName = isset($_REQUEST['PesticideName'])?$_REQUEST['PesticideName']:null;
		$PesticideDosage = isset($_REQUEST['PesticideDosage'])?$_REQUEST['PesticideDosage']:null;
		$PesticideBrand = isset($_REQUEST['PesticideBrand'])?$_REQUEST['PesticideBrand']:null;
		$PesticideCompany = isset($_REQUEST['PesticideCompany'])?$_REQUEST['PesticideCompany']:null;
		if(empty($PesticideDateTime) || empty($PesticideName) || empty($PesticideDosage)
				|| empty($PesticideBrand) || empty($PesticideCompany)){
			$res['pesticides'] = null;
		}else{
			$res['pesticides'] = array("use_timelist" => $PesticideDateTime,"use_namelist" =>$PesticideName
					,"use_levellist" => $PesticideDosage,"use_brandlist" => $PesticideBrand
					,"use_supplierslist" => $PesticideCompany
			);
		}
		return $res;
	}
	/**
	 * 获取产品认证参数
	 */
	private function getProductCertiParam(){
		$res = array('result' => false);
		$CertifiedSeleted = isset($_REQUEST['CertifiedSeleted'])?$_REQUEST['CertifiedSeleted']:null;
		$CertifiedDate = isset($_REQUEST['CertifiedDate'])?$_REQUEST['CertifiedDate']:null;
		$CertifiedNo = isset($_REQUEST['CertifiedNo'])?$_REQUEST['CertifiedNo']:null;
		$CertifiedValidDate = isset($_REQUEST['CertifiedValidDate'])?$_REQUEST['CertifiedValidDate']:null;
		$CertifiedOrg = isset($_REQUEST['CertifiedOrg'])?$_REQUEST['CertifiedOrg']:null;
		$Certificateimg = isset($_REQUEST['Certificateimg'])?$_REQUEST['Certificateimg']:null;
		if(empty($CertifiedSeleted) || empty($CertifiedDate) || empty($CertifiedNo)
				|| empty($CertifiedValidDate) || empty($CertifiedOrg) || empty($Certificateimg)){
			$res['certi'] = null;
			$res['result'] = true;
			return $res;
		}
		//每一个认证可以上传多个图片，认证之间是以#分割的
		$certiImages = split("#", $Certificateimg);
		$resImage = array();
		for($i = 0,$len = count($certiImages); $i < $len; $i++){
			$resImage[$i] = "";
			if(!empty($certiImages[$i])){
				$temp = $this->saveImages($certiImages[$i]);
				if(!$temp['result']){
					$res['result'] = false;
					return $res;
				}else{
					foreach ($temp['src'] as $value){
						$resImage[$i] .=$value.",";
					}
					if(!empty($resImage[$i])){
						$resImage[$i] = substr($resImage[$i], 0,-1);
					}
					
				}
			}
		}
		
		$res['certi'] = array("certi_type_indexlist" => $CertifiedSeleted,"certi_date" =>$CertifiedDate
				,"certi_num" => $CertifiedNo,"certi_valid" => $CertifiedValidDate
				,"certi_awarddepart" => $CertifiedOrg,"certi_imgloclist" =>$resImage
		);
		$res['result'] = true;
		return $res;
		
	}
	private function getBuyinfoParam(){
		$res = array('result' => true );
		$IternetShoplink = isset($_REQUEST['IternetShoplink'])?$_REQUEST['IternetShoplink']:null;
		$ShopAddr = isset($_REQUEST['ShopAddr'])?$_REQUEST['ShopAddr']:null;
		$SalerName = isset($_REQUEST['SalerName'])?$_REQUEST['SalerName']:null;
		$SalerPhone = isset($_REQUEST['SalerPhone'])?$_REQUEST['SalerPhone']:null;
		if(empty($IternetShoplink) && empty($ShopAddr) && (empty($SalerName) || empty($SalerPhone))){
			$res['buyinfo'] = null;
		}else{
			$res['buyinfo'] = array("shoplinklist" => $IternetShoplink,"shopAddrlist" => $ShopAddr
					,"salerNamelist" => $SalerName,"salerPhone" => $SalerPhone
			);
		}
		return $res;
	}
	//给的都是以#分割的base64图片
	private function saveImages($base64_images){
		$res = array("result" => false);
		$images = split('\|',$base64_images);
		$images_src = array();
		foreach ($images as $value){
			//修改图片
			if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $value, $result)){
				$base64_src = Tools::saveBase64image($value, $result);
				if($base64_src !== false){
					array_push($images_src, $base64_src);
				}else{
					return $res;
				}
			}else{
				array_push($images_src, substr($value,1));
			}
		}
		if(count($images_src) > 0){
			$res['result'] = true;
			$res['src'] = $images_src;
		}
		return $res;
	}
	//获取产品的所有信息
	public function GetProductRecordDetailData(){
		$res = array("result" => false);
		$ProductID = isset($_REQUEST['ProductID'])?$_REQUEST['ProductID']:null;
		if(!empty($ProductID)){
			$res = (new UserCenterEditProductModel())->getProductRecordDetail($ProductID);
		}
		echo json_encode($res);
	}
}