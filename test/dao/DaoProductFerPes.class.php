<?php
require_once 'DaoBase.class.php';
class DaoProductFerPes extends DaoBase {
	protected $table_name = "fertilizer_pesticides_use";
	
	/**
	 * 根据id获取信息
	 * @param $id
	 */
	public function getFerOrPesListByIdList($idList,$type,$pageNum,$pageSize){
		$filed = array(
			"use_id",
			"use_time",
			"use_name",
			"use_level",
			"use_brand",
			"use_suppliers",
			"use_type"
		);
		$where = array('use_type = ' => (int)$type);
		$endWith = " and use_id in (".$idList.")"." order by use_id asc limit ".($pageNum-1)*$pageSize.",".$pageSize;
		return $this->select($filed,$where,$endWith);
	}
	
	/**
	 * 根据idList获取总数
	 * @param $id
	 */
	public function getFerOrPesCountByIdList($idList,$type){
		$where = array('use_type = ' => (int)$type);
		$endWith = " and use_id in (".$idList.")";
		return $this->getCount($where,$endWith);
	}
	
}