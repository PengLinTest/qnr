<?php /* Smarty version Smarty-3.1.21-dev, created on 2015-11-19 10:24:25
         compiled from ".\templates\page\TctraceProduct.html" */ ?>
<?php /*%%SmartyHeaderCode:6365643f3bdbfc3b0-88621137%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '04fb395ec4249ca0703075e51df0c426e84e42a5' => 
    array (
      0 => '.\\templates\\page\\TctraceProduct.html',
      1 => 1447924953,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6365643f3bdbfc3b0-88621137',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5643f3bde0f552_94985946',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5643f3bde0f552_94985946')) {function content_5643f3bde0f552_94985946($_smarty_tpl) {?><!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>产品库</title>
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
</head>
<body>
	<div class="topwrapper"></div>
	<div class="midwrapper">
		<div class="clearfix w1030">
			<div id="filter" class="t-section trace-filter">
				<div class="breadcrumb clearfix">
					<span class="total fr">共 <span id="totalpro"></span>个产品
					</span>
					<div class="cat">
						<a href="?action=Index">首页</a>
					</div>
					<div class="cat">
						<em class="mr10">></em><a href="javascript:;">全部产品</a>
					</div>
				</div>
				<div class="filter-box">
					<div class="filter-row ">
						<span class="filter-cat">分类：</span>
						<div class="filter-group filter-list" id="cropHtml">
							<!--这里放分类-->
						</div>
					</div>
				</div>
			</div>
			<div class="t-section">
				<div class="toolbar clearfix">
					<div class="pagin fr">
						<span class="text"><i id="courIndex">1</i>/<span
							id="totalPage">1</span></span> <span class="btn btn-prev">&lt;</span> <span
							class="btn btn-next">&gt;</span>
					</div>
				</div>
				<div class="mainview clearfix">
					<!--这里放产品列表-->
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
 type="text/javascript" src="templates/Scripts/jquery.Cloud/jquery.Cloud.js"><?php echo '</script'; ?>
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
 type="text/javascript"
		src="templates/Scripts/History/MyHistory.js"><?php echo '</script'; ?>
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
		src="templates/AgriProTraceability/QueryTrace/TctraceProduct.databind.js"><?php echo '</script'; ?>
>
	
	<?php echo '<script'; ?>
 type="text/javascript">
        $(function () {
            Transferload.pageHtml.initLoadHtml();
            Tctrace_product.databind.init();
        });
    <?php echo '</script'; ?>
>
</body>
</html>
<?php }} ?>
