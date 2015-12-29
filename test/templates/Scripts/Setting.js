var Setting;

(function () { 
    Setting = {
        isDebug : true
    }
    
    /* $.ajax Post url(http://url/) return Status:0 StatusText : */
//    jQuery.support.cors = true; 
    
    // Replace the normal jQuery getScript function with one that supports
    // debugging and which references the script files as external resources
    // rather than inline.
    if (Setting.isDebug){
        jQuery.extend({
           getScript: function(url, callback) {
              var head = document.getElementsByTagName("head")[0];
              var script = document.createElement("script");
              script.src = url;

              // Handle Script loading
              {
                 var done = false;

                 // Attach handlers for all browsers
                 script.onload = script.onreadystatechange = function(){
                    if ( !done && (!this.readyState ||
                          this.readyState == "loaded" || this.readyState == "complete") ) {
                       done = true;
                       if (callback)
                          callback();

                       // Handle memory leak in IE
                       script.onload = script.onreadystatechange = null;
                    }
                 };
              }

              head.appendChild(script);

              // We handle everything using the script element injection
              return undefined;
           } 
        });
    }

    jQuery.getScripts = function(scripts, onComplete){  
        var length = scripts.length;
        var loopLoad = function(index){
            $.getScript(scripts[index], function(){
                if (index < (length - 1)){
                    index ++;
                    loopLoad(index)
                }
                else {
                    if (onComplete){
                        onComplete(); 
                    }
                }
            });
        }

        if (length > 0){
            loopLoad(0);
        }
    };

    //get entire html
    jQuery.fn.outerHtml = function () {
        return $('<div></div>').html($(this).clone()).html();
    };

    //console undefined solved
    if (!window.console) console = {log: function() {}}; 

    jQuery.fn.center = function (parent) {
        if (!parent){
            parent = window;
        }
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(parent).height() - $(this).outerHeight()) / 2) + 
                                                    $(parent).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(parent).width() - $(this).outerWidth()) / 2) + 
                                                    $(parent).scrollLeft()) + "px");
        return this;
    }

    $.datepicker.regional['zh-CN'] = {
        clearText: '清除',
        clearStatus: '清除已选日期',
        closeText: '关闭',
        closeStatus: '不改变当前选择',
        prevText: '<上月',
        prevStatus: '显示上月',
        prevBigText: '<<',
        prevBigStatus: '显示上一年',
        nextText: '下月>',
        nextStatus: '显示下月',
        nextBigText: '>>',
        nextBigStatus: '显示下一年',
        currentText: '取消',//'今天',
        currentStatus: '显示本月',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        monthStatus: '选择月份',
        yearStatus: '选择年份',
        weekHeader: '周',
        weekStatus: '年内周次',
        dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        dayStatus: '设置 DD 为一周起始',
        dateStatus: '选择 m月 d日, DD',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        initStatus: '请选择日期',
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']); 

    //convert string to function 
    $.fn.toFunction = function(fnString){
        var fnSplits = fnString.split("."),
            myFunction = window,
            next;
        while(next = fnSplits.shift()){
            myFunction = myFunction[next];
        }
            
        return myFunction;
    }
}())



