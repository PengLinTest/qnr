/// <summary>
/// 获取企业认证信息
/// </summary>
/// <param name="orgid">商家ID</param>
/// <param name="cerType">认证类型50=营业执照(企业)；60=身份证(个人)</param>
/// <returns></returns>
function TraceRecords_getCompanyInfo(vendorID) {
    $.ajax({
        url: "?action=Vendor",
        type:"post",
        data: {
            vendorId: vendorID,          //企业ID
            htmlMethod:"getVendorAuthInfo", //方法名字
            cerType:"1"
        },
        dataType:"json",
        success: function (response) {
            var data = eval(response);
            if (data) {
                //企业
                var vendor = data['vendor'][0];
                var vendorAuth = data['vendorAuth'][0];
                if (vendorAuth.auth_ispass == 1) {
                    $("#check_c").html("营业执照已验证");
                    $("#cplogo").removeClass("no-license");
                } else {
                    $("#check_c").html("营业执照未验证");
                    $("#cplogo").addClass("no-license");
                }

            } else {
                $("#companyname").html("暂无");
                $("#check_c").html("营业执照未验证");
            }
            TraceRecords_getVendorInfo(vendorID);
        },
        error:function(){
        }
    });
}

/// <summary>
/// 获取企业信息 vendor_info信息
/// </summary>
/// <param name="orgid">商家ID</param>
/// <returns></returns>
function TraceRecords_getVendorInfo(vendorID) {
  $.ajax({
      url: "?action=Vendor",
      type:"post",
      data: {
          vendorId: vendorID,          //企业ID
          htmlMethod:"getVendorInfo", //方法名字
      },
      dataType:"json",
      success: function (response) {
          var data = eval(response);
          if (data) {
              //填充企业中的负责人和地址等信息
        	  $("#headUser").html(data.info_leader);
              $("#company-address").html(data.info_address);
              //填充公司名字
              $("#companyname").html("<span title=" + data.info_name + ">" + Util.getSubstr(data.info_name, 10) + "</span>");
              $("#traceTitle").html(data.info_name + "产品溯源档案");

          } else {
              $("#headUser").html("暂无填写");
              $("#company-address").html("暂无填写");
          }
      },
      error:function(){
          alert("TraceRecords_getVendorInfo()请求失败");
      }
  });
}



/// <summary>
/// 获取当前产品下的所有认证信息
/// </summary>
/// <param name="certiId">产品验证信息的id列表</param>
/// <returns></returns>
function getOrgProCertifiedData(certiId) {
    Array.prototype.where = function (s) {
        return eval("(jQuery.grep(this, function (o, i){return " + s + ";}))");
    }
    $.ajax({
        url: "?action=ProductCerti",
        type:"post",
        data:{
        	htmlMethod:"getProductCertiList",
        	idList:certiId
        },
        dataType:"json",
        success: function (response) {
        	var tbHtml = "";
        	var data = eval(response);
            if (data && data.length > 0) {
                $(".certification-list").show();
                $("#procernone").hide();
                for (var i = 0; i < data.length; i++) {
                        tbHtml += "<tr data-id=" + data[i].certi_type_index + "><td>" + data[i].certi_type_name + "</td><td><i class=\"icon ic_check\"></i>已检测</td>";
                        tbHtml += "<td><a href='javascript:void(0);' class=\"btn btn_certification\"></a></td></tr>";
                }
            } else {
                $(".certification-list").hide();
                $("#procernone").show();
                tbHtml += "<tr><td>没有认证</td></tr>";
            }
            $("#tb_procertied").empty();
            $("#tb_procertied").append(tbHtml);
            //绑定事件
            exploratory.config.certificationSlides(certiId);
        }
    });
}

/// <summary>
/// 获取所有认证信息图片
/// </summary>
/// <param name="">One:取当前组织下一条数据；All:取当前组织下所有数据</param>
/// <returns></returns>
function getOrgProCertifiedPicsData(certiId, zsid) {
	    $.ajax({
	        url: "?action=ProductCerti",
	        type:"post",
	        data:{
	        	htmlMethod:"getProductCertiList",
	        	idList:certiId
	        },
	        dataType:"json",
	        success: function (response) {
	            var divHtml = "";
	            var data = eval(response);
	                pics = 0;
	            if (data && data.length > 0) {
	                for (var i = 0, len = data.length; i < len; i++) {
	                        var bigImg = data[i].certi_imgloclist.split(',')[1];
	//                        var icon = setProCertifiedEnum(jsonItems[i].CertifiedType, "icon");
	                        divHtml += "<div class=\"slide\" data-parent=" + data[i].certi_type_index + "><div class=\"slide-image\"><img src='" + bigImg + "'/></div>";
	                        divHtml += "<div class=\"slide-info\"><div class=\"hd\">";
	//                        if (icon != "") {
	//                            divHtml += "<div class=\"certification-logo\">" + icon + "</div>";
	//                        }
	                        divHtml += "<p class=\"sub-title\">" + data[i].certi_type_name + "</p><p>由 " + data[i].certi_awarddepart + " 认证</p>"
	                        divHtml += "</div><div class=\"bd\"><p class=\"explain\">描述内容";
	                        divHtml += "</div></div></div>";
	                        pics++;
	                    }
	            }
	            $(".certification-slides").remove();
	            var $certificationDiv = $('<div class="certification-slides"></div>');
	            $certificationDiv.appendTo(".certification-dialog");
	            $certificationDiv.html(divHtml);
	            $("#picCounts").html("共" + pics + "张");
	            if (pics <= 1) return;
	            $(".certification-slides .slide").each(function (i) {
	                var Idd = $(this).data("parent");
	                if (Idd == zsid) {
	                    var startNumber = i + 1;
	                    $(".slides-total .slide-number").text(startNumber);
	                    $('.certification-slides').slidesjs({
	                        start: startNumber,
	                        width: 620,
	                        height: 520,
	                        effect: {
	                            slide: {
	                                speed: 1
	                            },
	                            fade: {
	                                speed: 200,
	                                crossfade: true
	                            }
	                        },
	                        callback: {
	                            complete: function (number) {
	                                $('.slides-total .slide-number').text(number);
	                            }
	                        }
	                    });
	                    return false;
	                }
	            });
	        },
	        mask: function () {
	            $(".certification-slides").mask("正在获取数据,请稍候...");
	        },
	        unmask: function () {
	            $(".certification-slides").unmask();
	        },
	        error:function(){
	        	alert("getOrgProCertifiedPicsData()执行失败");
	        }
    });
}

/// <summary>
/// 档案发布
/// </summary>
/// <param name="data">数据实体</param>
/// <param name="callPage">调用页面</param>
/// <returns></returns>
function buildTraceInfo(data, callPage) {
    if ($("#buildTraceInfoID").length > 0) $("#buildTraceInfoID").remove();
    $("<div id='buildTraceInfoID'></div>").appendTo('body');
    Transfer.reload("#buildTraceInfoID", {
        url: "/AgriProTraceability/bulidTraceInfo.html",
        scripts: []
    },
        function () {
            Transfer.loadCSS([]);

            /* 点击 保存 */
            $("#SaveProTraceInfo").unbind('click').click(function () {
                SaveProRelease(data, callPage);
            });

            /* 点击 取消 */
            $("#CancelProTraceInfo").unbind('click').click(function () {
                $("#buildTraceInfoID").remove();
            });

            $("#txtHarvestTime").datepicker({
                dateFormat: 'yy-mm-dd',
                changeMonth: true,
                changeYear: true
            });

            $("#buildTraceInfoID").dialog({
                autoOpen: true,
                width: '480',
                height: '200',
                title: "溯源档案发布",
                modal: true,
                resizable: false,
                minHeight: 100,
                minWidth: 100
            }).dialog("open");
        }
    );
}

/// <summary>
/// 保存产品发布信息
/// </summary>
/// <param name="data">数据实体</param>
/// <param name="callPage">调用页面</param>
function SaveProRelease(data, callPage) {
    var entity = {
        url: "/TraceabilityService.svc/SaveProBatchInfo",
        params: {
            ProductID: data.ProductID,
            ChildOrgID: data.ChildOrgID,
            CropVarietyID: data.CropVarietyID,
            OrgID: data.OrgID,
            CreateUserID: user.UserID,
            Remark: "创建批次",
            ReleaseStatus: 0, //发布状态
            Status:3  //云平台的溯源档案批次发布，状态直接为发布状态，与91溯源有区别
        },
        success: function (response) {
            if (response != undefined) {
                var alertString = "";
                var res = response.split('|');
                switch (res[0]) {
                    case "BatchID_EXISTS":
                        alertString = "产品批次号已经存在。";
                        break;
                    case "SUCCESS":
                        alertString = "SUCCESS";
                        TraceabilityRecords.page.getProductTraceInfo(1, data.ProductID, "GIF", 0);
                        break;
                    case "BatchID_ERROR":
                        alertString = "产品批次号生成错误。";
                        break;
                    case "PRO_NOT_EXISTS":
                        alertString = "产品不存在。";
                        break;
                    case "EXCEPTION":
                        alertString = "操作异常。";
                        break;
                    default:
                        alertString = "未知错误。";
                        break;
                }
                if (alertString != "SUCCESS") {
                    Messages.slideResult(alertString, 2000);
                    $("#buildTraceInfoID").remove();
                }
            }
        }
    }
    Service.post(entity);
}


/// <summary>
/// 生成二维码
/// </summary>
/// <param name="batchid">产品批次号</param>
function buildQrCode(batchid) {
    if ($("#buildTraceInfoID").length > 0) $("#buildTraceInfoID").remove();
    $("<div id='buildTraceInfoID'></div>").appendTo('body');

    Transfer.reload("#buildTraceInfoID", {
        url: "/AgriProTraceability/CreateQrCodeView.html",
        scripts: []
    },
        function () {
            Transfer.loadCSS([]);
            buildQrCodeImg(batchid, "query");

            $("#saveQrcode").unbind("click").click(function (e) {
                buildQrCodeImg(batchid, "save");
            });

            $("#buildTraceInfoID").dialog({
                autoOpen: true,
                width: 'auto',
                height: 'auto',
                title: "查看二维码",
                modal: true,
                resizable: false,
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
        }
    );
}

/// <summary>
/// 生成二维码
/// </summary>
/// <param name="batchid">产品批次号</param>
function buildQrCodeImg(batchid, action) {
    var size = 3;
    if (action == "save") {
        $.ajax({
            type: "POST",
            url: encodeURI("/AgriProTraceability/Handler/QRCodeHandler.ashx?" + Math.random()),
            data: { "QRContent": batchid, "size": size, "action": action },
            success: function (data) {
                if (data != "") {
                    location.href = data;
                }
            }
        });
    } else {
        var barimg = "<table align=center><tr>";
        barimg += "<td><img src=\"/AgriProTraceability/Handler/QRCodeHandler.ashx?QRContent=" + batchid + "&size=" + size + "&action=" + action + "\" />";
        barimg += "<br>" + batchid + "</td>";
        barimg += "</tr></table>";
        $(".qrcode_img").html(barimg);
    }
}


/// <summary>
/// 获取产品的上市时间
/// </summary>
/// <param name="entity">数据实体</param>
function getProductHarvestTime(entity) {
    Service.post({
        url: "/TraceabilityService.svc/getProductHarvestTime",
        params: entity,
        success: function (response) {
            if (response && response.Items.length > 0) {
                var harvestTime = Util.formatDateTime(response.Items[0].HarvestTime, "yyyy/MM/dd");
                $(".date").html(harvestTime);
                $(".date").data("HarvestTime", harvestTime);
            } else {
                $(".date").html("");
                $(".date").data("HarvestTime", "");
            }

        }
    });
}

/// <summary>
/// 通过二维码信息查询溯源档案
/// </summary>
/// <param name="batchid">产品批次号</param>
function QueryTraceabilityInfo(batchid,status) {
    Service.post({
        url: "/TraceabilityService.svc/QueryTraceabilityInfo",
        params: {
            BatchID: batchid
        },
        success: function (response) {
            var barimg = "<p><img width='60' height='60' src=\"http://sa.tcloudit.com/AgriProTraceability/Handler/QRCodeHandler.ashx?QRContent=" + batchid + "&size=" + 3 + "&action=query\" />";
            barimg += "<p class='mt5'>溯源二维码<br/>点击放大</p>";
            $("#file_qrcode").attr("src", "http://sa.tcloudit.com/AgriProTraceability/Handler/QRCodeHandler.ashx?QRContent=" + batchid + "&size=" + 3 + "&action=query");
            $("#qrcodeTraceability").html(barimg);

            $("#qrcodeTraceability").unbind("click").click(function () {
                var dom_popup = $(".qrcode-popup");
                dom_popup.dialog({
                    autoOpen: false,
                    width: '400',
                    height: 'auto',
                    dialogClass: "modal-dialog",
                    title: "",
                    modal: true,
                    close: function () {
                        dom_popup.dialog("destroy");
                    },
                    resizable: false
                }).dialog("open");

                dom_popup.find(".dialog_close_btn .icon_close").unbind("click").click(function () {
                    dom_popup.dialog("destroy");
                })
            })



            if (response && response.Items.length > 0) {
                var data = response.Items[0];
                if (QueryTraceaDetail91) {
                    QueryTraceaDetail91.RecordType = data.RecordType;
                }
                if (window.location.host == "www.91suyuan.com") {
                    //91溯源才有分享
                    bShare.addEntry({
                        title: document.title + "———" + data.ProductName,
                        summary: Util.DelHtml(data.Remark),
                        pic: "http://" + window.location.host + "" + data.LogoIcon.split(":")[0].toString()
                    });
                }
                if (data.RecordType == 0) {  //云平台档案查看
                    //基础数据
                    $("#produce_name").html(data.ProductName);
                    $("#cropname").html(data.CropVarietyName);
                    $("#cropname").data("CropID", data.CropID); //作物ID
                    $(".quota-list").show();
                    $("#quotanone").remove();

                    //档案负责人
                    var productManager = data.ProductManager == null ? "暂无" : data.ProductManager;
                    $("#headUser").html(productManager);
                    $("#headUser").data("headUser", productManager);

                    //产品简介
                    if (data.Remark == "") {
                        $("#proremark").hide();
                        $("#proremarknone").show();
                    } else {
                        $("#proremark").show();
                        $("#proremarknone").hide();
                        $("#proremark").html(data.Remark);
                    }
                    //企业认证
                    TraceRecords_getCompanyInfo(data.vendor_id);

                    //产品认证
                    getOrgProCertifiedData(data.product_certi_list);
                    //获取产品指标配置
                    ProAttributes.config.getProAttributesConfig(data.CropID, batchid, "normal");

                    //绑定产品基本信息
                    ProAttributes.config.getProductBaseInfo(data.ProductID);

                    //获取产品的采收时间
                    var harvestime = (Util.formatDateTime(data.HarvestTime, "yyyy/MM/dd") == "1900/01/01" ? "" : Util.formatDateTime(data.HarvestTime, "yyyy/MM/dd"));
                    $(".date").html(harvestime);
                    //设置采收时间，和开始时间
                    $(".date").data("HarvestTime", harvestime);
                    $(".date").data("StartTime", Util.formatDateTime(data.StartTime, "yyyy/MM/dd"));

                    //档案完整度
                    common_getTraceDataIntegrity(data.ChildOrgID, data.ProductID, Util.formatDateTime(data.StartTime, "yyyy/MM/dd"), harvestime, data.RecordType);

                    //获取产品购买信息
                    TraceRecords_getProBuywayInfo(data.ProductID);

                    //环境数据
                    exploratory.config.EnvironmentRecords(data.ChildOrgID, data.CropID, data.RecordType);

                    //施肥记录
                    exploratory.config.FertilizerUseRecords(null, data.ChildOrgID, data.ProductID);

                    //喷药记录
                    exploratory.config.PesticideUseRecords(null, data.ChildOrgID, data.ProductID);

                    //全生长期图片展示
                    exploratory.config.GrowthImages(null, data.ChildOrgID, data.ProductID);

                    //顾客评分
                    exploratory.config.CustomerRatings(batchid);

                    //获取顾客评分
                    exploratory.config.GetCustomerRatings(batchid);
                    //视频直播
                    exploratory.config.viewSurveillanceVideo(data.VedioURL, data.WebVedioURL);
                } else {  //91溯源档案查看
                    //基础数据
                    $("#produce_name").html(data.ProductName);
                    $("#cropname").html(data.CropVarietyName);
                    $("#cropname").data("CropID", data.CropID); //作物ID

                    //产品简介
                    if (data.Remark == "") {
                        $("#proremark").hide();
                        $("#proremarknone").show();
                    } else {
                        $("#proremark").show();
                        $("#proremarknone").hide();
                        $("#proremark").html(data.Remark);
                    }

                    //公司简介
                    if (data.Introduce == "") {
                        $("#comremark").hide();
                        $("#comremarknone").show();
                    } else {
                        $("#comremark").show();
                        $("#comremarknone").hide();
                        $("#comremark").html(data.Introduce);
                    }
                    //档案负责人
                    var productManager = data.ProductManager == null ? "暂无" : data.ProductManager;
                    $("#headUser").html(productManager);
                    $("#headUser").data("headUser", productManager);


                    //获取产品的采收时间
                    var harvestime = (Util.formatDateTime(data.HarvestTime, "yyyy/MM/dd") == "1900/01/01" ? "" : Util.formatDateTime(data.HarvestTime, "yyyy/MM/dd"));
                    $(".date").html(harvestime);

                    //91溯源档案没有产品指标，只有客户自定义的产品指标描述
                    if (data.BatchDesCribe) {
                        $(".quota-list").show();
                        $("#quotanone").hide();
                        $(".quota-list").html(data.BatchDesCribe);
                    } else {
                        $(".quota-list").hide();
                        $("#quotanone").show();
                    }
                    var LogoIcon = data.LogoIcon.split(":")[0].toString();
                    $("#produce_photo").html("<img src=" + LogoIcon + "  width='300px'>");

                    //企业认证
                    QueryTraceaDetail91.GetCompanyInfo(data.OrgID, data.ChildOrgID);
                    //TraceRecords_getCompanyInfo(data.OrgID, data.ChildOrgID);

                    QueryTraceaDetail91.ProductID = data.ProductID;

                    // 获取 91溯源肥料记录展示
                    QueryTraceaDetail91.GetFertilizer(1);
                    // 获取 91溯源农药记录展示 数据
                    QueryTraceaDetail91.GetPesticide(1);

                    //                    //91溯源档案没有环境数据
                    //                    $(".btn_environment").html("没有数据")
                    //                    $(".btn_environment").parents("li").addClass("notrack");
                    //                    $(".btn_environment").unbind("click").click(function () { })


                    //档案完整度
                    common_getTraceDataIntegrity(data.ChildOrgID, data.ProductID, Util.formatDateTime(data.StartTime, "yyyy/MM/dd"), harvestime, data.RecordType);
                    //环境数据
                    exploratory.config.EnvironmentRecords(data.ChildOrgID, data.CropID, data.RecordType);


                    //产品认证
                    getOrgProCertifiedData(data.ProductID);

                    //获取产品购买信息
                    TraceRecords_getProBuywayInfo(data.ProductID);

                    //顾客评分
                    exploratory.config.CustomerRatings(batchid);

                    //获取顾客评分
                    exploratory.config.GetCustomerRatings(batchid);
                    //视频直播
                    exploratory.config.viewSurveillanceVideo(data.VedioURL, data.WebVedioURL);

                    //档案完整度
                    QueryTraceaDetail91.get91TraceDataIntegrity(data.ProductID);

                    $(".btn_images").unbind("click").click(function (e) {
                        if ($(this).hasClass('btn_images')) {
                            $("#growthImagesModal").dialog({
                                autoOpen: false,
                                width: '980',
                                height: 'auto',
                                dialogClass: "modal-dialog",
                                title: "",
                                modal: true,
                                resizable: false
                            }).dialog("open");

                            //自定义弹出层关闭事件，点击关闭时摧毁弹出层
                            $("#growthImagesModal .dialog_close_btn .icon_close").unbind("click").click(function () {
                                $("#growthImagesModal").dialog("destroy");
                            })

                            // 获取 91溯源档案生长周期图片展示
                            QueryTraceaDetail91.GetGrowthImg(data.ProductID);
                            e.preventDefault();
                            return false;
                        }
                    });


                }
            } else {
                ZENG.msgbox.show("查无此档案!", 4, 2000);
                location.href = "/AgriProTraceability/queryEntrance.html"
            }
        }
    });
}



//===================================================关键环境数据===========================

function addDate(dd,dadd){
var a = new Date(dd)
a = a.valueOf()
a = a + dadd * 24 * 60 * 60 * 1000
a = new Date(a)
return a;
}
/// <summary>
/// 获取设备信息
/// </summary>
/// <param name="orgid">组织ID</param>
/// <param name="deviceType">设备类型：5=光照，1=空气温度</param>
/// <returns></returns>
function TraceRecords_getDevices(productId, deviceType) {
	// 后台取值
//    var EndDate = new Date().format('yyyy-MM-dd'); //采收时间
//    var myDate = new Date();
//    myDate = myDate.valueOf();
//    myDate = myDate - 90 * 24 * 60 * 60 * 1000;
//    var StartDate = new Date(myDate).format('yyyy-MM-dd'); //种植时间
    // 光照度
    if (deviceType == 5) {
//        var dvices = new Array();
//        for (var i = 0, len = response.Items.length; i < len; i++) {
//            dvices.push(response.Items[i].DeviceID);
//        }

        var filter = {
            productId:productId, //设备集合
//            Intensity: 1200, //光照强度
            deviceType:deviceType
        }
        getIlluminationData(filter);
    } else {
        var title, yAxisTitle, seriesname, valueSuffix, unitValue;
        switch (deviceType) {
            case 1: //空气温度
            case 3: //土壤温度
                seriesname = "温度";
                title = "";
                yAxisTitle = "温度 (°C)";
                valueSuffix = "°C(摄氏度)";
                unitValue = '°C';
                break;
            case 2: //空气湿度
            case 4: //土壤湿度
                seriesname = "湿度";
                title = "";
                yAxisTitle = "湿度 (%)";
                valueSuffix = "%(百分比)";
                unitValue = '%';
                break;
        }
        exploratory.config.loadTemperatureDate(response.Items[0].DeviceID, StartDate, EndDate, deviceType, title, yAxisTitle, seriesname, valueSuffix, unitValue);
    }
}

/// <summary>
/// 获取光照数据
/// </summary>
/// <param name="filter">参数</param>
/// <returns></returns>
/// category x坐标集合
function getIlluminationData(filter) {
    $("#timelen").html(0);
    $.ajax({
        url : "?action=productDetail",
        type: "post",
        data:{
        	htmlMethod:"getEnvironmentDataByType",
        	productId:filter.productId,
        	type:filter.deviceType
        },
        dataType: "json",
        success: function (response) {
            var series = [],
                oneSeries = null,
                deviceNames = "",
                category = [];

            if (response && response.length > 0) {
                //category移除__type属性,顺序需与数据库返回保存一致
                for (var i = 0; i < response.length; i++) {
                    category.push(Util.getFullYear(response[i].data_time) + '年' + Util.getMonth(response[i].data_time) + '月');
                }
                oneSeries = {
                        //name: itemDevice.DeviceFullName,
                        data: []
                }
                $.each(response, function (i, itemDevice) {
                    //顺序需与category一致
                    oneSeries.data.push(parseInt(itemDevice.first_data));
                })
                var total = 0;
                for (var x = 0; x < oneSeries.data.length; x++) {
                    total = total + parseInt(oneSeries.data[x]);
                }

                //series.push(oneSeries);
                //时长总计
                //var totalTimeLen = itemDevice.TotalHour;
                $("#timelen").html(total);

                exploratory.config.luxReport(category, oneSeries.data);
            } else {
                $("#timelen").html(0);
            }
        },
        mask: function () {
            $(".environmentMain").mask("正在获取数据,请稍候...");
        },
        unmask: function () {
            $(".environmentMain").unmask();
        }
    });
}

/// <summary>
/// 获取空气温度数据
/// </summary>
/// <param name="filter">参数</param>
/// <returns></returns>
function getAirTemperatureData(devices) {
    Service.post({
        url: "/SensorReportService.svc/GetDevicesRecordPerHourByDate",
        params: JSON.stringify({
            Devices: devices,
            TableID: 1,
            StartDateTime: $(".date").data("StartTime"), //种植时间
            EndDateTime: Date.now() //采收时间
        }),
        success: function (response) {
            if (response) {
                CustomStock.multipleLine(response, newLineOption(), null, CustomStock.getSensorThresholds(devices));
            }
        },
        mask: function () {
            $(".environmentMain").mask("正在获取数据,请稍候...");
        },
        unmask: function () {
            $(".environmentMain").unmask();
        }
    });
}

function newLineOption() {
    var option = $.extend({}, CustomStock.lineOption);
    option.reportTimeSelector = ".report_time";
    option.selector = '.temp-chart';
    option.title = "空气温度记录";
    option.yAxisTitle = "温度 (°C)";
    option.valueSuffix = "°C(摄氏度)";
    option.series = [{
        name: "平均温度",
        data: [],
        valueField: "AvgValue",
        color: '#227744'
    }, {
        name: "最高温度",
        data: [],
        valueField: "MaxValue",
        color: '#ee4444'
    }, {
        name: "最低温度",
        data: [],
        valueField: "MinValue",
        color: '#22aabb'
    }];
    //最小横坐标粒度
    option.tickInterval = 1 * 3600 * 1000;
    //小数位数
    option.decimalLong = 1;
    option.exporting = false;
    return option;
}

/// <summary>
/// 查询溯源流程任务各个周期的汇报照片
/// </summary>
/// <param name="orgid">组织ID</param>
/// <returns></returns>
function getTraceFlowTaskFeedbackPics(imglist) {
    $.ajax({
        url: "?action=ProductDetail",
        type:"post",
        data: {
        	htmlMethod:"getGrowImgList",
        	imgList:imglist
        },
        dataType:"json",
        success: function (response) {
            if (response && response.length > 0) {
                //appendTaskNameHtml(response); //周期集合
                if (response.length > 0) {
                    $("#growthImagesModal").data("Imgobj", response); //图片集合
                    // TODO 
                    appendImgsHtml(1, "asdaf");
                }
            }
        },
        mask: function () {
            $("#growthImagesModal").mask("正在获取数据,请稍候...");
        },
        unmask: function () {
            $("#growthImagesModal").unmask();
        },
        error:function(){
        	
        }
    });
}

/// <summary>
/// 拼接任务周期列表
/// </summary>
/// <param name="tasknames">任务周期集合</param>
/// <returns></returns>
function appendTaskNameHtml(tasknames) {
    var taskhtml = "<ul>";
    for (var i = 0; i < tasknames.length; i++) {
        if (i == 0) {
            appendImgsHtml(tasknames[i].TaskSet_TaskID, tasknames[i].Content);
        }
        taskhtml += "<li class=\"acurrent icurrent" + tasknames[i].TaskSet_TaskID + "\">";
        taskhtml += "<span onclick=\"appendImgsHtml(" + tasknames[i].TaskSet_TaskID + ",'" + tasknames[i].Content + "');\">" + tasknames[i].TaskName + "<em class=\"num\">(<span id=\"num_" + tasknames[i].TaskSet_TaskID + "\">" + getPicsCount(tasknames[i].FeedbackPhotos) + "</span>)</em></span></li>";
    }
    taskhtml += "</ul>";
    $("#growthpic").html(taskhtml);
}

/// <summary>
/// 获取图片张数
/// </summary>
/// <param name="feedbackphotos">图片地址</param>
/// <returns></returns>
function getPicsCount(feedbackphotos) {
    var count = 0;
    var strImgs = feedbackphotos.split('|');
    for (var i = 0; i < strImgs.length; i++) {
        if (strImgs[i] == "") continue;
        count++
    }
    $("#picCount").html(count);
    return count;
}

/// <summary>
/// 拼接图片列表
/// </summary>
/// <param name="taskid">任务ID</param>
/// <returns></returns>
function appendImgsHtml(taskid, content) {
    content = removeHtmlTag(Util.htmlDecode(content));
    $(".acurrent").removeClass("current");
    $(".icurrent" + taskid).addClass("current");
    var Imgobj = $("#growthImagesModal").data("Imgobj");
    if (Imgobj == null) return;
//    Array.prototype.where = function (s) {
//        return eval("(jQuery.grep(this, function (o, i){return " + s + ";}))");
//    }
//    var jsonData = eval(Imgobj.Items).where("o.TaskSet_TaskID==" + taskid + "");

    $(".growth-images-slides").remove();
    var $growthImgDiv = $('<div class="growth-images-slides"></div>');
    $growthImgDiv.appendTo(".col-main");
    var imgHtml = "";
    var jsonLen = Imgobj.length; //图片总数
    for (var i = 0; i < jsonLen; i++) {
//        var photos = jsonData[i].FeedbackPhoto.split(':');
//        var imgUrl = photos.length > 2 ? photos[2] : photos[0];
        imgHtml += "<div class=\"img-slide\" id='img-slide-" + i + "'>";
        imgHtml += "<img src=" + Imgobj[i].img_loc + ">";
        imgHtml += "<div class=\"location\">"
        imgHtml += "<p class=\"time\">" + Util.toDateEntire(Imgobj[i].img_date) + "</p>";
        imgHtml += "<p>" + Imgobj[i].img_address + "</p>";
        imgHtml += "</div>";
        imgHtml += "</div>";
        //$growthImgDiv.append(imgHtml);
        //$(".growth-images-slides .img-slide").eq(i).data(jsonData[i]);
    }
    $(".growth-images-slides").html(imgHtml);
    $(".img-remarks").html(Imgobj[0].img_desc);

    $(".slides-total .slide-number").html(1);
    $("#picCount").html(jsonLen);
    if (jsonLen <= 1) return;
    exploratory.config.GrowthImagesSlides();
}

/// <summary>
/// 生成条形码
/// </summary>
/// <param name="batchid">产品批次号</param>
function buildBarCode(batchid) {
    if ($("#buildTraceInfoID").length > 0) $("#buildTraceInfoID").remove();
    $("<div id='buildTraceInfoID'></div>").appendTo('body');

    Transfer.reload("#buildTraceInfoID", {
        url: "/AgriProTraceability/CreateBrCodeView.html",
        scripts: []
    },
        function () {
            Transfer.loadCSS([]);
            buildBarCodeImg(batchid, "query");

            $("#savebarcode").unbind("click").click(function (e) {
                buildBarCodeImg(batchid, "save");
            });

            $("#buildTraceInfoID").dialog({
                autoOpen: true,
                width: 'auto',
                height: 'auto',
                title: "查看条形码",
                modal: true,
                resizable: false,
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
        }
    );
}

/// <summary>
/// 生成条形码
/// </summary>
/// <param name="batchid">产品批次号</param>
function buildBarCodeImg(batchid, action) {
    if (action == "save") {
        $.ajax({
            type: "POST",
            url: encodeURI("/AgriProTraceability/Handler/BarCodeHandler.ashx?" + Math.random()),
            data: { "barContent": batchid, "action": action },
            success: function (data) {
                if (data != "") {
                    location.href = data;
                }
            }
        });
    } else {
        var barimg = "<table align=center><tr>";
        barimg += "<td><img src=\"/AgriProTraceability/Handler/BarCodeHandler.ashx?barContent=" + batchid + "&action=" + action + "\" />";
        barimg += "<br>" + batchid + "</td>";
        barimg += "</tr></table>";
        $(".qrcode_img").html(barimg);
    }
}

//图片等比例缩放
function AutoResizeImage(maxWidth, maxHeight, objImg) {
    var img = new Image();
    img.src = objImg.src;
    var hRatio;
    var wRatio;
    var Ratio = 1;
    var w = img.width;
    var h = img.height;
    wRatio = maxWidth / w;
    hRatio = maxHeight / h;
    if (maxWidth == 0 && maxHeight == 0) {
        Ratio = 1;
    } else if (maxWidth == 0) {//
        if (hRatio < 1) Ratio = hRatio;
    } else if (maxHeight == 0) {
        if (wRatio < 1) Ratio = wRatio;
    } else if (wRatio < 1 || hRatio < 1) {
        Ratio = (wRatio <= hRatio ? wRatio : hRatio);
    }
    if (Ratio < 1) {
        w = w * Ratio;
        h = h * Ratio;
    }
    objImg.height = h;
    objImg.width = w;
}


//去除HTML
function removeHtmlTag(str) {
    var words = '';
    words = str.replace(/<[^>]+>/g, "");
    return words;
}

//获取产品购买信息
function TraceRecords_getProBuywayInfo(buyIdList) {
    $.ajax({
        url: "?action=ProductDetail",
        type:"post",
        data: {
            htmlMethod: "getProductBuyinfo",
            buyIdList: buyIdList
        },
        dataType:"json",
        success: function (response) {
        	$("#BuyForOnlineUL").empty();
            $("#PhysicalForBuyT").empty();
            $("#SalesContactorT").empty();
            if (response.length > 0) {
                $(".NoBuyListDiv").hide();
                $(".BuyListDiv").show();
                $.each(response, function (i, item) {
                    if (item.buy_type == 1) {
                        $("#BuyForOnlineUL").append(String.format('<li><a href={1} target=_blank>{0}</li>', common_setShoppingLogo(item.buy_desc_first), item.buy_desc_first));

                    } else if (item.buy_type == 2) {
                        if ($("#PhysicalForBuyT")[0].children.length > 4) {
                            $(".PhysicalForBuyTMore").parent().show();
                            var html = String.format("<tr class=\"hide  PhysicalMoreHide\"> <td>{0}</td> <td> <i style=\"cursor:pointer\" class=\"icon-location Serchlocation\"></i></span></td></tr>", item.buy_desc_first)
                            $("#PhysicalForBuyT").append(html);
//                            $(".Serchlocation:last").data("Serchlocation", item.buy_desc_first);
                        } else {
                            var html = String.format("<tr> <td>{0}</td> <td> <i style=\"cursor:pointer\" class=\"icon-location Serchlocation\"></i></span></td></tr>", item.buy_desc_first)
                            $("#PhysicalForBuyT").append(html);
//                            $(".Serchlocation:last").data("Serchlocation", item.buy_desc_first);
                        }
                    } else {
                        if ($("#SalesContactorT")[0].children.length > 4) {
                            $(".SalesContactorTMore").parent().show();
                            var HTML = String.format("<tr class=\"hide SalesMoreHide\">  <td>  {0} </td> <td>  {1}</td> </tr>", item.buy_desc_first, item.buy_desv_sec);
                            $("#SalesContactorT").append(HTML);
                        } else {
                            var HTML = String.format("<tr>  <td>  {0} </td> <td>  {1}</td> </tr>", item.buy_desc_first, item.buy_desv_sec);
                            $("#SalesContactorT").append(HTML);
                        }
                    }
                });
                $(".PhysicalForBuyTMore").unbind("click").click(function () {
                    if ($(this).hasClass("true")) {
                        $("#PhysicalForBuyT").find("tr").show();
                        $(this).html("收起↑");
                        $(this).removeClass("true")
                    } else {
                        $(".PhysicalMoreHide").hide();
                        $(this).html("查看更多");
                        $(this).addClass("true")
                    }

                });
                $(".SalesContactorTMore").unbind("click").click(function () {
                    if ($(this).hasClass("true")) {
                        $("#SalesContactorT").find("tr").show();
                        $(this).html("收起↑");
                        $(this).removeClass("true")
                    } else {
                        $(".SalesMoreHide").hide();
                        $(this).html("查看更多");
                        $(this).addClass("true")
                    }
                });
                $(".Serchlocation").unbind("click").click(function () {
                    var address = $(this).data("Serchlocation");
                    $("#dialogMapDiv").find(".map-area").empty();
                    $("#dialogMapDiv").find(".map-area").append('<iframe src="/AgriProTraceability/EditTraceabilityDetails/Baidumap.html" width="410" height="230" class="map_frame" style="border: none" scrolling="no"></iframe>');
                    $("#dialogMapDiv").find(".map_frame").data("addresskey", address);
                    ;
                    $("#dialogMapDiv").dialog({
                        autoOpen: true,
                        width: 450,
                        height: 320,
                        title: "百度地图",
                        modal: true,
                        resizable: false,
                        show: {
                            effect: "clip",
                            duration: 300
                        },
                        hide: {
                            effect: "clip",
                            duration: 300
                        }
                    }).dialog("open");

                    //exploratory.config.init(address, "divMap-1");
                });

            } 
        },
        error:function(){
        	$(".NoBuyListDiv").show();
            $(".BuyListDiv").hide();
        }
    });
}

//图片裁剪
function TraceRecords_ImgCutDialog() {
    if ($("#ImgCutDialogID").length > 0) $("#ImgCutDialogID").remove();
    $("<div id='ImgCutDialogID' class='hide'></div>").appendTo('body');

    Transfer.reload("#ImgCutDialogID", {
        url: "/AgriProTraceability/ImgCutter/ImgCutDialog.html",
        scripts: [
                "/Plugins/FileBase64/swfobject.js",
                "/AgriProTraceability/EditTraceabilityDetails/BaseInfoImgAttachment.js",
                "/AgriProTraceability/ImgCutter/js/jquery.Jcrop.min.js",
                "/AgriProTraceability/ImgCutter/js/jQuery.UtrialAvatarCutter.js"]
    },
        function () {
            Transfer.loadCSS([
            "/AgriProTraceability/ImgCutter/css/jquery.Jcrop.css",
            "/Plugins/WYSIWYG/jwysiwyg/jquery.wysiwyg.css",
            "/Plugins/FileBase64/Attachment/Attachment.css"]);
            //初始化插件
            BaseInfoImgAttachment.initButton("Upload_BaseInfoImgAttachment", $(".BaseInfoImgAttachment"), '<dd class="imagedd"><p class="imgAttachment" style="cursor: pointer"><img src="{0}"></p></dd>');

            $("#CancelsaveImg").unbind("click").click(function (e) {
                $("#ImgCutDialogID").remove();
            });
            $("#ImgCutDialogID").dialog({
                autoOpen: false,
                width: '800',
                height: 'auto',
                title: "添加图片",
                modal: true,
                resizable: false,
                show: {
                    effect: "clip",
                    duration: 300
                },
                hide: {
                    effect: "clip",
                    duration: 300
                }
            }).dialog("open");
        }
    );
}