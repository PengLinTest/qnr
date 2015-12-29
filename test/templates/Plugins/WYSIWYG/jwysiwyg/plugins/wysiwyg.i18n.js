(function(a) {
    if (void 0 === a.wysiwyg) throw "wysiwyg.i18n.js depends on $.wysiwyg";
    a.wysiwyg.plugin.register({
        name: "i18n",
        version: "",
        defaults: {
            lang: "en",
            wysiwygLang: "en"
        },
        lang: {},
        options: {},
        init: function(c, b) {
            if (!c.options.plugins[this.name]) return ! 0;
            this.options = a.extend(!0, this.defaults, c.options.plugins[this.name]);
            b ? this.options.lang = b: b = this.options.lang;
            if (b !== this.options.wysiwygLang && void 0 === a.wysiwyg.i18n.lang[b]) if (a.wysiwyg.autoload) a.wysiwyg.autoload.lang("lang." + b + ".js",
            function() {
                a.wysiwyg.i18n.init(c, b)
            });
            else throw 'Language "' + b + '" not found in $.wysiwyg.i18n. You need to include this language file';
            this.translateControls(c, b)
        },
        translateControls: function(c, b) {
            c.ui.toolbar.find("li").each(function() {
                c.options.controls[a(this).attr("class")] && c.options.controls[a(this).attr("class")].visible && a(this).attr("title", a.wysiwyg.i18n.t(c.options.controls[a(this).attr("class")].tooltip, "controls", b))
            })
        },
        run: function(c, b) {
            return c.each(function() {
                var c = a(this).data("wysiwyg");
                if (!c) return this;
                a.wysiwyg.i18n.init(c, b)
            })
        },
        t: function(c, b, a) {
            var d;
            a || (a = this.options.lang);
            if (a === this.options.wysiwygLang || !this.lang[a]) return c;
            a = this.lang[a];
            d = b.split(".");
            for (b = 0; b < d.length; b += 1) a[d[b]] && (a = a[d[b]]);
            return a[c] ? a[c] : c
        }
    });
    a.wysiwyg.plugin.listen("initFrame", "i18n.init")
})(jQuery);