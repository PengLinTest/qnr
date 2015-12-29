<?php
require_once 'DaoBase.class.php';
class DaoVendorMember extends DaoBase {
	protected $table_name = "vendor_member";
	
	/**
	 * 根据id获取商家成员信息的列表
	 * @param $id
	 */
	public function getVendorMemberListByVendorId($id){
		$filed = array(
			"member_id",
			"vendor_id",
			"member_name",
			"member_img_loc",
			"member_position",
			"member_profile"				
		);
		$where = array('vendor_id = ' => $id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	/**
	 * 根据id获取商家成员信息的列表
	 * @param $id
	 */
	public function getVendorMemberByMemberId($id){
		$filed = array(
				"member_id",
				"vendor_id",
				"member_name",
				"member_img_loc",
				"member_position",
				"member_profile"
		);
		$where = array('member_id = ' => $id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	
}