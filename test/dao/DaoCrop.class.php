<?php
require_once 'DaoBase.class.php';
class DaoCrop extends DaoBase {
	protected $table_name = "planting_crops";
	
	/**
	 * 列出所有的作物信息的名字
	 */
	public function getCropList(){
		$filed = array(
				'crops_id',
				'crops_desc'
		);
		$where = "";
		$endWith = "order by crops_id";
		return $this->select($filed,$where,$endWith);
	}
}