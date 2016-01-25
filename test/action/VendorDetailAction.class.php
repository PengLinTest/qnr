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

class VendorDetail extends ActionBase {
	
	// 方法列表
	public $methodlist = array(
			"getHtml",
			"getVendorDetail",
			"getVendorMemberList",
			"getVendorProductList",
			"getVendorInfo"
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
		$this->tpl->display('page/VendorDetail.html');
	}
	public function getVendorDetail(){
		$vendorId = isset($_REQUEST['vendorId'])?(int)$_REQUEST['vendorId']:null;
		$res = array();
		if(!empty($vendorId)){
			$model = new VendorModel();
			$res = $model->getVendorById($vendorId);
		}
		echo json_encode($res);
	}
	/*
	 * 获取商家的员工
	 */
	public function getVendorMemberList(){
		$vendorId = isset($_REQUEST['vendorId'])?(int)$_REQUEST['vendorId']:null;
		$res = array();
		if(!empty($vendorId)){
			$model = new VendorModel();
			$res = $model->getVendorMemberListByVendorId($vendorId);
		}
		echo json_encode($res);
	}
	/*
	 * 获取商家的员工
	 */
	public function getVendorProductList(){
		$vendorId = isset($_REQUEST['vendorId'])?(int)$_REQUEST['vendorId']:null;
		$res = array();
		if(!empty($vendorId)){
			$model = new ProductModel();
			$res = $model->getProductBasicinfoListByVendorId($vendorId);
		}
		echo json_encode($res);
	}
	/*
	 * 获取商家的联系信息
	 */
	public function getVendorInfo(){
		$vendorId = isset($_REQUEST['vendorId'])?(int)$_REQUEST['vendorId']:null;
		$res = array();
		if(!empty($vendorId)){
			$model = new VendorModel();
			$res = $model->getVendorInfoById($vendorId);
		}
		echo json_encode($res);
	}
	
}