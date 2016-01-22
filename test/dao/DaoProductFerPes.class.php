<?php
require_once 'DaoBase.class.php';
class DaoProductFerPes extends DaoBase {
	protected $table_name = "fertilizer_pesticides_use";
	
	/**
	 * 根据id获取信息
	 * @param $id
	 */
	public function getFerOrPesListByIdList($idList,$pageNum,$pageSize){
		$filed = array(
			"use_id",
			"use_time",
			"use_name",
			"use_level",
			"use_brand",
			"use_suppliers",
			"use_type"
		);
		$where = "";
		$endWith = " where use_id in (".$idList.")"." order by use_id asc limit ".($pageNum-1)*$pageSize.",".$pageSize;
		return $this->select($filed,$where,$endWith);
	}
	
	/**
	 * 根据idList获取总数
	 * @param $id
	 */
	public function getFerOrPesCountByIdList($idList){
		$where = "";
		$endWith = " where use_id in (".$idList.")";
		return $this->getCount($where,$endWith);
	}
	/**
	 * 根据idList获取信息
	 */
	public function getFerOrPesListByIdListString($idList){
		$filed = array(
				"use_id",
				"use_time",
				"use_name",
				"use_level",
				"use_brand",
				"use_suppliers",
				"use_type"
		);
		$where = "";
		$endWith = " where use_id in (".$idList.")";
		return $this->select($filed,$where,$endWith);
	}
	
}