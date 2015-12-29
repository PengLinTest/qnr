<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoPolicy.class.php';

class PolicyModel{

    /**
     * 获取9条最新的政策信息
     * @param $num 政策信息条数
     * 返回响应的数组信息
     */
    public function getTopPolicy($num){
    	$dao = new DaoPolicy();
    	if($num > 0){
    		return $dao->getSimplePolicyList($num);
    	}else{
    		return false;	
    	}
    }
    
    public function getPolicyListByPage($pageNum,$type,$pageSize){
    	$dao = new DaoPolicy();
    	if($pageNum > 0){
    		return $dao->getPolicyList($pageNum, $type, $pageSize);
    	}else{
    		return false;
    	}
    }
    public function getPolicyTotalPage($pageSize,$type){
    	$dao = new DaoPolicy();
    	if($pageSize > 0){
    		$total = $dao->getPolicyTotalNum($type);
    		$res = (int)($total / $pageSize);
    		$delivery = $total % $pageSize;
    		if($delivery > 0){
    			return $res + 1;
    		}else{
    			$res;
    		}
    	}else{
    		return false;
    	}
    }
}