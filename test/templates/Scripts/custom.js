var custom;
if (!custom) {
    custom = {};
}
custom = {
    initIDcheckClick: function () {
        //身份认证弹出层
        $(".btn-editAuthentication").unbind("click").click(function (e) {
            $(".dialog-authentication").dialog({
                autoOpen: false,
                width: '640',
                height: 'auto',
                dialogClass: "modal-dialog user-dialog",
                title: "",
                modal: true,
                resizable: false
            }).dialog("open");
            $(".dialog-authentication .btn-close").unbind("click").click(function () {
                $(".dialog-authentication").dialog("destroy");
            })

            if (UserCenter.IDCertifiedData.auth_license_loc && UserCenter.IDCertifiedData.auth_license_loc.length > 0) {
                var src = UserCenter.IDCertifiedData.auth_license_loc;
                $(".IDImg").empty();
                var html = ' <img id="IDImginfo" src="' + src + '" width="132" height="88">';
                $(".IDImg").append(html);
            }
            if (UserCenter.IDCertifiedData.auth_ispass == 1) {
                $(".repeatUploadID").html("请上传认证图片");
                $(".repeatUploadID").show();
            } else if (UserCenter.IDCertifiedData.auth_ispass == 2) {
                $(".repeatUploadID").html("正在审查中,请等待审查结束再重新上传认证图片");
                $(".repeatUploadID").show();
            }else if (UserCenter.IDCertifiedData.auth_ispass == 3) {
                $(".repeatUploadID").html("认证通过");
                $(".repeatUploadID").show();
            } else {
            	$(".repeatUploadID").html("认证失败，请重新提交认证照片进行审查认证");
                $(".repeatUploadID").hide();
            }
            e.preventDefault();
            return false;
        });
    },
    initCompanycheckClick: function () {
        //填写企业信息弹出层
        $(".btn-editCompany").unbind("click").click(function (e) {
            $(".dialog-company").dialog({
                autoOpen: false,
                width: '640',
                height: 'auto',
                dialogClass: "modal-dialog user-dialog",
                title: "",
                modal: true,
                resizable: false
            }).dialog("open");
            $(".dialog-company .btn-close").unbind("click").click(function () {
                $(".dialog-company").dialog("destroy");
            })

            $(".CancelCompany").unbind("click").click(function () {
                $(".dialog-company").dialog("destroy");
            })
            //请求获取企业认证信息
	        if (UserCenter.CompanyCertifiedData.auth_license_loc && UserCenter.CompanyCertifiedData.auth_license_loc.length > 0) {
	            var src = UserCenter.CompanyCertifiedData.auth_license_loc;
	            $(".CompanyImg").empty();
	            var html = '<img id="CompanyImginfo" src="' + src + '" width="132" height="88">';
	            $(".CompanyImg").append(html);
	        }
	        $("#CampanyNameInput").val(UserCenter.UserData ? UserCenter.UserData.info_name : "-");
	        if (UserCenter.CompanyCertifiedData.auth_ispass == 1) {
	            $(".repeatUploadID").html("请上传认证图片");
	            $(".repeatUploadID").show();
	        } else if (UserCenter.CompanyCertifiedData.auth_ispass == 2) {
	            $(".repeatUploadID").html("正在审查中,请等待审查结束再重新上传认证图片");
	            $(".repeatUploadID").show();
	        } else if (UserCenter.CompanyCertifiedData.auth_ispass == 3) {
	            $(".repeatUploadID").html("认证通过");
	            $(".repeatUploadID").show();
	        } else {
	        	$(".repeatUploadID").html("认证失败，请重新提交认证照片进行审查认证");
	            $(".repeatUploadID").show();
	        }
            e.preventDefault();
            return false;
        });
    },
    initOtherInfoClick: function () {
        //填写其他信息弹出层
        $(".btn-editLogo").unbind("click").click(function (e) {
            $(".dialog-otherinfo").dialog({
                autoOpen: false,
                width: '1200',
                height: 'auto',
                dialogClass: "modal-dialog user-dialog",
                title: "",
                modal: true,
                resizable: false
            }).dialog("open");
            $(".dialog-otherinfo .btn-close").unbind("click").click(function () {
                $(".dialog-otherinfo").dialog("destroy");
            })

            $(".CancelOtherInfo").unbind("click").click(function () {
                $(".dialog-otherinfo").dialog("destroy");
            })
            //商家描述信息
	        if (UserCenter.UserData.vendor_desc) {
	            $("#ShowCompanyDescInput").html(UserCenter.UserData.vendor_desc);
	        }
            //商家广告位
	        if (UserCenter.UserData.vendor_adver_loc && UserCenter.UserData.vendor_adver_loc.length > 0) {
	            var src = UserCenter.UserData.vendor_adver_loc;
	            $(".TopImg").empty();
	            var html = '<img id="ComapnyTopImg" src="' + src + '" width="132" height="88">';
	            $(".TopImg").append(html);
	        }
	        //商家logo
	        if (UserCenter.UserData.vendor_img_loc && UserCenter.UserData.vendor_img_loc.length > 0) {
	            var src = UserCenter.UserData.vendor_img_loc;
	            $(".Logo").empty();
	            var html = '<img id="ComapnyLogoImg" src="' + src + '" width="132" height="88">';
	            $(".Logo").append(html);
	        }
            e.preventDefault();
            return false;
        });
    }
}

$(document).ready(function () {
    // - uniform
    if ($('.uniform').length > 0) {
        $('.uniform').uniform({
            radioClass: 'uniRadio'
        });
    }

    $('[data-toggle="tooltip"]').tooltip();

    //登录弹出层
    $(".btn-login").unbind("click").click(function (e) {
    	//加载验证码
    	$("#checkCode").attr({ "src": "templates/CheckCode.php" });
    	
        $(".dialog-login").dialog({
            autoOpen: false,
            width: '400',
            height: 'auto',
            dialogClass: "modal-dialog user-dialog",
            title: "",
            modal: true,
            resizable: false
        }).dialog("open");
        $(".dialog-login .btn-close").unbind("click").click(function () {
            $(".dialog-login").dialog("destroy");
        })
        e.preventDefault();
        return false;
    });



    //填写联系信息弹出层
    $(".btn-editContact").unbind("click").click(function (e) {
        $(".UserDetailDialog").dialog({
            autoOpen: false,
            width: '640',
            height: 'auto',
            dialogClass: "modal-dialog user-dialog",
            title: "",
            modal: true,
            resizable: false
        }).dialog("open");
        $(".UserDetailDialog .btn-close ").unbind("click").click(function () {
            $(".UserDetailDialog").dialog("destroy");
        })
        $(".Cancelsavebaseinfo").unbind("click").click(function () {
            $(".UserDetailDialog").dialog("destroy");
        })
        if(UserCenter.UserData){
        	$("#InputLeader").val(UserCenter.UserData['info_leader']);
        	$("#InputMobile").val(UserCenter.UserData['info_tele']);
        	$("#InputFaxes").val(UserCenter.UserData['info_fax']);
        	$("#InputEmail").val(UserCenter.UserData['info_email']);
        	$("#InputQQ").val(UserCenter.UserData['info_qq']);
        	$("#InputWeChat").val(UserCenter.UserData['info_wechat']);
        	$("#InputTaoBao").val(UserCenter.UserData['info_taobao']);
        	$("#InputVendorLabel").val(UserCenter.UserData['vendor_lable']);
        	$("#InputAddress").val(UserCenter.UserData['info_address']);
        }
        e.preventDefault();
        return false;
    });

    //菜单条的单击绑定事件
    var $div_li = $(".usercenter-nav li");
    $(".tabcontent > div").eq(0).show();
    var Onoff = true;
    $div_li.click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $div_li.index(this);
        UserCenterField.Tabindex = index;
        Base.sessionStorage.storeSession("UserCenterIdex", index);
        if (index == 2) {
        	//商家成员管理
        	UserCenterMember.init();
        }
        if (index == 1) {
            UserCenterRecord.init();
        }
        if (index == 0) {
            UserCenter.GetUsercenterData();
            if (Onoff == true) {
                UserIDApplyUpload.initButton("upload_IDImg", $(".IDImg"), '<img src="{0}" width="132" height="88">');
                UserCompanyApplyUpload.initButton("UploadCompanyImginfo", $(".CompanyImg"), '<img id="CompanyImginfo" src="{0}" width="132" height="88">');
                UserCompanyOtherTopUpload.initButton("UploadCompanyTopImg", $(".TopImg"), '<img id="ComapnyTopImg" src="{0}" width="132" height="88">');
                UserCompanyOtherLogoUpload.initButton("UploadCompanyLogo", $(".Logo"), '<img id="ComapnyLogoImg" src="{0}" width="132" height="88">');
                Onoff = false;
            }
        }
        $(".tabcontent > div").eq(index).show().siblings().hide();
    });
    if (!Base.sessionStorage.getSession("UserCenterIdex")) {
        Base.sessionStorage.storeSession("UserCenterIdex", 0);
    }

})