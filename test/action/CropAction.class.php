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
			'getTraceDataCrop'
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
		$res = (new CropModel())->getCropList();
		echo json_encode($res);
	}
}