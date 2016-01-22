var PublishUploadGrowImg;
PublishUploadGrowImg || (PublishUploadGrowImg = {});
var Flash = {
    getFileData: function(a, c) {
        PublishUploadGrowImg.addFile(c, "data:;base64," + a)
    }
}; (function() {
    PublishUploadGrowImg = {
        files: [],
        fileIndex: 0,
        fileListUL: "",
        fileItemFormat: "",
        initButton: function(a, c, d) {
            var b = PublishUploadGrowImg;
            b.fileListUL = c;
            b.fileItemFormat = d;
            b.files = [];
            b.fileIndex = 0;
            "function" !== typeof FileReader ? swfobject.embedSWF("/Plugins/FileBase64/Attachment/FileToDataURI.swf", a, "80px", "23px", "10", "/Plugins/FileBase64/expressInstall.swf", {},
            {},
            {}) : (c = "#" + a, a = "" + ('<form id="file-objectform"><input type="file" style="width: 160px;" id="' + a + '" value="" /></form>'), $(c).replaceWith(a), $(c).on("change",
            function(a) {
                if (a.target.files && 0 != a.target.files.length) {
                    var c = new FileReader,
                    e = a.target.files[0],
                    d = e.size / 1024;
                    "image/jpg" != e.type && "image/png" != e.type && "image/jpeg" != e.type ? ZENG.msgbox.show("\u4ec5\u652f\u6301JPG\u3001JPEG\u3001PNG\u683c\u5f0f\u3002", 4, 1E3) : 2048 < d ? ZENG.msgbox.show("\u5355\u4e2a\u56fe\u7247\u6700\u5927\u53ef\u4f202M\u3002", 4, 2E3) : (c.onload = function(a) {
                        b.addFile(e.name, a.target.result, d.toFixed(2))
                    },
                    c.readAsDataURL(e))
                }
            }))
        },
        addFile: function(a, c, d) {
            var b = PublishUploadGrowImg;
            b.fileIndex++;
            b.files.push({
                FileName: a,
                File: c,
                Index: b.fileIndex,
                Size: d
            });
            for (d = a = 0; d < b.files.length; d++) a = parseFloat(b.files[d].Size) + parseFloat(a);
            $(String.format(b.fileItemFormat, c, b.fileIndex)).appendTo($(b.fileListUL));
            $(b.fileListUL).children().last().data("index", b.fileIndex);
            $(b.fileListUL).children().last().find(".GrowImgTime").datetimepicker({
                dateFormat: "yy-mm-dd",
                showSecond: !1,
                timeFormat: "HH:mm",
                stepHour: 1,
                stepMinute: 1,
                stepSecond: 1,
                hour: 23,
                minute: 59
            });
            $(b.fileListUL).children().last().find(".DeleteImagCard").unbind("click").click(function(a) {
                a.preventDefault();
                a = $(this).parents("div").first();
                var c = a.data("index");
                a.remove();
                b.files = $.grep(b.files,
                function(a) {
                    return a.Index != c
                });
                return ! 1
            })
        }
    }
})();