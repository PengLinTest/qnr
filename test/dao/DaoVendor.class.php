<?php
require_once 'DaoBase.class.php';
class DaoVendor extends DaoBase {
	protected $table_name = "vendor";
	
	/**
	 * 根据id获取详细的商家信息
	 * @param $id
	 */
	public function getVendorById($id){
		$filed = array(
			"vendor_id",
			"vendor_name",
			"vendor_certi_id",
			"vendor_info_id",
			"vendor_iden_id",
			"vendor_isadmin",
			"vendor_isdelete",
			"vendor_type",
			"vendor_time",
			"vendor_lastLoginTime"
		);
		$where = array('vendor_isdelete = ' => 0,'vendor_id = ' => $id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	
	/**
	 * 根据商家名字获取详细的商家信息
	 * @param $name 商家用户名
	 */
	public function getVendorByVendorName($name){
		$filed = array(
				"vendor_id",
				"vendor_name",
				"vendor_pass",
				"vendor_certi_id",
				"vendor_info_id",
				"vendor_iden_id",
				"vendor_isadmin",
				"vendor_isdelete",
				"vendor_type",
				"vendor_time",
				"vendor_lastLoginTime"
		);
		$where = array('vendor_isdelete = ' => 0,'vendor_name = ' => $name);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	
	/**
	 * 根据类型查询最新的商家信息
	 */
	public function getTopVendorByType($top,$type){
		$filed = array(
			"vendor_id",
			"vendor_name",
			"vendor_certi_id",
			"vendor_info_id",
			"vendor_iden_id",
			"vendor_isadmin",
			"vendor_type",
			"vendor_time",
			"vendor_lastLoginTime"
		);
		$where = array("vendor_type =" => (int)$type,"vendor_isdelete = " => 0);
		$endWith = "order by vendor_time desc limit 0,".(int)$top;
		return $this->select($filed,$where,$endWith);
	}
	
	/**
	 * 通过关键字，页码，页面数获取商家的列表
	 */
	public function getVendorList($pageNumber,$pageSize,$keyword){
		$search = "";
		if($keyword != "null"){
			$search .= " and vinfo.info_name like '%".$keyword."%' ";
		}
		$sql = "select vendor_id,vendor_name,vendor_certi_id,vendor_info_id,vendor_iden_id".
				",vendor_isadmin,vendor_type,vendor_time from vendor as v,vendor_info as vinfo".
				" where v.vendor_info_id = vinfo.info_id and v.vendor_isdelete = 0 ".$search.
				" order by vendor_time desc limit ".($pageNumber-1)*$pageSize.",".$pageSize;
		return $this->selectBySql($sql);
	}
	
	/**
	 * 通过关键字获取商家个数
	 */
	public function getCountVendorByKey($keyword){
		$where = array();
		$endWith = "";
		if($keyword != "null"){
			$where["vendor_name like "] = "%".$keyword."%";
		}
		$where["vendor_isdelete = "] = 0;
		return $this->getCount($where,$endWith);
	}
	/**
	 * 插入数据
	 * @param 用户名 $name
	 * @param 密码 $pwd
	 * @param 基本信息id $info_id
	 * @param 数据库连接 $conn
	 * @return 成功，返回id，失败返回-1
	 */
	public function insertVendor($name,$pwd,$info_id,$iden_id,$certi_id,$conn){
		$res = -1;
		$data = array("vendor_name" => $name,"vendor_pass" => $pwd,
				"vendor_info_id" => $info_id,"vendor_time" => Tools::getNowTime(),
				"vendor_certi_id" => $certi_id,"vendor_iden_id" => $iden_id,
				"vendor_isadmin" => 0,"vendor_isdelete" => 0
		);
		if(self::insertTransaction($data, $conn)){
			$res = DaoBase::_getLastId($conn);
		}
		return $res;
	}
	/**
	 * 更新用户的密码
	 */
	public function updateVendorPwd($name,$pwd){
		$res = false;
		$data = array("vendor_pass" => $pwd);
		$where["vendor_isdelete = "] = 0;
		$where ['vendor_name = '] = $name;
		if(self::update($data,$where)){
			$res = true;
		}
		return $res;
	}
	/**
	 * 更新商家用户的上次登录时间
	 * @param unknown $name
	 */
	public function updateVendorLoginTime($name,$time){
		$res = false;
		$data = array("vendor_lastLoginTime" => $time);
		$where["vendor_isdelete = "] = 0;
		$where ['vendor_name = '] = $name;
		if(self::update($data,$where)){
			$res = true;
		}
		return $res;
		
	}
}