var Transfer;
Transfer || (Transfer = {}); (function() {
    Transfer = {
        version: {
            scriptVersion: "?v=201510291210"
        },
        transfer: function(b, a) {
            window.location.href = b;
            a && a()
        },
        loadHtml: function(b, a) {
            Transfer.reload(b, a);
            return ! 1
        },
        reload: function(b, a, e) {
            var d = function(a) {
                for (var b = a.scripts,
                d = a.initial,
                g = "",
                m = "",
                k = [], h = a.params, l = 0, q = b.length; l < q; l++) g = b[l] + Transfer.version.scriptVersion,
                m = String.format('script[src="{0}"]', g),
                0 >= $(m).length && k.push(g);
                var n = function() {
                    if ("function" === typeof d) d();
                    else if (d) {
                        var b = $.fn.toFunction(d);
                        h ? ($.isArray(h) ? b.apply(this, h) : b(h), h.resetParam && (a.params = null)) : b()
                    }
                    "function" === typeof e && e()
                };
                0 < k.length ? $.getScripts(k,
                function() {
                    n()
                }) : n()
            };
            $(b).children().remove();
            $(b).empty();
            $(b).load(a.url,
            function(c) {
                a.excludeSelector && $(b).find(a.excludeSelector).remove();
                "function" === typeof a.pageAction && a.pageAction();
                d(a)
            })
        },
        loadByHistory: function(b, a) {
            var e = History.getState(),
            d = Util.getUrlParam("p", e.cleanUrl) || null,
            c = String.format("?p={0}", a.id),
            f = {
                elementId: b,
                html: a
            };
            if (!$.isEmptyObject(e.data) && d && d == a.id) return History.pushState(f, document.title, c),
            History.Adapter.trigger(window, "statechange"),
            !1;
            History.pushState(f, document.title, c);
            return ! 1
        },
        loadByTraceUrl: function(b, a) {
            var e = History.getState(),
            d = Util.getUrlParam("p", e.cleanUrl) || null,
            c = String.format("?p={0}&batchid={1}", a.id, a.params.BatchID),
            f = {
                elementId: b,
                html: a
            };
            if (!$.isEmptyObject(e.data) && d && d == a.id) return History.pushState(f, document.title, c),
            History.Adapter.trigger(window, "statechange"),
            !1;
            History.pushState(f, document.title, c);
            return ! 1
        },
        loadScripts: function(b, a) {
            for (var e = "",
            d = "",
            c = [], f = 0, p = b.length; f < p; f++) e = b[f] + Transfer.version.scriptVersion,
            d = String.format('script[src="{0}"]', e),
            0 >= $(d).length && c.push(e);
            var g = function() {
                "function" === typeof a && a()
            };
            0 < c.length ? $.getScripts(c,
            function() {
                g()
            }) : g()
        },
        loadCSS: function(b) {
            for (var a = [], e = "", d = "", c = 0, f = b.length; c < f; c++) e = b[c] + Transfer.version.scriptVersion,
            d = String.format("link[href='{0}']", e),
            0 >= $(d).length && a.push(e);
            c = 0;
            for (f = a.length; c < f; c++) $("head").append(String.format("<link rel='stylesheet' type='text/css' href='{0}' />", a[c]))
        }
    }
})();