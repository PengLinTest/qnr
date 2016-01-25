<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */
require_once 'ActionBase.class.php';
require_once DIR . '/model/CropModel.class.php';
require_once '/lib/Tools.class.php';
require_once '/lib/ConstData.class.php';

class Crop extends ActionBase {
	
	// 方法列表
	public $methodlist = array(
			'getTraceDataCrop',
			"getVarietiesList"
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
	 * 查找产品和作物列表信息
	 */
	public function getTraceDataCrop(){
		$dao = new CropModel();
		$res = $dao->getCropList();
		echo json_encode($res);
	}
	/*
	 * 根据作物id获取相应的品种信息
	 */
	public function getVarietiesList(){
		$cropID = isset($_REQUEST['cropID'])?$_REQUEST['cropID']:null;
		$res = array("result" => false);
		if(empty($cropID)){
			echo json_encode($res);
			return ;
		}
		$dao = new CropModel();
		$res['data'] = $dao->getVarietiesListByCropID($cropID);
		$res['result'] = true;
		echo json_encode($res);
	}
}