var UserCenterRecord;
UserCenterRecord || (UserCenterRecord = {});

UserCenterRecord = {
    init: function() {
    	var user = Base.session.getLoginUser();
    	UserCenterRecord.vendorID = user.vendorId;
    	//获取产品档案总数
    	//获取当前页面的产品列表
        UserCenterRecord.GetProductRecord(1);
    },
    pageClick: function(a) {
        UserCenterRecord.GetProductRecord(a);
    },
    initExpandRecord: function() {
        $(".show-batchfile").unbind("click").click(function() {
            if ($(this).hasClass("expand")) $(this).parent().parent().find(".table").hide(),
            $(this).removeClass("expand");
            else {
                $(this).parent().parent().find(".table").show();
                $(this).addClass("expand");
                var a = $(this).data("show-batchfile");
                UserCenterRecord.GetBatchData(a, $(this));
            }
        });
        $(".btn-takeup").unbind("click").click(function() {
            $(this).parent().hide();
            $(this).parent().parent().find(".show-batchfile").removeClass("expand")
        })
    },
    GetProductRecord: function(PageNum) {
    	UserCenterRecord.PageSize = 4;
    	UserCenterRecord.pageNum = parseInt(PageNum);
        $.ajax({
            url: "?action=UserCenter",
            type:"post",
            data: {
            	htmlMethod:"getProductBasicinfoByVendorIdPage",
            	vendorId: UserCenterRecord.vendorID,
                PageNum: PageNum,
                PageSize: UserCenterRecord.PageSize
            },
            dataType:"json",
            success: function(response) {
                $(".RecordDiv").empty();
                $(".RecordNum").html(response.total ? response.total: 0);
                if (0 < response.data.length) {
                    $(".NoneRecordDivClass").hide();
                    var b = Math.floor(response.total / UserCenterRecord.PageSize + (0 < response.total % UserCenterRecord.PageSize ? 1 : 0));
                    UserCenterRecord.Total = response.Total;
                    $("#webPager").pager({
                        pagenumber: PageNum,
                        pagecount: b,
                        totalcount: UserCenterRecord.Total,
                        buttonClickCallback: UserCenterRecord.pageClick
                    });
                    UserCenterRecord.ShowOrgRecord(response.data);
                    $(".RecordDivClass").show()
                } else $(".NoneRecordDivClass").show(),
                $(".RecordDivClass").hide()
            }
        })
    },
    ShowOrgRecord: function(a) {
        $.each(a,
	        function(a, b) {
	            var f = "";
	            0 < b.basicinfo_img_loc.length && (f = b.basicinfo_img_loc);
	            f = String.format(
	            		'<div class="item"><div class="pic"><img src="{0}" width="58" height="58"> <p class="name">{1}</p>'
	            		+'<p class="show-batchfile show-batchfile{3} pointer" title="点击展开批次列表">查看批次信息'
	            		+'<b class="caret"></b></p></div> <div class="time">{2}</div><div class="time" style="padding-left:50px">{4}</div><span class="opration">'
	            		, f, b.basicinfo_name, Util.toDate(b.basicinfo_time), b.product_id,UserCenterRecord.ProductStatusEnum(parseInt(b.basicinfo_status)));
	            f += 
	            	'<a href="javascript:" class="NewBatch" data-toggle="tooltip" title="发布批次" data-original-title="发布批次" data-placement="bottom"><i class="icon-batch"></i></a>'
	            	+'<a href="javascript:" class="EditProductRecord" data-toggle="tooltip" title="编辑档案" data-original-title="编辑档案" data-placement="bottom"><i class="icon-edit"></i></a>'
	            	+'<a href="javascript:" class="SubmitProductRecord" data-toggle="tooltip" title="提交审核" data-original-title="提交审核" data-placement="bottom"><i class="icon-submit"></i></a>'
	            	+'<a href="javascript:" class="DeleteProductRecord" data-toggle="tooltip" title="删除档案" data-original-title="编辑档案" data-placement="bottom"><i class="icon-recycle"></i></a>'
	            f += '</span>  <div class="clear"></div>'
	            f += '<table class="table table-striped hide">'
		            	+'<thead>'
		            		+'<tr>'
			            		+'<th width="20%" scope="col">上市时间</th>'
			            		+'<th width="25%" scope="col">批次号 (追溯码)</th>'
			            		+'<th width="15%" scope="col">二维码</th>'
			            		+'<th width="10%" scope="col">上/下架</th>'
			            		+'<th width="25%" scope="col"></th>'
			            	+'</tr>'
			            +'</thead>'
		            +'<tbody class="ProBatchTable">'
		            +'</tbody>'
		            +'<tfoot class="btn-takeup">'
		            +'<tr><td class="ac" colspan="5"><a href="javascript:;">收起列表</a></td></tr></tfoot></table></div>';
	            $(".RecordDiv").append(f);
	            $(".EditProductRecord:last").data("EditProductRecord", b);
	            $(".SubmitProductRecord:last").data("SubmitProductRecord", b);
	            $(".DeleteProductRecord:last").data("DeleteProductRecord", b);
	            $(".NewBatch:last").data("NewBatch", b);
	            $(".show-batchfile:last").data("show-batchfile", b)
	        });
        $(".EditProductRecord").unbind("click").click(function() {
            var a = $(this).data("EditProductRecord");
            Base.sessionStorage.storeSession("ProductRecord", a);
            window.location = "/AgriProTraceability/91QueryEntrance/PublishArchives.html"
        });
        $(".SubmitProductRecord").unbind("click").click(function() {
        	var data = $(this).data("SubmitProductRecord");
        	var status = data.basicinfo_status;
        	var confirm = "";
        	if(status ==2){
        		ZENG.msgbox.show("该产品正在审核中，等审核结束后才能提交",5,2E3);
        		return;
        	}else if(status ==3){
        		confirm = "你确定要重新提交该产品审核吗？";
        	}else{
        		confirm = "你确定要提交产品进行审核吗？";
        	}
        	
        	Messages.confirm(confirm,function(){
	            var basicinfoID = data.basicinfo_id;
	            $.ajax({
	            	url:"?action=UserCenterProduct",
	            	type:"post",
	            	data:{
	            		htmlMethod:"submitProductCheck",
	            		basicinfoID:basicinfoID,
	            	},
	            	dataType:"json",
	            	success:function(response){
	            		if(response.result){
	            			ZENG.msgbox.show("提交成功",4,2E3);
	            			UserCenterRecord.GetProductRecord(1);
	            		}else{
	            			ZENG.msgbox.show("提交失败，请稍候重新提交",5,2E3);
	            		}
	            	}
	            
	            });
        	});
        });
        $(".DeleteProductRecord").unbind("click").click(function() {
        	var data = $(this).data("DeleteProductRecord");
        	Messages.confirm("你确定要删除这个产品吗？",function(){
	            var productID = data.product_id;
	            var basicinfoID = data.basicinfo_id;
	            $.ajax({
	            	url:"?action=UserCenterProduct",
	            	type:"post",
	            	data:{
	            		htmlMethod:"deleteProduct",
	            		productID:productID,
	            		basicinfoID:basicinfoID,
	            	},
	            	dataType:"json",
	            	success:function(response){
	            		if(response.result){
	            			ZENG.msgbox.show("删除成功",4,2E3);
	            			UserCenterRecord.GetProductRecord(1);
	            		}else{
	            			ZENG.msgbox.show("删除失败",5,2E3);
	            		}
	            	}
	            
	            });
        	});
        });
        $(".NewBatch").unbind("click").click(function() {
            var a = $(this).data("NewBatch");
            UserCenterRecord.Productdata = {
                ProductID: a.product_id,
                ReleaseStatus: a.basicinfo_status
            };
            if(UserCenterRecord.Productdata.ReleaseStatus == 3){
            	UserCenterRecord.InitProBatchDialog(a.product_id);
            }else{
            	ZENG.msgbox.show("该商品审核未通过，不能添加批次",5,2E3);
            }
        });
//        $(".show-batchfile").unbind("click").click(function(){
//        	if($(this).hasClass("expand")){
//        		$(this).parent().parent().find(".table").hide();
//        		$(this).removeClass("expand");
//        	}else{
//        		$(this).parent().parent().find(".table").show();
//        		$(this).addClass("expand");
//        		UserCenterRecord.GetBatchData(UserCenterRecord.Productdata, $(this));	
//        	}
//        })
//        $(".show-batchfile" + UserCenterRecord.Productdata.ProductID).trigger("click");
        UserCenterRecord.initExpandRecord()
    },
    DeleteRecord: function(a) {
        Messages.confirm("\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u4ea7\u54c1\u6863\u6848\u5417?",
        function() {
            Service.post({
                url: "/TraceabilityService.svc/DeleteRecord91",
                params: {
                    ProductID: a
                },
                success: function(a) {
                    115 == a.Status && (Messages.slideResult("\u5220\u9664\u6210\u529f\uff01", 2E3), UserCenterRecord.NumTotal -= 1, Math.floor(UserCenterRecord.NumTotal / UserCenterRecord.PageSize + (0 < UserCenterRecord.NumTotal % UserCenterRecord.PageSize ? 1 : 0)) < UserCenterRecord.PageNum ? UserCenterRecord.GetProductRecord(UserCenterRecord.PageNum - 1) : UserCenterRecord.GetProductRecord(UserCenterRecord.PageNum))
                }
            })
        })
    },
    proTraceArchive: function(a, e) {
        1 == e ? Messages.slideResult("\u8be5\u4ea7\u54c1\u5df2\u7ecf\u5f52\u6863\u3002", 3E3) : Messages.confirm("\u4ea7\u54c1\u5f52\u6863\uff0c\u60a8\u5c06\u4e0d\u80fd\u518d\u8fdb\u884c\u4ea7\u54c1\u7ef4\u62a4\uff0c\u786e\u5b9a\u8981\u6267\u884c\u5f52\u6863\u64cd\u4f5c\u5417?",
        function() {
            Service.post({
                url: "/TraceabilityService.svc/TraceArchive",
                params: {
                    ProductID: a
                },
                success: function(b) {
                    UserCenterRecord.Productdata = {
                        ProductID: a,
                        ReleaseStatus: 1
                    };
                    b && "SUCCESS" == b ? (Messages.slideResult("\u5f52\u6863\u6210\u529f", 3E3), UserCenterRecord.GetProductRecord(UserCenterRecord.PageNum)) : Messages.slideResult("\u5f52\u6863\u5931\u8d25", 3E3)
                }
            })
        })
    },
    //发布批次
    SaveProBatchInfo: function(productID) {
    	var RemarkColorInput = $("#RemarkColorInput").val();
    	var RemarkPowerInput = $("#RemarkPowerInput").val();
    	var RemarkWeightInput = $("#RemarkWeightInput").val();
    	var RemarkSugarInput = $("#RemarkSugarInput").val();
    	var RemarkOtherInput = $("#RemarkOtherInput").val();
    	if(!RemarkColorInput){
    		ZENG.msgbox.show("请填写产品外观信息",5,2E3);
    	}
    	if(!RemarkPowerInput){
    		ZENG.msgbox.show("请填写产品成熟度信息",5,2E3);
    	}
    	if(!RemarkWeightInput){
    		ZENG.msgbox.show("请填写产品口感信息",5,2E3);
    	}
    	if(!RemarkSugarInput){
    		ZENG.msgbox.show("请填写产品多糖含量信息",5,2E3);
    	}
    	if(!RemarkOtherInput){
    		ZENG.msgbox.show("请填写产品其他信息",5,2E3);
    	}
        $.ajax({
            url: "?action=UserCenterProduct",
            type:"post",
            data: {
            	htmlMethod:"newProductBatch",
            	productID: productID,
                RemarkColorInput: RemarkColorInput,
                RemarkPowerInput: RemarkPowerInput,
                RemarkWeightInput:RemarkWeightInput,
                RemarkSugarInput: RemarkSugarInput,
                RemarkOtherInput: RemarkOtherInput,
            },
            dataType:"json",
            success: function(response) {
            	if(response.result){
            		ZENG.msgbox.show("发布成功",4,2E3);
            		$(".ProductAttributesDialog").dialog("destroy")
                    UserCenterRecord.GetProductRecord(UserCenterRecord.pageNum);
            	}else{
                	ZENG.msgbox.show("发布失败，请稍候重新提交",5,2E3);
                }
            }
        })
    },
    GetBatchData: function(a, e) {
        UserCenterRecord.ClickExpand = e;
        UserCenterRecord.ClickExpandData = a;
        $.ajax({
            url: "?action=UserCenterProduct",
            type:"post",
            data: {
            	htmlMethod:"getBatchList",
            	productID: a.product_id,
            },
            dataType:"json",
            success: function(response) {
                var f = e.parent().parent().find(".table").children(".ProBatchTable");
                f.empty();
                if (response && response.length) {
                    for (var g = 0,
                    k = response.length; g < k; g++) {
                        var c = "",
                        d = response[g];
                        var h = "1900/01/01" == Util.formatDateTime(d.batch_harvesttime, "yyyy/MM/dd") ? "": Util.formatDateTime(d.batch_harvesttime, "yyyy/MM/dd");
                        c = c + (0 == g % 2 ? '<tr class="even">': "<tr>");
                        c = c + ("<td>" + h + "</td>");
                        c = c + ("<td>" + d.batch_num + "</td><td><a href='javascript:void(0);' onclick='UserCenterRecord.buildQrCode(" + d.batch_id + ")'>点击查看</a></td>");
                        if(parseInt(d.batch_isvalid) == 1){
                        	c += ("<td>上架</td>");
                        }else{
                        	c += ("<td>下架</td>");
                        }    
                        c = c + '<td><span class="opration"> ';    
                        c += '<a href="javascript:" class="EditBatch" title="编辑批次"><i class="icon-edit"></i></a>';
                        c += '<a title="预览" target="_blank" href="/AgriProTraceability/query.html?p=742&batchid=' + d.batch_id + '"><i class="icon-preview"></i></a>';
                        c += '<a title="删除批次"  onclick= UserCenterRecord.DeleteProBatchInfo(' + d.batch_id + ",1," + d.IsVisble + ',"\u5220\u9664");><i class="icon-up"></i></a> </span></td></tr>'    
                        f.append(c);     
                            
                            
//                        } else h = "1900/01/01" == Util.formatDateTime(d.batch_harvesttime, "yyyy/MM/dd") ? "": Util.formatDateTime(d.batch_harvesttime, "yyyy/MM/dd"),
//                        	c += 0 == g % 2 ? '<tr class="even">': "<tr>",
//                			c += "<td>" + h + "</td>",
//		                    c += "<td>" + d.batch_id + "</td><td><a href='javascript:void(0);' onclick= UserCenterRecord.GetContactdialog();>\u70b9\u51fb\u67e5\u770b<a></td>",
//		                    
//		                    c += "<td>" + UserCenterRecord.ProductStatusEnum(d.batch_auditstatus) + "</td>",
//		                    c = 0 == d.batch_isvalid ? c + ("<td><a href='javascript:void(0);' onclick= UserCenterRecord.DeleteProBatchInfo(" + d.batch_id + "," + d.batch_auditstatus + ",1,'\u4e0a\u67b6');>\u4e0b\u67b6<a></td>") : c + ("<td><a href='javascript:void(0);' onclick= UserCenterRecord.DeleteProBatchInfo(" + d.batch_id + "," + d.batch_auditstatus + ",0,'\u4e0b\u67b6');>\u4e0a\u67b6<a></td>"),
//		                    c += '<td><span class="opration"> ',
//		                    1 != a.basicinfo_status && (c += '<a href="javascript:" class="EditBatch" title="\u7f16\u8f91\u6279\u6b21"><i class="icon-edit"></i></a>'),
//		                    c += '<a title="\u9884\u89c8" onclick= UserCenterRecord.GetContactdialog();><i class="icon-preview"></i></a>',
//		                    c += '<a title="\u5220\u9664\u6279\u6b21" onclick= UserCenterRecord.DeleteProBatchInfo(' + d.batch_id + ",1," + d.batch_isvalid + ',"\u5220\u9664");><i class="icon-recycle"></i></a> </span></td></tr>';
//		                    f.append(c);
//		                    1 != a.basicinfo_status && $(".EditBatch:last").data("EditBatch", d)
                    }
                    $(".EditBatch").unbind("click").click(function() {
                        var a = $(this).data("EditBatch");
                        UserCenterRecord.Productdata = {
                            ProductID: a.ProductID,
                            ReleaseStatus: a.ReleaseStatus
                        };
                        UserCenterRecord.InitProBatchDialog(a);
                        return ! 1
                    })
                }
            }
        })
    },
    ProductStatusEnum: function(a) {
        switch (a) {
        case 1:
            return "未提交审核";
        case 2:
            return "审核中";
        case 3:
            return "审核通过";
        case 4:
            return "审核不通过"
        }
    },
    InitProBatchDialog: function(productID,batchID) {
        $("#SaveProductAttributes").unbind("click").click(function() {
        	if(batchID){
        		UserCenterRecord.SaveProductAttributes(batchID);
        	}else{
        		UserCenterRecord.SaveProBatchInfo(productID)
        	}
        });
        $(".CancelSaveProductAttributes").unbind("click").click(function() {
            $(".ProductAttributesDialog").dialog("destroy")
        });
        $(".ProductAttributesDialog .btn-close ").unbind("click").click(function() {
            $(".ProductAttributesDialog").dialog("destroy")
        });
        $(".ProductAttributesDialog").dialog({
            autoOpen: !1,
            width: "640",
            height: "auto",
            dialogClass: "modal-dialog user-dialog",
            title: "",
            modal: !0,
            resizable: !1,
            close: function() {
                $(this).dialog("destroy")
            }
        }).dialog("open");
        if(batchID){
        	UserCenterRecord.GetProductAttributes(batchID);
        	$("#ProductAttributesTitle").html("编辑批次<br/><small>完善产品指标，批次展示更加美观</small>");
        }else{
        	$("#ProductAttributesTitle").html("发布批次<br/><small>完善产品指标，批次展示更加美观</small>");
        } 
    },
    GetProductAttributes: function(a) {
        Service.post({
            url: "/TraceabilityService.svc/GetProductAttributes",
            params: {
                BatchID: a
            },
            success: function(a) {
                a && ($("#ProductAttributesTxt").wysiwyg("setContent", a.BatchDesCribe), "1900-01-01" != Util.formatDateTime(a.HarvestTime, "yyyy-MM-dd") && (a = "1900-01-01" == Util.formatDateTime(a.HarvestTime, "yyyy-MM-dd") ? "": Util.formatDateTime(a.HarvestTime, "yyyy-MM-dd"), $("#txtHarvestTime").val(a)))
            }
        })
    },
    SaveProductAttributes: function(a, e) {
        Service.post({
            url: "/TraceabilityService.svc/UpdateProBatchAttributes",
            params: {
                BatchID: e,
                ProductAttributes: $("#ProductAttributesTxt").val(),
                HarvestTime: $("#txtHarvestTime").val(),
                Status: 0
            },
            success: function(b) {
                115 == b.Status && (0 == a ? ($(".ProductAttributesDialog").dialog("destroy"), Messages.slideResult("\u63d0\u4ea4\u6210\u529f,\u7cfb\u7edf\u5ba1\u6838\u901a\u8fc7\u540e,\u53ef\u5728\u9996\u9875\u67e5\u770b\u5230\u60a8\u7684\u6279\u6b21\u6863\u6848.<br>", 5E3,
                function() {})) : 1 == a && ($(".ProductAttributesDialog").dialog("destroy"), Messages.slideResult("\u7f16\u8f91\u6210\u529f,\u7cfb\u7edf\u5ba1\u6838\u901a\u8fc7,\u540e\u53ef\u5728\u9996\u9875\u67e5\u770b\u5230\u60a8\u7684\u6279\u6b21\u6863\u6848.<br>", 5E3,
                function() {})), UserCenterRecord.GetProductRecord(UserCenterRecord.PageNum))
            }
        })
    },
    DeleteProBatchInfo: function(a, e, b, f) {
        Messages.confirm("\u60a8\u786e\u5b9a\u8981" + f + "?",
        function() {
            Service.post({
                url: "/TraceabilityService.svc/DelProBatchInfo",
                params: {
                    BatchID: a,
                    UserID: TransferloadUser.TraceabilityInfo.UserID,
                    Status: e,
                    IsVisble: b
                },
                success: function(a) {
                    void 0 != a && "SUCCESS" == a ? UserCenterRecord.GetProductRecord(UserCenterRecord.PageNum) : Messages.slideResult("\u64cd\u4f5c\u5931\u8d25", 3E3)
                }
            })
        })
    },
    GetContactdialog: function() {
        $("#contactDialog").dialog({
            autoOpen: !1,
            width: "auto",
            height: "auto",
            dialogClass: "modal-dialog",
            title: "",
            modal: !0,
            resizable: !1
        }).dialog("open");
        $("#contactDialog .dialog_close_btn .icon_close").unbind("click").click(function() {
            $("#contactDialog").dialog("destroy")
        });
        return ! 1
    },
    buildQrCode: function(a) {
        0 < $("#buildTraceInfoID").length && $("#buildTraceInfoID").remove();
        $("<div id='buildTraceInfoID'></div>").appendTo("body");
        Transfer.reload("#buildTraceInfoID", {
            url: "/AgriProTraceability/CreateQrCodeView.html",
            scripts: []
        },
        function() {
            Transfer.loadCSS([]);
            UserCenterRecord.buildQrCodeImg(a, "query");
            $("#saveQrcode").unbind("click").click(function(e) {
                UserCenterRecord.buildQrCodeImg(a, "save")
            });
            $("#buildTraceInfoID").dialog({
                autoOpen: !0,
                width: "auto",
                height: "auto",
                title: "\u67e5\u770b\u4e8c\u7ef4\u7801",
                modal: !0,
                resizable: !1,
                minHeight: 100,
                minWidth: 100,
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
    },
    buildQrCodeImg: function(a, e) {
        if ("save" == e) $.ajax({
            type: "POST",
            url: encodeURI("http://sa.tcloudit.com/AgriProTraceability/Handler/QRCodeHandler.ashx?" + Math.random()),
            data: {
                QRContent: a,
                size: 3,
                action: e
            },
            success: function(a) {
                "" != a && (location.href = a)
            }
        });
        else {
            var b;
            b = "<table align=center><tr>" + ('<td><img src="http://sa.tcloudit.com/AgriProTraceability/Handler/QRCodeHandler.ashx?QRContent=' + a + "&size=3&action=" + e + '" />') + ("<br>" + a + "</td>");
            b += "</tr></table>";
            $(".qrcode_img").html(b)
        }
    },
    buildBarCode: function(a) {
        0 < $("#buildTraceInfoID").length && $("#buildTraceInfoID").remove();
        $("<div id='buildTraceInfoID'></div>").appendTo("body");
        Transfer.reload("#buildTraceInfoID", {
            url: "/AgriProTraceability/CreateBrCodeView.html",
            scripts: []
        },
        function() {
            Transfer.loadCSS([]);
            UserCenterRecord.buildBarCodeImg(a, "query");
            $("#savebarcode").unbind("click").click(function(e) {
                UserCenterRecord.buildBarCodeImg(a, "save")
            });
            $("#buildTraceInfoID").dialog({
                autoOpen: !0,
                width: "auto",
                height: "auto",
                title: "\u67e5\u770b\u6761\u5f62\u7801",
                modal: !0,
                resizable: !1,
                minHeight: 100,
                minWidth: 100,
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
    },
    buildBarCodeImg: function(a, e) {
        if ("save" == e) $.ajax({
            type: "POST",
            url: encodeURI("http://sa.tcloudit.com/AgriProTraceability/Handler/BarCodeHandler.ashx?" + Math.random()),
            data: {
                barContent: a,
                action: e
            },
            success: function(a) {
                "" != a && (location.href = a)
            }
        });
        else {
            var b;
            b = "<table align=center><tr>" + ('<td><img src="http://sa.tcloudit.com/AgriProTraceability/Handler/BarCodeHandler.ashx?barContent=' + a + "&action=" + e + '" />') + ("<br>" + a + "</td>");
            b += "</tr></table>";
            $(".qrcode_img").html(b)
        }
    }
};