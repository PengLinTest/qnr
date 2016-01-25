<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoCrop.class.php';
require_once '/dao/DaoCropVarieties.class.php';
require_once '/dao/DaoVarieties.class.php';

class CropModel{

    /**
     * 获取作物列表
     * 返回响应的数组信息
     */
    public function getCropList(){
    	$dao = new DaoCrop();
    	return $dao->getCropList();
    }
    public function getVarietiesListByCropID($cropID){
    	$res = array();
    	if(empty($cropID)){
    		return $res;
    	}
    	$dao = new DaoCropVarieties();
    	$varietiesIDList = $dao->getVarietiesIDListByCropID((int)$cropID);
    	if(!$varietiesIDList || count($varietiesIDList) <= 0){
    		return $res;
    	}
    	$vIDs = "";
    	foreach($varietiesIDList as $value){
    		$vIDs.=$value['varieties_id'].",";
    	}
    	$vIDs = substr($vIDs,0,-1);
    	$dao = new DaoVarieties();
    	$temp = $dao->getVarietiesByIDList($vIDs);
//     	foreach($temp as $value){
//     		array_push($res,$value['varieties_desc']);
//     	}
    	return $temp;
    	
    }
}