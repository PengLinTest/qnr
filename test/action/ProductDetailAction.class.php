<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */
require_once 'ActionBase.class.php';
require_once '/lib/Tools.class.php';
require_once '/lib/ConstData.class.php';
require_once '/model/ProductModel.class.php';
require_once '/model/ProductBatchModel.class.php';
require_once '/model/ProductBuyinfoModel.class.php';
require_once '/model/ProductFerPesUseModel.class.php';
require_once '/model/ProductGrowImgsModel.class.php';

class ProductDetail extends ActionBase {
	
	// 方法列表
	public $methodlist = array(
			"getHtml",
			"getProductDetail",
			"getProductLastBatch",
			"getProductBuyinfo",
			"getProductFerPesList",
			"getGrowImgList",
			"getEnvironmentDataByType"
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
		$this->tpl->display('page/ProductDetail.html');
	}
	/**
	 * 获取产品的详细信息，主要包括，product表和product_basicinfo表中的组合信息
	 */
	public function getProductDetail(){
		$productId = isset($_REQUEST['productId'])?(int)$_REQUEST['productId']:-1;
		if($productId > 0){
			$model = new ProductModel();
			$res = $model->getProductById($productId);
			if(!empty($res) && count($res) > 0){
				echo json_encode($res[0]);
			}
		}
			
	}
	
	/**
	 * 获取产品批次表的最后一条信息
	 */
	public function getProductLastBatch(){
		$res = array("result" => false);
		$batchIdList = isset($_REQUEST['batchIdList'])?$_REQUEST['batchIdList']:null;
		if(!empty($batchIdList)){
			//调用获取batch数据
			$temp = (new ProductBatchModel())->getlastVaildBatch($batchIdList);
			if($temp != null){
				$res['result'] = true;
				$res['data'] = $temp;
			}
		}
		echo json_encode($res);
	}
	
	/**
	 * 获取购买信息
	 * @param buyIdList 购买信息的列表
	 */
	public function getProductBuyinfo(){
		$buyIdList = isset($_REQUEST['buyIdList'])?$_REQUEST['buyIdList']:null;
		if($buyIdList != null){
			$res = (new ProductBuyinfoModel())->getProductBuyinfoByIdList($buyIdList);
			if($res != null){
				echo json_encode($res);
			}
		}
	}
	
	/**
	 * 根据idList获取农药或者化肥使用信息
	 * @param  productId 产品id
	 */
	public function getProductFerPesList(){
		$res = array();
		$idList = isset($_REQUEST['idList'])?$_REQUEST['idList']:null;
		$pageNum = isset($_REQUEST['PageNumber'])?$_REQUEST['PageNumber']:1;
		$pageSize = isset($_REQUEST['PageSize'])?$_REQUEST['PageSize']:10;
// 		$type 0:有机肥 1:无机肥   2:农药
		$type = isset($_REQUEST['type'])?(int)$_REQUEST['type']:0;
		if(!empty($idList)){
			$res = (new ProductFerPesUseModel())->getProductFerOrPesByIdList($idList,$type,$pageNum,$pageSize);
		}
		echo json_encode($res);
	}
	
	/**
	 * 获取idlist获取生长周期图片
	 */
	public function getGrowImgList(){
		$res = array();
		$imgList = isset($_REQUEST['imgList'])?$_REQUEST['imgList']:null;
		if(!empty($imgList)){
			$arr = explode(",", $imgList);
			if(count($arr) > 0){
				$res = (new ProductGrowImgsModel())->getProductGrowImgListByIdList($imgList);
			}
		}
		echo json_encode($res);
	}
	public function getEnvironmentDataByType(){
		$res = array();
		$type = isset($_REQUEST['type'])?$_REQUEST['type']:1;
		$productId = isset($_REQUEST['productId'])?$_REQUEST['productId']:null;
		if(!empty($productId)){
			$res = (new ProductModel())->getEnvironmentDataByType($type,$productId);
		}
		echo json_encode($res);
	}
	
}