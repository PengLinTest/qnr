<?php
require_once 'DaoBase.class.php';
class DaoProductBuyinfo extends DaoBase {
	protected $table_name = "product_buyinfo";
	
	/**
	 * 根据id获取购买信息
	 * @param $id
	 */
	public function getProductBuyinfoById($id){
		$filed = array(
			"buy_id",
			"buy_type",
			"buy_desc_first",
			"buy_desv_sec"
		);
		$where = array('buy_id = ' => (int)$id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
}