<?php
require_once 'DaoBase.class.php';
class DaoCropVarieties extends DaoBase {
	protected $table_name = "crops_varieties";
	public function getVarietiesIDListByCropID($cropID){
		$filed = array(
				'varieties_id'
		);
		$where = array("crops_id =" => $cropID);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
		
	}
	
}