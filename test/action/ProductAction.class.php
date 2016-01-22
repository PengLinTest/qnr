<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */
require_once 'ActionBase.class.php';
require_once DIR . '/model/ProductModel.class.php';
require_once '/lib/Tools.class.php';
require_once '/lib/ConstData.class.php';

class Product extends ActionBase {
	
	// 方法列表
	public $methodlist = array(
			"getTraceDataList",
			"getHtml",
			"getCountTraceData",
			"getTraceDataListByProductId",
			"getCropIdByProductId",
			"getTopProduct"
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
		$this->tpl->display('page/TctraceProduct.html');
	}

	/**
	 * 获取详细的产品列表
	 * @return 返回产品基本信息列表
	 */
	public function getTraceDataList(){
		$pageNumber = isset($_REQUEST['PageNumber'])?(int)$_REQUEST['PageNumber']:1;
		$pageSize = isset($_REQUEST['PageSize'])?(int)$_REQUEST['PageSize']:16;
		$keyword = (isset($_REQUEST['keyword']) && !empty($_REQUEST['keyword']))?$_REQUEST['keyword']:"null";
		$cropID = (isset($_REQUEST['CropID']) && !empty($_REQUEST['CropID']))?$_REQUEST['CropID']:"null";
		$model = new ProductModel();
		$res = $model->getSimpleProductList($pageNumber,$pageSize,$keyword,$cropID);
		
		if(!empty($res)){
			echo json_encode($res);
		}
	}
	
	/**
	 * 获取产品个数
	 * @return 个数
	 */
	public function getCountTraceData(){
		$keyword = (isset($_REQUEST['keyword']) && !empty($_REQUEST['keyword']))?$_REQUEST['keyword']:"null";
		$cropID = (isset($_REQUEST['CropID']) && !empty($_REQUEST['CropID']))?$_REQUEST['CropID']:"null";
	
		$model = new ProductModel();
		$res = array();
		$res['total'] = $model->getCountProduct($keyword,$cropID);
		echo json_encode($res);
	}
	
	/**
	 * 根据产品id获取相应商家的产品列表
	 * @top 记录数
	 * @return 返回产品基本信息列表
	 */
	public function getTraceDataListByProductId(){
		$productId = (isset($_REQUEST['productId']) && !empty($_REQUEST['productId']))?$_REQUEST['productId']:"null";
		if($productId != "null"){
			$res = (new ProductModel())->getProductBasicinfoListByProductId($productId);
			if(!empty($res)){
				echo json_encode($res);
			}	
		}
		
	}
	/**
	 * 根据产品id获取作物索引的id
	 * @param productId 产品id
	 */
	public function getCropIdByProductId(){
		$productId = (isset($_REQUEST['productId']) && !empty($_REQUEST['productId']))?$_REQUEST['productId']:"null";
		$res = array();
		if($productId != "null"){
			$basicInfo = (new ProductModel())->getBasicInfoByProductId((int)$productId);
			if(!empty($basicInfo)){
				$res['cropId'] = $basicInfo[0]['basicinfo_crops_index'];
			}
		}
		echo json_encode($res);
	}
	
	/**
	 * 首页，用于获取最新的产品
	 * @top 获取的产品个数
	 * @type 产品的类型 1:吃喝;2:娱乐;3:实用 
	 * @return 产品详细信息列表
	 */
	public function getTopProduct(){
		$top = (isset($_REQUEST['top']))?(int)$_REQUEST['top']:4;//默认为4个
		$type = (isset($_REQUEST['type']))?(int)$_REQUEST['type']:1;
		$res = (new ProductModel())->getTopProductByType($top, $type);
		echo json_encode($res);
	}
}