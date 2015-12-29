<?php
require_once 'DaoBase.class.php';
class DaoEnvironmentData extends DaoBase {
	protected $table_name = "environment_data";
	
	/**
	 * 根据data_type类型获取EnvironmentData的数据列表
	 * 获取今天前3个月的数据
	 */
	public function getEnvironmentDataListByType($type, $productId) {
		$filed = array (
				"environment_id",
				"product_id",
				"data_type",
				"first_data",
				"second_data",
				"third_data",
				"data_time" 
		)
		;
		$now = date ( 'Y-m-d', time () );
		$start = date ( 'Y-m-d', strtotime ( "-5 month" ) );
		$where = array (
				"DATEDIFF(data_time,\"" . $now . "\") <= " => 0,
				"DATEDIFF(data_time,\"" . $start . "\") >= " => 0,
				"data_type = " => $type,
				"product_id = " => $productId
		);
		$endWith = "order by data_time asc";
		return $this->select ( $filed, $where, $endWith );
	}
}