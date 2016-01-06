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

class UserCenterProduct extends ActionBase {
	
	//构造函数
	public function __construct(){
		$this->need_login = 1;
		parent::__construct();
	}
	
	// 方法列表
	public $methodlist = array(
			"deleteProduct",
			"newProductBatch",
			"submitProductCheck",
			"getBatchList",
			"upOrDownBatchInfo",
			"updateProductBatch"
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
	
	public function deleteProduct(){
		$res = array("result" => false);
		$productID = isset($_REQUEST['productID'])?$_REQUEST['productID']:null;
		$basicinfoID = isset($_REQUEST['basicinfoID'])?$_REQUEST['basicinfoID']:null;
		if(!empty($productID) && !empty($basicinfoID)){
			$res['result'] = (new UserCenterProductModel())->deleteProduct($productID, $basicinfoID);
		}
		echo json_encode($res);
	}
	public function newProductBatch(){
		$res = array("result" => false);
		$productID = isset($_REQUEST['productID'])?$_REQUEST['productID']:null;
		$RemarkColorInput = isset($_REQUEST['RemarkColorInput'])?$_REQUEST['RemarkColorInput']:null;
		$RemarkPowerInput = isset($_REQUEST['RemarkPowerInput'])?$_REQUEST['RemarkPowerInput']:null;
		$RemarkWeightInput = isset($_REQUEST['RemarkWeightInput'])?$_REQUEST['RemarkWeightInput']:null;
		$RemarkSugarInput = isset($_REQUEST['RemarkSugarInput'])?$_REQUEST['RemarkSugarInput']:null;
		$RemarkOtherInput = isset($_REQUEST['RemarkOtherInput'])?$_REQUEST['RemarkOtherInput']:null;
		if(empty($productID) || empty($RemarkColorInput) || empty($RemarkPowerInput) 
				|| empty($RemarkWeightInput) || empty($RemarkSugarInput) 
				|| empty($RemarkOtherInput)){
			echo json_encode($res);
			return;
		}
		//生成二维码
		//TODO 替换url
		$url = "http://www.baidu.com";
		$QRpath = Tools::createQRcode($url);
		$batch = array("color" => $RemarkColorInput,"power" => $RemarkPowerInput
				,"weight" => $RemarkWeightInput,"sugar" =>$RemarkSugarInput
				,"other" => $RemarkOtherInput,"batch_qrcode_loc" => $QRpath
		);
		$res['result'] = (new UserCenterProductModel())->addProductBatch($productID, $batch);
		echo json_encode($res);
	}
	public function updateProductBatch(){
		$res = array("result" => false);
		$batchID = isset($_REQUEST['batchID'])?$_REQUEST['batchID']:null;
		$RemarkColorInput = isset($_REQUEST['RemarkColorInput'])?$_REQUEST['RemarkColorInput']:null;
		$RemarkPowerInput = isset($_REQUEST['RemarkPowerInput'])?$_REQUEST['RemarkPowerInput']:null;
		$RemarkWeightInput = isset($_REQUEST['RemarkWeightInput'])?$_REQUEST['RemarkWeightInput']:null;
		$RemarkSugarInput = isset($_REQUEST['RemarkSugarInput'])?$_REQUEST['RemarkSugarInput']:null;
		$RemarkOtherInput = isset($_REQUEST['RemarkOtherInput'])?$_REQUEST['RemarkOtherInput']:null;
		if(empty($batchID) || empty($RemarkColorInput) || empty($RemarkPowerInput)
				|| empty($RemarkWeightInput) || empty($RemarkSugarInput)
				|| empty($RemarkOtherInput)){
			echo json_encode($res);
			return;
		}
		
		$batch = array("color" => $RemarkColorInput,"power" => $RemarkPowerInput
				,"weight" => $RemarkWeightInput,"sugar" =>$RemarkSugarInput
				,"other" => $RemarkOtherInput,"id" =>$batchID
		);
		$res['result'] = (new UserCenterProductModel())->updateProductBatch($batch);
		echo json_encode($res);
	}
	/**
	 * 提交产品进行审核
	 */
	public function submitProductCheck(){
		$res['result'] = false;
		$basicInfoID = isset($_REQUEST['basicinfoID'])?$_REQUEST['basicinfoID']:null;
		if(!empty($basicInfoID)){
			$res['result'] = (new UserCenterProductModel())->updateProductStatus($basicInfoID, 2);
		}
		echo json_encode($res);
	}
	/**
	 * 根据产品详情BasicinfoID获取产品的溯源信息
	 */
	public function getBatchList(){
		$result = array();
		$productID = isset($_REQUEST['productID'])?$_REQUEST['productID']:null;
		if(!empty($productID)){
			$result = (new UserCenterProductModel())->getProductBatchList($productID);
		}
		echo json_encode($result);
	}
	/**
	 * 将产品批次上架或者下架
	 */
	public function upOrDownBatchInfo(){
		$res = array("result" => false);
		$batchID = isset($_REQUEST['batchID'])?$_REQUEST['batchID']:null;
		$isUp = isset($_REQUEST['isUp'])?$_REQUEST['isUp']:null;
		if($batchID != null & $isUp != null){
			$res['result'] = (new UserCenterProductModel())->upOrDownBatch($batchID, $isUp);
		}
		echo json_encode($res);		
	}
}