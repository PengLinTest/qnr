<?php
require_once 'DaoBase.class.php';
class DaoProductCertiType extends DaoBase {
	protected $table_name = "product_certi_type";
	
	/**
	 * 列出所有的作物信息的名字
	 */
	public function getCertiTypeList(){
		$filed = array(
			'certi_id',
			'certi_desc'
		);
		$where = "";
		$endWith = "order by certi_id";
		return $this->select($filed,$where,$endWith);
	}
}