<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoProductFerPes.class.php';

class ProductFerPesUseModel{

    /**
     * 根据idlist获取产品农药或者化肥使用的详细信息
     * @param $idList 信息的id列表
     * @param type 0:化肥，1:农药
     * @return 返回使用列表，同时返回总数
     */
    public function getProductFerOrPesByIdList($idList,$pageNum = 1,$pageSize = 10){
    	$res = array();
    	if(!empty($idList)){
    		$dao = new DaoProductFerPes();
    		$res['Item'] = $dao->getFerOrPesListByIdList($idList,$pageNum,$pageSize);
    		$res['Total'] = $dao->getFerOrPesCountByIdList($idList);
    	}
    	return $res;
    }
}