var Transfer;

if (!Transfer) {
    Transfer = {};
}

(function () { 
//js css 版本管理
var version = "201508311210";

Transfer = {
    version: {
        scriptVersion: "?v=" + version
    },

    transfer: function (url, action) {
        window.location.href = url;

        if (action) {
            action();
        }
    },

    //动态加载html，并自动获取html中的script文件<script> tag  
    //参数 elementId: string, 插入内容的元素id
    //参数 html ： json object, 定义的动态页面，含页面路径，使用到的js 文件，页面加载所要进行的初始化
    loadHtml: function (elementId, html) {
        Transfer.reload(elementId, html);
        return false;
    },

    //加载html到指定的div
    reload: function (elementId, html, afterAction) {
        var loadScripts = function (html) {
            var scripts = html.scripts,
                    onCompleted = html.initial,
                    src = "",
                    jsReference = "",
                    scriptArray = [],
                    params = html.params;

            for (var i = 0, j = scripts.length; i < j; i++) {
                src = scripts[i] + Transfer.version.scriptVersion; //加入版本进行刷新管理
                jsReference = String.format('script[src="{0}"]', src);
                if ($(jsReference).length <= 0) {
                    scriptArray.push(src);
                }
            }

            var completed = function () {
                if (typeof onCompleted === "function") {
                    onCompleted();
                }
                else {
                    if (onCompleted) {
                        var fnCompleted = $.fn.toFunction(onCompleted);
                        if (params) {
                            if ($.isArray(params)) {
                                fnCompleted.apply(this, params);
                            }
                            else {
                                fnCompleted(params);
                            }


                            //如果需要删除参数(同一个页面被不同引用)
                            if (params.resetParam) {
                                html.params = null;
                            }
                        }
                        else {
                            fnCompleted();
                        }
                    }
                }

                if (typeof (afterAction) === "function") {
                    afterAction();
                }
            }

            if (scriptArray.length > 0) {
                //需加载完，故分开写
                $.getScripts(scriptArray, function () {
                    completed();
                });
            }
            else {    //hwl 同一个地方加载多次，暂时找不出原因，故屏蔽此
                //上面需加载完，故分开写
                completed();
            }
        }

        //先清空，再加载
        $(elementId).children().remove();
        $(elementId).empty();
        $(elementId).load(html.url, function (data) {
            if (html.excludeSelector) {
                $(elementId).find(html.excludeSelector).remove();
            }

            //页面load html 后对页面要进行处理 
            if (typeof (html.pageAction) === "function") {
                html.pageAction();
            }

            loadScripts(html);
        });

        if (html.animate) {
            /*                $(elementId).hide('slide', {direction: 'left'}, 400); 
            $(elementId).show('slide', {direction: 'right'}, 600); 
            $(elementId).show('slide', {direction: 'left'}, 1000);*/

        }
    },

    //把地址切换放到statechange中去执行
    loadByHistory: function (elementId, html) {
        var State = History.getState(),
                urlId = Util.getUrlParam("p", State.cleanUrl) || null;

        var url = String.format("?p={0}", html.id);
        var stateObj = {
            elementId: elementId,
            html: html
        }

        //如果导航的目标地址没有发生变更，手工触发statechange
        if (!$.isEmptyObject(State.data)) {
            if (urlId && urlId == html.id) {
                History.pushState(stateObj, document.title, url); //也要写入，参数可以不同
                History.Adapter.trigger(window, "statechange");

                return false;
            }
        }

        History.pushState(stateObj, document.title, url);
        return false;
    },
    //加载溯源档案 zwb add 0925
    loadByTraceUrl: function (elementId, html) {
        var State = History.getState(),urlId = Util.getUrlParam("p", State.cleanUrl) || null;
        var url = String.format("?p={0}&batchid={1}", html.id, html.params.BatchID);
        var stateObj = {
            elementId: elementId,
            html: html
        }

        //如果导航的目标地址没有发生变更，手工触发statechange
        if (!$.isEmptyObject(State.data)) {
            if (urlId && urlId == html.id) {
                History.pushState(stateObj, document.title, url); //也要写入，参数可以不同
                History.Adapter.trigger(window, "statechange");
                return false;
            }
        }
        History.pushState(stateObj, document.title, url);
        return false;
    },

    loadScripts: function (scripts, callback) {
        var 
                src = "",
                jsReference = "",
                scriptArray = [];

        for (var i = 0, j = scripts.length; i < j; i++) {
            src = scripts[i] + Transfer.version.scriptVersion; //加入版本进行刷新管理
            jsReference = String.format('script[src="{0}"]', src);
            if ($(jsReference).length <= 0) {
                scriptArray.push(src);
            }
        }

        var completed = function () {
            if (typeof (callback) === "function") {
                callback();
            }
        }
        if (scriptArray.length > 0) {
            //需加载完，故分开写
            $.getScripts(scriptArray, function () {
                completed();
            });
        }
        else {
            completed();
        }
    },

    loadCSS: function (arrCss) {
        var unfindArray = [],
                href = "",
                cssReference = "";
        for (var i = 0, j = arrCss.length; i < j; i++) {
            href = arrCss[i] + Transfer.version.scriptVersion;
            cssReference = String.format("link[href='{0}']", href);

            if ($(cssReference).length <= 0) {
                unfindArray.push(href);
            }
        }

        for (var i = 0, j = unfindArray.length; i < j; i++) {
            $("head").append(String.format("<link rel='stylesheet' type='text/css' href='{0}' />", unfindArray[i]));
        }
    }
}

}())