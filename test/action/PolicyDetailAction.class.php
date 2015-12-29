<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */
require_once 'ActionBase.class.php';
require_once DIR . '/model/PolicyDetailModel.class.php';
require_once '/lib/Tools.class.php';

class PolicyDetail extends ActionBase {
	
	// 方法列表
	public $methodlist = array(
			"getHtml"
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
			echo "action error";
		}
	}
	
	/**
	 * 默认函数，返回静态页面
	 */
	public function getHtml(){
		$id = isset($_REQUEST['policy_id'])?(int)$_REQUEST['policy_id']:-1;
		$detailModel = new PolicyDetailModel();
		$res = array('data');
		$temp = $detailModel->getPolicyById($id);
		if(count($temp) == 1){
			$data = array();
			foreach ($temp[0] as $key => $value){
				$data[$key] = $value;
			}
			$res['data'] = $data;
			$this->tpl->assign($res);
			$this->tpl->display('page/PolicyDetail.html');
		}else{
			echo "id不存在，政策信息出错！";
		}
	}
}