<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoPolicy.class.php';

class PolicyDetailModel{

    /**
     * 根据id获取详细的政策信息
     * 返回响应的数组信息
     */
    public function getPolicyById($id){
    	$dao = new DaoPolicy();
    	return $dao->getPolicyById($id);
    }
}