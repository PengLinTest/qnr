<?php /* Smarty version Smarty-3.1.21-dev, created on 2016-01-12 08:31:28
         compiled from ".\templates\page\PolicyNews.html" */ ?>
<?php /*%%SmartyHeaderCode:322425694abd08217f4-52070887%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5c114fd2f75fb4fc305bef2144d524877457b68d' => 
    array (
      0 => '.\\templates\\page\\PolicyNews.html',
      1 => 1446473842,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '322425694abd08217f4-52070887',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'data' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5694abd0a70a77_74029927',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5694abd0a70a77_74029927')) {function content_5694abd0a70a77_74029927($_smarty_tpl) {?><!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>政策信息</title>
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
<link rel="stylesheet" href="templates/Styles/newPolicy.css">
</head>
<body>
	<div class="topwrapper"></div>
	<div class="midwrapper">
		<div class="clearfix w1030">
			<div id="filter" class="t-section trace-filter">
				<div class="breadcrumb clearfix">
					<div class="cat">
						<a href="?action=Index">首页</a>
					</div>
					<div class="cat">
						<em class="mr10">></em><a href="javascript:;">政策信息</a>
						<em class="mr10">></em><a id="top_lable_type" href="javascript:;"><span id ="typeValue" style="display:none"><?php echo $_smarty_tpl->tpl_vars['data']->value['type'];?>
</span>政策专题</a>
					</div>
				</div>
			</div>
			<div>
				<div class="t-section policydetail_left">
					<ul>
					    <li><a href="javascript:Policy.databind.getPolicyByType(1)">政策专题</a></li>
					    <li><a href="javascript:Policy.databind.getPolicyByType(2)">农业法规</a></li>
					    <li><a href="javascript:Policy.databind.getPolicyByType(3)">农业标准</a></li>
					    <li><a href="javascript:Policy.databind.getPolicyByType(4)">综合法规</a></li>
				    </ul>
				</div>
				<div class="t-section newbackground policydetail_right">
					<div class="toolbar clearfix">
						<div class="pagin fr">
							<span class="text"><i id="courIndex">1</i>/<span id="totalPage">10</span></span>
							<a href="javascript:Policy.databind.prevPage()"><span class="btn btn-prev">&lt;</span></a> 
							<a href="javascript:Policy.databind.nextPage()"><span class="btn btn-next">&gt;</span></a>
						</div>
					</div>
					<!--在这里修改js,添加数据 
					<div class="mainview clearfix">
						这里放产品列表
					</div> -->
					<div class="newspolicy">
					      <ul></ul>
					</div>
					<div class="pagination ac">
						<div class="webPager">
							<!--这里放分页-->
						</div>
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
 type="text/javascript" src="templates/Scripts/Base.service.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/Base.Storage.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/CookieStorage.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/Service.js"><?php echo '</script'; ?>
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
		src="templates/AgriProTraceability/QueryTrace/Policy.databind.js"><?php echo '</script'; ?>
>

	<?php echo '<script'; ?>
 type="text/javascript">
        $(function () {
            Transferload.pageHtml.initLoadHtml();
            //赋值Policy.policy_type;
            Policy.policy_type = $('#typeValue')[0].innerHTML;
            Policy.databind.init();
        });
    <?php echo '</script'; ?>
>
</body>
</html>
<?php }} ?>
