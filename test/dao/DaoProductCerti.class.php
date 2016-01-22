<?php
require_once 'DaoBase.class.php';
class DaoProductCerti extends DaoBase {
	protected $table_name = "product_certi";
	
	/**
	 * 根据id获取产品认证信息
	 * @param $id
	 */
	public function getProductCertiById($id){
		$sql = "select pc.certi_id,certi_type_index,pct.certi_desc as certi_type_name,"
			."certi_date,certi_num,certi_valid,certi_awarddepart,certi_imgloclist"
			." from product_certi as pc,product_certi_type as pct "
			." WHERE pc.certi_id = ".(int)$id." and pc.certi_type_index = pct.certi_id;";
		return $this->selectBySql($sql);
	}
	/**
	 * 根据idString获取产品认证信息
	 * @param $id
	 */
	public function getProductCertiListByIdListString($idString){
		$filed = array(
			"certi_id",
			"certi_type_index",
			"certi_date",
			"certi_num",
			"certi_valid",
			"certi_awarddepart",
			"certi_imgloclist"
		);
		$where = "";
		$endWith = " where certi_id in (".$idString.")";
		return $this->select($filed,$where,$endWith);
	}
}