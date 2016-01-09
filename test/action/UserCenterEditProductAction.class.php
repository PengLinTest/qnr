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

class UserCenterEditProduct extends ActionBase {
	
	//构造函数
	public function __construct(){
		$this->need_login = 0;
		parent::__construct();
	}
	
	// 方法列表
	public $methodlist = array(
			"getHtml"
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
	public function getHtml(){
		//获取静态页面
		$this->tpl->display('page/EditProduct.html');
	}
	
}