<?php
require_once 'DaoBase.class.php';
class DaoProductGrowImgs extends DaoBase {
	protected $table_name = "product_growimages";
	
	/**
	 * 根据id获取信息
	 * @param $id
	 */
	public function getGrowImgListById($id){
		$filed = array(
			"img_id",
			"img_date",
			"img_address",
			"img_desc",
			"img_loc"
		);
		$where = array('img_id = ' => (int)$id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	public function getGrowImgListByIdListString($idString){
		$filed = array(
				"img_id",
				"img_date",
				"img_address",
				"img_desc",
				"img_loc"
		);
		$where = "";
		$endWith = " where img_id in (".$idString.")";
		return $this->select($filed,$where,$endWith);
	}
}