<?php /* Smarty version Smarty-3.1.21-dev, created on 2015-12-28 03:39:30
         compiled from ".\templates\page\index.html" */ ?>
<?php /*%%SmartyHeaderCode:198845680a0e209c4c0-61106756%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ea827c69dddee83c6e6c6d8eb01dd5d0d0767753' => 
    array (
      0 => '.\\templates\\page\\index.html',
      1 => 1447925037,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '198845680a0e209c4c0-61106756',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5680a0e21af3f4_18866688',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5680a0e21af3f4_18866688')) {function content_5680a0e21af3f4_18866688($_smarty_tpl) {?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>青农人首页</title>
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
</head>
<body>
	<div class="topwrapper"></div>
	<div class="midwrapper">
		<div class="w1030 clearfix" id="prolist">
			<div class="main">
				<div class="section-first clearfix">
					<div class="slide">
						<div class="index-slides" style="overflow: hidden;">
							<div class="img-slide slidesjs-slide" slidesjs-index="0"
										style="position: absolute; top: 0px; left: 0px; width: 100%; z-index: 0; -webkit-backface-visibility: hidden; display: none;">
										<a href="javascript:;"> <img
											src="templates/Images/trace/slide_01.png">
										</a>
							</div>
							<div class="img-slide slidesjs-slide" slidesjs-index="1"
										style="position: absolute; top: 0px; left: 0px; width: 100%; z-index: 0; -webkit-backface-visibility: hidden; display: block;">
										<a
											href="javascript:;">
											<img src="templates/Images/trace/slide_02.png">
										</a>
									</div>
						</div>
					</div>
					<div class="extra">
						   <div class="qnrcatbar">
						        <div class="qnrcatmore">
						          <a href="?action=Policy"><i class="arrow-more"></i>了解更多</a>
						        </div>
						        <span>政策信息</span>
						   </div>
						   <div class="qnrpolicylst">
						      <ul></ul>
						   </div>
   	 					</div>
				</div>
				<div class="t-section clearfix mod-product fresh-market">
					<div class="titlebar">
						<div class="innerbar">
							<span class="more fr">
								<a href="?action=Product"><i class="arrow-more"></i>更多产品</a>
							</span>
							<span>
								<ul class="col-name">新鲜上市</ul>
								<ul class="barlable">
									<li><a href="javascript:viewProductOrVendorByType(1,0)" class="barlable_background">吃喝</a></li>
									<li><a href="javascript:viewProductOrVendorByType(2,0)">娱乐</a></li>
									<li><a href="javascript:viewProductOrVendorByType(3,0)">实用</a></li>
								</ul>
							</span>
						</div>
					</div>
					<div class="bd">
						<ul class="product-list"></ul>
					</div>
				</div>
				<div class="t-section clearfix mod-product fresh-market">
					<div class="titlebar">
						<div class="innerbar">
							<span class="more fr">
								<a href="?action=Vendor"><i class="arrow-more"></i>更多商家</a>
							</span>
							<span>
								<ul class="col-name">商家团队</ul>
								<ul class="barlable">
									<li><a href="javascript:viewProductOrVendorByType(1,1)" class="barlable_background">食品</a></li>
									<li><a href="javascript:viewProductOrVendorByType(2,1)">种养殖</a></li>
									<li><a href="javascript:viewProductOrVendorByType(3,1)">生活用品</a></li>
								</ul>
							</span>
						</div>
					</div>
					<div class="bd">
						<ul class="product-list"></ul>
					</div>
				</div>
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
		src="templates/AgriProTraceability/QueryTrace/queryEntrance.databind.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript">
		$(function() {
			//根据页面判断首页或新鲜上市中二级标题的选中问题
			Transferload.pageHtml.SlideTransition();
			Transferload.pageHtml.initLoadHtml();
			queryEntrance.databind.initDataBind();
		});
		//根据类型选择产品
		function viewProductOrVendorByType(type,isVendor){
			if(isVendor == 0){
				//清除样式
				$('.barlable_background').eq(0).removeClass('barlable_background');
				//添加样式
				var alist = $('.barlable > li > a');
				alist.eq(type-1).addClass("barlable_background");
				queryEntrance.databind.bindNewProTraceData(type);
			}else{
				//清除样式
				$('.barlable_background').eq(1).removeClass('barlable_background');
				//添加样式
				var alist = $('.barlable > li > a');
				alist.eq(type-1+3).addClass("barlable_background");
				queryEntrance.databind.bindNewVendorData(type);
			}
		}
	<?php echo '</script'; ?>
>
</body>
</html><?php }} ?>
