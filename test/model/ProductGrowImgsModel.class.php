<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoProductGrowImgs.class.php';

class ProductGrowImgsModel{

    /**
     * 根据idlist获取全生长周期信息
     * @param 生长周期的id列表
     */
    public function getProductGrowImgListByIdList($idList){
    	$res = array();
    	if(!empty($idList)){
    		$arr = explode(",", $idList);
    		$i = 0;
    		$dao = new DaoProductGrowImgs();
    		foreach($arr as $id){
    			$growImg = $dao->getGrowImgListById((int)$id);
    			if(!empty($growImg)){
    				$res[$i] = $growImg[0];
    				$i += 1;
    			}
    		}
    	}
    	return $res;
    }
}