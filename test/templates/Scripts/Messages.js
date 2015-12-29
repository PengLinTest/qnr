var Messages;

(function () {  
    Messages = {
        delayMiSeconds : 7000,

        container : null,

        tokenExceptionKeywords : "Sorry.But please sent requests after you have logined.",

        showException : function(clientRequest,response,status,error,element){ 
            try {
                //jquery 已被识别
                var self = Messages;
                if (!self.container){
                    self.container = $(document.createElement('div'));  
                }

                var msg = response.responseText;

                //如果是token失效，帮助用户重新登录
                if (msg.indexOf(Messages.tokenExceptionKeywords) > 0){
                    if (typeof (AccountGlobalInfo) === "object"){
                        AccountGlobalInfo.reLogin();
                    }
                    return false;
                } 

                if (msg == ""){
                    msg = [ 
                        '<div><h6><strong>请求服务:</strong><span>{0}</span></h6>',
                        '<p><strong>请求参数:</strong><span>{1}</span></P>',
                        '<p><strong>错误代码:</strong><span>{2}</span></P>',
                        '<p><strong>代码描述:</strong><span>{3}</span></P>',
                        '<p><strong>英文描述:</strong><span>{4}</span></P>',
                        '<p><strong>错误描述:</strong><span>{5}</span></P></div>'
                    ].join("");
                    
                    msg = String.format(msg,clientRequest.url,JSON.stringify(clientRequest.params),response.status,response.statusText,status,error);
                }

                var tempHtml = $('<div>',{html : msg}),
                    htmlContent = tempHtml.find('div').html(); 

                $("div.dialog_exception").remove();
                $("div.dialog_exception").empty();

                $("<div class='dialog_exception hide'></div>").appendTo('body');

                $(".dialog_exception").html(htmlContent);
                 
                var dialog = $(".dialog_exception").dialog({
                    autoOpen: false,
			        width: 600, 
                    title : "出错了",
			        modal: true,
                    resizable: false,
                    show: {
                        effect: "clip",
                        duration: 250 
                    },
                    hide: {
                        effect: "clip",
                        duration: 250 
                    }//,
//                    //置于顶层
//                    open: function (event, ui) {
//                        /*$('.ui-dialog').css('z-index',9999);
//                        $('.ui-widget-overlay').css('z-index',9999);*/
//                    } 
                });

                dialog.dialog("open");

                setTimeout(function(){
                    dialog.dialog('close');
                },3000);
            }
            catch (e){
                //jquery 未被识别
                if (response){
                    Messages.show(msg,element); 
                }
            } 
            
        },

        show : function(msg,element){  
            var containerId = "",
                msgEl = "";

            //如果是对象，比如要显示的元素是复杂布局
            if (typeof(element) === 'object' ){
                if (!element.msgEl){
                    msgEl = String.format("{0},.{1}",element.id,element.css);
                }
                else {
                    msgEl = element.msgEl;
                }
                containerId = element.id;
            }
            else { //显示的对象就是一个单一元素，只需传该元素的ID
                msgEl = element;
                containerId = element; 
            }

            var hide = function(){ 
                $(containerId).hide('slow', function() { });
            }

            //显示 
            $(msgEl).html(msg); 
            $(containerId).show("slow");
            $(containerId).focus();

            //延迟 隐藏
            setTimeout(function(){hide()},Messages.delayMiSeconds)
        },
        
        showAlways : function(msg,element) {
            $(element).text(msg);
            $(element).show("slow");
        },

        //提示的element
        confirmEl : null,

        confirmDo : function(option){
            $("div.dialog_confirmDo").remove();
            $("div.dialog_confirmDo").empty();
            $(String.format("<div class='dialog_confirmDo hide'>{0}</div>",option.msg)).appendTo('body');

            var defaultOption = {
                title : "请注意",
                yesText : "确定",
                noText : "取消",
                width : 'auto'
            }

            option = $.extend(defaultOption,option);
            $("div.dialog_confirmDo").dialog({ 
                autoOpen: false,
			    width: option.width,  
                title : option.title,
			    modal: true,
                resizable: false, 
                buttons: [{
                    text : option.yesText,
				    click : function() {
                        $( this ).dialog( "close" );
                        if (typeof(option.yesDo) === "function"){
                            option.yesDo();
                        } 
				    }
                },{
                    text : option.noText,
				    click : function() {
					    $( this ).dialog( "close" );
                        if (typeof(option.noDo) === "function"){
                            option.noDo();
                        } 
				    }
			    }], 
                //置于顶层
                open: function (event, ui) {
                    $('.ui-dialog').attr('id',"ui_dialog_result");
                    //$('.ui-dialog').css('z-index',9999);
                    //$('.ui-widget-overlay').css('z-index',9999);
                } ,
                close : function(e){ 
                    $(this).dialog('destroy');
                    $("div.dialog_confirmDo").remove();
                    $("div.dialog_confirmDo").empty();
                }
            }).dialog("open");

        },

        //提示
        confirm : function(message,actionYes,title,yesText,noText,actionNo){
            var self = Messages;
            if (!self.confirmEl){
                self.confirmEl = $(document.createElement('div')); 
            } 
            self.confirmEl.html(message);

            title = (title || null) ? title : "请注意";
            yesText = (yesText || null) ? yesText : "确定";
            noText = (noText || null) ? noText : "取消";
            self.confirmEl.dialog({
                autoOpen: false,
			    width: 500,  
                title : title,
			    modal: true,
                resizable: false, 
                buttons: [{
                    text : yesText,
				    click : function() {
                        $( this ).dialog( "close" );
                        if (typeof(actionYes) === "function"){
                            actionYes();
                        } 
				    }
                },{
                    text : noText,
				    click : function() {
					    $( this ).dialog( "close" );
                        if (typeof(actionNo) === "function"){
                            actionNo();
                        } 
				    }
			    }], 
                //置于顶层
                open: function (event, ui) {
                    $('.ui-dialog').attr('id',"ui_dialog_result");
                    //$('.ui-dialog').css('z-index',9999);
                    //$('.ui-widget-overlay').css('z-index',9999);
                } 
            }).dialog("open");
             
        },

        slideResult : function(message,timeout,callback){ 
            timeout = (timeout > 0 ) ? timeout : 3000;
            var self = Messages;

            $("div.dialog_slideResult").remove();
            $("div.dialog_slideResult").empty();

            $("<div class='dialog_slideResult hide'></div>").appendTo('body');

            $(".dialog_slideResult").html(message);

            var dialog = $(".dialog_slideResult").dialog({
                autoOpen: false,
//			    width: 'auto', 
                width:'600px',
                title : "提示", 
                resizable: false , 
                show: {
                    effect: "clip",
                    duration: 250 
                },
                hide: {
                    effect: "clip",
                    duration: 250 
                },
                //置于顶层
                open: function (event, ui) {
                    $('.ui-dialog').attr('id',"ui_dialog_result");
                    //$('.ui-dialog').css('z-index',9999);
                    //$('.ui-widget-overlay').css('z-index',9999);
                    $(".ui-dialog-buttonpane").remove();//删除失败的提示下面不应该有确定的取消按钮

                }  
            }); 

            dialog.dialog("open");

            setTimeout(function(){
                dialog.dialog('close');

                if (typeof (callback) === "function" ){
                    callback();
                }
            },timeout);  
        },

        showFailMassgae:function(message){
            var self = Messages;
            if (!self.confirmEl){
                self.confirmEl = $(document.createElement('div')); 
            } 
            self.confirmEl.html(message);

            var dialog = self.confirmEl.dialog({
                autoOpen: false,
//			    width: 'auto', 
                width:'600px',
                title : "提示", 
                resizable: false ,
                //置于顶层
                open: function (event, ui) {
                    $('.ui-dialog').attr('id',"ui_dialog_result");
                    //$('.ui-dialog').css('z-index',9999);
                    //$('.ui-widget-overlay').css('z-index',9999);
                    $(".ui-dialog-buttonpane").remove();//删除失败的提示下面不应该有确定的取消按钮
                } ,
                close : function(e){ 
                    $(this).dialog('destroy');
                }
            });
            
            dialog.dialog("open").fadeIn();
        }

    }

}())