<?php /* Smarty version Smarty-3.1.21-dev, created on 2015-12-18 11:46:25
         compiled from ".\templates\page\VedioMonitor\OpenYs7.html" */ ?>
<?php /*%%SmartyHeaderCode:209495673e4016f1f11-50542510%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '252ea6d147cd2ad75c823047b8f52be8ce9ff63c' => 
    array (
      0 => '.\\templates\\page\\VedioMonitor\\OpenYs7.html',
      1 => 1446513876,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '209495673e4016f1f11-50542510',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5673e40177dac2_96090600',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5673e40177dac2_96090600')) {function content_5673e40177dac2_96090600($_smarty_tpl) {?><!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf8" />
<title></title>
<link rel="shortcut icon" href="/favicon.ico">
<link rel="stylesheet" type="text/css"
	href="templates/Plugins/HLSPlayer/images/common.css">
<link rel="stylesheet" type="text/css"
	href="templates/Plugins/HLSPlayer/images/style.css">
<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/jquery-1.9.1.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/CookieStorage.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript"
	src="templates/Scripts/Base.sessionStorage.js"><?php echo '</script'; ?>
>
</head>
<body>
	<div>
		<div id="HLSPlayer">
			<SCRIPT LANGUAGE=JavaScript>
				var vID = "";
				var vWidth = "100%"; //播放器宽度设置
				var vHeight = 290; //播放器宽度设置
				var vPlayer = "templates/Plugins/HLSPlayer/HLSplayer.swf"; //播放器文件
				var vHLSset = "templates/Plugins/HLSPlayer/HLS.swf"; //HLS配置
				var vPic =  Base.sessionStorage.getSession("PicUrl");    //视频缩略图
				var vCssurl = "templates/Plugins/HLSPlayer/images/mini.css"; //移动端CSS应用文件

				//HLS(m3u8)地址,适配PC,安卓,iOS,WP
				var vHLSurl = Base.sessionStorage.getSession("VedioURL");
			</SCRIPT>
			<?php echo '<script'; ?>
 type="text/javascript"
				src="templates/Plugins/HLSPlayer/js/hls.min.js"><?php echo '</script'; ?>
>
		</div>
	</div>
</body>
</html><?php }} ?>
