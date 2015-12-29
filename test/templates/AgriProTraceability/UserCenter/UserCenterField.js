var UserCenterField;
UserCenterField || (UserCenterField = {});
UserCenterField = {
    ShowNewOrgDialog: function() {
        $("#OrgName").val("");
        $("#OrgContactor").val("");
        $("#OrgContactPhone").val("");
        $("#OrgAddr").val("");
        $("#DialogTitle").html("\u65b0\u5efa\u5730\u5757<br/><small>\u65b0\u5efa\u5730\u5757\uff0c\u9700\u8981\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f</small>");
        $(".dialog-field").dialog({
            autoOpen: !1,
            width: "640",
            height: "auto",
            dialogClass: "modal-dialog user-dialog",
            title: "",
            modal: !0,
            resizable: !1
        }).dialog("open");
        $(".dialog-field .btn-close").unbind("click").click(function() {
            $(".dialog-field").dialog("destroy")
        });
        $(".CancelOrg").unbind("click").click(function() {
            $(".dialog-field").dialog("destroy")
        });
        UserCenter.OperateNewOrg()
    },
    ShowFiledNum: function() {
        $(".Fielddiv").empty();
        if (0 < UserCenter.FiledData[0].Num) {
            var b = '<span class="text fr"><a href="javascript:;" class="btn btn-default btnNewOrg">\u65b0\u5efa\u5730\u5757</a></span><i class="icon-field" style="cursor:pointer"></i> <p class="text" style="cursor:pointer"><span id="OrgNum">' + UserCenter.FiledData[0].Num + "</span>\u4e2a\u5730\u5757 </p>";
            $(".Fielddiv").append(b);
            $(".btnNewOrg").unbind("click").click(function(a) {
                UserCenterField.ShowNewOrgDialog();
                a.preventDefault();
                return ! 1
            });
            $(".btnNewRecord").unbind("click").click(function(a) {
                a = Base.sessionStorage.getSession("CompanyCertified");
                var c = Base.sessionStorage.getSession("CertifiedStatus");
                1 == a && 1 == c ? (Base.sessionStorage.storeSession("ProductRecord", null), window.location = "/AgriProTraceability/91QueryEntrance/PublishArchives.html") : ZENG.msgbox.show("\u8eab\u4efd\u8ba4\u8bc1\u548c\u4f01\u4e1a\u8ba4\u8bc1\u5ba1\u6838\u901a\u8fc7\u4e4b\u540e,\u624d\u53ef\u4ee5\u65b0\u5efa\u6863\u6848.", 4, 3E3)
            });
            $(".editCompany").show()
        } else b = '<span class="text fr"><a href="javascript:;" class="btn btn-default btnNewOrg">\u65b0\u5efa\u5730\u5757</a></span><i class="icon-field icon-disabled" style="cursor:pointer"></i> <p class="text" style="cursor:pointer">  0\u4e2a\u5730\u5757 </p>',
        $(".Fielddiv").append(b),
        $(".btnNewOrg").unbind("click").click(function(a) {
            ZENG.msgbox.show("\u8eab\u4efd\u8bc1\u5ba1\u6838\u901a\u8fc7\u4e4b\u540e,\u624d\u53ef\u4ee5\u65b0\u5efa\u5730\u5757.", 4, 2E3)
        }),
        $(".btnNewRecord").unbind("click").click(function(a) {
            ZENG.msgbox.show("\u60a8\u76ee\u524d\u6ca1\u6709\u5730\u5757\uff0c\u65e0\u6cd5\u65b0\u5efa\u6863\u6848.", 4, 2E3)
        }),
        $(".editCompany").hide()
    },
    SaveNewOneOrg: function(b) {
        var a = $("#OrgName").val() || null,
        c = $("#OrgContactor").val(),
        d = $("#OrgContactPhone").val(),
        e = $("#OrgAddr").val();
        a ? (a = {
            UserID: TransferloadUser.TraceabilityInfo.UserID,
            OrgName: a,
            OrgContactor: c,
            OrgContactPhone: d,
            OrgAddr: e
        },
        b && (a.OrgID = b.OrgID), Service.post({
            url: "/TraceabilityService.svc/SaveNewOneOrg",
            params: a,
            success: function(a) {
                a && ($("#OrgNum").html(a.Num), $(".dialog-field").dialog("destroy"), 2 == UserCenterField.Tabindex ? UserCenterField.GetFieldData() : ZENG.msgbox.show("\u65b0\u5efa\u5730\u5757\u6210\u529f.", 4, 2E3))
            }
        })) : ZENG.msgbox.show("\u8bf7\u8f93\u5165\u5730\u5757\u540d\u79f0", 4, 2E3)
    },
    GetFieldData: function() {
        Service.post({
            url: "/TraceabilityService.svc/GetFieldData",
            params: {
                UserID: TransferloadUser.TraceabilityInfo.UserID
            },
            success: function(b) {
                $("#FieldCardDiv").empty();
                b && (UserCenterField.ShowFiledCard(b.Items), UserCenterField.FileNum = b.Items.length, 1 <= b.Items.length ? ($(".btn-addfield").unbind("click").click(function(a) {
                    UserCenterField.ShowNewOrgDialog();
                    a.preventDefault();
                    return ! 1
                }), $(".editCompany").show()) : ($(".btn-addfield").unbind("click").click(function(a) {
                    ZENG.msgbox.show("\u8eab\u4efd\u8bc1\u5ba1\u6838\u901a\u8fc7\u4e4b\u540e,\u624d\u53ef\u4ee5\u65b0\u5efa\u5730\u5757.", 5, 2E3)
                }), $(".editCompany").hide()))
            }
        })
    },
    ShowFiledCard: function(b) {
        $.each(b,
        function(a, c) {
            var b = String.format('<div class="card card-field"> <div class="map"><img src="/images/trace/bg_pin.png" width="180" height="180"></div><div class="title"><div class="opration fr"><div class="dropdown more-action"> <a class="dropdown-toggle" id="A3" role="button" data-toggle="dropdown" data-target="#" href="javascript:;"><i class="icon-more"></i></a><ul class="dropdown-menu" role="menu" aria-labelledby="dLabel"> <li role="presentation"><a role="menuitem" class="EditOrg" tabindex="-1" href="javascript:;">\u7f16\u8f91</a></li> <li role="presentation "><a class="DeleteOrg" role="menuitem" tabindex="-1" href="javascript:;">\u5220\u9664</a></li></ul> </div> </div><h2>{0}</h2> </div><div class="bd"> <ul class="info"> <li> <span class="col-name">\u8d1f\u8d23\u4eba</span><p>{1}</p>  </li> <li> <span class="col-name">\u8054\u7cfb\u65b9\u5f0f</span>  <p>{2}</p> </li><li> <span class="col-name">\u5730\u5740</span><p>{3}</p> </li> </ul></div> </div>', c.Name ? c.Name: "-", c.ContactName ? c.ContactName: "-", c.Mobile ? c.Mobile: "-", c.Address ? c.Address: "-", c.OrgID);
            $("#FieldCardDiv").append(b);
            $(".EditOrg:last").data("EditOrg", c);
            $(".DeleteOrg:last").data("DeleteOrg", c)
        });
        $(".EditOrg").unbind("click").click(function() {
            var a = $(this).data("EditOrg");
            UserCenterField.ShowNewOrgDialog();
            $("#OrgName").val(a.Name);
            $("#OrgContactor").val(a.ContactName);
            $("#OrgContactPhone").val(a.Mobile);
            $("#OrgAddr").val(a.Address);
            $("#DialogTitle").html("\u7f16\u8f91\u5730\u5757<br/><small>\u8bf7\u5b8c\u5584\u4ee5\u4e0b\u4fe1\u606f</small>");
            UserCenter.OperateNewOrg(a)
        });
        $(".DeleteOrg").unbind("click").click(function() {
            if (1 >= UserCenterField.FileNum) ZENG.msgbox.show("\u6700\u540e\u4e00\u4e2a\u5730\u5757\u4e0d\u53ef\u5220\u9664.", 4, 2E3);
            else {
                var a = $(this).data("DeleteOrg");
                Messages.confirm("\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u5730\u5757\u5417\uff1f",
                function() {
                    Service.post({
                        url: "/BaseService.svc/DeleteOrgStruct",
                        params: {
                            OrgID: a.OrgID
                        },
                        success: function(a) {
                            UserCenterField.GetFieldData()
                        }
                    })
                })
            }
        })
    }
};