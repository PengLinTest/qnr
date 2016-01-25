<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once DIR .'/dao/DaoVendor.class.php';
require_once DIR .'/dao/DaoVendorAuth.class.php';
require_once DIR .'/dao/DaoVendorInfo.class.php';
require_once DIR .'/dao/DaoVendorMember.class.php';

class VendorModel{
	/**
	 * 根据商家id获取商家的认证信息
	 * @param $vendorId 商家id
	 * @param $cerType 商家认证信息的类型
	 * @return 返回商家的信息和验证的信息
	 */
	
	public function getVendorAuthById($vendorId,$cerType){
		//根据商家id获取认证信息的id
		$res = array();
		$dao = new DaoVendor();
		$vendor = $dao->getVendorById($vendorId);
		$infoId = -1;
		if(!empty($vendor) && sizeof($vendor) == 1){
			if($cerType == 1){
				//获取公司认证信息
				$infoId = (int)$vendor[0]['vendor_certi_id'];
			}else{
				//获取个人认证信息
				$infoId = (int)$vendor[0]['vendor_iden_id'];
			}
		}
		if($infoId > 0){
			$dao = new DaoVendorAuth();
			$vendorAuth = $dao->getVendorAuthById($infoId);
			$res['vendor'] = $vendor;
			$res['vendorAuth'] = $vendorAuth;
			return $res;
		}
		
	}
	
	/**
	 * 根据商家id获取商家的信息
	 * @param $vendorId 商家id
	 * @return 返回商家基本信息
	 */
	
	public function getVendorInfoById($vendorId){
		//根据商家id获取商家基本信息的id
		$res = array();
		$dao = new DaoVendor();
		$vendor = $dao->getVendorById($vendorId);
		$infoId = -1;
		if(!empty($vendor) && sizeof($vendor) == 1){
			//获取商家信息
			$infoId = (int)$vendor[0]['vendor_info_id'];
		}
		if($infoId > 0){
			$daoVendorInfo = new DaoVendorInfo();
			$res = $daoVendorInfo->getVendorInfoById($infoId);
			if(!empty($res) && count($res)){
				return $res[0];
			}
		}
		return null;
	}
	/**
	 * 根据商家类型获取最新的商家信息
	 * @param unknown $top
	 * @param unknown $type
	 * @return 同时返回每个商家的验证结果
	 * @return 同时返回每个商家的基本信息vendor_info
	 */
	public function getNewVendorByType($top,$type){
		$dao = new DaoVendor();
		$vendorList = $dao->getTopVendorByType($top, $type);
		if(!empty($vendorList)){
			for($i = 0,$len = count($vendorList); $i < $len; $i++){
				$certiId = $vendorList[$i]['vendor_certi_id'];
				$infoId = $vendorList[$i]['vendor_info_id'];
				//获取商家验证信息
				if(!empty($certiId)){
					$daoVendorAuth = new DaoVendorAuth();
					$vendorList[$i]['vendorAuth'] = $daoVendorAuth->getVendorAuthById($certiId);
				}else{
					$vendorList[$i]['vendorAuth'] = 0;
				};
				//获取商家基本信息
				if(!empty($infoId)){
					$daoVendorInfo = new DaoVendorInfo();
					$vendorList[$i]['vendorInfo'] = $daoVendorInfo->getVendorInfoById($infoId);
				}else{
					$vendorList[$i]['vendorInfo'] = 0;
				}
			}
		}
		return $vendorList;
	}
	
	/**
	 * 获取产品基本信息列表
	 * @param $pageNumber 页码
	 * @param $pageSize 一页放产品的数量
	 * @param $keyword 关键字
	 */
	public function getVendorList($pageNumber,$pageSize,$keyword){
		$dao = new DaoVendor();
		$vendorList = $dao->getVendorList($pageNumber, $pageSize, $keyword);
		if(!empty($vendorList)){
			for($i = 0,$len = count($vendorList); $i < $len; $i++){
				$certiId = $vendorList[$i]['vendor_certi_id'];
				$infoId = $vendorList[$i]['vendor_info_id'];
				if(!empty($certiId)){
					$daoVendorAuth = new DaoVendorAuth();
					$vendorList[$i]['vendorAuth'] = $daoVendorAuth->getVendorAuthById($certiId);
				}else{
					$vendorList[$i]['vendorAuth'] = 0;
				}
				//获取商家基本信息
				if(!empty($infoId)){
					$daoVendorInfo = new DaoVendorInfo();
					$vendorList[$i]['vendorInfo'] = $daoVendorInfo->getVendorInfoById($infoId);
				}else{
					$vendorList[$i]['vendorInfo'] = 0;
				}
			}
		}
		return $vendorList;
	}
	
	public function getCountVendor($keyword){
		$dao = new DaoVendor();
		return $dao->getCountVendorByKey($keyword);
	}
	
	/*
	 * 根据商家id获取Vendor
	 * @param $vendorId 商家id
	 */
	
	public function getVendorById($vendorId){
		//根据商家id获取商家基本信息的id
		$dao = new DaoVendor();
		return $dao->getVendorById($vendorId);
	}
	
	/*
	 * 根据商家id获取Vendor的成员信息
	 * @param $vendorId 商家id
	 */
	
	public function getVendorMemberListByVendorId($vendorId){
		//根据商家id获取商家基本信息的id
		$dao = new DaoVendorMember();
		return $dao->getVendorMemberListByVendorId($vendorId);
	}
}