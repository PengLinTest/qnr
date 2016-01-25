<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoProductBatch.class.php';

class ProductBatchModel{

    /**
     * 根据id获取产品批次的详细信息
     * @param 产品批次的id
     */
    public function getProductBatch($id){
    	if(!empty($id)){
    		$dao = new DaoProductBatch();
    		$res = $dao->getProductBatchById((int)$id);
    		if(count($res) == 1){
    			return $res[0];
    		}
    	}
    	return null;
    }
    public function getlastVaildBatch($idString){
    	$res = array();
    	if(!empty($idString)){
    		$dao = new DaoProductBatch();
    		$temp = $dao->getBatchListByIdListOrderTimeDesc($idString);
    		if($temp && count($temp) > 0){
    			$res = $temp[0];
    		}
    	}
    	return $res;
    }
}