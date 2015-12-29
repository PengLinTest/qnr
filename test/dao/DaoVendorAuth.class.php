<?php
require_once 'DaoBase.class.php';
class DaoVendorAuth extends DaoBase {
	protected $table_name = "vendor_auth";
	
	/**
	 * 根据id获取详细的商家信息
	 * @param $id
	 */
	public function getVendorAuthById($id){
		$filed = array(
			"auth_id",
			"auth_license_loc",
			"auth_ispass",
			"auth_type",
		);
		$where = array('auth_id = ' => $id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	/**
	 * 插入
	 * @param 认证类型 $auth_type
	 * @param 数据库连接 $conn
	 */
	public function insertVendorAuth($auth_type,$conn){
		$res = -1;
		$data = array('auth_type' => $auth_type,"auth_license_loc" => "","auth_ispass" => 1);
		if(self::insertTransaction($data, $conn)){
			$res = DaoBase::_getLastId($conn);
		}
		return $res;
	}
}