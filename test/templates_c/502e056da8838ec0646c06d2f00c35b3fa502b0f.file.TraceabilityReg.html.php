<?php /* Smarty version Smarty-3.1.21-dev, created on 2016-01-20 09:23:57
         compiled from ".\templates\page\TraceabilityReg.html" */ ?>
<?php /*%%SmartyHeaderCode:6265569f441d729e93-81667784%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '502e056da8838ec0646c06d2f00c35b3fa502b0f' => 
    array (
      0 => '.\\templates\\page\\TraceabilityReg.html',
      1 => 1447923223,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6265569f441d729e93-81667784',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_569f441d754559_42691841',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_569f441d754559_42691841')) {function content_569f441d754559_42691841($_smarty_tpl) {?><!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8"/>
<title>青农人注册页面</title>
<link rel="stylesheet" type="text/css" href="templates/Plugins/jqueryui/jquery-ui.css" />
<link rel="stylesheet" type="text/css" href="templates/Scripts/jquery.Cloud/jquery.Cloud.css" />
<link rel="stylesheet" type="text/css" href="templates/Plugins/LoadMask/jquery.loadmask.css" />
<link rel="stylesheet" type="text/css" href="templates/Styles/uniform.default.css">
<link rel="stylesheet" href="templates/Plugins/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="templates/Styles/reset.css">
<link rel="stylesheet" href="templates//Styles/global.css">
<link rel="stylesheet" href="templates/Styles/newTrace.css">
<link rel="stylesheet" href="templates/Styles/usercenter.css">
</head>
<body>
<div class="topwrapper" id="UserHead"></div>
<div class="actionbar reg-actionbar RegDiv ">
  <div class="w1030">
    <h2 class="title">欢迎注册青农人</h2>
    <div class="card-signup">
      <div class="signup reg-form">
        <form id="Form1">
          <ul class="form-group">
            <li>
              <input type="text" value="" class="form-text" id="username" name="username" autocomplete="off" placeholder="邮箱或手机号" onblur="javascript:TraceabilityReg.UsernameIsValid()"/>
              <span class="help-inline OkUserName" style="display:none"><span class="error valid"></span></span>
              <span class="help-inline usernamevalid" style="display:none"><span class="error">请输入邮箱或手机号</span></span> 
              <span class="help-inline usernameExits" style="display:none"><span class="error">已存在该用户</span></span> 
              </li>
            <li>
              <input type="password" value="" class="form-text" id="password1" name="password" placeholder="密码" onblur="javascript:TraceabilityReg.PwdFirstIsVaild()"/>
              <span class="help-inline okpwd1 pwd1" style="display:none"><span class="error valid"></span></span>
              <span class="help-inline Putpwd1 pwd1" style="display:none"><span class="error">请输入密码</span></span>
            <li>
              <input type="password" value="" class="form-text" id="password2" name="password" placeholder="确认密码" onblur="javascript:TraceabilityReg.PwdSecondIsVaild()"/>
              <span class="help-inline okpwd2" style="display:none"><span class="error valid"></span></span>
              <span class="help-inline Putpwd2" style="display:none"><span class="error">请再次输入密码</span></span>
              <span class="pwdNoSame help-inline " style="display:none"><span class="error">两次输入的密码不一致</span></span> </li>
            <li>
              <input type="text" value="" class="form-text" id="CompanyName"  placeholder="企业名称" onblur="javascript:TraceabilityReg.CompanyNameIsValid()"/>
              <span class="help-inline OkCompanyName" style="display:none"><span class="error valid"></span></span>
              <span class="help-inline PutCompanyName" style="display:none"><span class="error">请输入企业名称</span></span>
              <span class="help-inline ErrorCompanyName" style="display:none"><span class="error">已经存在该企业</span></span> </li>
            <li class="mt15"> <span class="uniform-group">
              <label class="checkbox inline" for="inlineCheckbox1" id="CheckLable">
                <input type="checkbox" id="inlineCheckbox1" class="uniform" name="inlineCheckbox1" value="Checkbox01" />
                同意<a href="?action=LoadWebService" class="text-primary" target="_blank">《青农人服务协议》</a></label>
              </span> </li>
            <li class="mt15"> <a href="javascript:"  id="btn_save" class="btn btn-primary btn-block disabled">立刻注册</a> </li>
            <li class="mt40 LoginLi"> <a href="javascript:" class="btn btn-default btn-block btn-login">我已有账号，立刻登录</a> </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="actionbar reg-actionbar RegSuccess hide">
  	<div class="w1030">
    	<h2 class="title"></h2>
        <div class="card-signup reg-success-card">
        <div class="signup">
        <div class="hd"><img src="./templates/Images/trace/img-check.png" width="180" height="180"></div>
        <p class="tips">注册成功</p>
          <ul class="form-group">
          <li>
            <a href="?action=Index" class="btn btn-primary btn-block">返回首页</a>
            </li>
            <!--<li class="mt40">
            <a href="#" class="btn btn-default btn-block">发布产品档案</a>
            </li>-->
            <li class="mt20">
            <a href="?action=UserCenter" class="btn btn-default btn-block">进入用户中心</a>
            </li>
          </ul>
      </div>
        </div>
    </div>
  </div>
<div id="UserFooter" class="footer"> </div>
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
 type="text/javascript"
		src="templates/Scripts/jquery.Cloud/jquery.Cloud.js"><?php echo '</script'; ?>
>
	
<?php echo '<script'; ?>
 src="templates/Scripts/jquery.uniform.min.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Scripts/custom.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/LoadUser/TransferloadUser.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/LoadUser/TraceabilityReg.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript">
    $(function () {
        TransferloadUser.initLoadHtml("reg");
        TransferloadUser.TraceabilityInfo = Base.session.getLoginUser();
        if (TransferloadUser.TraceabilityInfo) {
            $(".loginuser").html(TransferloadUser.TraceabilityInfo.UserName);
            $(".Unlogin").hide();
            $(".Hadlogin").show();
            $(".LoginLi").hide();
        }
        TraceabilityReg.initClick();

    });
<?php echo '</script'; ?>
>
</body>
</html><?php }} ?>
