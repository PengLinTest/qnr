var BaseInfoImgAttachment;
BaseInfoImgAttachment || (BaseInfoImgAttachment = {});
var Flash = {
    getFileData: function(a, b) {
        var e = "data:image/jpeg;base64," + a;
        $("#target").prop({
            src: e
        });
        BaseInfoImgAttachment.addFile(b, file)
    }
};
BaseInfoImgAttachment = {
    files: [],
    fileIndex: 0,
    fileListUL: "",
    fileItemFormat: "",
    initButton: function(a, b, e) {
        var d = BaseInfoImgAttachment;
        d.fileListUL = b;
        d.fileItemFormat = e;
        d.files = [];
        d.fileIndex = 0;
        "function" !== typeof FileReader ? swfobject.embedSWF("/Plugins/FileBase64/Attachment/FileToDataURI.swf", a, "80px", "23px", "10", "/Plugins/FileBase64/expressInstall.swf", {},
        {},
        {}) : (b = "#" + a, a = ['<span class="imageSpan upload-btn btn-success fileinput-button" style="cursor:pointer"><span>\u6dfb\u52a0\u56fe\u7247</span>', '<form id="file-objectform"><input type="file" style="width: 160px;" id="' + a + '" value="" /></form></span>'].join(""), $(b).replaceWith(a), $(b).on("change",
        function(a) {
            if (a.target.files && 0 != a.target.files.length) if (BaseInfoImgAttachment.files = [], $(".BaseInfoImgAttachment").empty(), 5 <= BaseInfoImgAttachment.files.length) ZENG.msgbox.show("\u6700\u591a\u53ef\u4e0a\u4f205\u4e2a\u9644\u4ef6\u3002", 4, 2E3);
            else {
                var b = new FileReader,
                c = a.target.files[0],
                e = c.size / 1024;
                "image/jpg" != c.type && "image/png" != c.type && "image/jpeg" != c.type ? ZENG.msgbox.show("\u4ec5\u652f\u6301JPG\u3001JPEG\u3001PNG\u683c\u5f0f\u3002", 4, 1E3) : 1024 < e ? ZENG.msgbox.show("\u5355\u4e2a\u9644\u4ef6\u6700\u5927\u53ef\u4f201M\u3002", 4, 2E3) : (b.onload = function(a) {
                    d.addFile(c.name, a.target.result, e.toFixed(2))
                },
                b.readAsDataURL(c))
            }
        }))
    },
    addFile: function(a, b, e) {
        var d = BaseInfoImgAttachment;
        d.fileIndex++;
        d.files.push({
            FileName: a,
            File: b,
            Index: d.fileIndex,
            Size: e,
            Type: 2
        });
        for (var f = a = 0; f < d.files.length; f++) a = parseFloat(d.files[f].Size) + parseFloat(a);
        $(String.format(d.fileItemFormat, b, e)).appendTo($(d.fileListUL));
        $(d.fileListUL).children().last().data("index", d.fileIndex);
        $(d.fileListUL).children().last().find(".deleteImg").unbind("click").click(function(c) {
            c.preventDefault();
            c = $(this).parents("dd").first();
            var a = c.data("index");
            c.remove();
            d.files = $.grep(d.files,
            function(c) {
                return c.Index != a
            });
            return ! 1
        });
        $("#target").attr("src", b);
        var g = new jQuery.UtrialAvatarCutter({
            content: "picture_original",
            contentImgId: "target",
            purviews: [{
                id: "picture_200",
                width: 200,
                height: 200
            }],
            selector: {
                width: 200,
                height: 200
            }
        });
        g.reload(b);
        $("#saveImg").unbind("click").click(function(c) {
            c = g.submit();
            var a = $("#" + c.img_content_id + " img")[0].width,
            d = $("#" + c.img_content_id + " img")[0].height,
            b = "";
            if (0 < BaseInfoImgAttachment.files.length) {
                for (var e = 0; e < BaseInfoImgAttachment.files.length; e++) b += BaseInfoImgAttachment.files[e].File + "," + BaseInfoImgAttachment.files[e].FileName + "," + BaseInfoImgAttachment.files[e].Size + "," + BaseInfoImgAttachment.files[e].Index + "," + BaseInfoImgAttachment.files[e].Type + "|";
                b = b.substring(0, b.length - 1)
            }
            $.ajax({
                url: "?action=ToolUse",
                type:"post",
                data: {
                	htmlMethod:"cutAndSaveImg",
                	files: b,
                    PointX: c.x,
                    PointY: c.y,
                    CutWidth: c.w,
                    CutHeight: c.h,
                    PicWidth: a,
                    PicHeight: d
                },
                dataType:"json",
                success: function(response) {
                    if (response.result) {
                        $(".ImgCutAttachment").empty();
                        var b;
                        b = '<dd class="imagesadd"><p class="imgAttachment" style="cursor: pointer">' + ("<img src=" + response.src + ">");
                        b += '<s class="deleteImg" onclick="$(\'.imagesadd\').remove();"></s></p></dd>';
                        $(".ImgCutAttachment").html(b);
                        $(".ImgCutAttachment").data("LogoIcon", response.src);
                        $("#ImgCutDialogID").dialog("destroy");
                    }
                },
                mask: function() {
                    $("#ImgCutDialogID").mask("正在保存图片,请稍候...")
                },
                unmask: function() {
                    $("#ImgCutDialogID").unmask()
                }
            })
        })
    }
};