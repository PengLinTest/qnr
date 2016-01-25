<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */
require_once 'ActionBase.class.php';
require_once DIR . '/model/PolicyModel.class.php';
require_once '/lib/Tools.class.php';
require_once '/lib/ConstData.class.php';

class Policy extends ActionBase {
	
	// 方法列表
	public $methodlist = array(
			"getHtml",
			"getSimplePolicyList",
			"getPolicyList",
			"getPageInfo"
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
		$type = isset($_REQUEST['type'])?(int)$_REQUEST['type']:1;
		$res = array('data');
		$res['data'] = array('type' => $type);
		$this->tpl->assign($res);
		$this->tpl->display('page/PolicyNews.html');
	}
	/**
	 * 首页获取政策列表信息
	 */
	public function getSimplePolicyList(){
		$model = new PolicyModel();
		$res = $model->getTopPolicy(9);
		echo json_encode($res);
	}
	/**
	 * 政策列表页面获取政策列表
	 * $pageNum 获取的页面数
	 * $type 政策类型
	 */
	public function getPolicyList(){
		$pageNum = isset($_REQUEST['pageNum'])?(int)$_REQUEST['pageNum']:1;
		$type = isset($_REQUEST['type'])?(int)$_REQUEST['type']:1;
		$model = new PolicyModel();
		$res = $model->getPolicyListByPage($pageNum, $type, ConstData::$pageSize);
		echo json_encode($res);
	}
	/**
	 * 获取总共页面数
	 */
	public function getPageInfo(){
		$type = isset($_REQUEST['type'])?(int)$_REQUEST['type']:1;
		$model = new PolicyModel();
		$res = $model->getPolicyTotalPage(ConstData::$pageSize, $type);
		echo json_encode($res);
	}
}