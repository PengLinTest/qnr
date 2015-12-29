<?php
require_once 'DaoBase.class.php';
class DaoProductBasicinfo extends DaoBase {
	protected $table_name = "product_basicinfo";
	
	/**
	 * 通过关键字，作物的分类id，页码，页面数获取产品基本信息的列表
	 */
	public function getProductBasicinfoList($pageNumber,$pageSize,$keyword,$cropID){
		$filed = array(
			"basicinfo_id",
			"basicinfo_img_loc",
			"basicinfo_crops_index",
			"basicinfo_varieties_index",
			"basicinfo_season",
			"basicinfo_representative",
			"basicinfo_remark",
			"basicinfo_name",
			"basicinfo_time",
			"basicinfo_type",
			"basicinfo_lable",
			"product_id",
			"basicinfo_status"
				
		);
		$where = array();
		$endWith = "";
		$where["basicinfo_isdelete = "] = 0;
		if($keyword != "null"){
			$where["basicinfo_name like "] = "%".$keyword."%";
		}
		if($cropID != "null"){
			//把这个放到$endWith中，所以需要判断是否有keyword
			if($keyword != "null"){
				$endWith.=' and basicinfo_crops_index in '.$cropID;
			}else{
				$endWith.=' where basicinfo_crops_index in '.$cropID;
			}
			
		}
		$endWith .= " order by basicinfo_time desc limit ".($pageNumber-1)*$pageSize.",".$pageSize;
		return $this->select($filed,$where,$endWith);
	}
	
	/**
	 * 通过关键字获取产品个数
	 */
	public function getCountProductByKeyCID($keyword,$cropID){
		$where = array();
		$where['basicinfo_isdelete = '] = 0;
		$endWith = "";
		if($keyword != "null"){
			$where["basicinfo_name like "] = "%".$keyword."%";
		}
		if($cropID != "null"){
			//把这个放到$endWith中，所以需要判断是否有keyword
			if($keyword != "null"){
				$endWith.=' and basicinfo_crops_index in '.$cropID;
			}else{
				$endWith.=' where basicinfo_crops_index in '.$cropID;
			}
				
		}
		return $this->getCount($where,$endWith);
	}
	
	/**
	 * 通过id获取产品基本信息的列表
	 */
	public function getProductBasicinfoByproductId($id){
		$filed = array(
			"basicinfo_id",
			"basicinfo_img_loc",
			"basicinfo_crops_index",
			"basicinfo_varieties_index",
			"basicinfo_season",
			"basicinfo_representative",
			"basicinfo_remark",
			"basicinfo_name",
			"basicinfo_time",
			"basicinfo_type",
			"basicinfo_lable",
			"product_id",
			"basicinfo_status"
		);
		$where = array("product_id =" => (int)$id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	/**
	 * 通过id列表获取产品基本信息的列表
	 * @param $idString ids的字符串
	 * @param $top 取前几个，如果为0 则都取
	 */
	public function getProductBasicinfoByproductIdString($idString,$top=0){
		$filed = array(
				"basicinfo_id",
				"basicinfo_img_loc",
				"basicinfo_crops_index",
				"basicinfo_varieties_index",
				"basicinfo_season",
				"basicinfo_representative",
				"basicinfo_remark",
				"basicinfo_name",
				"basicinfo_time",
				"basicinfo_type",
				"basicinfo_lable",
				"product_id",
				"basicinfo_status"
		);
		$where = "";
		$where['basicinfo_isdelete = '] = 0;
		$endWith = " where product_id in ".$idString."order by basicinfo_time desc ";
		if((int)$top > 0){
			$endWith .= " limit 0,".$top;
		}
		return $this->select($filed,$where,$endWith);
	}
	/**
	 * 通过id列表获取产品基本信息的列表
	 * @param $idString ids的字符串
	 * @param $top 取前几个，如果为0 则都取
	 */
	public function getProductBasicinfoByproductIdStringPage($idString,$pageNum,$pageSize){
		$filed = array(
				"basicinfo_id",
				"basicinfo_img_loc",
				"basicinfo_crops_index",
				"basicinfo_varieties_index",
				"basicinfo_season",
				"basicinfo_representative",
				"basicinfo_remark",
				"basicinfo_name",
				"basicinfo_time",
				"basicinfo_type",
				"basicinfo_lable",
				"product_id",
				"basicinfo_status",
				"basicinfo_isdelete"
		);
		$where = "";
		$endWith = " where product_id in ".$idString." and basicinfo_isdelete = 0 order by basicinfo_time desc ";
		$endWith .= " limit ".($pageNum-1)*$pageSize.",".$pageSize;
		return $this->select($filed,$where,$endWith);
	}
	/**
	 * 根据类型查询最新的产品
	 */
	public function getTopBasicinfoByType($top,$type){
		$filed = array(
				"basicinfo_id",
				"basicinfo_img_loc",
				"basicinfo_crops_index",
				"basicinfo_varieties_index",
				"basicinfo_season",
				"basicinfo_representative",
				"basicinfo_remark",
				"basicinfo_name",
				"basicinfo_time",
				"basicinfo_type",
				"basicinfo_lable",
				"product_id",
				"basicinfo_status"
		);
		$where = array("basicinfo_type =" => (int)$type);
		$where['basicinfo_isdelete = '] = 0;
		$endWith = "order by basicinfo_time desc limit 0,".(int)$top;
		return $this->select($filed,$where,$endWith);
	}
	

}