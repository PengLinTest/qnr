<?php
require_once 'templates/Plugins/phpqrcode/phpqrcode.php';
require_once 'lib/ConstData.class.php';

class Tools{
    public static function getMethodParams(){
    	$res = isset($_REQUEST['htmlMethod'])?$_REQUEST['htmlMethod']:"getHtml";
    	return addslashes($res);
    }
    public static function getNowTime(){
    	date_default_timezone_set('Asia/Shanghai');
    	return date('Y-m-d H:i:s');
    }
    public static function getNowTimeString(){
    	date_default_timezone_set('Asia/Shanghai');
    	return date('YmdHis');
    }
    /**
     * 保存上传的base64文件
     * 成功，返回文件名，失败返回false
     * @param base64文件内容 $base64_image_content
     * @param 匹配的结果 $result
     * notice 注意判断文件的格式，大小等。
     */
    public static function saveBase64image($base64_image_content,$result){
    	$res = false;
    	if(count($result) != 3) return $res;
    	$file_type = $result[2];
    	// 判断文件类型是否合格
    	if("jpg" != $file_type && "png" != $file_type && "jpeg" != $file_type){
    		return $res;
    	}
    	// 判断目录是否存在
    	if(!file_exists(DIR.DIRECTORY_SEPARATOR.ConstData::$authFolder)){
			mkdir($authFolder);    		
    	}
    	$filePath = ConstData::$authFolder.Tools::getFileName().".".$file_type;
    	if (file_put_contents(DIR.DIRECTORY_SEPARATOR.$filePath, base64_decode(str_replace($result[1], '', $base64_image_content)))){
    		$res =  $filePath;
    	}
    	//判断大小
    	$file_size = abs(filesize(DIR.DIRECTORY_SEPARATOR.$filePath) / 1024);
    	if($file_size > 10240){ //10M
    		$res = false;
    	}
    	return $res;
    }
    /**
     * 根据时间戳生成文件名
     */
    public static function getFileName(){
    	return Tools::getNowTimeString().rand(1000,9999);
    }
    /**
     * 生成二维码
     */
    public static function createQRcode($text,$level = 3,$size = 3,$margin = 4){
    	$path = ConstData::$QRpath.DIRECTORY_SEPARATOR.Tools::getFileName().".png";
    	QRcode::png($text,$path,$level,$size,$margin);
    	return $path;
    }
}