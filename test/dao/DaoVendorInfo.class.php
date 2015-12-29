<?php
require_once 'DaoBase.class.php';
class DaoVendorInfo extends DaoBase {
	protected $table_name = "vendor_info";
	
	/**
	 * 根据id获取商家基本信息
	 * @param $id
	 */
	public function getVendorInfoById($id){
		$filed = array(
			"info_id",
			"info_name",
			"info_tele",
			"info_fax",
			"info_email",
			"info_address",
			"info_qq",
			"info_wechat",
			"info_taobao",
			"info_qrcode_wechat",
			"info_qrcode_taobao",
			"vendor_img_loc",
			"vendor_adver_loc",
			"vendor_desc",
			"info_leader",
			"vendor_lable"
				
		);
		$where = array('info_id = ' => $id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	/**
	 * 根据企业名称获取商家基本信息
	 * @param $id
	 */
	public function getVendorInfoByName($name){
		$filed = array(
				"info_id",
				"info_name",
				"info_tele",
				"info_fax",
				"info_email",
				"info_address",
				"info_qq",
				"info_wechat",
				"info_taobao",
				"info_qrcode_wechat",
				"info_qrcode_taobao",
				"vendor_img_loc",
				"vendor_adver_loc",
				"vendor_desc",
				"info_leader",
				"vendor_lable"
	
		);
		$where = array('info_name = ' => $name);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	/**
	 * 插入
	 * @param 商家公司名称  $info_name
	 * @param 数据库连接 $conn
	 */
	public function insertVendorInfo($info_name,$conn){
		$res = -1;
		$data = array('info_name' => $info_name);
		if(self::insertTransaction($data, $conn)){
			$res = DaoBase::_getLastId($conn);
		}
		return $res;
	}
}