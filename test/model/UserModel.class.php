<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoVendor.class.php';
require_once '/dao/DaoVendorInfo.class.php';
require_once '/dao/DaoBase.class.php';
require_once '/dao/DaoVendorAuth.class.php';
require_once '/dao/DaoProduct.class.php';

class UserModel{

	/**
	 * 
	 * @param 用户名  $name
	 * @return true:用户存在;flase:用户不存在
	 */
    public function userNameIsExist($name){
    	$vendor = (new DaoVendor())->getVendorByVendorName($name);
    	if(count($vendor) == 0){
    		return false;
    	}else{
    		return true;
    	}
    }
    public function VendorBasicInfoNameIsExist($name){
    	$vendor = (new DaoVendorInfo())->getVendorInfoByName($name);
    	if(count($vendor) == 0){
    		return false;
    	}else{
    		return true;
    	}
    }
    /**
     * 用户注册
     * 1.插入商家基本信息表 vendor_info
     * 2.插入公司认证信息表 vendorAuth auth_type = 0
     * 3.插入法人认证信息表vendorAuth auth_type = 1
     * 4.插入商家信息表 vendor
     * @param unknown $name 用户名
     * @param unknown $pwd 密码
     * @param unknown $info_name 公司名称
     */
    public function saveUser($name,$pwd,$info_name){
    	$result = false;
    	$vendorResult = false;
    	$infoResult = false;
    	//获取数据库连接
    	$conn = DaoBase::_getConn();
    	mysql_query("BEGIN"); //或者mysql_query("START TRANSACTION");
    	//保存公司信息，vendoeInfo
    	$info_id = (new DaoVendorInfo())->insertVendorInfo($info_name, $conn);
    	//法人认证信息
    	$iden_id = (new DaoVendorAuth())->insertVendorAuth(1, $conn);
		//公司认证信息
		$certi_id = (new DaoVendorAuth())->insertVendorAuth(0, $conn);
    	if($info_id > 0 && $iden_id > 0 && $certi_id > 0){
    		//保存商家信息
    		if((new DaoVendor())->insertVendor($name,$pwd,$info_id,$iden_id,$certi_id,$conn) > 0){
    			$vendorResult = true;
    		}
    		$data = array();
    		//判断用户名是否为手机号
    		if(preg_match("/1[3458]{1}\d{9}$/",$name)){
    			$data['info_tele'] = $name;
    		}else{
    			$data['info_email'] = $name;
    		}
    		//更新商家信息的手机号或者邮箱
    		if((new DaoVendorInfo())->updateTransaction($conn, $data,array("info_id = " => $info_id))){
    			$infoResult = true;
    		}
    	}
    	$result = $vendorResult && $infoResult;
    	if($result){
    		mysql_query("COMMIT");
    	}else{
    		mysql_query("ROLLBACK");
    	}
    	DaoBase::_closeConn($conn);
    	return $result;
    }
    public function updateUserPwd($name,$pwd){
    	return (new DaoVendor())->updateVendorPwd($name,$pwd);
    }
    /**
     * 
     */
    public function getAllVendorInfo($vendorId){
    	$res = array();
//     	根据id获取商家信息
		$vendors = (new DaoVendor())->getVendorById($vendorId);
		if(count($vendors) == 1){
			$vendor = $vendors[0];
			//获取法人验证信息id
			$idenId = $vendor['vendor_iden_id'];
			if($idenId != null){
				$res['iden'] = (new DaoVendorAuth())->getVendorAuthById($idenId);
			}
			//获取公司验证信息id
			$certiId = $vendor['vendor_certi_id'];
			if($certiId != null){
				$res['certi'] = (new DaoVendorAuth())->getVendorAuthById($certiId);
			}
			//获取公司信息id
			$info_id = $vendor['vendor_info_id'];
			if($info_id){
				$res['info'] = (new DaoVendorInfo())->getVendorInfoById($info_id);
			}
			//获取产品总数
			$res['productSum'] = (new DaoProduct())->getCountProductByVendorId($vendorId);
		}
		return $res;
    	
    }
    /**
     * 更新公司的认证信息：
     * 从Session中获取用户的vendor
     * 更新验证信息
     * @param 新的公司名字  $infoName
     * @param unknown $filePath
     * @return boolean
     */
    public function saveCertiAuth($infoName,$filePath){
    	$result = false;
    	//获取数据库连接
    	$conn = DaoBase::_getConn();
    	mysql_query("BEGIN"); //或者mysql_query("START TRANSACTION");
    	//获取Session中的vendor
    	$vendor = User::_getVendor();
    	if($vendor != null){
    		$certiId = $vendor['vendor_certi_id'];
    		$infoId = $vendor['vendor_info_id'];
    		//获取这个验证信息，判断验证信息的状态是否合法
    		if($certiId != null && $infoId != null){
    			$certi= (new DaoVendorAuth())->getVendorAuthById($certiId);
    			if(count($certi) == 1 && ($certi[0]['auth_ispass'] == 1 || $certi[0]['auth_ispass'] == 4)){
    				//更新保存验证信息
    				if($filePath == null){
    					$resAuth = (new DaoVendorAuth())->updateTransaction($conn,
    							array("auth_ispass" => 2),array("auth_id =" =>$certiId));
    				}else{
    					$resAuth = (new DaoVendorAuth())->updateTransaction($conn,
    						array("auth_license_loc" => $filePath,"auth_ispass" => 2),array("auth_id =" =>$certiId));
    				}
    				//更新infoName
    				$resInfo = (new DaoVendorInfo())->updateTransaction($conn, array("info_name" => $infoName),array("info_id = "=>$infoId));
    				if($resAuth && $resInfo){
    					$result  =true;
    				}
    			}
    		}
    	}
    	if($result){
    		mysql_query("COMMIT");
    	}else{
    		mysql_query("ROLLBACK");
    	}
    	DaoBase::_closeConn($conn);
    	return $result;
    }
    /**
     *  更新身份认证信息
     * @param 文件路径信息 $filePath
     * @return boolean
     */
    public function saveIdenAuth($filePath){
    	$result = false;
    	//获取数据库连接
    	$conn = DaoBase::_getConn();
    	mysql_query("BEGIN"); //或者mysql_query("START TRANSACTION");
    	//获取Session中的vendor
    	$vendor = User::_getVendor();
    	if($vendor != null){
    		$idenId = $vendor['vendor_iden_id'];
    		//获取这个验证信息，判断验证信息的状态是否合法
    		if($idenId != null){
    			$iden= (new DaoVendorAuth())->getVendorAuthById($idenId);
    			if(count($iden) == 1 && ($iden[0]['auth_ispass'] == 1 || $iden[0]['auth_ispass'] == 4)){
    				//更新保存验证信息
    				$resAuth = (new DaoVendorAuth())->updateTransaction($conn,
    						array("auth_license_loc" => $filePath,"auth_ispass" => 2),array("auth_id =" =>$idenId));
    				if($resAuth){
    					$result  =true;
    				}
    			}
    		}
    	}
    	if($result){
    		mysql_query("COMMIT");
    	}else{
    		mysql_query("ROLLBACK");
    	}
    	DaoBase::_closeConn($conn);
    	return $result;
    }
    //最后需要更新session中的用户类型信息
    public function updateVendorInfo($vendorInfo,$vendorType){
    	$result = false;
    	//获取数据库连接
    	$conn = DaoBase::_getConn();
    	mysql_query("BEGIN"); //或者mysql_query("START TRANSACTION");
    	//获取Session中的vendor
    	$vendor = User::_getVendor();
    	if($vendorInfo != null && $vendor != null){
    		$infoId = $vendor['vendor_info_id'];
    		$resType = false;
    		//判断商家类型是否需要修改
    		if((new DaoVendor())->updateTransaction($conn, array("vendor_type" => $vendorType)
    				,array("vendor_id = " => $vendor['vendor_id']))){
    			//更新session信息
    			$vendor['vendor_type'] = $vendorType;
    			$resType = true;
    		}
    		//更新商家信息
    		$data = array("info_tele" =>$vendorInfo['mobile'],"info_fax" => $vendorInfo['faxs'],
    				"info_email" =>$vendorInfo['email'],"info_address" => $vendorInfo['address'],
    				"info_qq" => $vendorInfo['qq'],"info_wechat" => $vendorInfo['webChat'],
    				"info_taobao" => $vendorInfo['taobao'],"info_leader" => $vendorInfo['leader'],
    				"vendor_lable" => $vendorInfo['vendorLabel']);
    		$where = array("info_id = " => $infoId);
    		$resInfo = (new DaoVendorInfo())->update($data,$where);
    	}
    	$result = $resType && $resInfo;
    	if($result){
    		mysql_query("COMMIT");
    		//更新session信息
    		User::_setVendor($vendor);
    	}else{
    		mysql_query("ROLLBACK");
    	}
    	DaoBase::_closeConn($conn);
    	return $result;
    }
    //更新商家的其他信息
    public function updateVendorOtherInfo($vendor_desc,$vendor_topImg,$vendor_logoImg){
    	$result = false;
    	//获取数据库连接
    	$conn = DaoBase::_getConn();
    	mysql_query("BEGIN"); //或者mysql_query("START TRANSACTION");
    	//获取Session中的vendor
    	$vendor = User::_getVendor();
    	if($vendor != null){
    		$infoId = $vendor['vendor_info_id'];
    		//更新商家信息
    		$data = array("vendor_desc" => $vendor_desc);
    		if($vendor_topImg != null){
    			$data['vendor_adver_loc'] = $vendor_topImg;
    		}
    		if($vendor_logoImg != null){
    			$data['vendor_img_loc'] = $vendor_logoImg;
    		}
    		$where = array("info_id = " => $infoId);
    		$result = (new DaoVendorInfo())->update($data,$where);
    	}
    	if($result){
    		mysql_query("COMMIT");
    		//更新session信息
    	}else{
    		mysql_query("ROLLBACK");
    	}
    	DaoBase::_closeConn($conn);
    	return $result;
    }
}