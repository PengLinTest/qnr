<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */
require_once 'ActionBase.class.php';
require_once DIR . '/model/ProductCertiModel.class.php';
require_once '/lib/Tools.class.php';
require_once '/lib/ConstData.class.php';

class ProductCerti extends ActionBase {
	
	// 方法列表
	public $methodlist = array(
			"getProductCertiList"
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
	 * 根据idlist获取详细产品认证信息
	 * @idList 产品认证id list 中间以","隔开
	 * @return 返回产品认证列表
	 */
	public function getProductCertiList(){
		$idList = isset($_REQUEST['idList'])?$_REQUEST['idList']:null;
		if(!empty($idList)){
			$res = (new ProductCertiModel())->getProductCertiList($idList);
			echo json_encode($res);
		}
	}
}