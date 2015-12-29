var Util;

(function () { 
    /**
    * 时间对象的格式化;
    */
    Date.prototype.format = function (format) {
        /*
        * eg:format="YYYY-MM-dd hh:mm:ss";
        */
        var o = {
            "M+": this.getMonth() + 1,  //month
            "d+": this.getDate(),     //day
            "h+": this.getHours(),    //hour
            "m+": this.getMinutes(),  //minute
            "s+": this.getSeconds(), //second
            "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
            "S": this.getMilliseconds() //millisecond
        }

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    } 

    Util = {
        loadCSS : function(href){
            $("head").append("<link>"); 
            var  css = $("head").children(":last"); 
                css.attr({ 
                rel: "stylesheet", 
                type: "text/css", 
                href: href 
            });
        },

        parseISO8601Date : function(dateStringInRange) {
            var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
                date = new Date(NaN), month,
                parts = isoExp.exec(dateStringInRange);

            if(parts) {
              month = +parts[2];
              date.setFullYear(parts[1], month - 1, parts[3]);
              if(month != date.getMonth() + 1) {
                date.setTime(NaN);
              }
            }
            return date;
        },

        parseDate : function(input) {
            var parts = input.match(/(\d+)/g);
            // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
            if (parts.length == 5){
                parts.push("00");
            }
            return new Date(parts[0], parts[1]-1, parts[2], parts[3], parts[4], parts[5]); //     months are 0-based
        },

        isDate:function(value){//如果时间为空，返回样式非时间类型，方便删除该项显示
            if(value)
            {
                if (value.indexOf("/Date(") != -1)
                    return "isDate";

                else return "isnotDate";
            }
            else return "isnotDate";
        },

        toDateTime: function(value){
            if (value.indexOf("/Date(") != -1){
                return new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
            }
            else{
                var date = (new Date(value)) ;
                if (date == "NaN"){
                    date = Util.parseISO8601Date(value); 
                }
                else if (date == "Invalid Date"){
                    date = Util.parseDate(value);
                }
                return date;
            }

        },

        formatDateTime : function(value,formatString){
            return value != null ? Util.toDateTime(value).format(formatString) : '';
        },

        toDate: function(value){
            return value != null ? Util.toDateTime(value).format('yyyy-MM-dd') : '';
        },

        toDateEntire:function(value){
            return value != null ? Util.toDateTime(value).format('yyyy-MM-dd hh:mm:ss') : ''; 
        },

        toSimpleDate:function(value){
            return value != null ? Util.toDateTime(value).format('yyyy-MM-dd hh:mm') : ''; 
        },

        toShortDateTime:function(value){
            return value != null ? Util.toDateTime(value).format('MM-dd hh:mm') : ''; 
        },

        toDateDay :function(value){
            return value != null ? Util.toDateTime(value).format('MM-dd') : ''; 
        },

        toTime : function (value){
            return value != null ? Util.toDateTime(value).format('hh:mm') : ''; 
        },

        getFullYear:function(value){ return value != null ? Util.toDateTime(value).format('yyyy') : ''; },
        getMonth:function(value){ return value != null ? Util.toDateTime(value).format('MM') : ''; },
        getDay:function(value){ return value != null ? Util.toDateTime(value).format('d') : ''; },

        getHour:function(value){ return value != null ? Util.toDateTime(value).format('hh') : ''; },
        getMinute:function(value){ return value != null ? Util.toDateTime(value).format('mm') : ''; },


         DelHtml:function(Word) {//如果输入了Html对，自动删除
             a = Word.indexOf("<");
             b = Word.indexOf(">");
             len = Word.length;
             c = Word.substring(0, a);
             if(b == -1)
                b = a;
             d = Word.substring((b + 1), len);
             Word = c + d;
             tagCheck = Word.indexOf("<");
             if(tagCheck != -1)
                Word = Util.DelHtml(Word);
             return Word;
         },

        //根据图片路径是否为空，设置图片的可见性
        getImgVisibleCss : function(imgUrl){
            var result = "";

            if (imgUrl && imgUrl != ""){
                result = "";
            }
            else {
                result = "display-none";
            }

            return result;
        },


        //根据状态设置可见性
        getStatusVisible : function(status){
            var result = "";
            switch (status){
                case 14 :
                    result = "display-none";
                    break;
            }

            return result;
        },

        //获取图片大小的方法 imageEl:图片路径
        getImageSize:function(imageSrc) {
            var i = new Image(); //新建一个图片对象
            i.src = imageSrc;   //将src属性赋值给新建图片对象的src
            return i.width+"*"+i.height;
        },

        //裁剪字符串
        getSubstr: function(oldValue,lengthValue){
            if((oldValue)&&(oldValue.length>lengthValue)){
              return oldValue.substr(0,lengthValue)+"...";
            }else{
              return oldValue;
            }
            
        },

        toNumberic : function(value){
            if ($.isNumeric(value)){
                return value;
            }
            else {
                return 0;
            }
        },
        
        //获得当前时间(如:2009-06-12 12:00)
        getCurentTime:function(){
            var now = new Date();
            var year = now.getFullYear();       //年
            var month = now.getMonth() + 1;     //月
            var day = now.getDate();            //日
            var hh = now.getHours();            //时
            var mm = now.getMinutes();          //分
            var clock = year + "-";

            if(month < 10)
                clock += "0";
       
            clock += month + "-";
       
            if(day < 10)
                clock += "0";
           
            clock += day + " ";
       
            if(hh < 10)
                clock += "0";
           
            clock += hh + ":";
            if (mm < 10) clock += '0'; 
            clock += mm; 
            return(clock); 
        },

        //获得当前时间2009-06-12
        getNowFormatDate:function(){
            var day = new Date();
            var Year = 0;
            var Month = 0;
            var Day = 0;
            var CurrentDate = "";
            //初始化时间
            //Year       = day.getYear();//有火狐下2008年显示108的bug
            Year       = day.getFullYear();//ie火狐下都可以
            Month      = day.getMonth()+1;
            Day        = day.getDate();
            CurrentDate += Year + "-";
            if (Month >= 10 )
            {
            CurrentDate += Month + "-";
            }
            else
            {
            CurrentDate += "0" + Month + "-";
                }
            if (Day >= 10 )
            {
            CurrentDate += Day ;
            }
            else
            {
            CurrentDate += "0" + Day ;
            }
            return CurrentDate;

        },

        //加减n天的时间
        date2str : function(yy, mm, dd, prenext,dayCount){
            var s, d, t, t2;
            t = Date.UTC(yy, mm, dd);
            t2 = dayCount * 1000 * 3600 * 24; //加减7天的时间
            if (prenext == 'pre') {
                t-= t2;
            } else {//7天之前的时间
                t+= t2;
            }
            d = new Date(t);

            s = d.getUTCFullYear() + "-";
            s += ("00"+(d.getUTCMonth()+1)).slice(-2) + "-";
            s += ("00"+d.getUTCDate()).slice(-2);
            return s;
         
        },
        //加减n天的时间
        str2date : function(str, prenext,dayCount){ 
              var   dd, mm, yy;   
              var   reg = /^(\/d{4})-(\/d{1,2})-(\/d{1,2})$/;
              if (arr = str.match(reg)) {
                yy = Number(arr[1]);
                mm = Number(arr[2])-1;
                dd = Number(arr[3]);
              } else {
                var d = new Date();
                yy = d.getUTCFullYear();
                mm = ("00"+(d.getUTCMonth())).slice(-2);
                dd = ("00"+d.getUTCDate()).slice(-2);
              }
             if (prenext == null || (prenext != 'pre' && prenext != 'next')) {
                var prenext = 'pre';
              }

              return  Util.date2str(yy, mm, dd, prenext,dayCount);
        },

         //获得当前时间2009/06/12
        getNowFormatToDate:function(){
            var day = new Date();
            var Year = 0;
            var Month = 0;
            var Day = 0;
            var CurrentDate = "";
            //初始化时间
            //Year       = day.getYear();//有火狐下2008年显示108的bug
            Year       = day.getFullYear();//ie火狐下都可以
            Month      = day.getMonth()+1;
            Day        = day.getDate();
            CurrentDate += Year + "/";
            if (Month >= 10 )
            {
            CurrentDate += Month + "/";
            }
            else
            {
            CurrentDate += "0" + Month + "/";
                }
            if (Day >= 10 )
            {
            CurrentDate += Day ;
            }
            else
            {
            CurrentDate += "0" + Day ;
            }
            return CurrentDate;

        },
         //加减n天的时间2009/06/12
        dateTo2str : function(yy, mm, dd, prenext,dayCount){
            var s, d, t, t2;
            t = Date.UTC(yy, mm, dd);
            t2 = dayCount * 1000 * 3600 * 24; //加减7天的时间
            if (prenext == 'pre') {
                t-= t2;
            } else {//7天之前的时间
                t+= t2;
            }
            d = new Date(t);

            s = d.getUTCFullYear() + "/";
            s += ("00"+(d.getUTCMonth()+1)).slice(-2) + "/";
            s += ("00"+d.getUTCDate()).slice(-2);
            return s;
         
        },
        //加减n天的时间2009/06/12
        strTo2date : function(str, prenext,dayCount){ 
              var   dd, mm, yy;   
              var   reg = /^(\/d{4})-(\/d{1,2})-(\/d{1,2})$/;
              if (arr = str.match(reg)) {
                yy = Number(arr[1]);
                mm = Number(arr[2])-1;
                dd = Number(arr[3]);
              } else {
                var d = new Date();
                yy = d.getUTCFullYear();
                mm = ("00"+(d.getUTCMonth())).slice(-2);
                dd = ("00"+d.getUTCDate()).slice(-2);
              }
             if (prenext == null || (prenext != 'pre' && prenext != 'next')) {
                var prenext = 'pre';
              }

              return  Util.dateTo2str(yy, mm, dd, prenext,dayCount);
        },

        //获取页面参数值 如 aspx?param1=xx ;则 urlParam('param1')=xx
        urlParam : function(name){ 
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location.search);
            if(results == null){
                return "";
            }
            else {
                return decodeURIComponent(results[1].replace(/\+/g, " "));
            } 
        },

        /**
* 计算两日期时间差
* @param   interval 计算类型：D是按照天、H是按照小时、M是按照分钟、S是按照秒、T是按照毫秒
* @param  date1 起始日期  格式为年月格式 为2012-06-20
* @param  date2 结束日期
* @return 
*/
 countTimeLength:function(interval, date1, date2) {
    var objInterval = { 'D': 1000 * 60 * 60 * 24, 'H': 1000 * 60 * 60, 'M': 1000 * 60, 'S': 1000, 'T': 1 };
    interval = interval.toUpperCase();
    var dt1 = Date.parse(date1.replace(/-/g, "/"));
    var dt2 = Date.parse(date2.replace(/-/g, "/"));
    try {
        return ((dt2 - dt1) / objInterval[interval]).toFixed(0); //保留两位小数点
    } catch (e) {
        return e.message;
    }
},
        getUrlParam : function(paramName,url){
            paramName = paramName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + paramName + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(url);
            if(results == null){
                return "";
            }
            else {
                return decodeURIComponent(results[1].replace(/\+/g, " "));
            } 
        },
        //获取URL参数 zwb add 1023
        getQuery: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        },
        getCSS : function (property, cssClass) { 
            var $inspector = $("<div>").css('display', 'none').addClass(cssClass);
            $("body").append($inspector); // add to DOM, in order to read the CSS property
            try {
                return $inspector.css(property);
            } finally {
                $inspector.remove(); // and remove from DOM
            }
        } ,

        checkDateString : function (str) { 
            var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if(r==null)return false;
            var d= new Date(r[1], r[3]-1, r[4]);
            return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
        },

        checkDateTimeString : function (str) { 
            var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
            var r = str.match(reg);
            if(r==null)return false;
            var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]);
            return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
        },

        checkDateTimeStringHHMM : function (str) { 
            var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2})$/;
            var r = str.match(reg);
            if(r==null)return false;
            var d= new Date(r[1], r[3]-1,r[4],r[5],r[6]);
            return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]);
        },

        //判断时间部分是否为 hh:mm,输入时不带日期部分
        checkTime : function(time){
            //日期时间
            var reg = /^((\d{2}(([02468][048])|([13579][26]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|([1-2][0-9])))))|(\d{2}(([02468][1235679])|([13579][01345789]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))(\s(((0?[0-9])|(1[0-9])|(2[0-3]))\:(([0-5][0-9])|([0-9]))(((\s)|(\:(([0-5][0-9])|([0-9]))))?)))?$/;

            time = String.format("{0} {1}","2013-08-08",time);
            var result = reg.test(time);
            return result;
        },

        checkDateGreater : function(option){
            var defaultOption = {
                type : "date",
                start : ".startDate",
                end : ".endDate"
            }

            var userOption = $.extend(defaultOption,option),
                result = true;

            if (userOption.type == "date"){ 
                var startVal = $(userOption.start).val() || null, 
                    endVal = $(userOption.end).val() || null ;

                if(!startVal){
//                    Messages.slideResult("请输入开始时间",1000,function(){
//                        $(userOption.start).focus(); 
//                        $(userOption.start).datepicker("show");
//                    }); 
                    ZENG.msgbox.show("请输入开始时间!", 4, 2000);
                    $(userOption.start).focus(); 
                    $(userOption.start).datepicker("show");
                    return false;
                } 
                if(!Util.checkDateString(startVal)&&!Util.checkDateTimeString(startVal)&&!Util.checkDateTimeStringHHMM(startVal)){
//                    Messages.slideResult("开始时间格式不正确",1000,function(){
//                        $(userOption.start).focus(); 
//                        $(userOption.start).datepicker("show");
//                    }); 
                    ZENG.msgbox.show("开始时间格式不正确!", 4, 2000);
                    $(userOption.start).focus();                        
                    $(userOption.start).datepicker("show");
                    return false;
                } 

                if(!endVal){
//                    Messages.slideResult("请输入结束时间",1000,function(){
//                        $(userOption.end).focus();
//                        $(userOption.end).datepicker("show");
//                    }); 
                    ZENG.msgbox.show("请输入结束时间!", 4, 2000);
                    $(userOption.end).focus();
                    $(userOption.end).datepicker("show");
                    return false;
                } 
                if(!Util.checkDateString(startVal)&&!Util.checkDateTimeString(startVal)&&!Util.checkDateTimeStringHHMM(startVal)){
//                    Messages.slideResult("结束时间格式不正确",1000,function(){
//                        $(userOption.end).focus();
//                        $(userOption.end).datepicker("show"); 
//                    }); 
                    ZENG.msgbox.show("结束时间格式不正确!", 4, 2000);
                    $(userOption.end).focus();
                    $(userOption.end).datepicker("show");
                    return false;
                }  
                 
                if (startVal > endVal){
//                    Messages.slideResult("开始时间不能大于结束时间",1000,function(){
//                        $(userOption.end).focus();
//                        $(userOption.end).datepicker("show"); 
//                    });
                    ZENG.msgbox.show("开始时间不能大于结束时间!", 4, 2000);
                    $(userOption.end).focus();
                    $(userOption.end).datepicker("show"); 
                    result = false;
                } 
            }
            else if (userOption.type == "time"){ 
                var startVal = $(userOption.start).val() || null, 
                    endVal = $(userOption.end).val() || null ;

                if(!startVal){
//                    Messages.slideResult("请输入开始时间");
                    ZENG.msgbox.show("请输入开始时间!", 4, 2000); 
                    $(userOption.start).focus(); 
                    $(userOption.start).timepicker("show");
                    return false;
                }  
                if(!Util.checkTime(startVal)){
//                    Messages.slideResult("开始时间格式不正确");
                    ZENG.msgbox.show("开始时间格式不正确!", 4, 2000); 
                    $(userOption.start).focus(); 
                    $(userOption.start).timepicker("show");
                    return false;
                }
                
                if(!endVal){
//                    Messages.slideResult("请输入结束时间");
                    ZENG.msgbox.show("请输入结束时间!", 4, 2000);  
                    $(userOption.end).focus();
                    $(userOption.end).timepicker("show");
                    return false;
                } 
                if(!Util.checkTime(endVal)){
//                    Messages.slideResult("结束时间格式不正确");
                    ZENG.msgbox.show("结束时间格式不正确!", 4, 2000);   
                    $(userOption.end).focus();
                    $(userOption.end).timepicker("show");
                    return false;
                } 

                if (startVal > endVal){
//                    Messages.slideResult("开始时间不能大于结束时间");
                    ZENG.msgbox.show("开始时间不能大于结束时间!", 4, 2000);    
                    $(userOption.end).focus();
                    $(userOption.end).timepicker("show");
                    result = false;
                } 
            }

            return result;
        },

        htmlEncode : function(value){
          //create a in-memory div, set it's inner text(which jQuery automatically encodes)
          //then grab the encoded contents back out.  The div never exists on the page.
          return $('<div/>').text(value).html();
        },

        htmlDecode : function(value){
          return $('<div/>').html(value).text();
        },

        //校验手机、座机号码
        checkPhone : function(value){
            var reg13x = /^^((\+?86)|(\(\+86\)))?(13[0-9]{9})$/;
            reg145 = /^((\+?86)|(\(\+86\)))?(145[0-9]{8})$/;
            reg147 = /^((\+?86)|(\(\+86\)))?(147[0-9]{8})$/;
            reg15x = /^((\+?86)|(\(\+86\)))?(15[^4][0-9]{8})$/;
            reg18x = /^((\+?86)|(\(\+86\)))?(18[0-9]{9})$/;
            var tel = /^((\+?86)|(\(\+86\)))?\d{3,4}-\d{7,8}(-\d{3,4})?$/;        //   /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(-\d{1,4})?$/;
            var INTtel = /^\+86(?:\-\d{2,3}\-|\(\d{2,3}\))\d{7,8}$/; //国际电话
            var INTtel2 = /^(?:\(?[0\+]\d{2,3}\)?)[\s-]?(?:(?:\(0{1,3}\))?[0\d]{1,4})[\s-](?:[\d]{7,8}|[\d]{3,4}[\s-][\d]{3,4})/; //国际区号+国内区号+电话号码：
            //        var INTtel3 = /^(?:\(?[0\+]?\d{1,3}\)?)[\s-]?(?:0|\d{1,4})[\s-]?(?:(?:13\d{9})|(?:\d{7,8}))/; //手机号码：
            var result =  (reg13x.test(value) || reg145.test(value) || reg147.test(value) || reg15x.test(value) || reg18x.test(value) || (tel.test(value)) || (INTtel.test(value)) || (INTtel2.test(value)));
            
            return result;
        }
    }

    String.format = function() {
      var s = arguments[0];
      for (var i = 0; i < arguments.length - 1; i++) {       
        var reg = new RegExp("\\{" + i + "\\}", "gm");             
        s = s.replace(reg, arguments[i + 1]);
      }

      return s;
    }
    
    $.format = function (source, params) { 
    if (arguments.length == 1) 
    return function () { 
    var args = $.makeArray(arguments); 
    args.unshift(source); 
    return $.format.apply(this, args); 
    }; 
    if (arguments.length > 2 && params.constructor != Array) { 
    params = $.makeArray(arguments).slice(1); 
    } 
    if (params.constructor != Array) { 
    params = [params]; 
    } 
    $.each(params, function (i, n) { 
    source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n); 
    }); 
    return source; 
    }; 

  
    
      
}())