<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoCrop.class.php';

class CropModel{

    /**
     * 获取作物列表
     * 返回响应的数组信息
     */
    public function getCropList(){
    	$dao = new DaoCrop();
    	return $dao->getCropList();
    }
}