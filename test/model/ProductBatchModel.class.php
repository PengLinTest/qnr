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
    		$res = (new DaoProductBatch())->getProductBatchById((int)$id);
    		if(count($res) == 1){
    			return $res[0];
    		}
    	}
    	return null;
    }
}