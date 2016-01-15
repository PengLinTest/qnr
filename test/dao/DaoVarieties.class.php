<?php
require_once 'DaoBase.class.php';
class DaoVarieties extends DaoBase {
	protected $table_name = "planting_varieties";
	public function getVarietiesByIDList($IDList){
		$filed = array(
				'varieties_id',
				'varieties_desc'
		);
		$where = "";
		$endWith = "where varieties_id in (".$IDList.")";
		return $this->select($filed,$where,$endWith);
	}
}