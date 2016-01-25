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
require_once '/model/UserCenterMemberModel.class.php';

class UserCenterMember extends ActionBase {
	
	//构造函数
	public function __construct(){
		//TODO 后面需要修改
		$this->need_login = 1;
		parent::__construct();
	}
	
	// 方法列表
	public $methodlist = array(
			"getVendorMember",
			"deleteMember",
			"getVendorMemberInfo",
			"updateVendorMemberInfo",
			"addVendorMemberInfo"
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
	 * 获取该商家的成员
	 * @param vendorID 商家id
	 */
	public function getVendorMember(){
		$vendorID = isset($_REQUEST['vendorID'])?$_REQUEST['vendorID']:null;
		$res['result'] = false;
		if(!empty($vendorID)){
			$model = new UserCenterMemberModel();
			$data = $model->getVendorMember($vendorID);
			$res['result'] = true;
			$res['data'] = $data;
		}
		echo json_encode($res);
	}
	/**
	 * 删除商家的成员
	 * @param vendorID 商家id
	 */
	public function deleteMember(){
		$memberID = isset($_REQUEST['memberID'])?$_REQUEST['memberID']:null;
		$res['result'] = false;
		if(!empty($memberID)){
			$model = new UserCenterMemberModel();
			if($model->deleteVendorMember($memberID)){
				$res['result'] = true;
			}
		}
		echo json_encode($res);
	}
	/**
	 * 根据商家成员id获取详细成员信息
	 */
	public function getVendorMemberInfo(){
		$memberID = isset($_REQUEST['memberID'])?$_REQUEST['memberID']:null;
		$res['result'] = false;
		if(!empty($memberID)){
			$model = new UserCenterMemberModel();
			$data = $model->getVendorMemberInfoByMemberID($memberID);
			if(count($data) == 1){
				$res['result'] = true;
				$res['data'] = $data[0];
			}
		}
		echo json_encode($res);
	}

	/**
	 * 更新成员信息
	 */
	public function updateVendorMemberInfo(){
		$memberID = isset($_REQUEST['memberID'])?$_REQUEST['memberID']:null;
		$base64_img = isset($_REQUEST['files'])?$_REQUEST['files']:null;
		$memberName = isset($_REQUEST['memberName'])?$_REQUEST['memberName']:null;
		$memberPosition = isset($_REQUEST['memberPosition'])?$_REQUEST['memberPosition']:null;
		$memberProfile = isset($_REQUEST['memberProfile'])?$_REQUEST['memberProfile']:null;
		
		$imgPath = null;
		$res['result'] = false;
		if(empty($memberID && $memberName && $memberPosition && $memberProfile)){
			echo json_encode($res);
			return ;
		}
		//判断图片是否需要修改
		if(!empty($base64_img)){
			//未修改图片
			if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_img, $result)){
				$imgPath = Tools::saveBase64image($base64_img, $result);
			}
		}
		//判断图片上传是否出错
		if($imgPath === false){
			echo json_encode($res);
			return ;
		}
		$member = array("member_id" => $memberID,"member_name" => $memberName
					,"member_img_loc" => $imgPath,"member_position" =>$memberPosition
					,"member_profile" => $memberProfile);
		$model = new UserCenterMemberModel();
		if($model->updateVendorMemberInfo($member)){
			$res['result'] = true;
		}
		echo json_encode($res);
	}
	
	/**
	 * 添加成员信息
	 */
	public function addVendorMemberInfo(){
		$vendorID = isset($_REQUEST['vendorID'])?$_REQUEST['vendorID']:null;
		$base64_img = isset($_REQUEST['files'])?$_REQUEST['files']:null;
		$memberName = isset($_REQUEST['memberName'])?$_REQUEST['memberName']:null;
		$memberPosition = isset($_REQUEST['memberPosition'])?$_REQUEST['memberPosition']:null;
		$memberProfile = isset($_REQUEST['memberProfile'])?$_REQUEST['memberProfile']:null;
	
		$imgPath = null;
		$res['result'] = false;
		if(empty($memberName && $memberPosition && $memberProfile && $vendorID && $base64_img)){
			echo json_encode($res);
			return ;
		}
		//判断图片是否需要修改
		if(!empty($base64_img)){
			//未修改图片
			if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_img, $result)){
				$imgPath = Tools::saveBase64image($base64_img, $result);
			}
		}
		//判断图片上传是否出错
		if($imgPath === false){
			echo json_encode($res);
			return ;
		}
		$member = array("vendor_id" => $vendorID,"member_name" => $memberName
				,"member_img_loc" => $imgPath,"member_position" =>$memberPosition
				,"member_profile" => $memberProfile);
		$model = new UserCenterMemberModel();
		if($model->addVendorMemberInfo($member)){
			$res['result'] = true;
		}
		echo json_encode($res);
	}
	
}