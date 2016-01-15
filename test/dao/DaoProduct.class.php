<?php
require_once 'DaoBase.class.php';
class DaoProduct extends DaoBase {
	protected $table_name = "product";
	
	public function getProAndBasicInfoById($productId) {
		
		$sql = "SELECT p.product_id, vendor_id, growthing_img_list, fertilizer_list"
				.", pesticides_list, video_loc, environment_data_exist, product_certi_list"
				.", product_intro, buy_info_list, qrcodeloc"
				.", basicinfo_id, basicinfo_img_loc,basicinfo_crops_index,batchlist"
				.", pv.varieties_desc as variety, basicinfo_season, basicinfo_representative"
				.", basicinfo_remark, basicinfo_name, basicinfo_time, basicinfo_type"
				.", basicinfo_lable FROM product AS p,planting_varieties AS pv"
				.", product_basicinfo AS pb WHERE p.product_id = '".(int)$productId."'" 
				."AND p.product_id = pb.product_id AND pb.basicinfo_varieties_index = pv.varieties_id;";
		return $this->selectBySql($sql);
	}
	
	/**
	 * 根据商家id获取所有的产品id列表
	 * @param  $vendorId 商家id
	 */
	public function getProductIdListByVendorId($vendorId){
		$filed = array(
				'product_id',
		);
		$where = array("vendor_id =" => $vendorId);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	/**
	 * 根据产品id获取商家id
	 * @param  $vendorId 商家id
	 */
	public function getVendorIdByProductId($productId){
		$filed = array(
				'vendor_id',
		);
		$where = array("product_id =" => $productId);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
	/**
	 * 通过商家获取产品个数
	 */
	public function getCountProductByVendorId($vendorId){
		$where = array("vendor_id = " => $vendorId,"product_isdelete = " => 0);
		$endWith = "";
		return $this->getCount($where,$endWith);
	}
	/**
	 * 根据id获取产品表
	 * @param unknown $id
	 */
	public function getProductByproductId($id){
		$filed = array(
			"product_id",
			"vendor_id",
			"growthing_img_list",
			"fertilizer_list",
			"pesticides_list",
			"video_loc",
			"environment_data_exist",
			"product_certi_list",
			"product_intro",
			"buy_info_list",
			"batchlist",
			"qrcodeloc",
			"product_isdelete"
		);
		$where = array("product_id =" => (int)$id);
		$endWith = "";
		return $this->select($filed,$where,$endWith);
	}
}