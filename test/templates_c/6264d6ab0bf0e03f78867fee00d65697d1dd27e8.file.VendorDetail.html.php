<?php /* Smarty version Smarty-3.1.21-dev, created on 2016-01-22 08:20:47
         compiled from ".\templates\page\VendorDetail.html" */ ?>
<?php /*%%SmartyHeaderCode:281656a1d84fd250c0-63414759%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '6264d6ab0bf0e03f78867fee00d65697d1dd27e8' => 
    array (
      0 => '.\\templates\\page\\VendorDetail.html',
      1 => 1447925057,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '281656a1d84fd250c0-63414759',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_56a1d84fd74d19_62436231',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_56a1d84fd74d19_62436231')) {function content_56a1d84fd74d19_62436231($_smarty_tpl) {?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>商家详情页面</title>
<link rel="stylesheet" type="text/css" href="templates/Plugins/jqueryui/jquery-ui.css">
<link rel="stylesheet" href="templates/Plugins/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="templates/Styles/reset.css">
<link rel="stylesheet" href="templates/Styles/global.css">
<link rel="stylesheet" type="text/css"
	href="templates/Styles/jquery.Cloud.css">
<link rel="stylesheet" type="text/css"
	href="templates/Plugins/LoadMask/jquery.loadmask.css">
<link rel="stylesheet" href="templates/Styles/newTrace.css">
<link rel="stylesheet" href="templates/Styles/newPolicy.css">
<link rel="stylesheet" href="templates/Styles/vendor.css">
</head>
<body>
	<div class="topwrapper"></div>
	<div class="midwrapper">
		<div class="trace-detail clearfix">
			<div class="title" id="traceTitle"></div>
		</div>
		<div class="w1030 clearfix" id="prolist">
			<!-- 广告位置 -->
			<div>
				<img id="advertise" height="300px" style="border:1px solid #FFF" class="w1030">
			</div>
			<div class="main">
				<div class="t-section clearfix mod-product fresh-market">
					<div class="titlebar">
						<div class="innerbar">
							<span>
								<ul class="col-name">我们的团队</ul>
							</span>
						</div>
					</div>
					<div class="bd">
						<!-- 商家团队列表 -->
						<div id="member_list"></div>
				    </div>
				</div>
				<div class="t-section clearfix mod-product fresh-market">
					<div class="titlebar">
						<div class="innerbar">
							<span>
								<ul class="col-name">公司简介</ul>
							</span>
						</div>
					</div>
					<div class="bd">
						<!-- 商家团队列表 -->
						<div id="vendor_desc" class="vendor_desc"></div>
				    </div>
				</div>
				<!-- 我们的产品 -->
				<div class="t-section clearfix mod-product fresh-market">
					<div class="titlebar">
						<div class="innerbar">
							<span class="more fr">
								<a href="?action=Product"><i class="arrow-more"></i>更多产品</a>
							</span>
							<span>
								<ul class="col-name">我们的产品</ul>
							</span>
						</div>
					</div>
					<div class="bd">
						<div class="w1030">
			                <div class="t-section">
			                    <div class="commanded clearfix">
			                        <div class="hd" style="padding:0">
			                            <div class="contorls"></div>
			                        </div>
			                        <div class="bd clearfix">
			                            <ul class="product-row-list" id="morepro"></ul>
			                        </div>
			                    </div>
			                </div>
            			</div>
					</div>
				</div>
				<!-- 底部联系方式 -->
				<div class="vendor_info" id="info_list"></div>
				
			</div>
		</div>
	</div>
	<div id="footer" class="footer"></div>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/jquery-1.9.1.js"><?php echo '</script'; ?>
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
 src="templates/Scripts/CreateCaptcha.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/QueryTrace/Transferload.pageHtml.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/Vendor/detailVendor.databind.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript">
		$(function() {
			Transferload.pageHtml.initLoadHtml();
			Detail_vendor.databind.init();
		});
	<?php echo '</script'; ?>
>
</body>
</html><?php }} ?>
