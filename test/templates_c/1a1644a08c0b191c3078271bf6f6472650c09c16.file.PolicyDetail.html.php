<?php /* Smarty version Smarty-3.1.21-dev, created on 2015-11-13 14:08:54
         compiled from ".\templates\page\PolicyDetail.html" */ ?>
<?php /*%%SmartyHeaderCode:13705645e0e60a19c7-72060291%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '1a1644a08c0b191c3078271bf6f6472650c09c16' => 
    array (
      0 => '.\\templates\\page\\PolicyDetail.html',
      1 => 1446473842,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13705645e0e60a19c7-72060291',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'data' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5645e0e61abcc9_99314725',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5645e0e61abcc9_99314725')) {function content_5645e0e61abcc9_99314725($_smarty_tpl) {?><!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>政策信息详细页面</title>
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
						<em class="mr10">></em><a href="?action=Policy">政策信息</a>
						<em class="mr10">></em><a id="top_lable_type" href="?action=Policy&type=<?php echo $_smarty_tpl->tpl_vars['data']->value['policy_type'];?>
"><span id ="typeValue" style="display:none"><?php echo $_smarty_tpl->tpl_vars['data']->value['policy_type'];?>
</span></a>
						<em id="top_lable_title" class="mr10">></em><?php echo $_smarty_tpl->tpl_vars['data']->value['policy_title'];?>

					</div>
				</div>
			</div>
			<div class="t-section newbackground">
				<div class="main pagewidth">
					<div class="newspolicy_tit">
						<h1 id="title" class="titlefont_size"><?php echo $_smarty_tpl->tpl_vars['data']->value['policy_title'];?>
</h1>
						<div class="info">
							<div class="set_font">
								<a href="#" class="font_small font_small_dis"></a><a href="#"
									class="font_add"></a>
							</div>
							<span id="pubtime"> <?php echo $_smarty_tpl->tpl_vars['data']->value['policy_time'];?>
 </span>
							<span id="source"> 来源： <?php echo $_smarty_tpl->tpl_vars['data']->value['policy_source'];?>
 </span>
						</div>
						<div class="clear"></div>
					</div>
					<div id="content" class="content1"><?php echo $_smarty_tpl->tpl_vars['data']->value['policy_content'];?>
</div>
					<div id = editor class="share">[责任编辑： <?php echo $_smarty_tpl->tpl_vars['data']->value['policy_editor'];?>
 ]</div>
					<div class="clear"></div>
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
 src="templates/AgriProTraceability/QueryTrace/Policy.databind.js"
		type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript">
		 $(function () {
	         Transferload.pageHtml.initLoadHtml();
	         //初始化top_lable_type
	         var policyType = parseInt($("#typeValue")[0].innerHTML);
	         Policy.databind.updateTopLableType(policyType);
	         $("#content").attr("class","content1");
				set_font();
	     });
		
		function set_font() {
			var f_s = $(".font_small");
			var f_a = $(".font_add");
			var f_c = $("#content");
			f_s.click(function() {
				if (f_c.attr("class") == "content1") {
					return false;
				} else if (f_c.attr("class") == "content2") {
					$(this).addClass("font_small_dis");
					changefontsize(1);
				} else {
					f_a.removeClass("font_add_dis");
					changefontsize(2);
				}
				return false;
			});
			f_a.click(function() {
				if (f_c.attr("class") == "content1") {
					f_s.removeClass("font_small_dis");
					changefontsize(2);
				} else if (f_c.attr("class") == "content2") {
					$(this).addClass("font_add_dis");
					changefontsize(3);
				} else {
					$(this).removeClass("font_add_dis");
					return false;
				}
				return false;
			})
		};
		
		function changefontsize(thisSize) {
			if (thisSize == "3") {
				$("#content").css("font-size", "18px").attr("class", "content3");
			};
			if (thisSize == "2") {
				$("#content").css("font-size", "16px").attr("class", "content2");
			};
			if (thisSize == "1") {
				$("#content").css("font-size", "14px").attr("class", "content1");
			};
		};
<?php echo '</script'; ?>
>
</body>
</html>
<?php }} ?>
