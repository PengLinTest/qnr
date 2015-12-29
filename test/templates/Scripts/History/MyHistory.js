var MyHistory;

if (!MyHistory) {
    MyHistory = {};
}

(function () {
    MyHistory = {
        getHistorySource : function () {
            // $.browser fallback for jQuery 1.9+.
            if ($.browser === undefined) {
                $.browser = (function () {
                    var ua_match = function (ua) {
                        ua = ua.toLowerCase();
                        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
                                        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
                                        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
                                        /(msie) ([\w.]+)/.exec(ua) ||
                                        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
                                        [];

                        return { browser: match[1] || "", version: match[2] || "0" };
                    },
                                matched = ua_match(navigator.userAgent),
                                browser = {};

                    if (matched.browser) {
                        browser[matched.browser] = true;
                        browser.version = matched.version;
                    }

                    if (browser.chrome) {
                        browser.webkit = true;
                    } else if (browser.webkit) {
                        browser.safari = true;
                    }
                    return browser;
                })();
            }
             
            var jsUrl = "";
            if ($.browser.msie && $.browser.version <= 9.0) {
                jsUrl = "/Scripts/History/jquery.history.js";
            }
            else {
                jsUrl = "/Scripts/History/html5/jquery.history.js";
            }

            $.ajax({
                url: jsUrl,
                async: false,
                dataType: "script"
            });

            var History = window.History;

            if (!History.enabled) {
                return false;
            }
            History.Adapter.bind(window, 'statechange', function () { // Note: We are using statechange instead of popstate   
                var State = History.getState(); // Note: We are using History.getState() instead of event.state

                //my do
                if (!$.isEmptyObject(State.data)) {
                    var elementId = State.data.elementId,
                            html = State.data.html;
                    if (html.currentHtml && (!$.trim($(html.currentHtml.element).text()) || null)) { //直接进入2级导航
                        Transfer.reload(html.currentHtml.element, html.currentHtml.html, function () {
                            Transfer.reload(elementId, html);
                        });
                    }
                    else {
                        Transfer.reload(elementId, html);
                    }
                }
            });

            //MyHistory.trigger();
        },

        trigger : function(){ 
            if ($.browser.msie && $.browser.version <= 9.0) {

            }
            else {
                History.Adapter.trigger(window, "statechange");
            }
        } 
    }

    if (typeof (History) === "undefined" || typeof  (history.getState) === "undefined" || $.isEmptyObject(History)) {
        MyHistory.getHistorySource();
    }
} (window));