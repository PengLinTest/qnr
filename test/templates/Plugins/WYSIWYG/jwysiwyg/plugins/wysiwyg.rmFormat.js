(function(h) {
    if (void 0 === h.wysiwyg) throw "wysiwyg.rmFormat.js depends on $.wysiwyg";
    h.wysiwyg.plugin.register({
        name: "rmFormat",
        version: "",
        defaults: {
            rules: {
                heading: !1,
                table: !1,
                inlineCSS: !1,
                msWordMarkup: {
                    enabled: !1,
                    tags: {
                        a: {
                            rmWhenEmpty: !0
                        },
                        b: {
                            rmWhenEmpty: !0
                        },
                        div: {
                            rmWhenEmpty: !0,
                            rmWhenNoAttr: !0
                        },
                        em: {
                            rmWhenEmpty: !0
                        },
                        font: {
                            rmAttr: {
                                face: "",
                                size: ""
                            },
                            rmWhenEmpty: !0,
                            rmWhenNoAttr: !0
                        },
                        h1: {
                            rmAttr: "all",
                            rmWhenEmpty: !0
                        },
                        h2: {
                            rmAttr: "all",
                            rmWhenEmpty: !0
                        },
                        h3: {
                            rmAttr: "all",
                            rmWhenEmpty: !0
                        },
                        h4: {
                            rmAttr: "all",
                            rmWhenEmpty: !0
                        },
                        h5: {
                            rmAttr: "all",
                            rmWhenEmpty: !0
                        },
                        h6: {
                            rmAttr: "all",
                            rmWhenEmpty: !0
                        },
                        i: {
                            rmWhenEmpty: !0
                        },
                        p: {
                            rmAttr: "all",
                            rmWhenEmpty: !0
                        },
                        span: {
                            rmAttr: {
                                lang: ""
                            },
                            rmWhenEmpty: !0,
                            rmWhenNoAttr: !0
                        },
                        strong: {
                            rmWhenEmpty: !0
                        },
                        u: {
                            rmWhenEmpty: !0
                        }
                    }
                }
            }
        },
        options: {},
        enabled: !1,
        debug: !1,
        domRemove: function(a) {
            return this.options.rules.heading && a.nodeName.toLowerCase().match(/^h[1-6]$/) ? (h(a).replaceWith(h("<p/>").html(h(a).contents())), !0) : this.options.rules.table && a.nodeName.toLowerCase().match(/^(table|t[dhr]|t(body|foot|head))$/) ? (h(a).replaceWith(h(a).contents()), !0) : !1
        },
        removeStyle: function(a) {
            this.options.rules.inlineCSS && h(a).removeAttr("style")
        },
        domTraversing: function(a, d, e, b, c) {
            null === b && (b = !1);
            for (var g, f; a;) {
                this.debug && console.log(c, "canRemove=", b);
                this.removeStyle(a);
                if (a.firstElementChild) return this.debug && console.log(c, "domTraversing", a.firstElementChild),
                this.domTraversing(a.firstElementChild, d, e, b, c + 1);
                this.debug && console.log(c, "routine", a);
                g = !1;
                d === a && (b = !0);
                if (b && (f = a.previousElementSibling ? a.previousElementSibling: a.parentNode, this.debug && console.log(c, a.nodeName, a.previousElementSibling, a.parentNode, f), g = this.domRemove(a), this.domRemove(a) && (this.debug && console.log("p", f), a = f), d !== e && e === a)) return ! 0; ! 1 === g && (a = a.nextElementSibling)
            }
            return ! 1
        },
        msWordMarkup: function(a) {
            var d, e, b, c, g, f;
            a = a.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            a = a.replace(/<meta\s[^>]+>/g, "");
            a = a.replace(/<link\s[^>]+>/g, "");
            a = a.replace(/<title>[\s\S]*?<\/title>/g, "");
            a = a.replace(/<style(?:\s[^>]*)?>[\s\S]*?<\/style>/gm, "");
            a = a.replace(/<w:([^\s>]+)(?:\s[^\/]+)?\/>/g, "");
            a = a.replace(/<w:([^\s>]+)(?:\s[^>]+)?>[\s\S]*?<\/w:\1>/gm, "");
            a = a.replace(/<m:([^\s>]+)(?:\s[^\/]+)?\/>/g, "");
            a = a.replace(/<m:([^\s>]+)(?:\s[^>]+)?>[\s\S]*?<\/m:\1>/gm, "");
            a = a.replace(/<xml>[\s\S]*?<\/xml>/g, "");
            a = a.replace(/<object(?:\s[^>]*)?>[\s\S]*?<\/object>/g, "");
            a = a.replace(/<o:([^\s>]+)(?:\s[^\/]+)?\/>/g, "");
            a = a.replace(/<o:([^\s>]+)(?:\s[^>]+)?>[\s\S]*?<\/o:\1>/gm, "");
            a = a.replace(/<st1:([^\s>]+)(?:\s[^\/]+)?\/>/g, "");
            a = a.replace(/<st1:([^\s>]+)(?:\s[^>]+)?>[\s\S]*?<\/st1:\1>/gm, "");
            a = a.replace(/\x3c!--[^>]+>\s*<[^>]+>/gm, "");
            a = a.replace(/\x3c!--[\s\S]*?--\x3e/g, "");
            a = a.replace("\x3c!--StartFragment--\x3e", "").replace("\x3c!--EndFragment--\x3e", "");
            a = a.replace(/^[\s\n]+/gm, "");
            if (this.options.rules.msWordMarkup.tags) {
                for (d in this.options.rules.msWordMarkup.tags) if (b = this.options.rules.msWordMarkup.tags[d], "string" === typeof b)"" === b && (c = RegExp("<" + d + "(?:\\s[^>]+)?/?>", "gmi"), a = a.replace(c, "<" + d + ">"));
                else if ("object" === typeof b) {
                    c = RegExp("<" + d + "(\\s[^>]+)?/?>", "gmi");
                    g = c.exec(a);
                    f = "";
                    g && g[1] && (f = g[1]);
                    if (b.rmAttr) if ("all" === b.rmAttr) f = "";
                    else if ("object" === typeof b.rmAttr && f) for (e in b.rmAttr) b = RegExp(e + '="[^"]*"', "mi"),
                    f = f.replace(b, "");
                    f && (f = f.replace(/[\s\n]+/gm, " "), " " === f && (f = ""));
                    a = a.replace(c, "<" + d + f + ">")
                }
                for (d in this.options.rules.msWordMarkup.tags) if (b = this.options.rules.msWordMarkup.tags[d], "string" !== typeof b && "object" === typeof b && (b.rmWhenEmpty && (c = RegExp("<" + d + "(\\s[^>]+)?>(?:[\\s\\n]|<br/?>)*?</" + d + ">", "gmi"), a = a.replace(c, "")), b.rmWhenNoAttr)) for (c = RegExp("<" + d + ">(?!<" + d + ">)([\\s\\S]*?)</" + d + ">", "mi"), g = c.exec(a); g;) a = a.replace(c, g[1]),
                g = c.exec(a)
            }
            return a
        },
        run: function(a, d) {
            d = d || {};
            this.options = h.extend(!0, this.defaults, d);
            if (this.options.rules.heading || this.options.rules.table) {
                var e = a.getInternalRange(),
                b,
                c;
                b = e.startContainer;
                3 === b.nodeType && (b = b.parentNode);
                c = e.endContainer;
                3 === c.nodeType && (c = c.parentNode);
                this.debug && (console.log("start", b, b.nodeType, b.nodeName, b.parentNode), console.log("end", c, c.nodeType, c.nodeName, c.parentNode));
                e = e.commonAncestorContainer;
                3 === e.nodeType && (e = e.parentNode);
                this.debug && (console.log("node", e, e.nodeType, e.nodeName.toLowerCase(), e.parentNode, e.firstElementChild), console.log(b === c));
                b = b === c ? this.domTraversing(e, b, c, !0, 1) : this.domTraversing(e.firstElementChild, b, c, null, 1);
                this.debug && console.log("DomTraversing=", b)
            }
            this.options.rules.msWordMarkup.enabled && a.setContent(this.msWordMarkup(a.getContent()))
        }
    })
})(jQuery);