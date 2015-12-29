<?php
/**
 * 登陆action
 * @authors black(you@example.org)
 * @date    2015-04-02 21:23:40
 */

require_once 'ActionBase.class.php';
require_once DIR . "/model/LoginModel.class.php";
class Login extends ActionBase {
	
// 方法列表
	public $methodlist = array(
			"userLogin",
			"userLogout",
			"userLoginNotCode",
			"userIslogin"
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
    /*
     * 用户登录函数
     * @return 返回值说明，
     * res 0:登录失败;1:登录成功
     * info: 错误说明
     * 成功后返回vendorId，上次登录时间，用户前台Session记录
     */
    public function userLogin(){
    	$res = array();
    	$name = isset($_REQUEST['UserName'])?$_REQUEST['UserName']:null;
    	$pwd = isset($_REQUEST['Password'])?$_REQUEST['Password']:null;
    	$codeInput = isset($_REQUEST['codeInput'])?(string)$_REQUEST['codeInput']:null;
    	if($name == null){
    		$res['result'] = 0;
    		$res['info'] = "用户名不能为空";
    		echo json_encode($res);
    		return ;
    	}
    	if($pwd == null){
    		$res['result'] = 0;
    		$res['info'] = "密码不能为空";
    		echo json_encode($res);
    		return ;
    	}
    	if($codeInput == null){
    		$res['result'] = 0;
    		$res['info'] = "验证码为空";
    		echo json_encode($res);
    		return ;
    	}
    	$code_session = isset($_SESSION['verification'])?$_SESSION['verification']:"";
		if($code_session !== $codeInput){
			$res['result'] = 0;
			$res['info'] = "验证码错误";
			echo json_encode($res);
			return ;
		}
		//判断用户名，密码是否正确
		if($vendor = (new LoginModel())->UserLogin($name, $pwd)){
			//设置Session
			User::_setVendor($vendor);
			$res['result'] = 1;
			$res['vendorId'] = $vendor['vendor_id'];
			$res['lastLoginTime'] = $vendor['vendor_lastLoginTime'];
			$res['vendor_type'] = $vendor['vendor_type'];
		}else{
			$res['result'] = 0;
			$res['info'] = "用户不存在";
		}
		echo json_encode($res);
    }
    /*
     * 用户登录函数,不需要验证码
     * @return 返回值说明，
     * res 0:登录失败;1:登录成功
     * info: 错误说明
     */
    public function userLoginNotCode(){
    	$res = array();
    	$name = isset($_REQUEST['UserName'])?$_REQUEST['UserName']:null;
    	$pwd = isset($_REQUEST['Password'])?$_REQUEST['Password']:null;
    	if($name == null){
    		$res['result'] = 0;
    		$res['info'] = "用户名不能为空";
    		echo json_encode($res);
    		return ;
    	}
    	if($pwd == null){
    		$res['result'] = 0;
    		$res['info'] = "密码不能为空";
    		echo json_encode($res);
    		return ;
    	}
    	//判断用户名，密码是否正确
    	if($vendor = (new LoginModel())->UserLogin($name, $pwd)){
    		//设置Session
    		User::_setVendor($vendor);
    		$res['result'] = 1;
    		$res['vendorId'] = $vendor['vendor_id'];
    		$res['lastLoginTime'] = $vendor['vendor_lastLoginTime'];
    		$res['vendor_type'] = $vendor['vendor_type'];
    	}else{
    		$res['result'] = 0;
    		$res['info'] = "用户不存在";
    	}
    	echo json_encode($res);
    }
    /**
     * 用户注销
     */
    public function userLogout(){
    	User::_removeVendor();
    	$this->tpl->display('page/index.html');
    }
    /**
     * 判断用户是否登录
     */
    public function userIslogin(){
    	$res['result'] = false;
    	$vendor = User::_getVendor();
    	if($vendor){
    		$res['result'] = true;
    		$res['vendor']['vendorId'] = $vendor['vendor_id'];
    		$res['vendor']['lastLoginTime'] = $vendor['vendor_lastLoginTime'];
    		$res['vendor']['vendor_type'] = $vendor['vendor_type'];
    		$res['vendor']['UserName'] = $vendor['vendor_name'];
    	}
    	echo json_encode($res);
    }
}