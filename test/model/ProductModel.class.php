<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoProductBasicinfo.class.php';
require_once '/dao/DaoEnvironmentData.class.php';
require_once '/dao/DaoProduct.class.php';
require_once '/dao/DaoVendor.class.php';
require_once '/dao/DaoVendorInfo.class.php';

class ProductModel{
	/**
	 * 获取产品基本信息列表
	 * @param $pageNumber 页码
	 * @param $pageSize 一页放产品的数量
	 * @param $keyword 关键字
	 * @param $cropID 过滤的作物id
	 */
	public function getSimpleProductList($pageNumber,$pageSize,$keyword,$cropID){
		$dao = new DaoProductBasicinfo();
		return $dao->getProductBasicinfoList($pageNumber,$pageSize,$keyword,$cropID);
	}
	
	public function getCountProduct($keyword,$cropID){
		$dao = new DaoProductBasicinfo();
		return $dao->getCountProductByKeyCID($keyword,$cropID);
	}
	/**
	 * 根据产品id获取详细的产品信息，主要包含product表和product_basicinfo信息
	 * @param 产品id $productId
	 */
	public function getProductById($productId){
		$dao = new DaoProduct();
		return $dao->getProAndBasicInfoById($productId);
	}
	
	/**
	 * 根据产品id获取该商家的所有产品的列表
	 * @param $productId 产品id
	 */
	public function getProductBasicinfoListByProductId($productId){
		if(!empty($productId)){
			$res = array();
			//根据产品id获取商家id
			$ids = (new DaoProduct())->getVendorIdByProductId($productId);
			if(!empty($ids) && count($ids) == 1){
				$vendorId = $ids[0]['vendor_id'];
				//获取产品id地址
				$productIdList = (new DaoProduct())->getProductIdListByVendorId($vendorId);
				if(!empty($productIdList) && count($productIdList) > 0){
					//根据产品id获取详细的产品基本信息
					foreach ($productIdList as $value){
						$temp = (new DaoProductBasicinfo())->getProductBasicinfoByproductId($value["product_id"]);
						if(!empty($temp) && count($temp) == 1){
							array_push($res, $temp[0]);
						}
					}
					return $res;
				}
			}
		}
		return null;
	}
	
	/**
	 * 根据商家id获取该商家的所有产品的列表
	 * @param unknown $vendorId
	 */
	public function getProductBasicinfoListByVendorId($vendorId,$top=0){
		$res = array();
		if(!empty($vendorId)){
			//获取产品id地址
			$productIdList = (new DaoProduct())->getProductIdListByVendorId($vendorId);
			if(!empty($productIdList) && count($productIdList) > 0){
				//根据产品id获取详细的产品基本信息
				$IdString = "(";
				
				foreach ($productIdList as $value){
					$IdString .= $value['product_id'].",";
				}
				$IdString = substr($IdString, 0,-1).")";
				$res = (new DaoProductBasicinfo())->getProductBasicinfoByproductIdStringPage($IdString,$top);
			}
		}
		return $res;
	}
	
	/**
	 * 根据产品id获取作物id的索引
	 */
	public function getBasicInfoByProductId($pId){
		$pBasicinfo = array();
		if(!empty($pId)){
			$pBasicinfo = (new DaoProductBasicinfo())->getProductBasicinfoByproductId($pId);
		}
		return $pBasicinfo;
	}
	/**
	 * 获取相应类型的环境数据
	 */
	public function getEnvironmentDataByType($type,$productId){
		$res = array();
		if(!empty($type)){
			$res = (new DaoEnvironmentData())->getEnvironmentDataListByType($type,$productId);
		}
		return $res;
	}
	/**
	 * 
	 * @param $top 获取的产品个数
	 * @param $type 产品类型
	 * @return 获取产品信息的基本列表
	 * @return 同时获取相应产品的商家名称
	 */
	public function getTopProductByType($top,$type){
		$res = array();
		$res = (new DaoProductBasicinfo())->getTopBasicinfoByType($top, $type);
		if(!empty($res)){
			for($i = 0,$len = count($res);$i < $len;$i++){
				$res[$i]['vendor_info'] = 0;
				$productId = (int)$res[$i]['product_id'];
				if(!empty($productId)){
					$vendorIdList = (new DaoProduct())->getVendorIdByProductId($productId);
					if(count($vendorIdList) == 1){
						$vendor = (new DaoVendor())->getVendorById((int)$vendorIdList[0]);
						if(!empty($vendor) && ($info_id = $vendor[0]['vendor_info_id']) != null){
							$vendor_info = (new DaoVendorInfo())->getVendorInfoById((int)$info_id);
							if(count($vendor_info) == 1){
								$res[$i]['vendor_info'] = $vendor_info[0];		
							}
						}
					}
				}
			}
		}
		return $res;
	}
	/**
	 * 根据商家id获取该商家的所有产品 
	 * @param 商家id $vendorID
	 */
	public function getCountProductByVendorID($vendorID){
		return (new DaoProduct())->getCountProductByVendorId($vendorID);
	}
	
	/**
	 * 根据商家id分页获取该商家的产品的列表
	 * @param unknown $vendorId
	 */
	public function getProBasicinfoByVendorIdPage($vendorId,$pageNum,$pageSize){
		$res = array();
		if(!empty($vendorId)){
			//获取产品id地址
			$productIdList = (new DaoProduct())->getProductIdListByVendorId($vendorId);
			if(!empty($productIdList) && count($productIdList) > 0){
				//根据产品id获取详细的产品基本信息
				$IdString = "(";
	
				foreach ($productIdList as $value){
					$IdString .= $value['product_id'].",";
				}
				$IdString = substr($IdString, 0,-1).")";
				$res = (new DaoProductBasicinfo())->getProductBasicinfoByproductIdStringPage($IdString,$pageNum,$pageSize);
			}
		}
		return $res;
	}
}