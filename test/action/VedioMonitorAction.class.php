<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */
require_once 'ActionBase.class.php';
require_once '/lib/Tools.class.php';
require_once '/lib/ConstData.class.php';

class VedioMonitor extends ActionBase {
	
	// 方法列表
	public $methodlist = array(
			"getHtml",
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
		$this->tpl->display('page/VedioMonitor/OpenYs7.html');
	}
}