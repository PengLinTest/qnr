<?php /* Smarty version Smarty-3.1.21-dev, created on 2015-12-29 02:44:50
         compiled from ".\templates\page\VendorList.html" */ ?>
<?php /*%%SmartyHeaderCode:284745681e591f0dcd0-76357333%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '66e5379d646f88ea285aed7aea2abf08af54cfa6' => 
    array (
      0 => '.\\templates\\page\\VendorList.html',
      1 => 1447300123,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '284745681e591f0dcd0-76357333',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5681e5921adff2_58288619',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5681e5921adff2_58288619')) {function content_5681e5921adff2_58288619($_smarty_tpl) {?><!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>商家列表</title>
<link rel="stylesheet" type="text/css"
	href="templates/Plugins/jqueryui/jquery-ui.css" />
<link rel="stylesheet"
	href="templates/Plugins/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="templates/Styles/reset.css">
<link rel="stylesheet" href="templates/Styles/global.css">
<link rel="stylesheet" type="text/css"
	href="templates/Styles/jquery.Cloud.css" />
<link rel="stylesheet" type="text/css"
	href="templates/Plugins/LoadMask/jquery.loadmask.css" />
<link rel="stylesheet" href="templates/Styles/newTrace.css">
<link rel="stylesheet" href="templates/Styles/vendor.css">
</head>
<body>
	<div class="topwrapper"></div>
	<div class="midwrapper">
		<div class="clearfix w1030">
			<div id="filter" class="t-section trace-filter">
				<div class="breadcrumb clearfix">
					<span class="total fr">共 <span id="totalpro"></span>个商家
					</span>
					<div class="cat">
						<a href="?action=Index">首页</a>
					</div>
					<div class="cat">
						<em class="mr10">></em><a href="javascript:;">全部商家</a>
					</div>
				</div>
			</div>
			<div class="t-section">
				<div class="t-section clearfix mod-product fresh-market">
					<div class="titlebar">
						<div class="innerbar">
							<span>
								<ul class="col-name">这里可能有下一个阿里巴巴...</ul>
							</span>
						</div>
					</div>
				</div>
				
				<div class="toolbar clearfix" style="padding:15px 5px">
					<div class="pagin fr">
						<span class="text"><i id="courIndex">1</i>/<span
							id="totalPage">1</span></span> <span class="btn btn-prev">&lt;</span> <span
							class="btn btn-next">&gt;</span>
					</div>
				</div>
				
				<div class="mainview clearfix">
					<!--这里放商家列表-->
				</div>
				<div class="pagination ac">
					<div class="webPager">
						<!--这里放分页-->
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="footer" class="footer mt10"></div>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/jquery-1.9.1.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/Scripts/jquery.Cloud/jquery.Cloud.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/Base.Storage.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/CookieStorage.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/Setting.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/Util.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/Transfer.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/Messages.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/DynamicPages.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/Plugins/LoadMask/jquery.loadmask.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Plugins/bootstrap/js/bootstrap.min.js"
		type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/Plugins/Slides/jquery.slides.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/Scripts/jquery.Cloud/jquery.Cloud.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/Scripts/pager/pagelist.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates//Scripts/CreateCaptcha.js"
		type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/QueryTrace/Transferload.pageHtml.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/Vendor/TctraceVendor.databind.js"><?php echo '</script'; ?>
>
	
	<?php echo '<script'; ?>
 type="text/javascript">
        $(function () {
            Transferload.pageHtml.initLoadHtml();
            Tctrace_vendor.databind.init();
        });
    <?php echo '</script'; ?>
>
</body>
</html>
<?php }} ?>
