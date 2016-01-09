<?php /* Smarty version Smarty-3.1.21-dev, created on 2016-01-09 08:29:09
         compiled from ".\templates\page\test.html" */ ?>
<?php /*%%SmartyHeaderCode:88195690b4eb31dd98-66688161%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'db494f6c3efe6fcff20dca64cd4b840e214171b9' => 
    array (
      0 => '.\\templates\\page\\test.html',
      1 => 1452324546,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '88195690b4eb31dd98-66688161',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5690b4eb3ae974_64531043',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5690b4eb3ae974_64531043')) {function content_5690b4eb3ae974_64531043($_smarty_tpl) {?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>test</title>
	<link rel="stylesheet" type="text/css" href="templates/Plugins/jqueryui/jquery-ui.css" />
	<link rel="stylesheet" type="text/css" href="templates/Scripts/jquery.Cloud/jquery.Cloud.css" />
	<link rel="stylesheet" type="text/css" href="templates/Plugins/LoadMask/jquery.loadmask.css" />
	<link rel="stylesheet" type="text/css" href="templates/Styles/uniform.default.css">
	<link rel="stylesheet" href="templates/Scripts/ueditor/themes/default/ueditor.css">
	<link rel="stylesheet" type="text/css" href="templates/Plugins/WYSIWYG/jwysiwyg/jquery.wysiwyg.css">
	<link rel="stylesheet" href="templates/Plugins/bootstrap/css/bootstrap.css">
	<link rel="stylesheet" href="templates/Styles/reset.css">
	<link rel="stylesheet" href="templates/Styles/global.css">
	<link rel="stylesheet" href="templates/Styles/newTrace.css">
	<link rel="stylesheet" href="templates/Styles/usercenter.css">
	<link rel="stylesheet" href="templates/Plugins/ImgCutter/css/jquery.Jcrop.css">
	<link rel="stylesheet" href="templates/Plugins/WYSIWYG/jwysiwyg/jquery.wysiwyg.css">
	<link rel="stylesheet" href="templates/Plugins/FileBase64/Attachment/Attachment.css">
</head>
<body>
		<a href="javascript:void(0);" class="btn btn-default btn_uploadPic">添加图片</a>
		<div class="reply-content mt10">
			<div class="piclist clearfix">
				<div class="filecell">
					<dl class="ImgCutAttachment">
					</dl>
				</div>
			</div>
		</div>
		<!--图片裁剪 start-->
	<div id="ImgCutDialogID" class="hide"><!--图片裁剪 start-->
		 <div class="uploadPic-Modal">
		    <div class="mc">
		        <div class="col-right fr">
		            <div class="hd">
		                <h4>效果预览</h4>
		                <p>
		                    你上传的图片会自动生成以下尺寸，请注意小尺寸的图像是否清晰</p>
		            </div>
		            <div id="picture_200" class="thumbnail">
		                <img src="/images/common/no_img_200.jpg"/></div>
		        </div>
		        <div class="col-left">
		            <div class="pic">
		                <div id="picture_original">
		                    <img src="/images/common/no_img.jpg" id="target" />
		                </div>
		            </div>
		            <div class="clearfix mt10">
		                <div class="action">
		                        <object id="Upload_BaseInfoImgAttachment" style="width: 150px;"></object>
		                </div>
		            </div>
		        </div>
		
		    </div>
		            <div class="clear"></div>
		        <div class="ar bt mt10">
		            <ul class="mt10">
		                <li class="container-btn"><a href="JavaScript:void(0);" id="saveImg" class="btn_green mr10">
		                    确定</a> <a href="JavaScript:void(0);" id="CancelsaveImg" class="btn_gray">取消</a>
		                </li>
		            </ul>
		        </div>
		</div>
	</div>
    <!--图片裁剪 End-->
</body>
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
 type="text/javascript" src="templates/Scripts/Transfer.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Plugins/LoadMask/jquery.loadmask.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Plugins/Slides/jquery.slides.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/EditProduct/ueditor.config.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/EditProduct/ueditor.all.min.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/EditProduct/zh-cn.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/EditProduct/swfobject.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/jquery.uniform.min.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/Messages.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/custom.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Plugins/FileBase64/swfobject.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/AgriProTraceability/EditProduct/BaseInfoImgAttachment.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Plugins/ImgCutter/js/jquery.Jcrop.min.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Plugins/ImgCutter/js/jQuery.UtrialAvatarCutter.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/AgriProTraceability/EditProduct/UserIDApplyUpload.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/AgriProTraceability/LoadUser/TransferloadUser.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/AgriProTraceability/EditProduct/PublishUploadDetection.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/AgriProTraceability/EditProduct/PublishUploadGrowImg.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/AgriProTraceability/EditProduct/PubilshUploadCertificate.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/AgriProTraceability/EditProduct/PublishUpdateProduct.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/AgriProTraceability/EditProduct/PubishSaveProduct.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/AgriProTraceability/EditProduct/PublishArchives.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript">
	TraceRecords_ImgCutDialog();
	
//图片裁剪
function TraceRecords_ImgCutDialog() {
    //if ($("#ImgCutDialogID").length > 0) $("#ImgCutDialogID").remove();
    //$("<div id='ImgCutDialogID' class='hide'></div>").appendTo('body');
    //BaseInfoImgAttachment.initButton("Upload_BaseInfoImgAttachment", $(".BaseInfoImgAttachment"), '<dd class="imagedd"><p class="imgAttachment" style="cursor: pointer"><img src="{0}"></p></dd>');

    $("#CancelsaveImg").unbind("click").click(function (e) {
        $("#ImgCutDialogID").remove();
    });
    $("#ImgCutDialogID").dialog({
        autoOpen: false,
        width: '800',
        height: 'auto',
        dialogClass: "modal-dialog user-dialog",
        title: "添加图片",
        modal: true,
        resizable: false,
        show: {
            effect: "clip",
            duration: 300
        },
        hide: {
            effect: "clip",
            duration: 300
        }
    }).dialog("open");
}

<?php echo '</script'; ?>
>


</html><?php }} ?>
