<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoProductCerti.class.php';

class ProductCertiModel{

    /**
     * 获取产品认证的列表
     * @param 产品认证id的list
     */
    public function getProductCertiList($idList){
    	if(!empty($idList)){
    		$arr = explode(",", $idList);
    		$i = 0;
    		$res = array();
    		foreach($arr as $id){
    			$certi = (new DaoProductCerti())->getProductCertiById((int)$id);
    			if(!empty($certi)){
    				$res[$i] = $certi[0];
    				$i += 1;
    			}
    		}
    		return $res;
    	}
    }
}