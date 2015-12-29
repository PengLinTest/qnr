<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-06 18:17:15
 */
session_start(); 
class User{
	public static function _setVendor($vendor){
		$_SESSION['vendor'] = $vendor;
	}
	public static function _getVendor(){
		if(empty($_SESSION)) return false;
		$vendor= isset($_SESSION['vendor'])?$_SESSION['vendor']:null;
		return $vendor;
	}
	public static function _removeVendor(){
		if(!empty($_SESSION)){
			$_SESSION['vendor'] = null;
		}
	}
}
 