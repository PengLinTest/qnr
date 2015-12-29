<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoProductBuyinfo.class.php';

class ProductBuyinfoModel{

    /**
     * 根据idlist获取产品批次的详细信息
     * @param 购买信息的id列表
     */
    public function getProductBuyinfoByIdList($idList){
    	if(!empty($idList)){
    		$arr = explode(",", $idList);
    		$i = 0;
    		$res = array();
    		foreach($arr as $id){
    			$buyinfo = (new DaoProductBuyinfo())->getProductBuyinfoById((int)$id);
    			if(!empty($buyinfo)){
    				$res[$i] = $buyinfo[0];
    				$i += 1;
    			}
    		}
    		return $res;
    	}
    	return null;
    }
}