var common = {};
function GetCropVariety(a, b, c, f, g) {
    Service.post({
        url: "/TraceabilityService.svc/GetCropVariety",
        params: {
            UseType: c,
            OrgID: f,
            CropID: g
        },
        success: function(b) {
            if (b && b.Items) {
                b = b.Items;
                var d;
                d = "<option value='-1'>\u8bf7\u9009\u62e9\u54c1\u79cd</option>";
                for (var c = 0; c < b.length; c++) d = a == b[c].CropVarietyID ? d + ("<option value='" + b[c].CropVarietyID + "' selected>" + b[c].CropVarietyName + "</option>") : d + ("<option value='" + b[c].CropVarietyID + "'>" + b[c].CropVarietyName + "</option>");
                $("#txtCropVariety").empty();
                $("#txtCropVariety").append(d)
            }
        }
    })
}
function GetCrops(a, b, c, f) {
    Service.post({
        url: "/TraceabilityService.svc/GetCropVariety",
        params: {
            UseType: "GetCrops",
            CropID: ""
        },
        success: function(b) {
            if (b && b.Items) {
                b = b.Items;
                var c;
                c = "<option value='-1'>\u8bf7\u9009\u62e9\u4f5c\u7269</option>";
                for (var d = 0; d < b.length; d++) c = a == b[d].CropID ? c + ("<option value='" + b[d].CropID + "' selected>" + b[d].CropName + "</option>") : c + ("<option value='" + b[d].CropID + "'>" + b[d].CropName + "</option>");
                $("#selCrops").empty();
                $("#selCrops").append(c)
            }
        }
    })
}
function GetCropVarietybyBatch(a, b, c, f) {
    Service.post({
        url: "/TraceabilityService.svc/GetCropVariety",
        params: {
            UseType: c,
            OrgID: f
        },
        success: function(c) {
            if (c && c.Items) {
                c = c.Items;
                var f;
                f = "<option value='-1'>\u8bf7\u9009\u62e9\u54c1\u79cd</option>";
                for (var d = 0; d < c.length; d++) f = a == c[d].CropVarietyID ? f + ("<option value='" + c[d].CropVarietyID + "' selected>" + c[d].CropVarietyName + "</option>") : f + ("<option value='" + c[d].CropVarietyID + "'>" + c[d].CropVarietyName + "</option>");
                $("#txtCropVarietybatch").empty();
                $("#txtCropVarietybatch").append(f);
                document.getElementById("txtCropVarietybatch").disabled = null == b ? "": "disabled"
            }
        }
    })
}
function showCropInfo(a) {
    a.checked ? $("#viewCropList1").show() : $("#viewCropList1").hide()
}
function getCropVarietyID(a) {
    var b = null;
    Service.post({
        url: "/TraceabilityService.svc/getCropVarietyIDByFlowID",
        params: {
            FlowStructID: a
        },
        async: !1,
        success: function(a) {
            void 0 != a.Items[0] && (b = a.Items[0].CropVarietyID + "|" + a.Items[0].CropID)
        }
    });
    return null == b ? [ - 1, -1] : b.split("|")
}
function toBreakWord(a, b) {
    return a ? a.length > b ? a.substr(0, b) + "\u2026\u2026": a: ""
}
function ChangeDate(a) {
    return a.replace("2000-", "")
}
function getLoginUserCompany(a, b) {
    Service.post({
        url: "/BaseService.svc/GetUserCompanyID",
        params: {
            UserID: a,
            FunctionID: 60
        },
        success: function(a) {
            a && 0 < a.CompanyID && initTree(a.CompanyID, b)
        }
    })
}
function initTree(a, b) {
    a || (a = user.CompanyID);
    var c = {
        data: {
            simpleData: {
                enable: !0
            }
        },
        callback: {
            onClick: function(a, c, h, d) {
                h && (common.TreeNode = h, "TraceabilityMain" == b ? SelectProInitTree(h) : "TraceabilityBatch" == b ? SelectProBatchTree(h) : "TraceabilityRecords" == b && SelectTraceTree(h))
            },
            beforeClick: function(a, b, c, d) {}
        }
    };
    Service.post({
        url: "/BaseService.svc/GetOrgStructsandOrgCustom",
        params: {
            UserID: user.UserID,
            FunctionID: 60
        },
        success: function(a) {
            a && a.Items && ($.fn.zTree.init($("#tree_Org"), c, a.Items), (a = $.fn.zTree.getZTreeObj("tree_Org")) && a.expandAll(!0), common.TreeNode && (a.selectNode(common.TreeNode), SelectTraceTree(common.TreeNode)))
        }
    })
}
function proCertified(a) {
    var b = $.fn.zTree.getZTreeObj("tree_Org").getSelectedNodes()[0];
    if ("" != a.orgid || 0 != a.type || void 0 != b && 50 == b.OrgType) {
        var c = "",
        c = void 0 == a.NickName ? b.Name: a.NickName;
        0 < $("#proCertifiedID").length && $("#proCertifiedID").remove();
        $("<div id='proCertifiedID'></div>").appendTo("body");
        Transfer.reload("#proCertifiedID", {
            url: "/AgriProTraceability/ProCertified.html",
            scripts: ["/AgriProTraceability/EditTraceabilityDetails/IDImgAttachment.js", "/AgriProTraceability/EditTraceabilityDetails/LincenseImgAttachment.js", "/AgriProTraceability/EditTraceabilityDetails/ProductCetificationImgAttachment.js", "/Plugins/FileBase64/swfobject.js"]
        },
        function() {
            Transfer.loadCSS(["/Plugins/WYSIWYG/jwysiwyg/jquery.wysiwyg.css", "/Plugins/FileBase64/Attachment/Attachment.css", "/Styles/Message2.css"]);
            $("#txtValidDate").datepicker({
                dateFormat: "yy-mm-dd",
                changeMonth: !0,
                changeYear: !0
            });
            $("#txtCertifiedDate").datepicker({
                dateFormat: "yy-mm-dd",
                changeMonth: !0,
                changeYear: !0
            });
            WysiwygInitial();
            var f = "",
            f = 50 == a.type ? "" == a.parentOrgid ? b.OrgID: a.parentOrgid: "" == a.orgid ? b.OrgID: a.orgid;
            getProCertifiedList(a.type, a.userid, a.batchid, f, a.productid);
            $("#SaveProCertified").unbind("click").click(function() {
                SaveProCertified({
                    type: a.type,
                    orgid: f,
                    userid: a.userid,
                    batchid: a.batchid,
                    productid: a.productid,
                    parentOrgid: a.orgid,
                    target: "" == a.orgid ? "OrgStruct": "TraceDetails"
                })
            });
            $("#CancelProCertified").unbind("click").click(function() {
                $("#proCertifiedID").remove()
            });
            $("#proCertifiedID").dialog({
                autoOpen: !0,
                width: 450,
                height: 470,
                title: "\u4fe1\u606f\u8ba4\u8bc1 >> " + c,
                modal: !0,
                resizable: !1,
                minHeight: 200,
                minWidth: 400,
                show: {
                    effect: "clip",
                    duration: 300
                },
                hide: {
                    effect: "clip",
                    duration: 300
                }
            }).dialog("open")
        })
    } else Messages.showFailMassgae("\u4ea7\u54c1\u8ba4\u8bc1\u9009\u62e9\u5730\u5757\u3002")
}
function SaveProCertified(a) {
    var b = "",
    c = "2000-01-01",
    f = "",
    g = "2000-01-01",
    h = $("#selCertifiedType").val();
    if ( - 1 == h) ZENG.msgbox.show("\u8bf7\u9009\u62e9\u8ba4\u8bc1\u7c7b\u578b!", 4, 2E3);
    else {
        var d = "",
        k = "",
        e, l;
        if (60 == a.type) {
            b = $("#txtCertifiedNo").val();
            c = $("#txtValidDate").val().replace(/(^\s*)|(\s*$)/g, "") || null;
            f = $("#txtCertifiedOrg").val();
            g = $("#txtCertifiedDate").val().replace(/(^\s*)|(\s*$)/g, "") || null;
            if (0 < IDImgAttachment.files.length) {
                for (e = 0; e < IDImgAttachment.files.length; e++) d += IDImgAttachment.files[e].File + "," + IDImgAttachment.files[e].FileName + "," + IDImgAttachment.files[e].Size + "," + IDImgAttachment.files[e].Index + "," + IDImgAttachment.files[e].Type + "|";
                d = d.substring(0, d.length - 1)
            }
            e = $(".MessageImgAttachment").find("dd").find("img")
        } else if (50 == a.type) if (b = "OrgStruct" == a.target ? $("#txtCertifiedNo").val() : $("#txtLinceseNo").val(), c = "OrgStruct" == a.target ? $("#txtValidDate").val() : $("#txtLinceseValidDate").val().replace(/(^\s*)|(\s*$)/g, "") || null, f = "OrgStruct" == a.target ? $("#txtCertifiedOrg").val() : $("#txtLincenseOrg").val(), g = "OrgStruct" == a.target ? $("#txtCertifiedDate").val() : $("#txtLincenseDate").val().replace(/(^\s*)|(\s*$)/g, "") || null, "OrgStruct" == a.target) {
            if (0 < IDImgAttachment.files.length) {
                for (e = 0; e < IDImgAttachment.files.length; e++) d += IDImgAttachment.files[e].File + "," + IDImgAttachment.files[e].FileName + "," + IDImgAttachment.files[e].Size + "," + IDImgAttachment.files[e].Index + "," + IDImgAttachment.files[e].Type + "|";
                d = d.substring(0, d.length - 1)
            }
            e = $(".MessageImgAttachment").find("dd").find("img")
        } else {
            if (0 < LincenseImgAttachment.files.length) {
                for (e = 0; e < LincenseImgAttachment.files.length; e++) d += LincenseImgAttachment.files[e].File + "," + LincenseImgAttachment.files[e].FileName + "," + LincenseImgAttachment.files[e].Size + "," + LincenseImgAttachment.files[e].Index + "," + LincenseImgAttachment.files[e].Type + "|";
                d = d.substring(0, d.length - 1)
            }
            e = $(".CommentImgAttachment").find("dd").find("img")
        } else {
            b = $("#txtCertifiedNo").val();
            c = $("#txtValidDate").val().replace(/(^\s*)|(\s*$)/g, "") || null;
            f = $("#txtCertifiedOrg").val();
            g = $("#txtCertifiedDate").val().replace(/(^\s*)|(\s*$)/g, "") || null;
            if (0 < ProductCetificationImgAttachment.files.length) {
                for (e = 0; e < ProductCetificationImgAttachment.files.length; e++) d += ProductCetificationImgAttachment.files[e].File + "," + ProductCetificationImgAttachment.files[e].FileName + "," + ProductCetificationImgAttachment.files[e].Size + "," + ProductCetificationImgAttachment.files[e].Index + "," + ProductCetificationImgAttachment.files[e].Type + "|";
                d = d.substring(0, d.length - 1)
            }
            e = $(".ProductCetificationImgAttachment").find("dd").find("img")
        }
        if (0 < e.length) {
            for (var m = 0; m < e.length; m++) l = e[m].src.replace(getRootPath(), ""),
            -1 == l.indexOf("base64") && (k += l.replace("_550x500", "") + ":" + l + "|");
            k = k.substring(0, k.length - 1)
        }
        if (50 > a.type) {
            if ("" == b) {
                ZENG.msgbox.show("\u8bc1\u4e66\u7f16\u53f7\u4e0d\u80fd\u4e3a\u7a7a!", 4, 2E3);
                return
            }
            if (!c) {
                ZENG.msgbox.show("\u8bf7\u9009\u62e9\u6709\u6548\u671f\u9650!", 4, 2E3);
                return
            }
            if ("" == f) {
                ZENG.msgbox.show("\u9881\u8bc1\u673a\u6784\u4e0d\u80fd\u4e3a\u7a7a!", 4, 2E3);
                return
            }
            if (!g) {
                ZENG.msgbox.show("\u8bf7\u9009\u62e9\u9881\u8bc1\u65e5\u671f!", 4, 2E3);
                return
            }
            if (new Date(g.replace("-", "/")) > new Date(c.replace("-", "/"))) {
                ZENG.msgbox.show("\u9881\u8bc1\u65e5\u671f\u4e0d\u80fd\u5927\u4e8e\u6709\u6548\u671f\u9650!", 4, 2E3);
                return
            }
        }
        Service.post({
            url: "/TraceabilityService.svc/SaveProCertified",
            params: {
                CertifiedType: h,
                ValidDate: c,
                CertifiedOrg: f,
                CertifiedDate: g,
                AttachmentFile: d,
                ImgHistory: k,
                OrgID: a.orgid,
                CertifiedNo: b,
                ProductID: a.productid,
                BatchID: a.batchid,
                CreateUserID: a.userid,
                CertifiedStatus: 49 < a.type ? 0 : 1
            },
            success: function(b) {
                void 0 != b && ("SUCCESS" == b ? 49 < h ? (50 == a.type ? (Messages.slideResult("\u4fdd\u5b58\u6210\u529f\u3002\u8425\u4e1a\u6267\u7167\u8ba4\u8bc1\u9700\u8981\u7ecf\u8fc7\u5ba1\u6838\u3002", 3E3), LincenseImgAttachment.files.length = 0) : 60 == a.type && (Messages.slideResult("\u4fdd\u5b58\u6210\u529f\u3002\u8eab\u4efd\u8ba4\u8bc1\u9700\u8981\u7ecf\u8fc7\u5ba1\u6838\u3002", 3E3), IDImgAttachment.files.length = 0), "OrgStruct" == a.target ? getProCertifiedPics(h, a.orgid, "", 50 == h ? "piclist": "sfzpiclist", OrgStruct.logic.user.UserType, 0) : TraceRecords_getCompanyInfo(a.parentOrgid, a.orgid)) : (Messages.slideResult("\u4fdd\u5b58\u6210\u529f\u3002", 3E3), "TraceDetails" == a.target && getOrgProCertifiedData(a.productid), ProductCetificationImgAttachment.files.length = 0) : Messages.slideResult("\u4fdd\u5b58\u5931\u8d25\u3002", 3E3))
            }
        })
    }
}
function WysiwygInitial() {
    IDImgAttachment.initButton("upload_MessageImgAttachment", $(".MessageImgAttachment"), '<dd class="imagedd"><p class="imgAttachment" style="cursor: pointer"><img src="{0}"><s class="deleteImg IDdeleteImg"></s></p></dd>')
}
function getProCertifiedList(a, b, c, f, g) {
    Service.post({
        url: "/TraceabilityService.svc/getProCertifiedType",
        params: {
            Type: a
        },
        success: function(b) {
            if (b) {
                var d;
                d = "" + ('<select id="selCertifiedType" onchange="EditProductCetification.getProCertifiedData(this.value,' + f + ",'" + c + "','" + g + "');\">");
                d += '<option value="-1">\u8bf7\u9009\u62e9\u8ba4\u8bc1\u7c7b\u578b</option>';
                for (var k = 0; k < b.Items.length; k++) d += 50 <= a ? '<option value="' + b.Items[k].CertifiedType + '" selected="selected">': '<option value="' + b.Items[k].CertifiedType + '">',
                d += b.Items[k].CertifiedTypeName,
                d += "</option>";
                d += "</select>";
                $("#CertifiedTypeHtml").html(d);
                $("#LicenseTypeHtml").html(d); - 1 < $("#selCertifiedType").val() && getProCertifiedData($("#selCertifiedType").val(), f, c, g)
            }
        }
    })
}
function getRootPath() {
    var a = window.document.location.href,
    b = window.document.location.pathname,
    c = a.indexOf(b),
    a = a.substring(0, c);
    b.substring(0, b.substr(1).indexOf("/") + 1);
    return a
}
function getProCertifiedData(a, b, c, f) {
    Service.post({
        url: "/TraceabilityService.svc/getProCertifiedDataInfo",
        async: !1,
        params: {
            CertifiedType: a,
            OrgID: b,
            BatchID: c,
            ProductID: f,
            GetType: "One"
        },
        success: function(b) {
            IdentificationHtml(b);
            50 == a ? (LicenseHtml(b), common.LincenseComfirm = b) : 60 == a && (common.IDComfirm = b)
        }
    })
}
function IdentificationHtml(a) {
    $("#txtCertifiedNo").val("");
    $("#txtValidDate").val("");
    $("#txtCertifiedOrg").val("");
    $("#txtCertifiedDate").val("");
    $(".MessageImgAttachment").empty();
    if (a && 0 < a.Items.length) {
        $("#txtCertifiedNo").val(a.Items[0].CertifiedNo);
        $("#txtValidDate").val(Util.formatDateTime(a.Items[0].ValidDate, "yyyy-MM-dd"));
        $("#txtCertifiedOrg").val(a.Items[0].CertifiedOrg);
        $("#txtCertifiedDate").val(Util.formatDateTime(a.Items[0].CertifiedDate, "yyyy-MM-dd"));
        a = a.Items[0].AttachmentFile.split("|");
        for (var b = "",
        c = 0; c < a.length; c++) if ("" != a[c]) var f = a[c].split(":")[1],
        g = a[c].split(":")[0],
        b = b + ('<dd class="imagedd" id=\'dd_' + c + '\'><p class="imgAttachment" style="cursor: pointer"><a href=\'' + g + "' target='_blank'><img src=" + f + ' /></a><s class="deleteImg IDdeleteImg" onclick=removeDD(\'dd_' + c + "')></s></p></dd>");
        $(".MessageImgAttachment").html(b)
    }
}
function LicenseHtml(a) {
    $("#txtLinceseNo").val("");
    $("#txtLinceseValidDate").val("");
    $("#txtLincenseOrg").val("");
    $("#txtLincenseDate").val("");
    $(".CommentImgAttachment").empty();
    if (a && 0 < a.Items.length) {
        $("#txtLinceseNo").val(a.Items[0].CertifiedNo);
        $("#txtLinceseValidDate").val(Util.formatDateTime(a.Items[0].ValidDate, "yyyy-MM-dd"));
        $("#txtLincenseOrg").val(a.Items[0].CertifiedOrg);
        $("#txtLincenseDate").val(Util.formatDateTime(a.Items[0].CertifiedDate, "yyyy-MM-dd"));
        a = a.Items[0].AttachmentFile.split("|");
        for (var b = "",
        c = 0; c < a.length; c++) if ("" != a[c]) var f = a[c].split(":")[1],
        g = a[c].split(":")[0],
        b = b + ('<dd class="imagedd" id=\'ddLicense_' + c + '\'><p class="imgAttachment" style="cursor: pointer"><a href=\'' + g + "' target='_blank'><img src=" + f + ' /></a><s class="deleteImg LincensedeleteImg" onclick=removeDD(\'ddLicense_' + c + "')></s></p></dd>");
        $(".CommentImgAttachment").html(b)
    }
}
function removeDD(a) {
    $("#" + a).remove()
}
function getProCertifiedPics(a, b, c, f, g, h) {
    Service.post({
        url: "/TraceabilityService.svc/getProCertifiedDataInfo",
        params: {
            CertifiedType: a,
            OrgID: b,
            BatchID: c,
            ProductID: h,
            GetType: "One"
        },
        success: function(c) {
            $("#" + f).empty();
            if (c && 0 < c.Items.length) {
                for (var h = c.Items[0].AttachmentFile.split("|"), e = "", l = 0; l < h.length; l++) if ("" != h[l]) var m = h[l].split(":")[1],
                n = h[l].split(":")[0],
                e = e + ("<a href='" + n + "' target='_blank'><img src=" + m + " style='padding-right:5px;height:50px' /></a>");
                "" != e && (e = 1 == c.Items[0].CertifiedStatus ? e + "\u5df2\u5ba1\u6838": 4 == g ? e + ("<a href='javascript:void(0);' onclick='AuditPics(" + a + "," + b + "," + f + "," + g + ")'>\u5f85\u5ba1\u6838<a>") : e + "\u5f85\u5ba1\u6838");
                $("#" + f).html(e)
            }
        }
    })
}
function AuditPics(a, b, c, f) {
    confirm("\u4f60\u786e\u8ba4\u5ba1\u6838\u5417?") && Service.post({
        url: "/TraceabilityService.svc/UpdateCertifiedStatus",
        params: {
            CertifiedType: a,
            OrgID: b
        },
        success: function(g) {
            void 0 != g && ("SUCCESS" == g ? (Messages.slideResult("\u5ba1\u6838\u6210\u529f\u3002", 3E3), getProCertifiedPics(a, b, "", c.id, f, 0)) : Messages.slideResult("\u5ba1\u6838\u5931\u8d25\u3002", 3E3))
        }
    })
}
function setOrgTypeList(a) {
    var b = "";
    switch (a) {
    case 20:
        b += '<option value="20">\u516c\u53f8</option>';
        break;
    case 40:
    case 50:
        b += '<option value="40">\u4f01\u4e1a\u7ec4\u7ec7</option><option value="50">\u76d1\u63a7\u56ed\u533a</option>';
        break;
    default:
        b += '<option value="20">\u516c\u53f8</option>',
        b += '<option value="40">\u4f01\u4e1a\u7ec4\u7ec7</option>',
        b += '<option value="50">\u76d1\u63a7\u56ed\u533a</option>'
    }
    $("#sel-OrgType").empty();
    $("#sel-OrgType").append(b);
    $("#sel-OrgType").val(a)
}
function onchangeCrops(a) {
    GetCropVariety("", null, "", 0, a.value);
    $("#viewCropList").show();
    a = SelCropsEnum.SelCropsEnum(a.value);
    $("#SelCropStart").html(a)
}
function setProQuarterEnum(a) {
    switch (a) {
    case 1:
        return "\u7b2c\u4e00\u5b63";
    case 2:
        return "\u7b2c\u4e8c\u5b63";
    case 3:
        return "\u7b2c\u4e09\u5b63";
    case 4:
        return "\u7b2c\u56db\u5b63"
    }
}
function setStatusEnum(a) {
    switch (a) {
    case 0:
        return "\u672a\u5ba1\u6838";
    case 1:
        return "\u5df2\u5ba1\u6838";
    case - 1 : return "\u5ba1\u6838\u4e0d\u901a\u8fc7"
    }
}
function setProCertifiedEnum(a, b) {
    switch (a) {
    case 1:
        return '<img src="/Images/exploratory/logo01_03.png" width="40" height="40">';
    case 50:
        return "\u8425\u4e1a\u6267\u7167";
    case 60:
        return "\u8eab\u4efd\u8bc1";
    default:
        return ""
    }
}
function common_getPicsRemark(a) {
    if (null == a || "" == a) return "";
    a = a.split("|");
    return 1 < a.length ? a[1] : ""
}
function common_getTraceDataIntegrity(a, b, c, f, g) {
    Service.post({
        url: 0 == g ? "/TraceabilityService.svc/getTraceDataIntegrity": "/TraceabilityService.svc/getTraceDataIntegrity91",
        params: {
            OrgID: a,
            ProductID: b,
            StartTime: c,
            EndTime: f
        },
        success: function(a) {
            var b = 1;
            a && (a = a.Items[0], 0 < parseInt(a.ispic, 10) ? b++:($(".track-list").children("ul").find("li").eq(0).addClass("notrack"), $(".track-list").children("ul").find("li").eq(0).find("a").html("\u6ca1\u6709\u56fe\u7247"), $(".track-list").children("ul").find("li").eq(0).find("a").removeClass("btn_images"), $(".track-list").children("ul").find("li").eq(0).find(".bg_circle").removeClass("btn_images")), 0 < parseInt(a.isspary, 10) ? b++:($(".track-list").children("ul").find("li").eq(2).addClass("notrack"), $(".track-list").children("ul").find("li").eq(2).find("a").html("\u672a\u4f7f\u7528\u8fc7\u519c\u836f"), $(".track-list").children("ul").find("li").eq(2).find("a").removeClass("btn_chemicals"), $(".track-list").children("ul").find("li").eq(2).find(".bg_circle").removeClass("btn_chemicals")), 0 < parseInt(a.isfer, 10) ? b++:($(".track-list").children("ul").find("li").eq(1).addClass("notrack"), $(".track-list").children("ul").find("li").eq(1).find("a").html("\u6ca1\u6709\u8bb0\u5f55"), $(".track-list").children("ul").find("li").eq(1).find("a").removeClass("btn_fertilizer"), $(".track-list").children("ul").find("li").eq(1).find(".bg_circle").removeClass("btn_fertilizer")), 0 < parseInt(a.isdevice, 10) ? b++:($(".track-list").children("ul").find("li").eq(4).addClass("notrack"), $(".track-list").children("ul").find("li").eq(4).find("a").html("\u6ca1\u6709\u8bb0\u5f55"), $(".track-list").children("ul").find("li").eq(4).find("a").removeClass("btn_environment"), $(".track-list").children("ul").find("li").eq(4).find(".bg_circle").removeClass("btn_environment")));
            b = 20 * parseInt(b, 10);
            $("#track_studyplay").css("width", b + "px")
        }
    })
}
function common_setShoppingLogo(a) {
    return 0 < a.indexOf("taobao.com") ? "<img src='templates/Images/trace/w_logo_02.jpg'>": 0 < a.indexOf("jd.com") ? "<img src='templates/Images/trace/w_logo_03.jpg'>": 0 < a.indexOf("tmall.com") ? "\u5929\u732b": 0 < a.indexOf("amazon.cn") ? "\u4e9a\u9a6c\u900a": 0 < a.indexOf("yhd.com") ? "<img src='templates/Images/trace/w_logo_01.jpg'>": 0 < a.indexOf("suning.com") ? "\u82cf\u5b81": 0 < a.indexOf("gome.com") ? "\u56fd\u7f8e": "<img src='templates/Images/trace/w_logo_00.jpg'>"
};