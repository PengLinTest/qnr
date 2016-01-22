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
        	
            if ($(this).hasClass("expand")){
            	$(this).parent().parent().find(".table").hide();
            	$(this).removeClass("expand");
            }else {
            	//如果是展开的话，需要先把其他的关闭
            	$(".btn-takeup").click();
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
            window.location = "?action=UserCenterEditProduct";
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
    		return;
    	}
    	if(!RemarkPowerInput){
    		ZENG.msgbox.show("请填写产品成熟度信息",5,2E3);
    		return;
    	}
    	if(!RemarkWeightInput){
    		ZENG.msgbox.show("请填写产品口感信息",5,2E3);
    		return;
    	}
    	if(!RemarkSugarInput){
    		ZENG.msgbox.show("请填写产品多糖含量信息",5,2E3);
    		return;
    	}
    	if(!RemarkOtherInput){
    		ZENG.msgbox.show("请填写产品其他信息",5,2E3);
    		return;
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
    	//将其他批次信息收起，防止进行错误处理
    	$(".table");
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
                //清除其他的ProBatchTable表中的数据，防止出现影响
                $(".table .ProBatchTable").empty();
                if (response && response.length) {
                    for (var g = 0,
                    k = response.length; g < k; g++) {
                        var c = "",
                        d = response[g];
                        var h = "1900/01/01" == Util.formatDateTime(d.batch_harvesttime, "yyyy/MM/dd") ? "": Util.formatDateTime(d.batch_harvesttime, "yyyy/MM/dd");
                        c = c + (0 == g % 2 ? '<tr class="even">': "<tr>");
                        c = c + ("<td>" + h + "</td>");
                        c = c + ("<td>" + d.batch_num + "</td><td><a class='QrCode' href='javascript:void(0)';>点击查看</a></td>");
                        if(parseInt(d.batch_isvalid) == 1){
                        	c += ("<td>上架</td>");
                        }else{
                        	c += ("<td>下架</td>");
                        }    
                        c = c + '<td><span class="opration"> ';    
                        c += '<a href="javascript:" class="EditBatch" title="编辑批次"><i class="icon-edit"></i></a>';
                        c += '<a title="预览" target="_blank" href="?action=ProductDetail&productId=' + a.product_id + '"><i class="icon-preview"></i></a>';
                        if(parseInt(d.batch_isvalid) == 1){
                        	c += '<a title="下架"  onclick= UserCenterRecord.UpOrDownBatchInfo(' + d.batch_id  
                        		+ ',"下架",0);><img class="rotate" src="templates/images/trace/up.png" width="15px" height="20px" style="margin-left:7px"></a> </span></td></tr>'
                        }else{
                        	c += '<a title="上架"  onclick= UserCenterRecord.UpOrDownBatchInfo(' + d.batch_id
                    			+ ',"上架",1);><img src="templates/images/trace/up.png" width="15px" height="20px" style="margin-left:7px"></a> </span></td></tr>'
                        }   
                        f.append(c);
                        var editbatchData = {
                                ProductID: a.product_id,
                                batchId: d.batch_id,
                                batchInfo:d,
                            };
                        $(".EditBatch:last").data("EditBatch",editbatchData);
                        $(".EditBatch:last").unbind("click").click(function() {
                            var a = $(this).data("EditBatch");
                            UserCenterRecord.InitProBatchDialog(a.ProductID,a.batchId,a.batchInfo);
                            return ! 1
                        });
                        $(".QrCode:last").data("src",d.batch_qrcode_loc);
                        $(".QrCode:last").unbind("click").click(function(){
                        	var data = $(this).data("src");
                        	UserCenterRecord.buildQrCode(data);
                        });
                    }
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
    InitProBatchDialog: function(productID,batchID,batchInfo) {
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
        	$("#ProductAttributesTitle").html("编辑批次<br/><small>完善产品指标，批次展示更加美观</small>");
        	$('#RemarkColorInput').val(batchInfo.batch_remark_color);
        	$('#RemarkPowerInput').val(batchInfo.batch_remark_power);
        	$('#RemarkWeightInput').val(batchInfo.batch_remark_weight);
        	$('#RemarkSugarInput').val(batchInfo.batch_remark_SugarScale);
        	$('#RemarkOtherInput').val(batchInfo.batch_remark_other);
        }else{
        	$("#ProductAttributesTitle").html("发布批次<br/><small>完善产品指标，批次展示更加美观</small>");
        	
        } 
    },
    SaveProductAttributes: function(batchID) {
    	var RemarkColorInput = $("#RemarkColorInput").val();
    	var RemarkPowerInput = $("#RemarkPowerInput").val();
    	var RemarkWeightInput = $("#RemarkWeightInput").val();
    	var RemarkSugarInput = $("#RemarkSugarInput").val();
    	var RemarkOtherInput = $("#RemarkOtherInput").val();
    	if(!RemarkColorInput){
    		ZENG.msgbox.show("请填写产品外观信息",5,2E3);
    		return;
    	}
    	if(!RemarkPowerInput){
    		ZENG.msgbox.show("请填写产品成熟度信息",5,2E3);
    		return;
    	}
    	if(!RemarkWeightInput){
    		ZENG.msgbox.show("请填写产品口感信息",5,2E3);
    		return;
    	}
    	if(!RemarkSugarInput){
    		ZENG.msgbox.show("请填写产品多糖含量信息",5,2E3);
    		return;
    	}
    	if(!RemarkOtherInput){
    		ZENG.msgbox.show("请填写产品其他信息",5,2E3);
    		return;
    	}
        $.ajax({
            url: "?action=UserCenterProduct",
            type:"post",
            data: {
            	htmlMethod:"updateProductBatch",
            	batchID: batchID,
                RemarkColorInput: RemarkColorInput,
                RemarkPowerInput: RemarkPowerInput,
                RemarkWeightInput:RemarkWeightInput,
                RemarkSugarInput: RemarkSugarInput,
                RemarkOtherInput: RemarkOtherInput,
            },
            dataType:"json",
            success: function(response) {
            	if(response.result){
            		ZENG.msgbox.show("编辑成功",4,2E3);
            		$(".ProductAttributesDialog").dialog("destroy")
                    UserCenterRecord.GetProductRecord(UserCenterRecord.pageNum);
            	}else{
                	ZENG.msgbox.show("编辑失败，请稍候重新提交",5,2E3);
                }
            }
        })
    },
    UpOrDownBatchInfo: function(batchid,hint,isUp) {
        Messages.confirm("你确定要要将产品" + hint + "吗?",
        function() {
            $.ajax({
                url: "?action=UserCenterProduct",
                type:"post",
                data: {
                	htmlMethod:"upOrDownBatchInfo",
                    batchID: batchid,
                    isUp:isUp,
                },
                dataType:"json",
                success: function(response) {
                	if(response.result){
                		ZENG.msgbox.show("修改成功",4,2E3);
                	}else{
                		ZENG.msgbox.show("修改失败",5,2E3);
                	}
                	UserCenterRecord.GetBatchData(UserCenterRecord.ClickExpandData,UserCenterRecord.ClickExpand);
                }
            })
        });
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
    buildQrCode: function(src) {
        0 < $("#buildTraceInfoID").length && $("#buildTraceInfoID").remove();
        $("<div id='buildTraceInfoID'></div>").appendTo("body");
        $("#buildTraceInfoID").dialog({
            autoOpen: !0,
            width: "auto",
            height: "auto",
            title: "查看二维码",
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
        }).dialog("open");
        var b;
        b = "<table align=center><tr>" + ('<td><img src=' + src + '>') + ("<br></td>");
        b += "</tr></table>";
        $("#buildTraceInfoID").html(b)
    }
};