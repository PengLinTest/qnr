<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */
require_once 'ActionBase.class.php';
require_once DIR . '/model/VendorModel.class.php';
require_once DIR . '/model/ProductModel.class.php';
require_once '/lib/Tools.class.php';
require_once '/lib/ConstData.class.php';

class Vendor extends ActionBase {
	
	// 方法列表
	public $methodlist = array(
			"getVendorAuthInfo",
			"getVendorInfo",
			"getNewVendorList",
			"getHtml",
			"getVendorList",
			"getCountVendor",
			"getThreeProductByVendorId"
	);
	
	/**
	 * 默认调用函数，分派调用方法
	 */
	public function action() {
		$method = Tools::getMethodParams ();
		$exist = in_array ( $method, $this->methodlist );
		if ($exist) {
			// 方法存在
			$this->$method();
		} else {
			echo "no this method!";
		}
	}
	
	/**
	 * 默认函数，返回静态页面
	 */
	public function getHtml(){
		$this->tpl->display('page/VendorList.html');
	}
	
	/**
	 * 获取认证信息
	 * cerType:0:个人认证信息;1公司认证信息
	 * $vendorId 商家id
	 */
	public function getVendorAuthInfo(){
		$vendorId = isset($_REQUEST['vendorId'])?(int)$_REQUEST['vendorId']:-1;
		$cerType = isset($_REQUEST['cerType'])?(int)$_REQUEST['cerType']:0;
		if($vendorId > 0){
			$res = (new VendorModel())->getVendorAuthById($vendorId, $cerType);
			if(!empty($res)){
				echo json_encode($res);
			}
		}
		
		
	}
	
	/**
	 * 获取企业信息
	 * $vendorId 商家id
	 */
	public function getVendorInfo(){
		$vendorId = isset($_REQUEST['vendorId'])?(int)$_REQUEST['vendorId']:-1;
		if($vendorId > 0){
			$res = (new VendorModel())->getVendorInfoById($vendorId);
			if(!empty($res)){
				echo json_encode($res);
			}
		}
	}
	/**
	 * 获取最新的商家团队
	 * @param $type 商家类型
	 * @param $top 获取的个数
	 */
	public function getNewVendorList(){
		$type = isset($_REQUEST['type'])?(int)$_REQUEST['type']:1;
		$top = isset($_REQUEST['top'])?(int)$_REQUEST['top']:4;
		$res =  (new VendorModel())->getNewVendorByType($top, $type);
		echo json_encode($res);
		
	}
	
	/**
	 * 获取详细的产品列表
	 * @return 返回产品基本信息列表
	 */
	public function getVendorList(){
		$res = array();
		$pageNumber = isset($_REQUEST['PageNumber'])?(int)$_REQUEST['PageNumber']:1;
		$pageSize = isset($_REQUEST['PageSize'])?(int)$_REQUEST['PageSize']:16;
		$keyword = (isset($_REQUEST['keyword']) && !empty($_REQUEST['keyword']))?$_REQUEST['keyword']:"null";
	
		$model = new VendorModel();
		$res = $model->getVendorList($pageNumber,$pageSize,$keyword);
		echo json_encode($res);
	}
	
	/**
	 * 获取商家个数
	 * @return 个数
	 */
	public function getCountVendor(){
		$keyword = (isset($_REQUEST['keyword']) && !empty($_REQUEST['keyword']))?$_REQUEST['keyword']:"null";
		$model = new VendorModel();
		$res = array();
		$res['total'] = $model->getCountVendor($keyword);
		echo json_encode($res);
	}
	/*
	 * 根据商家id获取该商家的最新的三个产品
	 */
	public function getThreeProductByVendorId(){
		$vendorId = isset($_REQUEST['vendorId'])?(int)$_REQUEST['vendorId']:null;
		$res = array();
		if(!empty($vendorId)){
			$res = (new ProductModel())->getProductBasicinfoListByVendorId($vendorId,3);
		}
		echo json_encode($res);
	}
}