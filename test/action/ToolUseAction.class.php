<?php
/**
 * 
 * @authors Black
 * @date    2015-03-21 16:18:28
 */
require_once 'ActionBase.class.php';
require_once '/lib/Tools.class.php';
require_once '/lib/ConstData.class.php';
require_once '/model/LoginModel.class.php';

class ToolUse extends ActionBase {
	
	//构造函数
	public function __construct(){
		$this->need_login = 1;
		parent::__construct();
	}
	
	// 方法列表
	public $methodlist = array(
			"cutAndSaveImg"
	);
	
	/**
	 * 默认调用函数，分派调用方法
	 */
	public function action() {
		$method = Tools::getMethodParams();
		$exist = in_array ( $method, $this->methodlist );
		if ($exist) {
			// 方法存在
			$this->$method();
		} else {
			echo "no this method!";
		}
	}
	//裁剪并保存图片图片，如果成功的话，返回图片的地址
	public function cutAndSaveImg(){
		$base64_img = isset($_REQUEST['files'])?$_REQUEST['files']:null;
		$pointX = isset($_REQUEST['PointX'])?$_REQUEST['PointX']:0;
		$pointY = isset($_REQUEST['PointY'])?$_REQUEST['PointY']:0;
		$cutWidth = isset($_REQUEST['CutWidth'])?$_REQUEST['CutWidth']:null;
		$cutHeight = isset($_REQUEST['CutHeight'])?$_REQUEST['CutHeight']:null;
		$picWidth = isset($_REQUEST['PicWidth'])?$_REQUEST['PicWidth']:null;
		$picHeight = isset($_REQUEST['PicHeight'])?$_REQUEST['PicHeight']:null;
		
		$imgPath = null;
		$res['result'] = false;
		if(empty($base64_img && $cutWidth && $cutHeight)){
			echo json_encode($res);
			return ;
		}
		//判断图片是否需要修改
		if(!empty($base64_img)){
			//未修改图片
			if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_img, $result)){
				$imgPath = Tools::saveBase64image($base64_img, $result);
			}
		}
// 		判断图片上传是否出错
		if($imgPath === false){
			echo json_encode($res);
			return ;
		}
		//裁剪图片
		if(Tools::cutImage($imgPath, $cutWidth, $cutHeight, $pointX, $pointY,$picWidth,$picHeight)){
			$res['result'] = true;
			$res['src'] = $imgPath;
		}
		
		echo json_encode($res);
	}
}