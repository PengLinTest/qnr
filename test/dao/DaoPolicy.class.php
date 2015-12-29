<?php
require_once 'DaoBase.class.php';
class DaoPolicy extends DaoBase {
	protected $table_name = "policy";

	public function getSimplePolicyList($num){
		$filed = array(
			'policy_id',
			'policy_title',
			);
		$where = array('policy_isdelete = ' => 0);
		$endWith = " order by policy_time desc limit ".$num;
		return $this->select($filed,$where,$endWith);
	}
	
	public function getPolicyList($pageNum,$type,$pageSize){
		$filed = array(
				'policy_id',
				'policy_title',
				'policy_time'
		);
		$where = array('policy_isdelete = ' => 0,'policy_type = ' => $type);
		$endWith = " order by policy_time desc limit ".($pageNum-1)*$pageSize.",".$pageSize;
		return $this->select($filed,$where,$endWith);
	}
	
	public function getPolicyTotalNum($type){
		$where = array('policy_isdelete = ' => 0,'policy_type = ' => $type);
		return $this->getCount($where);
	}
	
	/**
	 * 根据id获取详细的政策信息
	 * @param $id
	 */
	public function getPolicyById($id){
		$filed = array(
				'policy_id',
				'policy_title',
				'policy_time',
				'policy_source',
				'policy_content',
				'policy_editor',
				'policy_type'
		);
		$where = array('policy_isdelete = ' => 0,'policy_id = ' => $id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
}