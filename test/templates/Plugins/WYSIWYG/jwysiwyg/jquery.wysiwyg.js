(function(g, m, l) { (function(b) {
        "function" === typeof define && define.amd ? define(["jquery"], b) : jQuery && !jQuery.fn.wysiwyg && b(jQuery)
    })(function(b) {
        function n() {
            this.controls = {
                bold: {
                    groupIndex: 0,
                    visible: !0,
                    tags: ["b", "strong"],
                    css: {
                        fontWeight: "bold"
                    },
                    tooltip: "Bold",
                    hotkey: {
                        ctrl: 1,
                        key: 66
                    }
                },
                copy: {
                    groupIndex: 8,
                    visible: !1,
                    tooltip: "Copy"
                },
                createLink: {
                    groupIndex: 6,
                    visible: !0,
                    exec: function() {
                        var a = this;
                        b.wysiwyg.controls && b.wysiwyg.controls.link ? b.wysiwyg.controls.link.init(this) : b.wysiwyg.autoload ? b.wysiwyg.autoload.control("wysiwyg.link.js",
                        function() {
                            a.controls.createLink.exec.apply(a)
                        }) : k.error("$.wysiwyg.controls.link not defined. You need to include wysiwyg.link.js file")
                    },
                    tags: ["a"],
                    tooltip: "Create link"
                },
                unLink: {
                    groupIndex: 6,
                    visible: !0,
                    exec: function() {
                        this.editorDoc.execCommand("unlink", !1, null)
                    },
                    tooltip: "Remove link"
                },
                cut: {
                    groupIndex: 8,
                    visible: !1,
                    tooltip: "Cut"
                },
                decreaseFontSize: {
                    groupIndex: 9,
                    visible: !1,
                    tags: ["small"],
                    tooltip: "Decrease font size",
                    exec: function() {
                        this.decreaseFontSize()
                    }
                },
                h1: {
                    groupIndex: 7,
                    visible: !0,
                    className: "h1",
                    command: b.browser.msie || b.browser.opera ? "FormatBlock": "heading",
                    arguments: b.browser.msie || b.browser.opera ? "<h1>": "h1",
                    tags: ["h1"],
                    tooltip: "Header 1"
                },
                h2: {
                    groupIndex: 7,
                    visible: !0,
                    className: "h2",
                    command: b.browser.msie || b.browser.opera ? "FormatBlock": "heading",
                    arguments: b.browser.msie || b.browser.opera ? "<h2>": "h2",
                    tags: ["h2"],
                    tooltip: "Header 2"
                },
                h3: {
                    groupIndex: 7,
                    visible: !0,
                    className: "h3",
                    command: b.browser.msie || b.browser.opera ? "FormatBlock": "heading",
                    arguments: b.browser.msie || b.browser.opera ? "<h3>": "h3",
                    tags: ["h3"],
                    tooltip: "Header 3"
                },
                highlight: {
                    tooltip: "Highlight",
                    className: "highlight",
                    groupIndex: 1,
                    visible: !1,
                    css: {
                        backgroundColor: "rgb(255, 255, 102)"
                    },
                    exec: function() {
                        var a, c;
                        a = b.browser.msie || b.browser.opera ? "backcolor": "hilitecolor";
                        if (b.browser.msie) c = this.getInternalRange().parentElement();
                        else for (c = this.getInternalSelection(), c = c.extentNode || c.focusNode; c.style === l;) if (c = c.parentNode, c.tagName && "body" === c.tagName.toLowerCase()) return;
                        this.editorDoc.execCommand(a, !1, "rgb(255, 255, 102)" === c.style.backgroundColor || "#ffff66" === c.style.backgroundColor ? "#ffffff": "#ffff66")
                    }
                },
                html: {
                    groupIndex: 10,
                    visible: !1,
                    exec: function(a, c) {
                        var d;
                        this.options.resizeOptions && b.fn.resizable && (d = this.element.height());
                        this.viewHTML ? (this.setContent("function" === typeof c ? c(this.original.value) : this.original.value), b(this.original).hide(), this.editor.show(), this.options.resizeOptions && b.fn.resizable && (d === this.element.height() && this.element.height(d + this.editor.height()), this.element.resizable(b.extend(!0, {
                            alsoResize: this.editor
                        },
                        this.options.resizeOptions))), this.ui.toolbar.find("li").each(function() {
                            var a = b(this);
                            a.hasClass("html") ? a.removeClass("active") : a.removeClass("disabled")
                        })) : (this.saveContent(a), b(this.original).css({
                            width: this.editor.width(),
                            height: this.editor.height(),
                            resize: "none"
                        }).show(), this.editor.hide(), this.options.resizeOptions && b.fn.resizable && (d === this.element.height() && this.element.height(this.ui.toolbar.height()), this.element.resizable("destroy")), this.ui.toolbar.find("li").each(function() {
                            var a = b(this);
                            a.hasClass("html") ? a.addClass("active") : !1 === a.hasClass("fullscreen") && a.removeClass("active").addClass("disabled")
                        }));
                        this.viewHTML = !this.viewHTML
                    },
                    tooltip: "View source code"
                },
                increaseFontSize: {
                    groupIndex: 9,
                    visible: !1,
                    tags: ["big"],
                    tooltip: "Increase font size",
                    exec: function() {
                        this.increaseFontSize()
                    }
                },
                indent: {
                    groupIndex: 2,
                    visible: !0,
                    tooltip: "Indent"
                },
                insertHorizontalRule: {
                    groupIndex: 6,
                    visible: !0,
                    tags: ["hr"],
                    tooltip: "Insert Horizontal Rule"
                },
                insertImage: {
                    groupIndex: 6,
                    visible: !0,
                    exec: function() {
                        var a = this;
                        b.wysiwyg.controls && b.wysiwyg.controls.image ? b.wysiwyg.controls.image.init(this) : b.wysiwyg.autoload ? b.wysiwyg.autoload.control("wysiwyg.image.js",
                        function() {
                            a.controls.insertImage.exec.apply(a)
                        }) : k.error("$.wysiwyg.controls.image not defined. You need to include wysiwyg.image.js file")
                    },
                    tags: ["img"],
                    tooltip: "Insert image"
                },
                insertMyImage: {
                    groupIndex: 6,
                    visible: !0,
                    exec: function() {
                        var a = this;
                        b.wysiwyg.controls && b.wysiwyg.controls.image ? b.wysiwyg.controls.image.initMyImage(this) : b.wysiwyg.autoload ? b.wysiwyg.autoload.control("wysiwyg.image.js",
                        function() {
                            a.controls.insertImage.exec.apply(a)
                        }) : k.error("$.wysiwyg.controls.image not defined. You need to include wysiwyg.image.js file")
                    },
                    tags: ["img"],
                    tooltip: "Insert image"
                },
                insertOrderedList: {
                    groupIndex: 5,
                    visible: !0,
                    tags: ["ol"],
                    tooltip: "Insert Ordered List"
                },
                insertTable: {
                    groupIndex: 6,
                    visible: !0,
                    exec: function() {
                        var a = this;
                        b.wysiwyg.controls && b.wysiwyg.controls.table ? b.wysiwyg.controls.table(this) : b.wysiwyg.autoload ? b.wysiwyg.autoload.control("wysiwyg.table.js",
                        function() {
                            a.controls.insertTable.exec.apply(a)
                        }) : k.error("$.wysiwyg.controls.table not defined. You need to include wysiwyg.table.js file")
                    },
                    tags: ["table"],
                    tooltip: "Insert table"
                },
                insertUnorderedList: {
                    groupIndex: 5,
                    visible: !0,
                    tags: ["ul"],
                    tooltip: "Insert Unordered List"
                },
                italic: {
                    groupIndex: 0,
                    visible: !0,
                    tags: ["i", "em"],
                    css: {
                        fontStyle: "italic"
                    },
                    tooltip: "Italic",
                    hotkey: {
                        ctrl: 1,
                        key: 73
                    }
                },
                justifyCenter: {
                    groupIndex: 1,
                    visible: !0,
                    tags: ["center"],
                    css: {
                        textAlign: "center"
                    },
                    tooltip: "Justify Center"
                },
                justifyFull: {
                    groupIndex: 1,
                    visible: !0,
                    css: {
                        textAlign: "justify"
                    },
                    tooltip: "Justify Full"
                },
                justifyLeft: {
                    visible: !0,
                    groupIndex: 1,
                    css: {
                        textAlign: "left"
                    },
                    tooltip: "Justify Left"
                },
                justifyRight: {
                    groupIndex: 1,
                    visible: !0,
                    css: {
                        textAlign: "right"
                    },
                    tooltip: "Justify Right"
                },
                ltr: {
                    groupIndex: 10,
                    visible: !1,
                    exec: function() {
                        var a = this.dom.getElement("p");
                        if (!a) return ! 1;
                        b(a).attr("dir", "ltr");
                        return ! 0
                    },
                    tooltip: "Left to Right"
                },
                outdent: {
                    groupIndex: 2,
                    visible: !0,
                    tooltip: "Outdent"
                },
                paragraph: {
                    groupIndex: 7,
                    visible: !1,
                    className: "paragraph",
                    command: "FormatBlock",
                    arguments: b.browser.msie || b.browser.opera ? "<p>": "p",
                    tags: ["p"],
                    tooltip: "Paragraph"
                },
                paste: {
                    groupIndex: 8,
                    visible: !1,
                    tooltip: "Paste"
                },
                redo: {
                    groupIndex: 4,
                    visible: !0,
                    tooltip: "Redo"
                },
                removeFormat: {
                    groupIndex: 10,
                    visible: !0,
                    exec: function() {
                        this.removeFormat()
                    },
                    tooltip: "Remove formatting"
                },
                rtl: {
                    groupIndex: 10,
                    visible: !1,
                    exec: function() {
                        var a = this.dom.getElement("p");
                        if (!a) return ! 1;
                        b(a).attr("dir", "rtl");
                        return ! 0
                    },
                    tooltip: "Right to Left"
                },
                strikeThrough: {
                    groupIndex: 0,
                    visible: !0,
                    tags: ["s", "strike"],
                    css: {
                        textDecoration: "line-through"
                    },
                    tooltip: "Strike-through"
                },
                subscript: {
                    groupIndex: 3,
                    visible: !0,
                    tags: ["sub"],
                    tooltip: "Subscript"
                },
                superscript: {
                    groupIndex: 3,
                    visible: !0,
                    tags: ["sup"],
                    tooltip: "Superscript"
                },
                underline: {
                    groupIndex: 0,
                    visible: !0,
                    tags: ["u"],
                    css: {
                        textDecoration: "underline"
                    },
                    tooltip: "Underline",
                    hotkey: {
                        ctrl: 1,
                        key: 85
                    }
                },
                undo: {
                    groupIndex: 4,
                    visible: !0,
                    tooltip: "Undo"
                },
                code: {
                    visible: !0,
                    groupIndex: 6,
                    tooltip: "Code snippet",
                    exec: function() {
                        var a = this.getInternalRange(),
                        c = b(a.commonAncestorContainer),
                        a = a.commonAncestorContainer.nodeName.toLowerCase();
                        c.parent("code").length ? c.unwrap() : "body" !== a && c.wrap("<code/>")
                    }
                },
                cssWrap: {
                    visible: !1,
                    groupIndex: 6,
                    tooltip: "CSS Wrapper",
                    exec: function() {
                        b.wysiwyg.controls.cssWrap.init(this)
                    }
                }
            };
            this.defaults = {
                html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" style="margin:0"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body style="margin:0;">INITIAL_CONTENT</body></html>',
                debug: !1,
                controls: {},
                css: {},
                events: {},
                autoGrow: !1,
                autoSave: !0,
                brIE: !1,
                formHeight: 270,
                formWidth: 440,
                iFrameClass: null,
                initialContent: "",
                maxHeight: 1E4,
                maxLength: 0,
                messages: {
                    nonSelection: "Select the text you wish to link"
                },
                toolbarHtml: '<ul role="menu" class="toolbar"></ul>',
                removeHeadings: !1,
                replaceDivWithP: !1,
                resizeOptions: !1,
                rmUnusedControls: !1,
                rmUnwantedBr: !0,
                tableFiller: "Lorem ipsum",
                initialMinHeight: null,
                controlImage: {
                    forceRelativeUrls: !1
                },
                controlLink: {
                    forceRelativeUrls: !1
                },
                plugins: {
                    autoload: !1,
                    i18n: !1,
                    rmFormat: {
                        rmMsWordMarkup: !1
                    }
                },
                dialog: "default"
            };
            this.availableControlProperties = "arguments callback callbackArguments className command css custom exec groupIndex hotkey icon separator tags tooltip visible".split(" ");
            this.element = this.editorDoc = this.editor = null;
            this.options = {};
            this.savedRange = this.original = null;
            this.timers = [];
            this.validKeyCodes = [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46];
            this.isDestroyed = !1;
            this.dom = {
                ie: {
                    parent: null
                },
                w3c: {
                    parent: null
                }
            };
            this.dom.parent = this;
            this.dom.ie.parent = this.dom;
            this.dom.w3c.parent = this.dom;
            this.ui = {};
            this.ui.self = this;
            this.ui.toolbar = null;
            this.ui.initialHeight = null;
            this.dom.getAncestor = function(a, b) {
                for (b = b.toLowerCase(); a && a.tagName !== l && "body" !== a.tagName.toLowerCase();) {
                    if (b === a.tagName.toLowerCase()) return a;
                    a = a.parentNode
                }
                if (!a.tagName && (a.previousSibling || a.nextSibling)) {
                    if (a.previousSibling && a.previousSibling.tagName.toLowerCase() === b) return a.previousSibling;
                    if (a.nextSibling && a.nextSibling.tagName.toLowerCase() === b) return a.nextSibling
                }
                return null
            };
            this.dom.getElement = function(a) {
                a = a.toLowerCase();
                return g.getSelection ? this.w3c.getElement(a) : this.ie.getElement(a)
            };
            this.dom.ie.getElement = function(a) {
                var b = this.parent,
                d = b.parent.getInternalSelection(),
                e = d.createRange();
                if ("Control" === d.type) if (1 === e.length) d = e.item(0);
                else return null;
                else d = e.parentElement();
                return b.getAncestor(d, a)
            };
            this.dom.w3c.getElement = function(a) {
                var b = this.parent,
                d = b.parent.getInternalRange(),
                e;
                if (!d) return null;
                e = d.commonAncestorContainer;
                3 === e.nodeType && (e = e.parentNode);
                e === d.startContainer && (e = e.childNodes[d.startOffset]);
                if (!e.tagName && (e.previousSibling || e.nextSibling)) {
                    if (e.previousSibling && e.previousSibling.tagName.toLowerCase() === a) return e.previousSibling;
                    if (e.nextSibling && e.nextSibling.tagName.toLowerCase() === a) return e.nextSibling
                }
                return b.getAncestor(e, a)
            };
            this.ui.addHoverClass = function() {
                b(this).addClass("wysiwyg-button-hover")
            };
            this.ui.appendControls = function() {
                var a = this,
                c = this.self.parseControls(),
                d = !0,
                e = [],
                f = {},
                h,
                g = function(b, c) {
                    c.groupIndex && h !== c.groupIndex && (h = c.groupIndex, d = !1);
                    c.visible && (d || (a.appendItemSeparator(), d = !0), c.custom ? a.appendItemCustom(b, c) : a.appendItem(b, c))
                };
                b.each(c,
                function(a, b) {
                    var c = "empty";
                    l !== b.groupIndex && (c = "" === b.groupIndex ? "empty": b.groupIndex);
                    l === f[c] && (e.push(c), f[c] = {});
                    f[c][a] = b
                });
                e.sort(function(a, b) {
                    if ("number" === typeof a && "number" === typeof b) return a - b;
                    a = a.toString();
                    b = b.toString();
                    return a > b ? 1 : a === b ? 0 : -1
                });
                0 < e.length && (h = e[0]);
                for (c = 0; c < e.length; c += 1) b.each(f[e[c]], g)
            };
            this.ui.appendItem = function(a, c) {
                var d = this.self,
                e = c.className || c.command || a || "empty",
                f = c.tooltip || c.command || a || "";
                return b('<li role="menuitem" unselectable="on">' + e + "</li>").addClass(e).attr("title", f).hover(this.addHoverClass, this.removeHoverClass).click(function(e) {
                    if (b(this).hasClass("disabled")) return ! 1;
                    d.triggerControl(a, c);
                    e = b(e.target);
                    for (var f in d.controls) if (e.hasClass(f)) {
                        d.ui.toolbar.find("." + f).toggleClass("active");
                        d.editorDoc.rememberCommand = !0;
                        break
                    }
                    this.blur();
                    d.ui.returnRange();
                    d.ui.focus();
                    return ! 0
                }).appendTo(d.ui.toolbar)
            };
            this.ui.appendItemCustom = function(a, c) {
                var d = this.self,
                e = c.tooltip || c.command || a || "";
                c.callback && b(g).bind("trigger-" + a + ".wysiwyg", c.callback);
                return b('<li role="menuitem" unselectable="on" style="background: url(\'' + c.icon + "') no-repeat;\"></li>").addClass("custom-command-" + a).addClass("wysiwyg-custom-command").addClass(a).attr("title", e).hover(this.addHoverClass, this.removeHoverClass).click(function() {
                    if (b(this).hasClass("disabled")) return ! 1;
                    d.triggerControl.apply(d, [a, c]);
                    this.blur();
                    d.ui.returnRange();
                    d.ui.focus();
                    d.triggerControlCallback(a);
                    return ! 0
                }).appendTo(d.ui.toolbar)
            };
            this.ui.appendItemSeparator = function() {
                var a = this.self;
                return b('<li role="separator" class="separator"></li>').appendTo(a.ui.toolbar)
            };
            this.autoSaveFunction = function() {
                this.saveContent()
            };
            this.ui.checkTargets = function(a) {
                var c = this.self;
                b.each(c.options.controls,
                function(d, e) {
                    var f = e.className || e.command || d || "empty",
                    h, g, k, l = function(a) {
                        var e = 0,
                        d = 0;
                        b.each(a,
                        function(a, b) {
                            "function" === typeof b ? b.apply(c, [k.css(a).toString().toLowerCase(), c]) && (e += 1) : k.css(a).toString().toLowerCase() === b && (e += 1);
                            d += 1
                        });
                        d === e && c.ui.toolbar.find("." + f).addClass("active")
                    };
                    "fullscreen" !== f && c.ui.toolbar.find("." + f).removeClass("active");
                    if (e.tags || e.options && e.options.tags) for (h = e.tags || e.options && e.options.tags, g = a; g && 1 === g.nodeType;) - 1 !== b.inArray(g.tagName.toLowerCase(), h) && c.ui.toolbar.find("." + f).addClass("active"),
                    g = g.parentNode;
                    if (e.css || e.options && e.options.css) for (h = e.css || e.options && e.options.css, k = b(a); k && 1 === k[0].nodeType;) l(h),
                    k = k.parent()
                })
            };
            this.ui.designMode = function() {
                var a = this.self,
                b;
                b = function(d) {
                    if ("on" === a.editorDoc.designMode) a.timers.designMode && g.clearTimeout(a.timers.designMode),
                    a.innerDocument() !== a.editorDoc && a.ui.initFrame();
                    else {
                        try {
                            a.editorDoc.designMode = "on"
                        } catch(e) {}
                        d -= 1;
                        0 < d && (a.timers.designMode = g.setTimeout(function() {
                            b(d)
                        },
                        100))
                    }
                };
                b(3)
            };
            this.destroy = function() {
                this.isDestroyed = !0;
                var a, c = this.element.closest("form");
                for (a = 0; a < this.timers.length; a += 1) g.clearTimeout(this.timers[a]);
                b(this.original).appendTo(b(this.element.parent()));
                c.unbind(".wysiwyg");
                this.element.remove();
                b.removeData(this.original, "wysiwyg");
                b(this.original).show();
                return this
            };
            this.getRangeText = function() {
                var a = this.getInternalRange();
                a && (a.toString ? a = a.toString() : a.text && (a = a.text));
                return a
            };
            this.execute = function(a, b) {
                "undefined" === typeof b && (b = null);
                this.editorDoc.execCommand(a, !1, b)
            };
            this.extendOptions = function(a) {
                var c = {};
                "object" === typeof a.controls && (c = a.controls, delete a.controls);
                a = b.extend(!0, {},
                this.defaults, a);
                a.controls = b.extend(!0, {},
                c, this.controls, c);
                a.rmUnusedControls && b.each(a.controls,
                function(b) {
                    c[b] || delete a.controls[b]
                });
                return a
            };
            this.ui.focus = function() {
                var a = this.self;
                a.editor.get(0).contentWindow.focus();
                return a
            };
            this.ui.returnRange = function() {
                var a = this.self,
                b;
                if (null !== a.savedRange) {
                    if (g.getSelection) {
                        b = g.getSelection();
                        0 < b.rangeCount && b.removeAllRanges();
                        try {
                            b.addRange(a.savedRange)
                        } catch(d) {
                            k.error(d)
                        }
                    } else g.document.createRange ? g.getSelection().addRange(a.savedRange) : g.document.selection && a.savedRange.select();
                    a.savedRange = null
                }
            };
            this.increaseFontSize = function() {
                if (b.browser.mozilla || b.browser.opera) this.editorDoc.execCommand("increaseFontSize", !1, null);
                else if (b.browser.webkit) {
                    var a = this.getInternalRange(),
                    c = this.getInternalSelection(),
                    d = this.editorDoc.createElement("big");
                    if (!0 === a.collapsed && 3 === a.commonAncestorContainer.nodeType) {
                        var e = a.commonAncestorContainer.nodeValue.toString(),
                        f = e.lastIndexOf(" ", a.startOffset) + 1,
                        e = -1 === e.indexOf(" ", a.startOffset) ? e: e.indexOf(" ", a.startOffset);
                        a.setStart(a.commonAncestorContainer, f);
                        a.setEnd(a.commonAncestorContainer, e);
                        a.surroundContents(d)
                    } else a.surroundContents(d),
                    c.removeAllRanges();
                    c.addRange(a)
                } else k.error("Internet Explorer?")
            };
            this.decreaseFontSize = function() {
                if (b.browser.mozilla || b.browser.opera) this.editorDoc.execCommand("decreaseFontSize", !1, null);
                else if (b.browser.webkit) {
                    var a = this.getInternalRange(),
                    c = this.getInternalSelection(),
                    d = this.editorDoc.createElement("small");
                    if (!0 === a.collapsed && 3 === a.commonAncestorContainer.nodeType) {
                        var e = a.commonAncestorContainer.nodeValue.toString(),
                        f = e.lastIndexOf(" ", a.startOffset) + 1,
                        e = -1 === e.indexOf(" ", a.startOffset) ? e: e.indexOf(" ", a.startOffset);
                        a.setStart(a.commonAncestorContainer, f);
                        a.setEnd(a.commonAncestorContainer, e);
                        a.surroundContents(d)
                    } else a.surroundContents(d),
                    c.removeAllRanges();
                    c.addRange(a)
                } else k.error("Internet Explorer?")
            };
            this.getContent = function() {
                this.viewHTML && this.setContent(this.original.value);
                return this.events.filter("getContent", this.editorDoc.body.innerHTML)
            };
            this.events = {
                _events: {},
                bind: function(a, b) {
                    "object" !== typeof this._events.eventName && (this._events[a] = []);
                    this._events[a].push(b)
                },
                trigger: function(a, c) {
                    if ("object" === typeof this._events.eventName) {
                        var d = this.editor;
                        b.each(this._events[a],
                        function(a, b) {
                            "function" === typeof b && b.apply(d, c)
                        })
                    }
                },
                filter: function(a, c) {
                    if ("object" === typeof this._events[a]) {
                        var d = this.editor,
                        e = Array.prototype.slice.call(arguments, 1);
                        b.each(this._events[a],
                        function(a, b) {
                            "function" === typeof b && (c = b.apply(d, e))
                        })
                    }
                    return c
                }
            };
            this.getElementByAttributeValue = function(a, c, d) {
                var e, f = this.editorDoc.getElementsByTagName(a);
                for (a = 0; a < f.length; a += 1) if (e = f[a].getAttribute(c), b.browser.msie && (e = e.substr(e.length - d.length)), e === d) return f[a];
                return ! 1
            };
            this.getInternalRange = function() {
                var a = this.getInternalSelection();
                return a ? a.rangeCount && 0 < a.rangeCount ? a.getRangeAt(0) : a.createRange ? a.createRange() : null: null
            };
            this.getInternalSelection = function() {
                var a = this.editor.get(0).contentWindow;
                return a && a.getSelection ? a.getSelection() : this.editorDoc.getSelection ? this.editorDoc.getSelection() : this.editorDoc.selection ? this.editorDoc.selection: null
            };
            this.getRange = function() {
                var a = this.getSelection();
                if (!a) return null;
                if (a.rangeCount && 0 < a.rangeCount) a.getRangeAt(0);
                else if (a.createRange) return a.createRange();
                return null
            };
            this.getSelection = function() {
                return g.getSelection && null !== g.getSelection() && g.getSelection().createRange ? g.getSelection() : g.document.selection
            };
            this.ui.grow = function() {
                var a = this.self,
                c = b(a.editorDoc.body),
                d = b.browser.msie ? c[0].scrollHeight: c.height() + 2 + 20,
                d = Math.max(d, a.ui.initialHeight),
                d = Math.min(d, a.options.maxHeight);
                a.editor.attr("scrolling", d < a.options.maxHeight ? "no": "auto");
                c.css("overflow", d < a.options.maxHeight ? "hidden": "");
                a.editor.get(0).height = d;
                return a
            };
            this.init = function(a, c) {
                var d = this,
                e = b(a).closest("form"),
                f = a.width || a.clientWidth || 0,
                h = a.height || a.clientHeight || 0;
                this.options = this.extendOptions(c);
                this.original = a;
                this.ui.toolbar = b(this.options.toolbarHtml);
                b.browser.msie && 8 > parseInt(b.browser.version, 10) && (this.options.autoGrow = !1);
                0 === f && a.cols && (f = 8 * a.cols + 21);
                0 === h && a.rows && (h = 16 * a.rows + 16);
                this.editor = b("https:" === g.location.protocol ? '<iframe src="javascript:false;"></iframe>': "<iframe></iframe>").attr("frameborder", "0");
                this.options.iFrameClass ? this.editor.addClass(this.options.iFrameClass) : (this.editor.css({
                    minHeight: (h - 6).toString() + "px",
                    width: 50 < f ? f.toString() + "px": ""
                }), b.browser.msie && 7 > parseInt(b.browser.version, 10) && this.editor.css("height", h.toString() + "px"));
                a.id && (h = a.id + "-wysiwyg-iframe", m.getElementById(h) || this.editor.attr("id", h));
                this.editor.attr("tabindex", b(a).attr("tabindex"));
                this.element = b("<div/>").addClass("wysiwyg");
                this.options.iFrameClass || this.element.css({
                    width: 0 < f ? f.toString() + "px": "100%"
                });
                b(a).hide().before(this.element);
                this.viewHTML = !1;
                this.initialContent = b(a).val();
                this.ui.initFrame();
                this.options.resizeOptions && b.fn.resizable && this.element.resizable(b.extend(!0, {
                    alsoResize: this.editor
                },
                this.options.resizeOptions));
                this.options.autoSave && e.bind("submit.wysiwyg",
                function() {
                    d.autoSaveFunction()
                });
                e.bind("reset.wysiwyg",
                function() {
                    d.resetFunction()
                })
            };
            this.ui.initFrame = function() {
                var a = this.self,
                c;
                c = b('<div class="toolbar-wrap"><div style="clear: both">\x3c!-- --\x3e</div>').prepend(a.ui.toolbar);
                a.ui.appendControls();
                a.element.append(c).append(a.editor).append(a.original);
                a.editorDoc = a.innerDocument();
                if (a.isDestroyed) return null;
                a.ui.designMode();
                a.editorDoc.open();
                a.editorDoc.write(a.options.html.replace(/INITIAL_CONTENT/,
                function() {
                    return a.wrapInitialContent()
                }));
                a.editorDoc.close();
                b.wysiwyg.plugin.bind(a);
                b(a.editorDoc).trigger("initFrame.wysiwyg");
                b(a.editorDoc).bind("click.wysiwyg",
                function(b) {
                    a.ui.checkTargets(b.target ? b.target: b.srcElement)
                });
                b(a.original).focus(function() {
                    0 === b(this).filter(":visible").length || b.browser.opera || a.ui.focus()
                });
                b(b.wysiwyg.quirk.quirks).each(function(b, c) {
                    c.init(a)
                });
                b(a.editorDoc).keydown(function(b) {
                    var c;
                    if (8 === b.keyCode && (c = /^<([\w]+)[^>]*>(<br\/?>)?<\/\1>$/, c.test(a.getContent()))) return b.stopPropagation(),
                    !1;
                    a.editorDoc.rememberCommand = !1;
                    return ! 0
                });
                b.browser.msie || b(a.editorDoc).keydown(function(b) {
                    var c, d;
                    if (b.ctrlKey || b.metaKey) for (c in a.options.controls) if (d = a.options.controls[c], d.hotkey && d.hotkey.ctrl && b.keyCode === d.hotkey.key) return a.triggerControl.apply(a, [c, d]),
                    !1;
                    return ! 0
                });
                a.options.brIE && b(a.editorDoc).keydown(function(c) {
                    if (13 === c.keyCode) {
                        if (b.browser.msie || b.browser.opera)(c = a.getRange()) ? (c.pasteHTML("<br/>"), c.collapse(!1), c.select()) : a.insertHtml("<br/>");
                        else if ((c = a.editorDoc.getSelection()) && c.getRangeAt && c.rangeCount) {
                            var d = c.getRangeAt(0);
                            if (!d) return ! 0;
                            var h = m.createElement("br");
                            d.deleteContents();
                            d.insertNode(h);
                            d.setStartAfter(h);
                            d.collapse(!0);
                            c.removeAllRanges();
                            c.addRange(d)
                        } else return ! 0;
                        return ! 1
                    }
                    return ! 0
                });
                a.options.plugins.rmFormat.rmMsWordMarkup && b(a.editorDoc).bind("keyup.wysiwyg",
                function(c) { (c.ctrlKey || c.metaKey) && 86 === c.keyCode && b.wysiwyg.rmFormat && ("object" === typeof a.options.plugins.rmFormat.rmMsWordMarkup ? b.wysiwyg.rmFormat.run(a, {
                        rules: {
                            msWordMarkup: a.options.plugins.rmFormat.rmMsWordMarkup
                        }
                    }) : b.wysiwyg.rmFormat.run(a, {
                        rules: {
                            msWordMarkup: {
                                enabled: !0
                            }
                        }
                    }))
                });
                a.options.autoSave && b(a.editorDoc).keydown(function() {
                    a.autoSaveFunction()
                }).keyup(function() {
                    a.autoSaveFunction()
                }).mousedown(function() {
                    a.autoSaveFunction()
                }).bind(b.support.noCloneEvent ? "input.wysiwyg": "paste.wysiwyg",
                function() {
                    a.autoSaveFunction()
                });
                a.options.autoGrow && (a.ui.initialHeight = null !== a.options.initialMinHeight ? a.options.initialMinHeight: b(a.editorDoc).height(), b(a.editorDoc.body).css("border", "1px solid white"), c = function() {
                    a.ui.grow()
                },
                b(a.editorDoc).keyup(c), b(a.editorDoc).bind("editorRefresh.wysiwyg", c), a.ui.grow());
                a.options.css && (String === a.options.css.constructor ? b.browser.msie ? (c = a.editorDoc.createStyleSheet(a.options.css), b(c).attr({
                    media: "all"
                })) : (c = b("<link/>").attr({
                    href: a.options.css,
                    media: "all",
                    rel: "stylesheet",
                    type: "text/css"
                }), b(a.editorDoc).find("head").append(c)) : a.timers.initFrame_Css = g.setTimeout(function() {
                    b(a.editorDoc.body).css(a.options.css)
                },
                0));
                0 === a.initialContent.length && ("function" === typeof a.options.initialContent ? a.setContent(a.options.initialContent()) : a.setContent(a.options.initialContent));
                0 < a.options.maxLength && b(a.editorDoc).keydown(function(c) {
                    b(a.editorDoc).text().length >= a.options.maxLength && -1 === b.inArray(c.which, a.validKeyCodes) && c.preventDefault()
                });
                b.each(a.options.events,
                function(c, d) {
                    b(a.editorDoc).bind(c + ".wysiwyg",
                    function(b) {
                        d.apply(a.editorDoc, [b, a])
                    })
                });
                b.browser.msie ? b(a.editorDoc).bind("beforedeactivate.wysiwyg",
                function() {
                    a.savedRange = a.getInternalRange()
                }) : b(a.editorDoc).bind("blur.wysiwyg",
                function() {
                    a.savedRange = a.getInternalRange()
                });
                b(a.editorDoc.body).addClass("wysiwyg");
                a.options.events && a.options.events.save && (c = a.options.events.save, b(a.editorDoc).bind("keyup.wysiwyg", c), b(a.editorDoc).bind("change.wysiwyg", c), b.support.noCloneEvent ? b(a.editorDoc).bind("input.wysiwyg", c) : (b(a.editorDoc).bind("paste.wysiwyg", c), b(a.editorDoc).bind("cut.wysiwyg", c)));
                if (a.options.xhtml5 && a.options.unicode) {
                    var d = {
                        ne: 8800,
                        le: 8804,
                        para: 182,
                        xi: 958,
                        darr: 8595,
                        nu: 957,
                        oacute: 243,
                        Uacute: 218,
                        omega: 969,
                        prime: 8242,
                        pound: 163,
                        igrave: 236,
                        thorn: 254,
                        forall: 8704,
                        emsp: 8195,
                        lowast: 8727,
                        brvbar: 166,
                        alefsym: 8501,
                        nbsp: 160,
                        delta: 948,
                        clubs: 9827,
                        lArr: 8656,
                        Omega: 937,
                        Auml: 196,
                        cedil: 184,
                        and: 8743,
                        plusmn: 177,
                        ge: 8805,
                        raquo: 187,
                        uml: 168,
                        equiv: 8801,
                        laquo: 171,
                        rdquo: 8221,
                        Epsilon: 917,
                        divide: 247,
                        fnof: 402,
                        chi: 967,
                        Dagger: 8225,
                        iacute: 237,
                        rceil: 8969,
                        sigma: 963,
                        Oslash: 216,
                        acute: 180,
                        frac34: 190,
                        lrm: 8206,
                        upsih: 978,
                        Scaron: 352,
                        part: 8706,
                        exist: 8707,
                        nabla: 8711,
                        image: 8465,
                        prop: 8733,
                        zwj: 8205,
                        omicron: 959,
                        aacute: 225,
                        Yuml: 376,
                        Yacute: 221,
                        weierp: 8472,
                        rsquo: 8217,
                        otimes: 8855,
                        kappa: 954,
                        thetasym: 977,
                        harr: 8596,
                        Ouml: 214,
                        Iota: 921,
                        ograve: 242,
                        sdot: 8901,
                        copy: 169,
                        oplus: 8853,
                        acirc: 226,
                        sup: 8835,
                        zeta: 950,
                        Iacute: 205,
                        Oacute: 211,
                        crarr: 8629,
                        Nu: 925,
                        bdquo: 8222,
                        lsquo: 8216,
                        apos: 39,
                        Beta: 914,
                        eacute: 233,
                        egrave: 232,
                        lceil: 8968,
                        Kappa: 922,
                        piv: 982,
                        Ccedil: 199,
                        ldquo: 8220,
                        Xi: 926,
                        cent: 162,
                        uarr: 8593,
                        hellip: 8230,
                        Aacute: 193,
                        ensp: 8194,
                        sect: 167,
                        Ugrave: 217,
                        aelig: 230,
                        ordf: 170,
                        curren: 164,
                        sbquo: 8218,
                        macr: 175,
                        Phi: 934,
                        Eta: 919,
                        rho: 961,
                        Omicron: 927,
                        sup2: 178,
                        euro: 8364,
                        aring: 229,
                        Theta: 920,
                        mdash: 8212,
                        uuml: 252,
                        otilde: 245,
                        eta: 951,
                        uacute: 250,
                        rArr: 8658,
                        nsub: 8836,
                        agrave: 224,
                        notin: 8713,
                        ndash: 8211,
                        Psi: 936,
                        Ocirc: 212,
                        sube: 8838,
                        szlig: 223,
                        micro: 181,
                        not: 172,
                        sup1: 185,
                        middot: 183,
                        iota: 953,
                        ecirc: 234,
                        lsaquo: 8249,
                        thinsp: 8201,
                        sum: 8721,
                        ntilde: 241,
                        scaron: 353,
                        cap: 8745,
                        atilde: 227,
                        lang: 10216,
                        __replacement: 65533,
                        isin: 8712,
                        gamma: 947,
                        Euml: 203,
                        ang: 8736,
                        upsilon: 965,
                        Ntilde: 209,
                        hearts: 9829,
                        Alpha: 913,
                        Tau: 932,
                        spades: 9824,
                        dagger: 8224,
                        THORN: 222,
                        "int": 8747,
                        lambda: 955,
                        Eacute: 201,
                        Uuml: 220,
                        infin: 8734,
                        rlm: 8207,
                        Aring: 197,
                        ugrave: 249,
                        Egrave: 200,
                        Acirc: 194,
                        rsaquo: 8250,
                        ETH: 208,
                        oslash: 248,
                        alpha: 945,
                        Ograve: 210,
                        Prime: 8243,
                        mu: 956,
                        ni: 8715,
                        real: 8476,
                        bull: 8226,
                        beta: 946,
                        icirc: 238,
                        eth: 240,
                        prod: 8719,
                        larr: 8592,
                        ordm: 186,
                        perp: 8869,
                        Gamma: 915,
                        reg: 174,
                        ucirc: 251,
                        Pi: 928,
                        psi: 968,
                        tilde: 732,
                        asymp: 8776,
                        zwnj: 8204,
                        Agrave: 192,
                        deg: 176,
                        AElig: 198,
                        times: 215,
                        Delta: 916,
                        sim: 8764,
                        Otilde: 213,
                        Mu: 924,
                        uArr: 8657,
                        circ: 710,
                        theta: 952,
                        Rho: 929,
                        sup3: 179,
                        diams: 9830,
                        tau: 964,
                        Chi: 935,
                        frac14: 188,
                        oelig: 339,
                        shy: 173,
                        or: 8744,
                        dArr: 8659,
                        phi: 966,
                        iuml: 239,
                        Lambda: 923,
                        rfloor: 8971,
                        iexcl: 161,
                        cong: 8773,
                        ccedil: 231,
                        Icirc: 206,
                        frac12: 189,
                        loz: 9674,
                        rarr: 8594,
                        cup: 8746,
                        radic: 8730,
                        frasl: 8260,
                        euml: 235,
                        OElig: 338,
                        hArr: 8660,
                        Atilde: 195,
                        Upsilon: 933,
                        there4: 8756,
                        ouml: 246,
                        oline: 8254,
                        Ecirc: 202,
                        yacute: 253,
                        auml: 228,
                        permil: 8240,
                        sigmaf: 962,
                        iquest: 191,
                        empty: 8709,
                        pi: 960,
                        Ucirc: 219,
                        supe: 8839,
                        Igrave: 204,
                        yen: 165,
                        rang: 10217,
                        trade: 8482,
                        lfloor: 8970,
                        minus: 8722,
                        Zeta: 918,
                        sub: 8834,
                        epsilon: 949,
                        yuml: 255,
                        Sigma: 931,
                        Iuml: 207,
                        ocirc: 244
                    };
                    a.events.bind("getContent",
                    function(a) {
                        return a.replace(/&(?:amp;)?(?!amp|lt|gt|quot)([a-z][a-z0-9]*);/gi,
                        function(a, b) {
                            d[b] || (b = b.toLowerCase(), d[b] || (b = "__replacement"));
                            return String.fromCharCode(d[b])
                        })
                    })
                }
                b(a.original).trigger("ready.jwysiwyg", [a.editorDoc, a])
            };
            this.innerDocument = function() {
                var a = this.editor.get(0);
                if ("iframe" === a.nodeName.toLowerCase()) {
                    if (a.contentDocument) return a.contentDocument;
                    if (a.contentWindow) return a.contentWindow.document;
                    if (this.isDestroyed) return null;
                    k.error("Unexpected error in innerDocument")
                }
                return a
            };
            this.insertHtml = function(a) {
                var c;
                if (!a || 0 === a.length) return this;
                b.browser.msie || b.browser.mozilla && "11.0" == b.browser.version ? (this.ui.focus(), this.editorDoc.execCommand("insertImage", !1, "#jwysiwyg#"), (c = this.getElementByAttributeValue("img", "src", "#jwysiwyg#")) && b(c).replaceWith(a)) : b.browser.mozilla ? 1 === b(a).length ? (c = this.getInternalRange(), c.deleteContents(), c.insertNode(b(a).get(0))) : this.editorDoc.execCommand("insertHTML", !1, a) : this.editorDoc.execCommand("insertHTML", !1, a) || (this.editor.focus(), this.editorDoc.execCommand("insertHTML", !1, a));
                this.saveContent();
                return this
            };
            this.parseControls = function() {
                var a = this;
                b.each(this.options.controls,
                function(c, d) {
                    b.each(d,
                    function(d) {
                        if ( - 1 === b.inArray(d, a.availableControlProperties)) throw c + '["' + d + '"]: property "' + d + '" not exists in Wysiwyg.availableControlProperties';
                    })
                });
                return this.options.parseControls ? this.options.parseControls.call(this) : this.options.controls
            };
            this.removeFormat = function() {
                b.browser.msie && this.ui.focus();
                this.options.removeHeadings && this.editorDoc.execCommand("formatBlock", !1, "<p>");
                this.editorDoc.execCommand("removeFormat", !1, null);
                this.editorDoc.execCommand("unlink", !1, null);
                b.wysiwyg.rmFormat && b.wysiwyg.rmFormat.enabled && ("object" === typeof this.options.plugins.rmFormat.rmMsWordMarkup ? b.wysiwyg.rmFormat.run(this, {
                    rules: {
                        msWordMarkup: this.options.plugins.rmFormat.rmMsWordMarkup
                    }
                }) : b.wysiwyg.rmFormat.run(this, {
                    rules: {
                        msWordMarkup: {
                            enabled: !0
                        }
                    }
                }));
                return this
            };
            this.ui.removeHoverClass = function() {
                b(this).removeClass("wysiwyg-button-hover")
            };
            this.resetFunction = function() {
                this.setContent(this.initialContent)
            };
            this.saveContent = function(a) {
                if (!this.viewHTML) {
                    if (this.original) {
                        a = "function" === typeof a ? a(this.getContent()) : this.getContent();
                        this.options.rmUnwantedBr && (a = a.replace(/<br\/?>$/, ""));
                        this.options.replaceDivWithP && (a = b("<div/>").addClass("temp").append(a), a.children("div").each(function() {
                            var a = b(this),
                            c = a.find("p"),
                            f;
                            if (0 === c.length) {
                                c = b("<p></p>");
                                if (0 < this.attributes.length) for (f = 0; f < this.attributes.length; f += 1) c.attr(this.attributes[f].name, a.attr(this.attributes[f].name));
                                c.append(a.html());
                                a.replaceWith(c)
                            }
                        }), a = a.html());
                        var c = b.Event("change");
                        c.source = this;
                        b(this.original).val(a).trigger(c);
                        this.options.events && this.options.events.save && this.options.events.save.call(this)
                    }
                    return this
                }
            };
            this.setContent = function(a) {
                this.editorDoc.body.innerHTML = a;
                this.saveContent();
                return this
            };
            this.triggerControl = function(a, b) {
                var d = b.command || a,
                e = b.arguments || [];
                if (b.exec) b.exec.apply(this);
                else {
                    this.ui.focus();
                    this.ui.withoutCss();
                    try {
                        this.editorDoc.execCommand(d, !1, e)
                    } catch(f) {
                        k.error(f)
                    }
                }
                this.options.autoSave && this.autoSaveFunction()
            };
            this.triggerControlCallback = function(a) {
                b(g).trigger("trigger-" + a + ".wysiwyg", [this])
            };
            this.ui.withoutCss = function() {
                var a = this.self;
                if (b.browser.mozilla) try {
                    a.editorDoc.execCommand("styleWithCSS", !1, !1)
                } catch(c) {
                    try {
                        a.editorDoc.execCommand("useCSS", !1, !0)
                    } catch(d) {}
                }
                return a
            };
            this.wrapInitialContent = function() {
                return this.initialContent
            }
        }
        var k = g.console || {
            log: b.noop,
            error: function(a) {
                b.error(a)
            }
        },
        p = b.fn.prop !== l && b.fn.removeProp !== l;
        b.browser === l && (b.browser = function() {
            var a, b;
            a = navigator.userAgent;
            a = a.toLowerCase();
            b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            a = b[1] || "";
            b = b[2] || "0";
            var d = {};
            a && (d[a] = !0, d.version = b);
            d.chrome ? d.webkit = !0 : d.webkit && (d.safari = !0);
            return d
        } ());
        b.wysiwyg = {
            messages: {
                noObject: "Something goes wrong, check object"
            },
            addControl: function(a, c, d) {
                return a.each(function() {
                    var a = b(this).data("wysiwyg"),
                    f = {};
                    if (!a) return this;
                    f[c] = b.extend(!0, {
                        visible: !0,
                        custom: !0
                    },
                    d);
                    b.extend(!0, a.options.controls, f);
                    f = b(a.options.toolbarHtml);
                    a.ui.toolbar.replaceWith(f);
                    a.ui.toolbar = f;
                    a.ui.appendControls()
                })
            },
            clear: function(a) {
                return a.each(function() {
                    var a = b(this).data("wysiwyg");
                    if (!a) return this;
                    a.setContent("")
                })
            },
            console: k,
            destroy: function(a) {
                return a.each(function() {
                    var a = b(this).data("wysiwyg");
                    if (!a) return this;
                    a.destroy()
                })
            },
            document: function(a) {
                return (a = a.data("wysiwyg")) ? b(a.editorDoc) : l
            },
            focus: function(a) {
                var b = a.data("wysiwyg");
                if (!b) return l;
                b.ui.focus();
                return a
            },
            getContent: function(a) {
                return (a = a.data("wysiwyg")) ? a.getContent() : l
            },
            getSelection: function(a) {
                return (a = a.data("wysiwyg")) ? a.getRangeText() : l
            },
            init: function(a, c) {
                return a.each(function() {
                    var a = b.extend(!0, {},
                    c),
                    e;
                    "textarea" !== this.nodeName.toLowerCase() || b(this).data("wysiwyg") || (e = new n, e.init(this, a), b.data(this, "wysiwyg", e), b(e.editorDoc).trigger("afterInit.wysiwyg"))
                })
            },
            insertHtml: function(a, c) {
                return a.each(function() {
                    var a = b(this).data("wysiwyg");
                    if (!a) return this;
                    a.insertHtml(c)
                })
            },
            plugin: {
                listeners: {},
                bind: function(a) {
                    var c = this,
                    d = function() {
                        return function(c) {
                            var d = c.data.plugin.name;
                            b.wysiwyg[d][c.data.plugin.method].apply(b.wysiwyg[d], [a])
                        }
                    };
                    b.each(this.listeners,
                    function(e, f) {
                        var h, g;
                        for (h = 0; h < f.length; h += 1) g = c.parseName(f[h]),
                        b(a.editorDoc).bind(e + ".wysiwyg", {
                            plugin: g
                        },
                        d())
                    })
                },
                exists: function(a) {
                    if ("string" !== typeof a) return ! 1;
                    a = this.parseName(a);
                    return b.wysiwyg[a.name] && b.wysiwyg[a.name][a.method] ? !0 : !1
                },
                listen: function(a, c) {
                    var d;
                    d = this.parseName(c);
                    if (!b.wysiwyg[d.name] || !b.wysiwyg[d.name][d.method]) return ! 1;
                    this.listeners[a] || (this.listeners[a] = []);
                    this.listeners[a].push(c);
                    return ! 0
                },
                parseName: function(a) {
                    if ("string" !== typeof a) return ! 1;
                    a = a.split(".");
                    return 2 > a.length ? !1 : {
                        name: a[0],
                        method: a[1]
                    }
                },
                register: function(a) {
                    a.name || k.error("Plugin name missing");
                    b.each(b.wysiwyg,
                    function(b) {
                        b === a.name && k.error("Plugin with name '" + a.name + "' was already registered")
                    });
                    b.wysiwyg[a.name] = a;
                    return ! 0
                }
            },
            quirk: {
                quirks: [],
                assert: function(a, b) {
                    if (!a) throw Error(b);
                },
                register: function(a) {
                    this.assert("function" === typeof a.init, "quirk.init must be a function");
                    this.quirks.push(a)
                }
            },
            removeFormat: function(a) {
                return a.each(function() {
                    var a = b(this).data("wysiwyg");
                    if (!a) return this;
                    a.removeFormat()
                })
            },
            save: function(a) {
                return a.each(function() {
                    var a = b(this).data("wysiwyg");
                    if (!a) return this;
                    a.saveContent()
                })
            },
            selectAll: function(a) {
                var b = a.data("wysiwyg");
                if (!b) return this;
                a = b.editorDoc.body;
                g.getSelection ? (b = b.getInternalSelection(), b.selectAllChildren(a)) : (b = a.createTextRange(), b.moveToElementText(a), b.select())
            },
            setContent: function(a, c) {
                return a.each(function() {
                    var a = b(this).data("wysiwyg");
                    if (!a) return this;
                    a.setContent(c)
                })
            },
            triggerControl: function(a, c) {
                return a.each(function() {
                    var a = b(this).data("wysiwyg");
                    if (!a) return this;
                    a.controls[c] || k.error("Control '" + c + "' not exists");
                    a.triggerControl.apply(a, [c, a.controls[c]])
                })
            },
            support: {
                prop: p
            },
            utils: {
                extraSafeEntities: [["<", ">", "'", '"', " "], [32]],
                encodeEntities: function(a) {
                    var c = this,
                    d, e = [];
                    0 === this.extraSafeEntities[1].length && b.each(this.extraSafeEntities[0],
                    function(a, b) {
                        c.extraSafeEntities[1].push(b.charCodeAt(0))
                    });
                    d = a.split("");
                    b.each(d,
                    function(a) {
                        var h = d[a].charCodeAt(0);
                        b.inArray(h, c.extraSafeEntities[1]) && (65 > h || 127 < h || 90 < h && 97 > h) ? e.push("&#" + h + ";") : e.push(d[a])
                    });
                    return e.join("")
                }
            }
        };
        b.wysiwyg.dialog = function(a, c) {
            var d = new b.wysiwyg.dialog.createDialog(a && a.options && a.options.dialog ? a.options.dialog: c.theme ? c.theme: "default"),
            e = this,
            f = b(e);
            this.options = {
                modal: !0,
                draggable: !0,
                title: "Title",
                content: "Content",
                width: "auto",
                height: "auto",
                zIndex: 2E3,
                open: !1,
                close: !1
            };
            this.isOpen = !1;
            b.extend(this.options, c);
            this.object = d;
            this.open = function() {
                this.isOpen = !0;
                d.init.apply(e, []);
                var a = d.show.apply(e, []);
                f.trigger("afterOpen", [a])
            };
            this.show = function() {
                this.isOpen = !0;
                f.trigger("beforeShow");
                f.trigger("afterShow")
            };
            this.hide = function() {
                this.isOpen = !1;
                f.trigger("beforeHide");
                var a = d.hide.apply(e, []);
                f.trigger("afterHide", [a])
            };
            this.close = function() {
                this.isOpen = !1;
                var b = d.hide.apply(e, []);
                f.trigger("beforeClose", [b]);
                d.destroy.apply(e, []);
                f.trigger("afterClose", [b]);
                a.ui.focus()
            };
            this.options.open && f.bind("afterOpen", this.options.open);
            this.options.close && f.bind("afterClose", this.options.close);
            return this
        };
        b.extend(!0, b.wysiwyg.dialog, {
            _themes: {},
            _theme: "",
            register: function(a, c) {
                b.wysiwyg.dialog._themes[a] = c
            },
            deregister: function(a) {
                delete b.wysiwyg.dialog._themes[a]
            },
            createDialog: function(a) {
                return new b.wysiwyg.dialog._themes[a]
            },
            getDimensions: function() {
                var a = m.body.scrollWidth,
                c = m.body.scrollHeight;
                b.browser.opera && (c = Math.max(b(m).height(), b(g).height(), m.documentElement.clientHeight));
                return [a, c]
            }
        });
        b(function() {
            b.ui && b.wysiwyg.dialog.register("jqueryui",
            function() {
                var a = this;
                this._$dialog = null;
                this.init = function() {
                    var c = this.options.content;
                    "object" === typeof c && ("function" === typeof c.html ? c = c.html() : "function" === typeof c.toString && (c = c.toString()));
                    a._$dialog = b("<div></div>").attr("title", this.options.title).html(c);
                    a._$dialog.dialog({
                        modal: this.options.modal,
                        draggable: this.options.draggable,
                        height: "auto" === this.options.height ? 300 : this.options.height,
                        width: "auto" === this.options.width ? 450 : this.options.width
                    });
                    return a._$dialog
                };
                this.show = function() {
                    a._$dialog.dialog("open");
                    return a._$dialog
                };
                this.hide = function() {
                    a._$dialog.dialog("close");
                    return a._$dialog
                };
                this.destroy = function() {
                    a._$dialog.dialog("destroy");
                    return a._$dialog
                }
            });
            b.wysiwyg.dialog.register("default",
            function() {
                var a = this;
                this._$dialog = null;
                this.init = function() {
                    var c = this,
                    d = this.options.content;
                    "object" === typeof d && ("function" === typeof d.html ? d = d.html() : "function" === typeof d.toString && (d = d.toString()));
                    a._$dialog = b('<div class="wysiwyg-dialog"></div>').css({
                        "z-index": this.options.zIndex
                    });
                    var e = b('<div class="wysiwyg-dialog-topbar"><div class="wysiwyg-dialog-close-wrapper"></div><div class="wysiwyg-dialog-title">' + this.options.title + "</div></div>"),
                    f = b('<a href="#" class="wysiwyg-dialog-close-button">X</a>');
                    f.click(function() {
                        c.close()
                    });
                    e.find(".wysiwyg-dialog-close-wrapper").prepend(f);
                    d = b('<div class="wysiwyg-dialog-content">' + d + "</div>");
                    a._$dialog.append(e).append(d);
                    e = "auto" === this.options.height ? 300 : this.options.height;
                    d = "auto" === this.options.width ? 450 : this.options.width;
                    a._$dialog.hide().css({
                        width: d,
                        height: e,
                        left: (b(g).width() - d) / 2,
                        top: (b(g).height() - e) / 3
                    });
                    b("body").append(a._$dialog);
                    return a._$dialog
                };
                this.show = function() {
                    if (this.options.modal) {
                        var c = b.wysiwyg.dialog.getDimensions(),
                        c = b('<div class="wysiwyg-dialog-modal-div"></div>').css({
                            width: c[0],
                            height: c[1]
                        });
                        a._$dialog.wrap(c)
                    }
                    if (this.options.draggable) {
                        var d = !1;
                        a._$dialog.find("div.wysiwyg-dialog-topbar").bind("mousedown",
                        function(a) {
                            a.preventDefault();
                            b(this).css({
                                cursor: "move"
                            });
                            var c = b(this),
                            h = b(this).parents(".wysiwyg-dialog"),
                            g = a.pageX - parseInt(h.css("left"), 10),
                            k = a.pageY - parseInt(h.css("top"), 10);
                            d = !0;
                            b(this).css({
                                cursor: "move"
                            });
                            b(m).bind("mousemove",
                            function(a) {
                                a.preventDefault();
                                d && h.css({
                                    top: a.pageY - k,
                                    left: a.pageX - g
                                })
                            }).bind("mouseup",
                            function(a) {
                                a.preventDefault();
                                d = !1;
                                c.css({
                                    cursor: "auto"
                                });
                                b(m).unbind("mousemove").unbind("mouseup")
                            })
                        })
                    }
                    a._$dialog.show();
                    return a._$dialog
                };
                this.hide = function() {
                    a._$dialog.hide();
                    return a._$dialog
                };
                this.destroy = function() {
                    this.options.modal && a._$dialog.unwrap();
                    this.options.draggable && a._$dialog.find("div.wysiwyg-dialog-topbar").unbind("mousedown");
                    a._$dialog.remove();
                    return a._$dialog
                }
            })
        });
        b.browser === l && (jQuery.browser = function() {
            var a, b;
            a = navigator.userAgent;
            a = a.toLowerCase();
            b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            a = b[1] || "";
            b = b[2] || "0";
            var d = {};
            a && (d[a] = !0, d.version = b);
            d.chrome ? d.webkit = !0 : d.webkit && (d.safari = !0);
            return d
        });
        b.fn.wysiwyg = function(a) {
            var c = arguments,
            d;
            if ("undefined" !== typeof b.wysiwyg[a]) return c = Array.prototype.concat.call([c[0]], [this], Array.prototype.slice.call(c, 1)),
            b.wysiwyg[a].apply(b.wysiwyg, Array.prototype.slice.call(c, 1));
            if ("object" !== typeof a && a) {
                if (b.wysiwyg.plugin.exists(a)) return d = b.wysiwyg.plugin.parseName(a),
                c = Array.prototype.concat.call([c[0]], [this], Array.prototype.slice.call(c, 1)),
                b.wysiwyg[d.name][d.method].apply(b.wysiwyg[d.name], Array.prototype.slice.call(c, 1));
                k.error("Method '" + a + "' does not exist on jQuery.wysiwyg.\nTry to include some extra controls or plugins")
            } else return Array.prototype.unshift.call(c, this),
            b.wysiwyg.init.apply(b.wysiwyg, c)
        };
        b.fn.getWysiwyg = function() {
            return this.data("wysiwyg")
        }
    })
})(window, document);