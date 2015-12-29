<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */

require_once 'ActionBase.class.php';
require_once '/lib/Tools.class.php';

class Index extends ActionBase {
	// 方法列表
	public $methodlist = array(
			"getHtml"
	);
	
	/**
	 * 遍历方法列表，调用方法函数，默认调用getHtml
	 * 获取参数htmlMethod
	 */
    public function action(){
    	$method = Tools::getMethodParams();
    	$exist = in_array($method, $this->methodlist);
    	if($exist){
    		//方法存在
    		$this->$method();
    	}else{
    		echo "action error";
    	}
    }
    /**
     * 默认函数，返回静态页面
     */
    public function getHtml(){
    	$this->tpl->display('page/index.html');
    }
}