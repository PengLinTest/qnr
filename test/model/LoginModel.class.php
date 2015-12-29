<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */
require_once DIR . "/lib/Tools.class.php";
require_once '/dao/DaoVendor.class.php';

class LoginModel{
	/**
	 * 判断用户登录的函数，登录成功，返回商家信息，登录失败，返回空数组
	 * @param 商家用户名 $name 
	 * @param 商家密码 $pwd
	 */
	public function UserLogin($name,$pwd){
		$res = array();
		if($name != null && $pwd != null){
			$dao = new DaoVendor(); 
			$vendor = $dao->getVendorByVendorName($name);
			if(count($vendor) == 1){
				if($vendor[0]['vendor_pass'] == $pwd){
					//更新用户的登录时间
					$time = Tools::getNowTime();
					$dao->updateVendorLoginTime($name,$time);
					$res = $vendor[0];
				}
			}
		}
		return $res;
	}
}