var TraceabilityReg;
if (!TraceabilityReg) {
    TraceabilityReg = {};
}
TraceabilityReg = {
    init: function () {
        
    },
    initClick: function () {
         $("#username").unbind("keyup").keyup(function(){
            var username= $("#username").val();
            if(username.length>=4){
                Service.post({
                    url: "/TraceabilityService.svc/CheckUsername",
                    params: {
                        username: $("#username").val()
                    },
                    success: function (response) {
                            if(response>0){
                                $(".usernameExits").show();
                                $(".OkUserName").hide();
                                
                            }else{
                                $(".usernameExits").hide();
                                $(".OkUserName").show();
                            }
                    }
                  });
            }else{
                $(".usernameExits").hide();
            }
          });

          $("#CompanyName").unbind("keyup").keyup(function(){
            var CompanyName= $("#CompanyName").val();
            if(CompanyName.length>=4){
                Service.post({
                    url: "/TraceabilityService.svc/CheckCompany",
                    params: {
                        CompanyName: $("#CompanyName").val()
                    },
                    success: function (response) {
                            if(response>0){
                                $(".ErrorCompanyName").show();
                                $(".OkCompanyName").hide();
                            }else{
                                $(".ErrorCompanyName").hide();
                                $(".OkCompanyName").show();
                            }
                    }
                  });
            }else{
                $(".ErrorCompanyName").hide();
            }
          });


        $("#CheckLable").unbind("click").click(function (e) {
            e.stopPropagation();
            if ($(this).find("input[type=checkbox]").prop('checked')) {
                $("#btn_save").addClass("disabled");
                $(this).find("input[type=checkbox]").prop('checked', false);
                $("#btn_save").unbind("click").click(function () {
                });
            }
            else {
                $("#btn_save").removeClass("disabled");
                $(this).find("input[type=checkbox]").prop('checked', true);
                $("#btn_save").unbind("click").click(function () {
                    TraceabilityReg.SaveUser();
                });
            }
            $.uniform.update();
        })
    },
//    GetVerifyCode: function () {
//        var username = $("#username").val() || null;
//        var Emailreg = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/; //验证邮箱
//        var Phonereg = /^[0-9]*[1-9][0-9]*$/; //验证手机号
//        var isMailAddr = Emailreg.test(username);
//        var isMobile = Phonereg.test(username) && username.length == 11;
//        if (!username || (!isMailAddr && !isMobile)) {//不是手机号也不是邮箱
//            $(".usernamevalid").show();
//            return;
//        } else { $(".usernamevalid").hide(); }
//        $("#BtnGetVerifyCode").removeClass("btn-primary");
//        $("#BtnGetVerifyCode").html("验证码发送中");
//        Service.post({
//            url: "/UserService.svc/RegUser",
//            async: false,
//            params: {
//                UserName: $("#username").val(),
//                 RegType:91,
//            },
//            success: function (response) {
//                if (response.Status == 1 || response.Status == 0) { //验证码发送成功,0是重发的验证码
//                    TraceabilityReg.SessionId = response.SessionId; //用户ID
//                    $("#BtnGetVerifyCode").html("验证码已经发送成功.");
//                } else {
//                    ZENG.msgbox.show(response.StatusText, 4, 2000);
//                    $("#BtnGetVerifyCode").html("获取验证码失败.");
//                }

//                //                else if (response.Status == -2) {
//                //                    ZENG.msgbox.show(response.StatusText, 4, 2000);
//                //                } else {
//                //                    ZENG.msgbox.show(response.StatusText, 4, 2000);
//                //                }
//            }
//        });
//    },
    SaveUser: function () {
        //判断用户名是否有效
    	var valid1 = TraceabilityReg.UsernameIsValid();
    	var valid2 = TraceabilityReg.CompanyNameIsValid();
    	var valid3 = TraceabilityReg.PwdFirstIsVaild() && TraceabilityReg.PwdSecondIsVaild();
    	if (valid1 && valid2 && valid3) {
        	//参数 用户名;密码;公司名称
        	var username = $("#username").val();
        	var Pwd1 = hex_md5($("#password1").val());
        	var CompanyName = $("#CompanyName").val();
        	var Pwd2 = hex_md5($("#password2").val());
        	$.ajax({
                url: "?action=Registered",
                type:"post",
                data: {
                	htmlMethod:"saveUser",
                	name: username,
                    pwd:Pwd1,
                    pwd_confirm: Pwd2,
                    info_name :CompanyName
                },
                dataType:"json",
                success: function (response) {
                    if (response.result == 1) {
                    	TraceabilityReg.AutoLogin(username,Pwd1);
                        $(".RegDiv").hide();
                        $(".RegSuccess").show();
                    }else{
                         ZENG.msgbox.show(response.info, 5, 2000);
                    }
                }
            });
        }
    },
//    UpdateUserPassword: function () {
//        Service.post({
//            url: "/UserService.svc/UpdateUserPassword",
//            params: {
//                UserID: TraceabilityReg.SessionId,
//                Pwd: $("#password1").val()
//            },
//            success: function (response) {
//                if (response.Status == 1) {
//                    ZENG.msgbox.show("注册成功！", 4, 2000);
//                    TraceabilityReg.AutoLogin(); //注册成功则自动登录
//                    $(".RegDiv").hide();
//                    $(".RegSuccess").show();
//                    TraceabilityReg.NewIDOrg(TraceabilityReg.SessionId); //用户注册成功后自动新建公司,地块，已经分配个人默认公司的溯源查看权限
//                } else {
//                    ZENG.msgbox.show("出现异常！", 4, 2000);
//                }
//            }
//        });
//    },
    //用户注册成功后自动登录
    AutoLogin: function (username,pwd) {
        var Password = pwd;
        var userName = username;
        $.ajax({
            url: "?action=Login",
            type:"post",
            async:false,
            data: {
            	htmlMethod:"userLoginNotCode",
            	UserName: userName,
            	Password: Password
            },
            dataType:"json",
            success: function (response) {
            	if (response.result) {
                    response.UserName = userName;
                    Base.session.setLoginUser(response);
                    Base.sessionStorage.setPersistence("TraceabilityInfo", response);
                }
            	else {
                    ZENG.msgbox.show(response.info, 5, 2000);
                }
            }
        });
    },
    //用户注册成功后自动新建公司,地块，已经分配个人默认公司的溯源查看权限
    NewIDOrg:function(UserID,CompanyName){
            Service.post({
                url: "/TraceabilityService.svc/SaveNewOrg",
                params: {
                    UserID: UserID,
                    CompanyName:CompanyName
                },
                success: function (response) {
                    if (response) {
                       TraceabilityReg.AutoLogin(); //注册成功则自动登录
                    }
                }
            });
        },
     //判断用户名是否存在
     UserIsExist:function(name){
    	 var result = false;
    	 $.ajax({
    		 url:"?action=Registered",
    		 type:"post",
    		 async:false,
    		 data:{
    			 htmlMethod:"userIsExist",
    			 name:name
    		 },
    	 	dataType:"json",
    	 	success:function(response){
    	 		if(response.result){
    	 			result = true;
    	 		}
    	 	}
    	 });
    	 return result;
     },
     //判断用户是否有效
     UsernameIsValid:function(){
         var username = $("#username").val() || null;
         var Emailreg = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/; //验证邮箱
         var Phonereg = /^[0-9]*[1-9][0-9]*$/; //验证手机号
         var isMailAddr = Emailreg.test(username);
         var isMobile = Phonereg.test(username) && username.length == 11;
         var valid = true;
         if (!username || (!isMailAddr && !isMobile)) {//不是手机号也不是邮箱
             $(".usernamevalid").show();
             $(".OkUserName").hide();
             $(".usernameExits").hide();
             valid = false;
         } 
         else if(TraceabilityReg.UserIsExist(username)){
         	//验证用户名是否存在
         	$(".usernameExits").show();
         	$(".usernamevalid").hide();
         	$(".OkUserName").hide();
         	valid = false;
         }else{
         	$(".OkUserName").show();
         	$(".usernamevalid").hide();
         	$(".usernameExits").hide();
         }
         return valid;
     },
     //判断第一个密码是否有效
     PwdFirstIsVaild:function(){
    	 var Pwd1 = $("#password1").val() || null;
    	 var valid = true;
    	 if (!Pwd1) { //没有填写密码
             $(".Putpwd1").show();
             $(".okpwd1").hide();
             valid = false;
         }else { 
         	$(".Putpwd1").hide();
         	$(".okpwd1").show();
         }
    	 //判断第二个密码是否有效
    	 if(!TraceabilityReg.PwdSecondIsVaild()){
    		 valid = false;
    	 }
    	 return valid;
     },
     //判断第二个密码是否有效
     PwdSecondIsVaild:function(){
    	 var Pwd1 = $("#password1").val() || null;
    	 var Pwd2 = $("#password2").val() || null;
    	 var valid = true;
    	 if (!Pwd2) { //没有再次填写密码
             $(".Putpwd2").show();
             $(".okpwd2").hide();
             $(".pwdNoSame").hide();
             valid = false;
         } else  if (Pwd2 != Pwd1 && Pwd2.trim().length > 0) {  //两次密码不一致
             $(".pwdNoSame").show();
             $(".Putpwd2").hide();
             $(".okpwd2").hide();
             valid = false;
         } else {
             $(".pwdNoSame").hide();
             $(".Putpwd2").hide();
             $(".okpwd2").show();
         }
    	 return valid;
     },
     CompanyNameIsValid:function(){
    	 var CompanyName = $("#CompanyName").val() || null;
    	 var valid = true;
    	 if(!CompanyName){
    		 $(".PutCompanyName").show();
             $(".ErrorCompanyName").hide();
             $(".OkCompanyName").hide();
             valid = false;
    	 }else if(TraceabilityReg.VendorNameIsExist(CompanyName)){
    	 //判断企业名字是否存在
          	//验证用户名是否存在
    		 $(".PutCompanyName").hide();
             $(".ErrorCompanyName").show();
             $(".OkCompanyName").hide();
          	valid = false;
          }else{
    		 $(".PutCompanyName").hide();
             $(".ErrorCompanyName").hide();
             $(".OkCompanyName").show();
    	 }
    	 return valid = true;
     },
     //判断用户名是否存在
     VendorNameIsExist:function(name){
    	 var result = false;
    	 $.ajax({
    		 url:"?action=Registered",
    		 type:"post",
    		 async:false,
    		 data:{
    			 htmlMethod:"VendorInfoNameIsExist",
    			 info_name:name
    		 },
    	 	dataType:"json",
    	 	success:function(response){
    	 		if(response.result){
    	 			result = true;
    	 		}
    	 	}
    	 });
    	 return result;
     }
}