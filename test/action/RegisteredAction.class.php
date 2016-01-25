<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-03 20:28:16
 */

require_once 'ActionBase.class.php';
require_once '/lib/Tools.class.php';
require_once '/model/UserModel.class.php';

class Registered extends ActionBase {
	// 方法列表
	public $methodlist = array(
			"getHtml",
			"userIsExist",
			"VendorInfoNameIsExist",
			"saveUser"
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
    public function getHtml(){
    	$this->tpl->display('page/TraceabilityReg.html');
    }
    /**
     *验证用户是否存在
     *@return 存在：1，不存在 0
     */
    public function userIsExist(){
    	$res = array();
    	$res['result'] = 0;
    	$name = isset($_REQUEST['name'])?(string)($_REQUEST['name']):null;
    	$model = new UserModel();
    	if($name != null && $model->userNameIsExist($name)){
    		$res['result'] = 1;
    	}
    	echo json_encode($res);
    }
    /**
     *验证商家公司名字是否存在
     *@return 存在：1，不存在 0
     */
    public function VendorInfoNameIsExist(){
    	$res = array();
    	$res['result'] = 0;
    	$info_name = isset($_REQUEST['info_name'])?(string)($_REQUEST['info_name']):null;
    	$model = new UserModel();
    	if($info_name != null && $model->VendorBasicInfoNameIsExist($info_name)){
    		$res['result'] = 1;
    	}
    	echo json_encode($res);
    }
    /**
     * 用户注册
     * @param name 商家用户名
     * @param pwd 密码
     * @param company 公司名称
     */
    public function saveUser(){
    	$res = array();
    	$name = isset($_REQUEST['name'])?(string)($_REQUEST['name']):null;
    	$pwd = isset($_REQUEST['pwd'])?(string)($_REQUEST['pwd']):null;
    	$pwd_confirm = isset($_REQUEST['pwd_confirm'])?(string)($_REQUEST['pwd_confirm']):null;
    	$info_name = isset($_REQUEST['info_name'])?(string)($_REQUEST['info_name']):null;
    	$model = new UserModel();
    	//判断是否为空
    	if(!$name || !$pwd || !$pwd_confirm || !$info_name){
    		$res['result'] = 0;
    		$res['info'] = "数据不能为空";
    	}else if(md5("") == $pwd){
    		//pwd是经过MD5加密的，所以应该判断是否为空
    		$res['result'] = 0;
    		$res['info'] = "数据不能为空";
    	}
    	else if($pwd != $pwd_confirm){
    		$res['result'] = 0;
    		$res['info'] = "两次密码不一致";
    	}else if($model->VendorBasicInfoNameIsExist($info_name)){
    		//判断用户名或者公司名是否存在
    		$res['result'] = 0;
    		$res['info'] = "公司名已存在";
    	}else if($model->userNameIsExist($name)){
    		$res['result'] = 0;
    		$res['info'] = "用户名已存在";
    	}else{
    		if($model->saveUser($name,$pwd,$info_name)){
    			$res['result'] = 1;
    		}else{
    			$res['result'] = 0;
    			$res['info'] = "执行失败";
    		}
    	}
    	echo json_encode($res);
    }
}