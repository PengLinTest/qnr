var UserCenter;
UserCenter || (UserCenter = {});
UserCenter = {
    Init: function() {
        TransferloadUser.TraceabilityInfo = Base.session.getLoginUser();
        TransferloadUser.TraceabilityInfo ? ($("#loginuser").html(TransferloadUser.TraceabilityInfo.UserName), $(".Unlogin").hide(), $(".Hadlogin").show(), $(".LastLoginTime").html(Util.toSimpleDate(TransferloadUser.TraceabilityInfo.lastLoginTime)), UserCenter.BackBarStatus()) : window.location = "?action=Index";
    },
    BackBarStatus: function() {
        var a = Base.sessionStorage.getSession("UserCenterIdex");
        switch(a){
        	case 0:
        		$(".usercenter-nav li:first").trigger("click");
        		break;
        	case 1:
        		$(".usercenter-nav li:eq(1)").trigger("click");
        		break;
        	case 2:
        		$(".usercenter-nav li:eq(2)").trigger("click");
        		break;
        	default:
    			$(".usercenter-nav li:first").trigger("click");
        		break;
        }
    },
    InitIDcheckClick: function() {
        $("#btnIDCertified").unbind("click").click(function() {
        	if(!UserIDApplyUpload.hasFile){
            	ZENG.msgbox.show("请选择上传图片", 5, 2E3);
            	return;
            }
            var status = parseInt(UserCenter.IDCertifiedData.auth_ispass);
            if( status == 1 || status == 4){
            	 UserCenter.ApplyTraceability(1, "");
            }else if( status == 2){
            	ZENG.msgbox.show("正在审查中,请等待审查结束再重新上传认证图片.", 5, 2E3);
            }else{
            	ZENG.msgbox.show("审查已经通过，不能重复审查", 5, 2E3);
            }
        });
    },
    InitCompanycheckClick: function() {
        $("#btnSaveCompany").unbind("click").click(function() {
            var a = $("#CampanyNameInput").val() || null;
            if(a == null){
            	ZENG.msgbox.show("请输入企业名称", 5, 2E3);
            	return;
            };
            var srcImg = $("#CompanyImginfo").attr("src");
            if(typeof(srcImg) == "undefined"){
            	ZENG.msgbox.show("请选择上传图片", 5, 2E3);
            	return;
            }
            var status = parseInt(UserCenter.CompanyCertifiedData.auth_ispass);
            if( status == 1 || status == 4){
            	 UserCenter.ApplyTraceability(0, a);
            }else if( status == 2){
            	ZENG.msgbox.show("正在审查中,请等待审查结束再重新上传认证图片.", 5, 2E3);
            }else{
            	ZENG.msgbox.show("审查已经通过，不能重复审查", 5, 2E3);
            }
        })
    },
    InitOtherInfocheckClick: function() {
        $("#btnSaveOtherInfo").unbind("click").click(function() {
            var a = $("#ShowCompanyDescInput").val() || null;
            if(a == null){
            	ZENG.msgbox.show("请输入商家描述", 5, 2E3);
            	return;
            };
            var topImg = $("#ComapnyTopImg").attr("src");
            if(typeof(topImg) == "undefined"){
            	ZENG.msgbox.show("请选择上传商家广告图片", 5, 2E3);
            	return;
            }
            var topImg = $("#ComapnyLogoImg").attr("src");
            if(typeof(topImg) == "undefined"){
            	ZENG.msgbox.show("请选择上传商家logo图片", 5, 2E3);
            	return;
            }
        	UserCenter.ApplyTraceability(2, a);
        })
    },
    InitClick: function() {
        UserCenter.InitCompanycheckClick();
        UserCenter.InitIDcheckClick();
        UserCenter.InitOtherInfocheckClick();
        $("#btn_savebaseinfo").unbind("click").click(function() {
            UserCenter.UpdateBaseuserinfo()
        });
        $(".FiledClick").unbind("click").click(function() {
            $(".usercenter-nav li:eq(2)").trigger("click")
        })
    },
    OperateNewOrg: function(a) {
        $("#btnSaveNewOrg").unbind("click").click(function() {
            UserCenterField.SaveNewOneOrg(a)
        })
    },
    UpdateBaseuserinfo: function() {
        var InputLeader = $("#InputLeader").val() || null,
        InputMobile = $("#InputMobile").val() || null,
        InputFaxes = $("#InputFaxes").val() || null,
        InputEmail = $("#InputEmail").val() || null,
        InputQQ = $("#InputQQ").val() || null,
        InputWeChat = $("#InputWeChat").val() || null,
        InputTaoBao = $("#InputTaoBao").val() || null,
        InputVendorLabel = $("#InputVendorLabel").val() || null,
        InputCompanyType = $("#CampanyType").val() || null,
        InputAddress = $("#InputAddress").val() || null,
        isEmail = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test(InputEmail),
        isMobile = /^[0-9]*[1-9][0-9]*$/.test(InputMobile) && 11 == InputMobile.length;
        if(InputEmail != null && !isEmail){
        	ZENG.msgbox.show("请输入正确的邮箱地址", 5, 2E3); 
        	return ;
        }
        if(InputMobile != null && !isMobile){
        	ZENG.msgbox.show("请输入正确的手机号码", 5, 2E3);
        	return ;
        }
        $.ajax({
            url: "?action=UserCenter",
            type:"post",
            async:false,
            data: {
            	htmlMethod:"updateVendorInfo",
            	InputLeader:InputLeader ,
            	InputMobile:InputMobile ,
            	InputFaxes:InputFaxes ,
            	InputEmail:InputEmail ,
            	InputQQ:InputQQ ,
            	InputWeChat:InputWeChat ,
            	InputTaoBao: InputTaoBao,
            	InputVendorLabel:InputVendorLabel,
            	InputAddress:InputAddress,
            	InputCompanyType:InputCompanyType,
            },
            dataType:"json",
            success: function(response) {
            	if(response){
            		ZENG.msgbox.show("更新信息成功", 4, 2E3);
            		//获取更新后的数据信息
            		//更改session中的vendor_type
            		var user = Base.session.getLoginUser();
            		user.vendor_type = InputCompanyType;
            		Base.session.setLoginUser(user);
            		TransferloadUser.TraceabilityInfo = Base.session.getLoginUser();
                    UserCenter.GetUsercenterData();
            		$(".UserDetailDialog").dialog("destroy");
            	}else{
            		ZENG.msgbox.show("更新信息失败，请重新提交", 4, 2E3);
            	}
            }
        })
    },
    GetUsercenterData: function() {
        $.ajax({
        	url: "?action=UserCenter",
        	type:"post",
        	async:false,
        	data: {
        		htmlMethod:"getAllVendorInfo",
        		vendorId: TransferloadUser.TraceabilityInfo.vendorId
        	},
        	dataType:"json",
        	success: function(response) {
                if (response) {
                	//个人认证信息
                    UserCenter.IDCertifiedData = response['iden'][0];
                    //企业认证信息
                    UserCenter.CompanyCertifiedData = response['certi'][0];
                    //产品档案信息总数
                    UserCenter.ProductSum = parseInt(response['productSum']);
                    //商家基本信息
                    var userinfo = response['info'][0];
                    //公司名字信息
                    var companyName = userinfo['info_name'];
                    //个人验证信息
                    Base.sessionStorage.storeSession("CertifiedStatus", UserCenter.IDCertifiedData.auth_ispass);
                    $("#IDcardUncheck").empty();
                    var c = "";
                    switch(parseInt(UserCenter.IDCertifiedData.auth_ispass)){
                    	case 1:
                    		c = '<div class="statistics"> <i class="icon-checked icon-disabled"></i><p class="text"> 还未提交身份认证<br/><a href="javascript:;" class="btn-editAuthentication btn btn-default" style="float:right">立即认证</a></p>';
                    		break;
                    	case 2:
                    		c = '<div class="statistics"> <i class="icon-checked icon-disabled"></i><p class="text"> 身份认证正在审核中<br/><a href="javascript:;" class="btn-editAuthentication btn btn-default" style="float:right">审核中</a></p>';
                    		break;
                    	case 3:
                    		c = '<div class="statistics"> <i class="icon-checked"></i><p class="text"> 身份认证通过<br/><a href="javascript:;" class="btn-editAuthentication btn btn-default" style="float:right">认证通过</a></p>';
                    		break;
                    	default:
                    		c = '<div class="statistics"> <i class="icon-checked icon-disabled"></i><p class="text"> 身份认证不通过<br/><a href="javascript:;" class="btn-editAuthentication btn btn-default" style="float:right">重新认证</a></p>';
                    }
                    
                	$("#IDcardUncheck").append(c);
                	//个人身份验证弹出框
                	custom.initIDcheckClick();
                	
                	//公司验证信息
	                Base.sessionStorage.storeSession("CompanyCertified", UserCenter.CompanyCertifiedData.auth_ispass);
	                switch(parseInt(UserCenter.CompanyCertifiedData.auth_ispass)){
	                	case 1:
		       				$(".ShowCompanyImg").html('未提交验证信息');break;
	                	case 2:
	        				$(".ShowCompanyImg").html("认证审查中");break;
	                	case 3:
	        				$(".ShowCompanyImg").html('已验证<i class="icon-check"></i>');break;
	                	default:
	        				$(".ShowCompanyImg").html("验证失败，请重新提验证信息");
	                }
   			       $(".ShowCampanyName").html(companyName ? companyName : "-");
	                //显示产品档案信息
	                UserCenter.ShowRecordNum();
	                //显示用户信息
	                UserCenter.UserData = userinfo;
	                UserCenter.ShowUserData();
	                //其他信息的显示
	                //商家描述
	                if(UserCenter.UserData.vendor_desc){
	                	$("#ShowCompanyDesc").html('已填写<i class="icon-check"></i>');
	                }else{
	                	$("#ShowCompanyDesc").html('待填写');
	                }
	                //商家广告
	                if(UserCenter.UserData.vendor_adver_loc){
	                	$("#Showtopimg").html('已填写<i class="icon-check"></i>');
	                }else{
	                	$("#Showtopimg").html('待填写');
	                }
	                //商家logo
	                if(UserCenter.UserData.vendor_img_loc){
	                	$("#ShowLogo").html('已填写<i class="icon-check"></i>');
	                }else{
	                	$("#ShowLogo").html('待填写');
	                }
	                
                }
            }
        });
    },
    ShowUserData: function() {
        if(UserCenter.UserData){
        	0 < UserCenter.UserData['info_leader'].trim().length ? $("#Showleader").html(UserCenter.UserData['info_leader']):$("#Showleader").html("-");
        	0 < UserCenter.UserData['info_tele'].trim().length ?$("#Showtelephone").html(UserCenter.UserData['info_tele']):$("#Showtelephone").html("-");
        	0 < UserCenter.UserData['info_fax'].trim().length ?$("#ShowFaxes").html(UserCenter.UserData['info_fax']):$("#ShowFaxes").html("-");
        	0 < UserCenter.UserData['info_email'].trim().length ?$("#ShowEmail").html(UserCenter.UserData['info_email']):$("#ShowEmail").html("-");
        	0 < UserCenter.UserData['info_qq'].trim().length ?$("#Showinfoqq").html(UserCenter.UserData['info_qq']):$("#Showinfoqq").html("-");
        	0 < UserCenter.UserData['info_wechat'].trim().length ?$("#Showwechat").html(UserCenter.UserData['info_wechat']):$("#Showwechat").html("-");
        	0 < UserCenter.UserData['info_taobao'].trim().length ?$("#Showtaobao").html(UserCenter.UserData['info_taobao']):$("#Showtaobao").html("-");
        	0 < UserCenter.UserData['vendor_lable'].trim().length ?$("#Showlable").html(UserCenter.UserData['vendor_lable']):$("#Showlable").html("-");
        	0 < UserCenter.UserData['info_address'].trim().length ?$("#Showaddr").html(UserCenter.UserData['info_address']):$("#Showaddr").html("-");
        }
        switch(parseInt(TransferloadUser.TraceabilityInfo.vendor_type)){
	    	case 1:
				$("#ShowCompanyType").html('食品');break;
	    	case 2:
				$("#ShowCompanyType").html("种养殖");break;
	    	default:
				$("#ShowCompanyType").html("生活用品");
	    }
    
    },
    ShowRecordNum: function() {
        $(".CardRecorddiv").empty();
        var a = "";
        if(0 < UserCenter.ProductSum){
        	a = String.format('<span class="text fr"><a href="javascript:" class="btn btn-default btnNewRecord">新建档案</a></span><i class="icon-produces CardReordClick" style="cursor:pointer"></i><p class="text CardReordClick" style="cursor:pointer">{0}条产品档案</p>', UserCenter.ProductSum); 
        }else{
        	a = '<span class="text fr"><a href="javascript:" class="btn btn-default btnNewRecord">新建档案</a></span><i class="icon-produces icon-disabled CardReordClick" style="cursor:pointer"></i><p class="text CardReordClick" style="cursor:pointer"> 0条产品档案 </p>';
        }
        $(".CardRecorddiv").append(a);
        $(".CardReordClick").unbind("click").click(function() {
            $(".usercenter-nav li:eq(1)").trigger("click")
        })
    },
    //File:文件指针
    //FileName:文件名
    //Size：文件大小
    //a:标识公司认证还是法人认证
    //e:如果是公司认证，则是新的公司名
    //d:目前的认证状态(只有状态1:等待认证,4:认证不通过)才允许提交
    ApplyTraceability: function(isCertiAuth, infoName) {
        var c = "";
        var htmlMethod = "";
        var topFiles = "";
        var logoFiles = "";
        //公司验证
        if (0 == isCertiAuth) {
        	if(UserCompanyApplyUpload.files.length > 0){ 
        		c += UserCompanyApplyUpload.files[0].File;
        	}
            htmlMethod = "updateCertiAuth";
        //法人验证信息
        }else if(1 == isCertiAuth){
        	if (0 < UserIDApplyUpload.files.length){
        		c += UserIDApplyUpload.files[0].File;
        	}
        	htmlMethod = "updateIDApplyAuth";
        }else{
        	//其他信息更新
        	if (0 < UserCompanyOtherTopUpload.files.length){
        		topFiles += UserCompanyOtherTopUpload.files[0].File;
        	}
        	if (0 < UserCompanyOtherLogoUpload.files.length){
        		logoFiles += UserCompanyOtherLogoUpload.files[0].File;
        	}
        	
        	htmlMethod = "updateCompanyOtherInfo";
        }
        $.ajax({
            url: "?action=UserCenter",
            type:"post",
            data: {
            	htmlMethod:htmlMethod,
                files: c,
                infoName: infoName,
                topFiles:topFiles,
                logoFiles:logoFiles,
                
            },
            dataType:"json",
            success: function(b) {
                if(b){
	                ZENG.msgbox.show("修改成功", 4, 2E3);
	                if(0 == isCertiAuth){
	                	//更新用户信息
	                	UserCenter.GetUsercenterData();
	                	$(".dialog-company").dialog("destroy"); 
	                }else if(1 == isCertiAuth){
	                	$(".dialog-authentication").dialog("destroy");
	                	UserCenter.GetUsercenterData();
	                }else{
	                	//更新其他信息
	                	UserCenter.GetUsercenterData();
	                	$(".dialog-otherinfo").dialog("destroy");
	                }
                }else{
                	ZENG.msgbox.show("修改失败，请重新提交", 5, 2E3);
                }
            }
        })
    }
};