var UserIDApplyUpload;
UserIDApplyUpload || (UserIDApplyUpload = {});
var Flash = {
    getFileData: function(a, c) {
        UserIDApplyUpload.addFile(c, "data:;base64," + a)
    }
}; (function() {
    UserIDApplyUpload = {
        files: [],
        fileIndex: 0,
        fileListUL: "",
        fileItemFormat: "",
        hasFile:false,
        initButton: function(a, c, d) {
            var b = UserIDApplyUpload;
            b.fileListUL = c;
            b.fileItemFormat = d;
            b.files = [];
            b.fileIndex = 0;
            "function" !== typeof FileReader ? swfobject.embedSWF("/Plugins/FileBase64/Attachment/FileToDataURI.swf", a, "80px", "23px", "10", "/Plugins/FileBase64/expressInstall.swf", {},
            {},
            {}) : (c = "#" + a, a = ['<span class="btn imageSpan upload-btn btn-success fileinput-button" style="cursor:pointer"><span>添加图片</span>', '<form id="file-objectform"><input type="file" style="width: 160px;" id="' + a + '" value="" /></form></span>'].join(""), $(c).replaceWith(a), $(c).on("change",
            function(a) {
                if (a.target.files && 0 != a.target.files.length) if (2 <= UserIDApplyUpload.files.length) ZENG.msgbox.show("最多可上传5个附件", 4, 2E3);
                else {
                    var c = new FileReader,
                    e = a.target.files[0],
                    d = e.size / 1024;
                    "image/jpg" != e.type && "image/png" != e.type && "image/jpeg" != e.type ? ZENG.msgbox.show("仅支持JPG、JPEG、PNG格式", 4, 1E3) : 2048 < d ? ZENG.msgbox.show("单个图片最大可上传2M", 4, 2E3) : (c.onload = function(a) {
                        b.addFile(e.name, a.target.result, d.toFixed(2))
                    },
                    c.readAsDataURL(e))
                }
            }))
        },
        addFile: function(a, c, d) {
            var b = UserIDApplyUpload;
            b.fileIndex++;
            b.files = [];
            b.hasFile = true;
            b.files.push({
                FileName: a,
                File: c,
                Index: b.fileIndex,
                Size: d,
                Type: 2
            });
            for (var f = a = 0; f < b.files.length; f++) a = parseFloat(b.files[f].Size) + parseFloat(a);
            a = b.fileItemFormat;
            $(b.fileListUL).empty();
            $(String.format(a, c, d)).appendTo($(b.fileListUL));
            $(b.fileListUL).children().last().data("index", b.fileIndex);
            UserCenter.InitIDcheckClick()
        }
    }
})();