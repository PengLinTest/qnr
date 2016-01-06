var ProAttributes;

if (!ProAttributes) {
    ProAttributes = {};
}
//产品指标配置
ProAttributes.config = {
    //作物枚举与数据库同步
    Cropneum: {
        葡萄: 1,
        稻谷: 3,
        蜂蜜: 8
    },
    /// <summary>
    /// 获取产品指标配置信息
    /// </summary>
    /// <param name="CropID">作物ID</param>
    /// <param name="batchid">产品批次</param>
    /// <param name="getway">获取方式：dialog(弹出层),normal(普通)</param>
    /// <returns></returns>
    getProAttributesConfig: function (batchid, getway) {
        $.ajax({
            url: "?action=ProductDetail",
            type:"post",
            data: {
            	htmlMethod: "getProductLastBatch",
            	batchIdList: batchid
            },
            dataType:"json",
            success: function (data) {
                var atthtml = "<ul>";
                if (data.result) {
                	//外观
                	response = data.data;
                	if(response.batch_remark_color != ""){
	                    atthtml += "<li>";
	                    atthtml += "<label class=\"label-like\">外观</label>";
	                    atthtml += "<p class=\"explain\">" + ProAttributes.config.FormatProAttrValue(response.batch_remark_color, 20) + "</p>";
	                    atthtml += "</li>";
                    }
                	//成熟度
                	if(response.batch_remark_weight != ""){
	                    atthtml += "<li>";
	                    atthtml += "<label class=\"label-like\">成熟度</label>";
	                    atthtml += "<p class=\"explain\">" + ProAttributes.config.FormatProAttrValue(response.batch_remark_weight, 20) + "</p>";
	                    atthtml += "</li>";
                    }
                	//口感
                	if(response.batch_remark_power != ""){
	                    atthtml += "<li>";
	                    atthtml += "<label class=\"label-like\">口感</label>";
	                    atthtml += "<p class=\"explain\">" + ProAttributes.config.FormatProAttrValue(response.batch_remark_power, 20) + "</p>";
	                    atthtml += "</li>";
                    }
                	//含糖量
                	if(response.batch_remark_SugarScale != ""){
	                    atthtml += "<li>";
	                    atthtml += "<label class=\"label-like\">含糖量</label>";
	                    atthtml += "<p class=\"explain\">" + ProAttributes.config.FormatProAttrValue(response.batch_remark_SugarScale, 20) + "</p>";
	                    atthtml += "</li>";
                    }
                	//其他
                	if(response.batch_remark_other != ""){
	                    atthtml += "<li>";
	                    atthtml += "<label class=\"label-like\">其他</label>";
	                    atthtml += "<p class=\"explain\">" + ProAttributes.config.FormatProAttrValue(response.batch_remark_other, 20) + "</p>";
	                    atthtml += "</li>";
                    }
                } else {
                	$("#quota").hide();
                	$("#quotanone").show();
//                    atthtml += "<li>";
//                    atthtml += "<label class=\"label-like\"></label>";
//                    atthtml += "<p class=\"text\"></p>";
//                    atthtml += "<p class=\"explain\"></p>";
//                    atthtml += "</li>";
                }
                atthtml += "</ul>";
                $(".quota-list").html(atthtml);
                //绑定数据
            }
        });
    },
//    / <summary>
//    / 获取产品指标信息
//    / </summary>
//    / <param name="getway">获取方式：dialog(弹出层),normal(普通)</param>
//    / <returns></returns>
//    getProductAttributesData: function (response, cropid, getway) {
//        if (response && response.ConfigData.Items.length > 0) {
//            var jsonData = response.ConfigData.Items[0];
//            cropid = parseInt(cropid, 10); //作物ID
//            if (getway == "normal") {
//                $("#Color").html(jsonData.Color == null ? "" : ProAttributes.config.FormatProAttrValue(jsonData.Color, 20));
//                $("#Powder").html(jsonData.Powder == null ? "" : ProAttributes.config.FormatProAttrValue(jsonData.Powder, 20));
//                switch (cropid) {
//                    case ProAttributes.config.Cropneum.葡萄:
//                        $("#Weight").html(jsonData.Weight == 0 ? "" : ProAttributes.config.FormatProAttrValue(jsonData.Weight, 20));
//                        $("#SugarScale").html(jsonData.SugarScale == null ? "" : ProAttributes.config.FormatProAttrValue(jsonData.SugarScale, 20));
//                        break;
//                    default: //默认
//                        var reser = (jsonData.ReservedCol == null || jsonData.ReservedCol == "") ? null : jsonData.ReservedCol.split('|');
//                        $("#Weight").html(reser == null ? "" : ProAttributes.config.FormatProAttrValue(reser[1], 20));
//                        $("#SugarScale").html(reser == null ? "" : ProAttributes.config.FormatProAttrValue(reser[0], 20));
//                        break;
//                }
//
//            } else {
//                $("#txtColor").val(jsonData.Color == null ? "" : jsonData.Color);
//                $("#txtPowder").val(jsonData.Powder == null ? "" : jsonData.Powder);
//                switch (cropid) {
//                    case ProAttributes.config.Cropneum.葡萄:
//                        $("#txtWeight").val(jsonData.Weight == 0 ? "" : jsonData.Weight);
//                        $("#txtSugarScale").val(jsonData.SugarScale == null ? "" : jsonData.SugarScale);
//                        break;
//                    default: //默认
//                        var reser = (jsonData.ReservedCol == null || jsonData.ReservedCol == "") ? null : jsonData.ReservedCol.split('|');
//                        $("#txtWeight").val(reser == null ? "" : reser[1]);
//                        $("#txtSugarScale").val(reser == null ? "" : reser[0]);
//                        break;
//                }
//                var harvestime = (Util.formatDateTime(jsonData.HarvestTime, "yyyy/MM/dd") == "1900/01/01" ? "" : Util.formatDateTime(jsonData.HarvestTime, "yyyy/MM/dd"));
//                $("#txtHarvestTime").val(harvestime);
//            }
//
//        } else {
//            $("#Color").html("");
//            $("#Powder").html("");
//            $("#Weight").html("");
//            $("#SugarScale").html("");
//        }
//    },
    //格式化产品指标值
    FormatProAttrValue: function (value, valueLen) {
        return "<span title=" + value + ">" + Util.getSubstr(value, valueLen) + "</span>";
    },
    /// <summary>
    /// 保存产品指标到批次
    /// </summary>
    /// <param name="data">数据实体</param>
    /// <returns></returns>
    SaveProductAttributes: function (data) {
        var cropid = parseInt(data.CropID, 10);
        var color = $("#txtColor").val();
        var powder = $("#txtPowder").val();
        var weight = $("#txtWeight").val();
        var sugarScale = $("#txtSugarScale").val();
        var HarvestTime = $("#txtHarvestTime").val(); //上市时间

        //if (color == "" || powder == "" || weight == "") {
        //ZENG.msgbox.show("产品指标请填写完整!", 4, 2000);
        //return;
        //}
        if (cropid == ProAttributes.config.Cropneum.葡萄) {
            if (Util.toNumberic(weight) == 0) {
                ZENG.msgbox.show("重量只能为大于0数字或小数!", 4, 2000);
                return;
            }
            if (sugarScale == "") {
                ZENG.msgbox.show("请填写产品的糖分!", 4, 2000);
                return;
            } else {
                if (Util.toNumberic(sugarScale) == 0) {
                    ZENG.msgbox.show("产品的糖分只能为大于0数字或小数!", 4, 2000);
                    return;
                }
            }
        }
        var reservedcol = "", strsugar = 0, strweight = 0;
        switch (cropid) {
            case ProAttributes.config.Cropneum.葡萄:
                strsugar = sugarScale;
                strweight = weight;
                reservedcol = "";
                break;
            default: //默认
                strsugar = "";
                strweight = "";
                reservedcol = sugarScale + "|" + weight;
                break;
        }
        var fun = function () {
            var entity = {
                //url: "/TraceabilityService.svc/SaveProductAttributes",
                url: "/TraceabilityService.svc/UpdateProBatchInfo",
                params: {
                    BatchID: data.BatchID,
                    //CropVarietyID: data.CropVarietyID,
                    CreateUserID: user.UserID,
                    Remark: "编辑批次指标",
                    Color: color,
                    Powder: powder,
                    Weight: strweight,
                    HarvestTime: HarvestTime,
                    SugarScale: strsugar,
                    ReservedCol: reservedcol//除葡萄之外的数据存在这个预留字段中
                },
                success: function (response) {
                    var alertString = "";
                    if (response != undefined) {
                        switch (response) {
                            case "SUCCESS":
                                alertString = "操作成功。";
                                TraceabilityRecords.page.getProBatchInfo(data.ProductID, 0, "modify");
                                break;
                            case "EXCEPTION":
                                alertString = "操作异常。";
                                break;
                            case "FAIL":
                                alertString = "操作失败。";
                                break;
                            default:
                                alertString = "未知错误。";
                                break;
                        }
                        Messages.slideResult(alertString, 3000);
                        $("#ProductAttributesID").remove();
                    }
                }
            }
            Service.post(entity);
        }
        if (HarvestTime != "") {
            Messages.confirm("上市时间不为空，则不能再进行编辑。", fun);
        } else {
            fun();
        }
    },
    /// <summary>
    /// 初始化产品指标
    /// </summary>
    /// <param name="data">数据实体</param>
    /// <returns></returns>
    openProductAttributes: function (data) {
        if ($("#ProductAttributesID").length > 0) $("#ProductAttributesID").remove();
        $("<div id='ProductAttributesID'></div>").appendTo('body');
        Transfer.reload("#ProductAttributesID", {
            url: "/AgriProTraceability/InitProductAttributes.html",
            scripts: []
        },
        function () {
            Transfer.loadCSS([]);
            ProAttributes.config.getProAttributesConfig(data.CropID, data.BatchID, "dialog");
            /* 点击 保存 */
            $("#SaveProductAttributes").unbind('click').click(function () {
                ProAttributes.config.SaveProductAttributes(data);
            });

            /* 点击 取消 */
            $("#CancelSaveProductAttributes").unbind('click').click(function () {
                $("#ProductAttributesID").remove();
            });

            $("#txtHarvestTime").datepicker({
                dateFormat: 'yy-mm-dd',
                changeMonth: true,
                changeYear: true
            });

            $("#ProductAttributesID").dialog({
                autoOpen: true,
                width: '520',
                height: '390',
                title: "编辑产品指标",
                modal: true,
                resizable: false,
                minHeight: 100,
                minWidth: 100
            }).dialog("open");
        });
    },
    //获取产品的基本信息
    getProductBaseInfo: function (productid) {
        Service.post({
            url: "/TraceabilityService.svc/getProductBaseInfo",
            params: {
                ProductID: productid
            },
            success: function (response) {
                if (response && response.Items.length > 0) {
                    var data = response.Items[0];
                    //绑定档案LOGO
                    $("#produce_photo").html("<img src=" + data.LogoIcon + "  width='300px'>");
                    $(".ImgCutAttachment").empty();
                    var imgaddHtml = "<dd class=\"imagesadd\">";
                    imgaddHtml += "<p class=\"imgAttachment\" style=\"cursor: pointer\">";
                    imgaddHtml += "<img src=" + data.LogoIcon + ">";
                    imgaddHtml += "<s class=\"deleteImg\" onclick=\"$('.imagesadd').remove();\"></s></p></dd>";
                    $(".ImgCutAttachment").html(imgaddHtml);
                }
            }
        });
    }
}