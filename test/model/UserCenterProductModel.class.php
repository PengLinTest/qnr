<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoBase.class.php';
require_once 'dao/DaoVendorMember.class.php';
require_once 'dao/DaoProduct.class.php';
require_once 'dao/DaoProductBasicinfo.class.php';
require_once "dao/DaoProductBatch.class.php";

class UserCenterProductModel{
	
	/**
	 * 
	 * @param 产品id $productID
	 * @param 产品基本信息id $basicinfoID
	 * @return boolean 执行结果
	 * 1. 删除product表中数据
	 * 2. 删除product_basicinfo 表中数据
	 */
	public function deleteProduct($productID,$basicinfoID){
		$result = false;
		$productResult = false;
		$basicinfoResult = false;
		//获取数据库连接
		$conn = DaoBase::_getConn();
		mysql_query("BEGIN"); //或者mysql_query("START TRANSACTION");
		if(!empty($productID) && !empty($basicinfoID)){
			$daoProdcut = new DaoProduct();
			$productResult = $daoProdcut->updateTransaction($conn,array("product_isdelete" => 1),array("product_id = " => $productID));
			$daoProductBasicinfo = new DaoProductBasicinfo();
			$basicinfoResult = $daoProductBasicinfo->updateTransaction($conn,array("basicinfo_isdelete" => 1),array("basicinfo_id = " => $basicinfoID));
		}
		$result = $productResult && $basicinfoResult;
		if($result){
			mysql_query("COMMIT");
		}else{
			mysql_query("ROLLBACK");
		}
		DaoBase::_closeConn($conn);
		return $result;
	}
	/**
	 * 发布批次
	 * @param 产品id $productID
	 * @param 批次信息 $batch
	 * 1. 判断产品状态是否为已通过，只有审核通过的产品才能发布批次
	 * 2. 创建产品批次信息
	 * 3. 更新product表中的Batchlist字段
	 */
	public function addProductBatch($productID,$batch){
		$result = false;
		$daoProduct = new DaoProduct();
		$products = $daoProduct->getProductByproductId($productID);
		$daoProductBasicinfo = new DaoProductBasicinfo();
		$basicinfo = $daoProductBasicinfo->getProductBasicinfoByproductId($productID);
		$product = array();
		if(count($products) != 1 || count($basicinfo) != 1){
			return $result;
		}else{
			$product = $products[0];
		}
		//判断产品状态是否合格
		if($basicinfo[0]['basicinfo_status'] != 3){
			return $result;
		}
		$conn = DaoBase::_getConn();
		mysql_query("BEGIN"); //或者mysql_query("START TRANSACTION");
		$batchResult = false;
		$productResult = false;
		$data = array("batch_harvesttime" => Tools::getNowTime(),"batch_num" => Tools::getFileName()
				,"batch_auditstatus" => 1,"batch_isvalid" => 1,"batch_isdelete" => 0
				,"batch_remark_color" => $batch['color'],"batch_remark_power" => $batch['power']
				,"batch_remark_weight" => $batch['weight'],"batch_remark_SugarScale" => $batch['sugar']
				,"batch_remark_other" => $batch['other'],"batch_qrcode_loc" => $batch['batch_qrcode_loc']
		);
		$batchDAO = new DaoProductBatch();
		$batchResult = $batchDAO->insertTransaction($data, $conn);
		if($batchResult){
			$batchID = $batchDAO->_getLastId($conn);
			//更新product表
			$batchlist = $product['batchlist'];
			if(!empty($batchlist)){
				$batchlist .= ",".$batchID;
			}else{
				$batchlist = $batchID;
			}
			$dao = new DaoProduct();
			$productResult = $dao->updateTransaction($conn, array("batchlist" => $batchlist),array("product_id = " =>$productID));
		}
		
		$result = $batchResult && $productResult;
		if($result){
			mysql_query("COMMIT");
		}else{
			mysql_query("ROLLBACK");
		}
		DaoBase::_closeConn($conn);
		return $result;
	}
	
	/**
	 * 更新批次信息
	 * @param 批次信息 $batch
	 */
	public function updateProductBatch($batch){
		$result = false;
		$data = array("batch_harvesttime" => Tools::getNowTime(),"batch_num" => Tools::getFileName()
				,"batch_auditstatus" => 1,"batch_isvalid" => 1,"batch_isdelete" => 0
				,"batch_remark_color" => $batch['color'],"batch_remark_power" => $batch['power']
				,"batch_remark_weight" => $batch['weight'],"batch_remark_SugarScale" => $batch['sugar']
				,"batch_remark_other" => $batch['other']
		);
		$batchDAO = new DaoProductBatch();
		$result = $batchDAO->update($data,array("batch_id =" => $batch['id']));
		return $result;
	}
	
	public function updateProductStatus($basicinfoID,$status){
		$data = array("basicinfo_status" => $status);
		$where = array("basicinfo_id = " => $basicinfoID);
		$dao = new DaoProductBasicinfo();
		return $dao->update($data,$where);
	}
	/**
	 * 根据产品id获取产品的批次信息列表
	 * @param 产品id $productID
	 * 1. 根据产品id获取product信息，取出batchlist
	 * 2. 根据Batchlist获取批次信息列表
	 */
	public function getProductBatchList($productID){
		$res = array();
		$dao = new DaoProduct();
		$product = $dao->getProductByproductId($productID);
		if($product && count($product) == 1){
			$batchlist = $product[0]['batchlist'];
			if(!empty($batchlist)){
				$daoProductBatch = new DaoProductBatch();
				$res = $daoProductBatch->getBatchListByIdList($batchlist);
			}
		}
		return $res;
	}
	
	public function upOrDownBatch($batchid,$isUp){
		$res = false;
		if($batchid != null){
			$data = array("batch_isvalid" => $isUp);
			$dao = new DaoProductBatch();
			$res = $dao->update($data,array("batch_id = " =>$batchid));
		}
		return $res;
	}
	

}