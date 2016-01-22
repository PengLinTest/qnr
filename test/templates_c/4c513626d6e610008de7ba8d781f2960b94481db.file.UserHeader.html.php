<?php /* Smarty version Smarty-3.1.21-dev, created on 2016-01-20 08:04:21
         compiled from ".\templates\page\UserHeader.html" */ ?>
<?php /*%%SmartyHeaderCode:6258569f31751df426-17073427%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4c513626d6e610008de7ba8d781f2960b94481db' => 
    array (
      0 => '.\\templates\\page\\UserHeader.html',
      1 => 1452346444,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6258569f31751df426-17073427',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_569f31752828f1_58927096',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_569f31752828f1_58927096')) {function content_569f31752828f1_58927096($_smarty_tpl) {?><div class="topbar topbar-login">
	<div class="w1030">
		<span class="login fr Unlogin" style="display: none"><a
			href="javascript:;" id="BtnLogin">登录</a>|<a
			href="?action=Registered">免费注册</a>
		</span>
		<div class="dropdown login-dropdown fr Hadlogin hide">
			<a class="dropdown-toggle" id="dLabel" role="button"
				data-toggle="dropdown" data-target="#" href="javascript:;"><span
				id="loginuser" class="loginuser"></span> <b
				class="caret"></b> </a>
			<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
				<li id="btnUserCenter" role="presentation"><a role="menuitem"
					tabindex="-1" href="javascript:;">用户中心</a></li>
				<li id="BtnUpdatePwd" role="presentation"><a role="menuitem"
					tabindex="-1" href="javascript:;">修改密码</a></li>
				<li id="OutWeb" role="presentation"><a role="menuitem"
					tabindex="-1" href="javascript:;">退出</a></li>
			</ul>
		</div>
		<ul class="link fr">
			<li class="item"><a
				href="?action=index"> <i
					class="icon icon-home"></i>返回首页
			</a></li>
		</ul>
		<span class="fr hide"><i class="ic-topbar-notifications"></i></span>
		<ul class="link">
			<li class="item"><a href="javascript:;"> <i
					class="icon icon-hotline"></i> 0771-6114849
			</a></li>
		</ul>
	</div>
</div>

<!--登录弹出层-->
<div class="dialog-login hide">
	<span class="btn-close"><i class="icon-close"></i></span>
	<div class="title">
		<h2>
			登录<br /> <small>感谢你使用青农人</small>
		</h2>
	</div>
	<div class="bd">
		<ul class="form-group">
			<li><input type="text" value=""
				class="form-text form-text-block" id="txtUserName" name="username"
				autocomplete="off" placeholder="账号"></li>
			<li><input type="password" value=""
				class="form-text form-text-block" id="txtPassword" name="password"
				placeholder="密码"></li>
			<li><input type="text" value=""
				class="form-text form-text-small mr10" id="txtCheckCode"
				name="password" placeholder="验证码"> <span class="checkcode"><img
					id="checkCode" src="" width="80" height="35" /></span> <a
				href="javascript:;" class="checkcode"><i class="icon-refresh"></i></a>
			</li>
			<li class="mt15"><a href="javascript:"
				class="btn btn-primary btn-block bt-ok-login">登录</a></li>
			<li class="action"><span class="fr"><a target="_blank"
					href="/AgriProTraceability/91QueryEntrance/ForgetPwd.html"><i
						class="icon-tip mr10"></i>忘记密码?</a></span></li>
		</ul>
	</div>
</div>

<!--更新密码弹出层-->
<div class="dialog-contact UpdatePwdDialog hide">
	<span class="btn-close"><i class="icon-close"></i></span>
	<div class="title">
		<h2>修改密码</h2>
	</div>
	<div class="bd">
		<ul class="form-group">
			<li class="form-item"><label class="form-label">原密码</label> <input
				id="oldPassword" type="password" value=""
				class="form-text form-text-nomal" placeholder="请输入旧密码" /></li>
			<li class="form-item"><label class="form-label">新密码</label> <input
				id="newPassword" type="password" value=""
				class="form-text form-text-nomal mr10" placeholder="请输入新密码" /></li>
			<li class="form-item"><label class="form-label">确认新密码</label> <input
				id="newAgainPassword" type="password" value=""
				class="form-text form-text-nomal" placeholder="请再输入一次新密码" /></li>
			<li class="form-item form-actions"><a href="javascript:;"
				class="btn btn-primary mr10" id="Updatepwd">保存</a> <a href="javascript:;"
				class="btn btn-default CancelUpdatepwd">取消</a></li>
		</ul>
	</div>
</div>
<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/md5.js"><?php echo '</script'; ?>
>
<!-- <?php echo '<script'; ?>
 type="text/javascript"
		src="templates/Scripts/jquery.Cloud/jquery.Cloud.js"><?php echo '</script'; ?>
> --><?php }} ?>
