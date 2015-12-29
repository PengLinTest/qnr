//动态加载HTML页面
var TransferloadUser;

if (!TransferloadUser) {
    TransferloadUser = {};
}

TransferloadUser = {
    //加载头部
    loadUserheaderHtml: function (reg) {
        $("#UserHead").empty();
        Transfer.reload("#UserHead", {
            url: "?action=LoadUserHeader",
            scripts: []
        },
        function () {
            Transfer.loadCSS([]);
            TransferloadUser.initClick(reg);
            $("#dLabel").unbind("click").click(function () {
                if ($(this).parent().hasClass("open")) {
                    $(this).parent().removeClass("open");
                }
                else {
                    $(this).parent().addClass("open");
                }
            });
            //判断用户是否登录
            if (TransferloadUser.UserIsLogin()) {
            	var user = Base.session.getLoginUser();
                $(".loginuser").html(user.UserName);
                $(".Unlogin").hide();
                $(".Hadlogin").show();
            } else {
                $(".Unlogin").show();
                $(".Hadlogin").hide();
                //清除所有的缓存信息
                Base.sessionStorage.removeSession(self.sessionName);
                Base.sessionStorage.clear();
            }
        });
    },
    //加载尾部
    loadUserfooterHtml: function () {
        $("#UserFooter").empty();
        Transfer.reload("#UserFooter", {
            url: "?action=LoadFooter",
            scripts: []
        },
        function () {
            Transfer.loadCSS([]);
        });
    },
    ok: function (reg) {
        var userName = $("#txtUserName").val() || null,
                Password = $("#txtPassword").val() || null;
        if (!userName) {
            ZENG.msgbox.show("请输入用户名!", 5, 2000);
            $("#txtUserName").focus();
            return false;
        }
        if (!Password) {
            ZENG.msgbox.show("请输入密码!", 5, 2000);
            $("#txtPassword").focus();
            return false;
        }
        var codeInput = $("#txtCheckCode").val().toLocaleLowerCase() || null;
        if (!codeInput ) {
            ZENG.msgbox.show("请输入验证码", 5, 1000);
            return;
        }
       
        $.ajax({
            url: "?action=Login",
            type:"post",
            async:false,
            data: {
            	htmlMethod:"userLogin",
            	UserName: userName,
                Password: hex_md5(Password),
                codeInput: codeInput,
            },
            dataType:"json",
            success: function (response) {
                if (response.result) {
                    response.UserName = userName;
                    Base.session.setLoginUser(response);
//                    Base.sessionStorage.setPersistence("TraceabilityInfo", response);
                    //记录登录信息
                    $(".dialog-login").dialog("destroy");
                    if (reg == "reg") {  //如果是注册页面登录，直接进入用户中心
                        window.location = "?action=UserCenter";
                    }else{
                    	window.location = "?action=Index";
                    }
                } else {
                    ZENG.msgbox.show(response.info, 5, 2000);
                    $(".btncheckcode").trigger("click"); //更新验证码
                }
            },
            mask: function () {
                $(".login-box").mask("正在登录,请稍候...");
            },
            unmask: function () {
                $(".login-box").unmask();
            }
        });

    },
    initClick: function (reg) {
        //进入用户中心
        $("#btnUserCenter").unbind("click").click(function (e) {
            window.location = "?action=UserCenter";
        });
        //退出
        $("#OutWeb").unbind("click").click(function (e) {
            Base.session.logout(function () {
            	window.location.href = "?action=Login&htmlMethod=userLogout";
            });
        });

        //登录弹出层
        $("#BtnLogin").unbind("click").click(function (e) {
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

        //刷新验证码
        $(".checkcode").click(function (e) {
        	$("#checkCode").attr({ "src": "templates/CheckCode.php" });
        });

        //登录
        $(".bt-ok-login").unbind("click").click(function (e) {
            e.preventDefault();
            TransferloadUser.ok(reg);
        });
        //登录
        $("#txtUserName,#txtPassword,#txtCheckCode").off("keydown").on("keydown", function (e) {
            if (e.keyCode === $.ui.keyCode.ENTER) {
                TransferloadUser.ok(reg);
                return false;
            }
        });

        var user = Base.session.getLoginUser();
        if (user) {
            //修改密码弹出层
            $("#BtnUpdatePwd").unbind("click").click(function (e) {
            	//清空密码输入数据
            	$("#oldPassword").val("");
                $("#newPassword").val("");
                $("#newAgainPassword").val("");
                $(".UpdatePwdDialog").dialog({
                    autoOpen: false,
                    width: '640',
                    height: 'auto',
                    dialogClass: "modal-dialog user-dialog",
                    title: "",
                    modal: true,
                    resizable: false
                }).dialog("open");
                $(".UpdatePwdDialog .btn-close").unbind("click").click(function () {
                    $(".UpdatePwdDialog").dialog("destroy");
                })
                $(".CancelUpdatepwd").unbind("click").click(function () {
                    $(".UpdatePwdDialog").dialog("destroy");
                })
                e.preventDefault();
                return false;
            });

            //修改密码
            $("#Updatepwd").unbind("click").click(function (e) {
                var oldPassword = $("#oldPassword").val() || null,
                    newPassword = $("#newPassword").val() || null,
                    newAgainPassword = $("#newAgainPassword").val() || null;
                if (!oldPassword) {
                    ZENG.msgbox.show("请输入旧密码.", 5, 2000);
                    $("#oldPassword").focus();
                    return;
                }
                if (!newPassword) {
                    ZENG.msgbox.show("请输入新密码.", 5, 2000);
                    $("#newPassword").focus();
                    return;
                }
                if (!newAgainPassword) {
                    ZENG.msgbox.show("请再输入一次新密码.", 5, 2000);
                    $("#newAgainPassword").focus();
                    return;
                }
                if (newPassword != newAgainPassword) {
                    ZENG.msgbox.show("两次输入的新密码不一致;", 5, 2000);
                    return;
                }

                $.ajax({
                    url: "?action=UserCenter",
                    type:"post",
                    data: {
                    	htmlMethod:"changePwd",
                    	pwdOld: hex_md5(oldPassword),
                    	pwdNew: hex_md5(newPassword),
                    	pwdNewConfirm:hex_md5(newAgainPassword)
                    },
                    dataType:"json",
                    success: function (response) {
                    	if (response.result) {
                            ZENG.msgbox.show(response.info, 4, 2000);
                            $(".UpdatePwdDialog").dialog("destroy");
                        }else{
                        	ZENG.msgbox.show(response.info, 5, 2000);
                        }
                    }
                });

            });
        }
    },
    getRootPath:function(){
        var curWwwPath = window.document.location.href;
        //获取主机地址之后的目录
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        //获取主机地址
        var localhostPaht = curWwwPath.substring(0, pos);
        //获取带"/"的项目名
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        //    alert(localhostPaht + projectName);
        return (localhostPaht /*+ projectName*/);
    },
    initLoadHtml: function (reg) {
        var self = TransferloadUser;
        self.loadUserheaderHtml(reg);
        self.loadUserfooterHtml();
		
		//当滚动到底部时，底部BAR工具条的颜色改变
		$(window).scroll(function () {
 			var st = $(window).scrollTop();
 			var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
 			if(scrollBottom <= 300){
				$(".foot-bar").addClass("foot-bar-green");		
			}
			else{
				$(".foot-bar").removeClass("foot-bar-green");			
			}	
		})
    },
    UserIsLogin:function(){
    	var result = false;
    	$.ajax({
            url: "?action=Login",
            type:"post",
            async:false,
            data: {
            	htmlMethod:"userIslogin",
            },
            dataType:"json",
            success: function (response) {
            	if(response.result){
            		result = true;
            		//设置Session
            		Base.session.setLoginUser(response.vendor);
//            		TransferloadUser.TraceabilityInfo = Base.session.getLoginUser();
            	}
            }
    	});
    	return result;
    }
}