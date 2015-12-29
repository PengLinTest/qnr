<?php
require_once 'DaoBase.class.php';
class DaoProductBatch extends DaoBase {
	protected $table_name = "product_batch";
	
	/**
	 * 根据id获取产品认证信息
	 * @param $id
	 */
	public function getProductBatchById($id){
		$filed = array(
			"batch_id",
			"batch_harvesttime",
			"batch_num",
			"batch_qrcode_loc",
			"batch_auditstatus",
			"batch_isvalid",
			"batch_remark_color",
			"batch_remark_power",
			"batch_remark_weight",
			"batch_remark_SugarScale",
			"batch_remark_other"
		);
		$where = array('batch_auditstatus = ' => 1,'batch_isvalid =' => 1,'batch_isdelete =' => 0,'batch_id =' => $id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	/**
	 * 根据idString获取产品认证信息
	 * @param $id
	 */
	public function getBatchListByIdList($idString){
		$filed = array(
				"batch_id",
				"batch_harvesttime",
				"batch_num",
				"batch_qrcode_loc",
				"batch_auditstatus",
				"batch_isvalid",
				"batch_remark_color",
				"batch_remark_power",
				"batch_remark_weight",
				"batch_remark_SugarScale",
				"batch_remark_other"
		);
		$where = array('batch_isdelete =' => 0);
		$endWith = " and batch_id in (".$idString.")";
		return $this->select($filed,$where,$endWith);
	}
}