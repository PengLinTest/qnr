<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-21 17:29:12
 */

require_once '/dao/DaoBase.class.php';
require_once '/dao/DaoProductCertiType.class.php';

class UserCenterEditProductModel{
	/**
	 * 获取产品的类型列表
	 */
	public function getProductCertiType(){
		return (new DaoProductCertiType())->getCertiTypeList();
	}
	
	

}