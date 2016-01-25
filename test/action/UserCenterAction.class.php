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
require_once '/model/UserModel.class.php';
require_once '/model/ProductModel.class.php';

class UserCenter extends ActionBase {
	
	//构造函数
	public function __construct(){
		//TODO 后面需要修改
		$this->need_login = 1;
		parent::__construct();
	}
	
	// 方法列表
	public $methodlist = array(
			"getHtml",
			"changePwd",
			"getAllVendorInfo",
			"updateIDApplyAuth",
			"updateCertiAuth",
			"updateVendorInfo",
			"updateCompanyOtherInfo",
			"getProductBasicinfoCountByVendorId",
			"getProductBasicinfoByVendorIdPage"
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

	public function getHtml(){
		//获取静态页面
		$this->tpl->display('page/UserCenter.html');
	}
	/**
	 * 修改用户密码
	 * 
	 */
	public function changePwd(){
	    $res = array();
    	$pwd_old = isset($_REQUEST['pwdOld'])?(string)($_REQUEST['pwdOld']):null;
    	$pwd_new = isset($_REQUEST['pwdNew'])?(string)($_REQUEST['pwdNew']):null;
    	$pwd_new_confirm = isset($_REQUEST['pwdNewConfirm'])?(string)($_REQUEST['pwdNewConfirm']):null;
    	$vendor = isset($_SESSION['vendor'])?$_SESSION['vendor']:null;
    	$name = null;
    	if(!$vendor){
    		header('Location:?action=Index');
    		return;
    	}else{
    		$name = $vendor['vendor_name'];
    	}
    	$loginmodel = new LoginModel();
    	$usermodel = new UserModel();
    	//判断是否为空
    	if(!$name || !$pwd_old || !$pwd_new || !$pwd_new_confirm){
    		$res['result'] = 0;
    		$res['info'] = "数据不能为空";
    	}else if(md5("") == $pwd_old || md5("") == $pwd_new){
    		//应为name和pwd是经过MD5加密的，所以应该判断是否为空
    		$res['result'] = 0;
    		$res['info'] = "数据不能为空";
    	}
    	else if($pwd_new != $pwd_new_confirm){
    		$res['result'] = 0;
    		$res['info'] = "新两次密码不一致";
    	}else if($loginmodel->UserLogin($name, $pwd_old) == null){
    		//判断旧密码是否正确
    		$res['result'] = 0;
    		$res['info'] = "原始密码不对";
    	}else{
    		if($usermodel->updateUserPwd($name,$pwd_new)){
    			$res['result'] = 1;
    			$res['info'] = "修改成功";
    		}else{
    			$res['result'] = 0;
    			$res['info'] = "执行失败";
    		}
    	}
    	echo json_encode($res);
    }
    /**
     *用户中心获取所有的商家信息
     */
    public function getAllVendorInfo(){
    	$res = array();
    	$vendorId = isset($_REQUEST['vendorId'])?(int)($_REQUEST['vendorId']):null;
    	if($vendorId != null){
    		$model = new UserModel();
    		$res = $model->getAllVendorInfo($vendorId);
    	}
    	echo json_encode($res);
    }
    
    /**
     * 更新公司认证信息
     * @param auth_id 认证id
     * @param 公司名 info_name
     * @param vendor_info中的info_id
     * @param 文件信息（文件，文件名，文件大小）
     * 只允许有一张照片上传
     * 上传完文件后需要更新文件的审查状态
     */
    public function updateCertiAuth(){
    	//获取文件信息
    	$res = false;
    	$base64_image_content = isset($_REQUEST['files'])?$_REQUEST['files']:null;
    	$infoName = isset($_REQUEST['infoName'])?$_REQUEST['infoName']:null;
    	 
    	if($infoName == null){
    		echo json_encode($res);
    		return ;
    	}
    	$fileName = null;
    	//保存base64字符串为图片,如果失败的话为false
    	if(!empty($base64_image_content)){
    		//未修改图片
    		if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_image_content, $result)){
    			$fileName = Tools::saveBase64image($base64_image_content, $result);
    		}
    	}
    	if($fileName !== false){
    		$model = new UserModel();
    		if($model->saveCertiAuth($infoName, $fileName)){
    			$res = true;
    		}
    	}
    	echo json_encode($res);
    }
    
    public function updateCompanyOtherInfo(){
    	//获取文件信息
    	$res = false;
    	$base64_topimage_content = isset($_REQUEST['topFiles'])?$_REQUEST['topFiles']:null;
    	$base64_logoimage_content = isset($_REQUEST['logoFiles'])?$_REQUEST['logoFiles']:null;
    	$companyDesc = isset($_REQUEST['infoName'])?$_REQUEST['infoName']:null;
    	
    	if($companyDesc == null){
    		echo json_encode($res);
    		return ;
    	}
    	$vendorTopImage = null;
    	$vendorLogoImage = null;
    	//保存base64字符串为图片,如果失败的话，$vendorTopImage，$vendorLogoImage=false;
    	if(!empty($base64_topimage_content)){
    		//修改图片
    		if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_topimage_content, $result)){
    			$vendorTopImage = Tools::saveBase64image($base64_topimage_content, $result);
    		}
    	}
    	
    	if(!empty($base64_logoimage_content)){
    		//未修改图片
    		if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_logoimage_content, $result)){
    			$vendorLogoImage = Tools::saveBase64image($base64_logoimage_content, $result);
    		}
    	}
    	if($vendorLogoImage !== false && $vendorTopImage !== false){
    		$model = new UserModel();
    		if($model->updateVendorOtherInfo($companyDesc, $vendorTopImage, $vendorLogoImage)){
    			$res = true;
    		}
    	}
    	echo json_encode($res);
    }
    /**
     * 更新法人认证信息 
     * @param auth_id 认证id
     * @param 文件信息（文件内容）
     * 只允许有一张照片上传
     * 上传完文件后需要更新文件的审查状态
     * 图片需要考虑的内容：
     * 	1.格式（image/jpg;image/png;image/jpeg;）
     *  2.文件大小（10M）
     */
    public function updateIDApplyAuth(){
    	$res = false;
    	$base64_image_content = isset($_REQUEST['files'])?$_REQUEST['files']:null;
    	if($base64_image_content == null){
    		echo json_encode($res);
    		return ;
    	}
    	//保存base64字符串为图片
    	if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_image_content, $result)){
    		if($fileName = Tools::saveBase64image($base64_image_content, $result)){
    			//更新信息，包括公司名称和营业执照
    			$model = new UserModel();
    			if($model->saveIdenAuth($fileName)){
    				$res = true;
    			}
    		}
    	}
    	echo json_encode($res);
    }
    /**
     * 更新注册商家的商家信息
     * 
     */
    public function updateVendorInfo(){
    	//负责人
    	$InputLeader = isset($_REQUEST['InputLeader'])?$_REQUEST['InputLeader']:"";
    	//手机号
    	$InputMobile = isset($_REQUEST['InputMobile'])?$_REQUEST['InputMobile']:"";
    	//传真
    	$InputFaxes = isset($_REQUEST['InputFaxes'])?$_REQUEST['InputFaxes']:"";
    	//邮箱
    	$InputEmail = isset($_REQUEST['InputEmail'])?$_REQUEST['InputEmail']:"";
    	//qq
    	$InputQQ = isset($_REQUEST['InputQQ'])?$_REQUEST['InputQQ']:"";
    	//微信号
    	$InputWeChat = isset($_REQUEST['InputWeChat'])?$_REQUEST['InputWeChat']:"";
    	//淘宝号
    	$InputTaoBao = isset($_REQUEST['InputTaoBao'])?$_REQUEST['InputTaoBao']:"";
    	// 商家标签
    	$InputVendorLabel = isset($_REQUEST['InputVendorLabel'])?$_REQUEST['InputVendorLabel']:"";
    	//地址
    	$InputAddress = isset($_REQUEST['InputAddress'])?$_REQUEST['InputAddress']:"";
    	
    	//企业类型信息
    	$InputCompanyType = isset($_REQUEST['InputCompanyType'])?$_REQUEST['InputCompanyType']:1;
    	
    	$vendorInfo = array("leader" => $InputLeader,"mobile" => $InputMobile,
    						"faxs" => $InputFaxes,"email" => $InputEmail,
    						"qq" => $InputQQ, "taobao" =>$InputTaoBao,
    						"vendorLabel" => $InputVendorLabel, "address" => $InputAddress,
    						"webChat" => $InputWeChat);
    	//更新数据
    	$model = new UserModel();
    	$res = $model->updateVendorInfo($vendorInfo,$InputCompanyType);
    	echo json_encode($res);
    }
    
    /*
     * 根据商家id分页获取该商家的产品
     */
    public function getProductBasicinfoByVendorIdPage(){
    	$vendorId = isset($_REQUEST['vendorId'])?(int)$_REQUEST['vendorId']:null;
    	$pageNum = isset($_REQUEST['PageNum'])?(int)$_REQUEST['PageNum']:1;
    	$pageSize = isset($_REQUEST['PageSize'])?(int)$_REQUEST['PageSize']:4;
    	$res['result'] = false;
    	if(!empty($vendorId)){
    		$res['result'] = true;
    		$model = new ProductModel();
    		$res['total'] = $model->getCountProductByVendorID($vendorId);
    		$res['data'] = $model->getProBasicinfoByVendorIdPage($vendorId,$pageNum,$pageSize);
    	}
    	echo json_encode($res);
    }
}