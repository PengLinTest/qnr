<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoBase.class.php';
require_once '/dao/DaoProduct.class.php';
require_once '/dao/DaoProductCertiType.class.php';
require_once '/dao/DaoProductGrowImgs.class.php';
require_once '/dao/DaoProductFerPes.class.php';
require_once '/dao/DaoProductCerti.class.php';
require_once '/dao/DaoProductBuyinfo.class.php';

class UserCenterEditProductModel{
	/**
	 * 获取产品的类型列表
	 */
	public function getProductCertiType(){
		return (new DaoProductCertiType())->getCertiTypeList();
	}
	/**
	 * 新增产品信息
	 * 1、保存产品基本信息basicinfo
	 * 2、保存生长周期图片product_growimages
	 * 3、保存肥料，农药使用表fertilizer_pesticides_use
	 * 4、产品认证 product_certi
	 * 5、购买信息 product_buyinfo
	 * 6、保存product表
	 * @param 产品的记录  $record
	 * 这个函数负责产品认证信息
	 */
	public function addProductRecord($record){
		$result = false;
		//新建一个连接
		$conn = DaoBase::_getConn();
		mysql_query("BEGIN"); //或者mysql_query("START TRANSACTION");
		//新建一个产品
		$productDAO = new DaoProduct();
		$product = array("product_intro" => $record['product_intro']);
		$isRight = false;
		$isUpdate = false;
		$productID = null;
		if(empty($record['product_id'])){
			$productResult = $productDAO->insertTransaction($product, $conn);
			if($productResult){
				$productID = $productDAO->_getLastId($conn);
				$isRight = true;
			}
		}else{
			$productID = $record['product_id'];
			$isRight = true;
			$isUpdate = true;
		}
		if($isRight){
			//更新product_basicinfo表
			$record['basicinfo']['product_id'] = $productID;
			$resBasicinfo = $this->saveBasicinfo($record['basicinfo'],$conn);
	
			//更新product_growimages表
			$resGrowimages = $this->saveGrowimages($record['growimages'],$conn);
			if($resGrowimages['result']){
				$product['growthing_img_list'] = $resGrowimages['idList'];
			}
			//更新fertilizer_pesticides_use表 fertilizer 肥料，pesticides 农药
			$resFerPesUse = $this->saveFerPesUse($record['fertilizer'],$record['pesticides'],$conn);
			if($resFerPesUse['result']){
				$product['fertilizer_list'] = $resFerPesUse['ferIdList'];
				$product['pesticides_list'] = $resFerPesUse['pesIdList'];
			}
			//更新产品认证表 product_certi
			$resCerti = $this->saveProCerti($record['certi'],$conn);
			if($resCerti['result']){
				$product['product_certi_list'] = $resCerti['certiIdList'];	
			}
			//更新产品购买信息表 product_buyinfo
			$resBuyInfo = $this->saveProBuyinfo($record['buyinfo'],$conn);
			if($resBuyInfo['result']){
				$product['buy_info_list'] = $resBuyInfo['buyinfoIdList'];
			}
			
			$resultAll = $resBasicinfo['result'] && $resGrowimages['result'] && $resFerPesUse['result']
					&& $resCerti['result'] && $resBuyInfo['result'];
			if($resultAll){
				if($isUpdate){
					$data = array("growthing_img_list" => $product['growthing_img_list'],"fertilizer_list" =>$product['fertilizer_list']
							,"pesticides_list" => $product['pesticides_list'],"product_certi_list" =>$product['product_certi_list']
							,"product_intro" => $product['product_intro'],"buy_info_list" => $product['buy_info_list']
					);
					$result = (new DaoProduct())->updateTransaction($conn, $data,array("product_id =" =>$productID));
				}else{
					//获取商家id
					$vendor = User::_getVendor();
					//生成二维码
					$url = "http://www.baidu.com";
					$product['qrcodeloc'] = "";
					$product['qrcodeloc'] = Tools::createQRcode($url);
					if(!empty($vendor)){
						$product['vendor_id'] = $vendor['vendor_id'];
						//更新产品信息
						$data = array("vendor_id" =>$product['vendor_id'],"growthing_img_list" => $product['growthing_img_list']
								,"fertilizer_list" =>$product['fertilizer_list'],"pesticides_list" => $product['pesticides_list']
								,"video_loc" => "","environment_data_exist" =>0,"product_certi_list" =>$product['product_certi_list']
								,"product_intro" => $product['product_intro'],"buy_info_list" => $product['buy_info_list']
								,"batchlist" => "","qrcodeloc" =>$product['qrcodeloc'],"product_isdelete" => 0
						);
						$result = (new DaoProduct())->updateTransaction($conn, $data,array("product_id =" =>$productID));
					}
				}
			}
		}
		if($result){
			mysql_query("COMMIT");
		}else{
			mysql_query("ROLLBACK");
		}
		DaoBase::_closeConn($conn);
		return $result;
	}
	/**
	 * 保存产品基本信息
	 * 分为两种情况，1、更新产品信息;2、新建产品基本信息
	 */
	private function saveBasicinfo($basicinfo,$conn){
		$res = array("result" => false);
		if(empty($basicinfo)){
			return $res;
		}
		if(empty($basicinfo['basicinfo_id'])){
			//新建产品基本信息
			//添加参数 basicinfo_status = 1，basicinfo_isdelete = 0
			$basicinfo['basicinfo_status'] = 1;
			$basicinfo['basicinfo_isdelete'] = 0;
			//增加basicinfo_time
			$basicinfo['basicinfo_time'] = Tools::getNowTime();
			$dao = new DaoProductBasicinfo();
			$resInsert = $dao->insertTransaction($basicinfo, $conn);
			if($resInsert){
				$res['result'] = true;
				$res["basicinfo_id"] =(int)$dao->_getLastId($conn); 
			}
		}else{
			//更新产品基本信息
			$basicinfoID = $basicinfo['basicinfo_id'];
			unset($basicinfo['basicinfo_id']);
			$resUpdate = (new DaoProductBasicinfo())->updateTransaction($conn, $basicinfo,array("basicinfo_id =" => $basicinfoID));
			if($resUpdate){
				$res['result'] = true;
				$res["basicinfo_id"] = $basicinfoID;
			}
		}
		return $res;
	}
	/**
	 * 保存生长周期图片
	 * 保存图片，然后返回id(格式：id1,id2)
	 */
	private function saveGrowimages($growimages,$conn){
		$res = array("result"=>true);
		if(empty($growimages)){
			$res['idList'] = "";
			return $res;		
		}
		//img_datellist 图片日期列表(|隔开)
		//img_addresslist 地址列表(|隔开)
		//img_desclist 图片描述(|隔开)
		//img_loclist 图片地址列表(数组)
		$img_datelist = split("#",$growimages['img_datellist']);
		$img_addresslist = split("#",$growimages['img_addresslist']);
		$img_desclist = split("#",$growimages['img_desclist']);
		$img_loclist = $growimages['img_loclist'];
		$idList = "";
		$dao = new DaoProductGrowImgs();
		//测试是否能够判断四个长度相等
		if(count($img_datelist) & count($img_addresslist) & count($img_desclist) & count($img_loclist)){
			for( $i = 0,$len = count($img_datelist);$i < $len ;$i++){
				$data = array("img_date" => $img_datelist[$i],"img_address" =>$img_addresslist[$i]
						,"img_desc" => $img_desclist[$i],"img_loc" => $img_loclist[$i]
				);
				$result = $dao->insertTransaction($data, $conn);
				if($result){
					$idList.=$dao->_getLastId($conn).",";
				}else{
					$res['result'] = false;
					return $res;
				}
			}
		}else{
			$res['result'] = false;
			return $res;
		}
		if(count($idList) > 0){
			$res['idList'] = substr($idList,0,-1);
		}
		
		return $res;
	}
	/**
	 * 保存农药肥料使用表
	 */
	private function saveFerPesUse($fertilizer,$pesticides,$conn){
		$res = array("result"=>true);
		if(empty($fertilizer)){
			$res['ferIdList'] = "";
		}else{
			//肥料
			//use_timelist 使用时间列表(#隔开)
			//use_namelist 使用化肥或农药名称列表(#隔开)
			//use_levellist 用量(#隔开)
			//use_brandlist 品牌列表(#隔开)use_typelist
			//use_supplierslist 供应商列表(#隔开)
			//use_typelist 类型列表(|隔开)
			$use_timelist = split("#",$fertilizer['use_timelist']);
			$use_namelist = split("#",$fertilizer['use_namelist']);
			$use_levellist = split("#",$fertilizer['use_levellist']);
			$use_brandlist = split("#",$fertilizer['use_brandlist']);
			$use_supplierslist = split("#",$fertilizer['use_supplierslist']);
			$use_typelist = split("#",$fertilizer['use_typelist']);
			$ferIdList = "";
			$dao = new DaoProductFerPes();
			//TODO 测试是否能够判断四个长度相等
			if(count($use_timelist) & count($use_namelist) & count($use_levellist)
					& count($use_brandlist) & count($use_supplierslist) & count($use_typelist)){
				for( $i = 0,$len = count($use_timelist);$i < $len ;$i++){
					$data = array("use_time" => $use_timelist[$i],"use_name" =>$use_namelist[$i]
							,"use_level" => $use_levellist[$i],"use_brand" => $use_brandlist[$i]
							,"use_suppliers" => $use_supplierslist[$i],"use_type" => $use_typelist[$i]
					);
					$result = $dao->insertTransaction($data, $conn);
					if($result){
						$ferIdList.=$dao->_getLastId($conn).",";
					}else{
						$res['result'] = false;
						return $res;
					}
				}
			}else{
				$res['result'] = false;
				return $res;
			}
			if(count($ferIdList) > 0){
				$res['ferIdList'] = substr($ferIdList,0,-1);
			}
		}
		if(empty($pesticides)){
			$res['pesIdList'] = "";
		}else{
			//农药
			//use_timelist 使用时间列表(#隔开)
			//use_namelist 使用化肥或农药名称列表(#隔开)
			//use_levellist 用量(#隔开)
			//use_brandlist 品牌列表(#隔开)
			//use_supplierslist 供应商列表(#隔开)
			$use_timelist = split("#",$pesticides['use_timelist']);
			$use_namelist = split("#",$pesticides['use_namelist']);
			$use_levellist = split("#",$pesticides['use_levellist']);
			$use_brandlist = split("#",$pesticides['use_brandlist']);
			$use_supplierslist = split("#",$pesticides['use_supplierslist']);
			$pesIdList = "";
			$dao = new DaoProductFerPes();
			// 测试是否能够判断四个长度相等
			if(count($use_timelist) & count($use_namelist) & count($use_levellist)
					& count($use_brandlist) & count($use_supplierslist) & count($use_typelist)){
				for( $i = 0,$len = count($use_timelist);$i < $len ;$i++){
					$data = array("use_time" => $use_timelist[$i],"use_name" =>$use_namelist[$i]
							,"use_level" => $use_levellist[$i],"use_brand" => $use_brandlist[$i]
							,"use_suppliers" => $use_supplierslist[$i],"use_type" => ""
					);
					$result = $dao->insertTransaction($data, $conn);
					if($result){
						$pesIdList.=$dao->_getLastId($conn).",";
					}else{
						$res['result'] = false;
						return $res;
					}
				}
			}else{
				$res['result'] = false;
				return $res;
			}
			if(count($pesIdList) > 0){
				$res['pesIdList'] = substr($pesIdList,0,-1);
			}
		}
		
		return $res;
	}
	/**
	 * 保存产品认证
	 */
	private function saveProCerti($productCerti,$conn){
		$res = array("result"=>true);
		if(empty($productCerti)){
			$res['certiIdList'] = "";
			return $res;
		}
		//CertifiedSeleted 认证类型id(#隔开)
		//CertifiedDate 颁证时间(#隔开)
		//CertifiedNo 证书编号(#隔开)
		//CertifiedValidDate 证书有效日期(#隔开)
		//CertifiedOrg 颁证机构(#隔开)
		//Certificateimg 证书图片(数组)
		$certiTypeList = split("#",$productCerti['certi_type_indexlist']);
		$certiDateList = split("#",$productCerti['certi_date']);
		$certiNumList = split("#",$productCerti['certi_num']);
		$certiVaildList = split("#",$productCerti['certi_valid']);
		$certiAwarddepartList = split("#",$productCerti['certi_awarddepart']);
		$certiImglocList = $productCerti['certi_imgloclist'];
		
		$dao = new DaoProductCerti();
		$certiIdList = "";
		// 测试是否能够判断四个长度相等
		if(count($certiTypeList) & count($certiDateList) & count($certiNumList)
				& count($certiVaildList) & count($certiAwarddepartList) & count($certiImglocList)){
			for( $i = 0,$len = count($certiTypeList);$i < $len ;$i++){
				$data = array("certi_type_index" => $certiTypeList[$i],"certi_date" =>$certiDateList[$i]
						,"certi_num" => $certiNumList[$i],"certi_valid" => $certiVaildList[$i]
						,"certi_awarddepart" => $certiAwarddepartList[$i]
						,"certi_imgloclist" => $certiImglocList[$i]
				);
				$result = $dao->insertTransaction($data, $conn);
				if($result){
					$certiIdList.=$dao->_getLastId($conn).",";
				}else{
					$res['result'] = false;
					return $res;
				}
			}
		}else{
			$res['result'] = false;
			return $res;
		}
		if(count($certiIdList) > 0){
			$res['certiIdList'] = substr($certiIdList,0,-1);
		}
		return $res;
		
	}
	/**
	 * 保存产品认证信息
	 */
	private function saveProBuyinfo($buyinfo,$conn){
		$res = array("result"=>true);
		if(empty($buyinfo)){
			$res['buyinfoIdList'] = "";
			return $res;
		}
		//shoplinklist 购买网址信息(#隔开)
		//shopAddrlist 实体店地址(#隔开)
		//salerNamelist 销售人员名字(#隔开)
		//salerPhone 销售人员联系电话(#隔开)
		$shopLinkList = split("#",$buyinfo['shoplinklist']);
		$shopAdderList = split("#",$buyinfo['shopAddrlist']);
		$salerNameList = split("#",$buyinfo['salerNamelist']);
		$salerPhone = split("#",$buyinfo['salerPhone']);
		$buyinfoIdList = "";
		$dao = new DaoProductBuyinfo();
		//销售人员信息
		if(count($salerNameList) > 0 && (count($salerNameList) == count($salerPhone))){
			for( $i = 0,$len = count($salerNameList);$i < $len ;$i++){
				$data = array("buy_type" => 3,"buy_desc_first" =>$salerNameList[$i]
						,"buy_desv_sec" => $salerPhone[$i]);
				$result = $dao->insertTransaction($data, $conn);
				if($result){
					$buyinfoIdList.=$dao->_getLastId($conn).",";
				}else{
					$res['result'] = false;
					return $res;
				}
			}
		}
		//实体店地址
		if(count($shopAdderList) > 0){
			for( $i = 0,$len = count($shopAdderList);$i < $len ;$i++){
				$data = array("buy_type" => 2,"buy_desc_first" =>$shopAdderList[$i]
						,"buy_desv_sec" => "");
				$result = $dao->insertTransaction($data, $conn);
				if($result){
					$buyinfoIdList.=$dao->_getLastId($conn).",";
				}else{
					$res['result'] = false;
					return $res;
				}
			}
		}
		//购买网址信息
		if(count($shopLinkList) > 0){
			for( $i = 0,$len = count($shopLinkList);$i < $len ;$i++){
				$data = array("buy_type" => 1,"buy_desc_first" =>$shopLinkList[$i]
						,"buy_desv_sec" => "");
				$result = $dao->insertTransaction($data, $conn);
				if($result){
					$buyinfoIdList.=$dao->_getLastId($conn).",";
				}else{
					$res['result'] = false;
					return $res;
				}
			}
		}
		if(count($buyinfoIdList) > 0){
			$res['buyinfoIdList'] = substr($buyinfoIdList,0,-1);
		}
		return $res;
	}
	/**
	 * 获取产品的详细信息
	 * 1、获取product表
	 * 2、获取产品基本信息basicinfo
	 * 3、获取生长周期图片product_growimages
	 * 4、获取肥料，农药使用表fertilizer_pesticides_use
	 * 5、获取产品认证 product_certi
	 * 6、获取购买信息 product_buyinfo
	 * @param 产品id $productID
	 */
	public function getProductRecordDetail($productID){
		$res = array("result" => false);
		//获取product表
		$product = (new DaoProduct())->getProductByproductId($productID);
		if($product && count($product) == 1){
			$product = $product[0];
			$res['product'] = $product;
		}else{
			return $res;
		}
		//获取产品基本信息basicinfo
		$basicinfo = (new DaoProductBasicinfo())->getProductBasicinfoByproductId($productID);
		if($basicinfo && count($basicinfo) == 1){
			$res['basicinfo'] = $basicinfo[0];
		}else{
			return $res;
		}
		//获取生长周期图片product_growimages
		$imgIdString = isset($product['growthing_img_list'])?$product['growthing_img_list']:null;
		if(!empty($imgIdString)){
			$res['growthing_img_list'] = (new DaoProductGrowImgs())->getGrowImgListByIdListString($imgIdString);
		}else{
			$res['growthing_img_list'] = "";
		}
		
		//获取fertilizer
		$ferIdString = isset($product['fertilizer_list'])?$product['fertilizer_list']:null;
		if(!empty($ferIdString)){
			$res['fertilizer_list'] = (new DaoProductFerPes())->getFerOrPesListByIdListString($ferIdString);
		}else{
			$res['fertilizer_list'] = "";
		}
		
		//获取pesticides
		$pesIdString = isset($product['pesticides_list'])?$product['pesticides_list']:null;
		if(!empty($pesIdString)){
			$res['pesticides_list'] = (new DaoProductFerPes())->getFerOrPesListByIdListString($pesIdString);
		}else{
			$res['pesticides_list'] = "";
		}
		//product_certi
		$certiIdString = isset($product['product_certi_list'])?$product['product_certi_list']:null;
		if(!empty($certiIdString)){
			$res['product_certi_list'] = (new DaoProductCerti())->getProductCertiListByIdListString($certiIdString);
		}else{
			$res['product_certi_list'] = "";
		}
		//获取product_buyinfo
		$buyinfoIdString = isset($product['buy_info_list'])?$product['buy_info_list']:null;
		if(!empty($buyinfoIdString)){
			$res['buy_info_list'] = (new DaoProductBuyinfo())->getProductBuyinfoListByIdListString($buyinfoIdString);
		}else{
			$res['buy_info_list'] = "";
		}
		$res['result'] = true;
		return $res;
	}

}