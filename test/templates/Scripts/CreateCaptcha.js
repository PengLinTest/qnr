// 用于生成验证码
var CreateCaptcha;
if(!CreateCaptcha){
    CreateCaptcha={};
}
CreateCaptcha = {
    createCode: function (GuidNum, OldCodeImg) {
        var coce = "";
        var CodeLength = 4;
//        Service.post({
//            url: "/UserAccountService.svc/CreateCaptcha",
//            async: false,
//            params: {
//                OldCodeImg: OldCodeImg,  //旧的验证码图片  //用于删除
//                RandomNum: GuidNum,    //验证码 索引  用于判断验证码是否正确
//                CodeLength: CodeLength  //验证码长度
//            },
//            success: function (response) {
//                if (response) {
//                    coce = response;
//                }
//            }
//        });
//        $.ajax({
//        	url:"templates/CheckCode.php",
//        	type:"post",
//    		async:false,
//        	data:{
//        		len:CodeLength,
//        	},
//        	success:function(response){
//        		coce = response;
//        	}
//        });
//        return coce;  //返回新验证码的图片地址
    },
    DeleteCode: function (GuidNum, OldCodeImg) {//登录成功之后，删除验证码图片
        var coce = "";
        var CodeLength = 4;
        Service.post({
            url: "/UserAccountService.svc/DeleteOldCodeImgPath",
            async: false,
            params: {
                OldCodeImg: OldCodeImg,  //旧的验证码图片  //用于删除
                RandomNum: GuidNum   //验证码 索引  用于判断验证码是否正确
            },
            success: function (response) {
                if (response) {
                }
            }
        });
    },
    CreatGuid:function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}
