/// <summary>
/// 初始化调用
/// </summary>
/// <param name="params">参数</param>
/// <returns></returns>
function TraceabilityDetailsInitial(params) {
    //返回到档案列表
    // $(".backClick").unbind("click").click(function () {
    //     Transfer.loadByHistory(Default.logic.contentContainer, DynamicPages.proTraceability);
    // })
    // if (params != null && params.BatchID == undefined) {
    //     //编辑
    //     $("#titlebar").html("维护档案");
    //     $("#traceTitle").remove();
    //     EditBaseOrgInfo.EditArchivesClick(params); //初始化档案编辑的所有入口
    //     initData(params);
    // } else {
    //     //查看（清除编辑功能）
    //     $("#titlebar").html("查看档案");
    //     $(".btn_edit").remove();
    //     QueryTraceabilityInfo(params.BatchID);
    // }
    initData(params);
}

/// <summary>
/// 初始化数据
/// </summary>
/// <returns></returns>
function initData(data) {
    //data 为获取的数据信息
    //基础数据
    $("#produce_name").html(data.basicinfo_name);
    $("#cropname").html(data.variety);
    $("#cropname").data("CropID", data.basicinfo_crops_index); //作物ID
    $("#produce_photo").html("<img src='" + data.basicinfo_img_loc + "' width='300px'>");
    var HarvestTime = (Util.formatDateTime(data.HarvestTime, "yyyy/MM/dd") == "1900/01/01" ? "" : Util.formatDateTime(data.basicinfo_time, "yyyy/MM/dd"));
    $("#harvesttime").html(HarvestTime);
    //产品简介
    if (data.product_intro == "" || !data.product_intro) {
        $("#proremark").hide();
        $("#proremarknone").show();
    } else {
        $("#proremark").show();
        $("#proremarknone").hide();
        $("#proremark").html(data.product_intro);
    }
    //产品指标
//    if (data.basicinfo_remark == "") {
//        $("#quota").hide();
//        $("#quotanone").show();
//    } else {
//        $("#quota").show();
//        $("#quotanone").hide();
//        $("#quota").html(data.basicinfo_remark);
//    }

    //企业认证
    TraceRecords_getCompanyInfo(data.vendor_id);

    //产品认证
    getOrgProCertifiedData(data.product_certi_list);

    //获取产品指标配置
    ProAttributes.config.getProAttributesConfig(data.batchlist, "normal");

    //获取产品的上市时间
    //$(".date").data("HarvestTime", "");
    //    getProductHarvestTime({
    //        BatchID: "",
    //        ProductID: data.ProductID
    //    });

    //获取开始种植的时间
    //$(".date").data("StartTime", Util.formatDateTime(data.StartTime, "yyyy/MM/dd"));

    //档案完整度
    //common_getTraceDataIntegrity(data.ChildOrgID, data.ProductID, $(".date").data("StartTime"), "",data.RecordType);

    //获取产品购买信息
    TraceRecords_getProBuywayInfo(data.buy_info_list);
    
    //加载二维码
    var barimg = "<p><img width='60' height='60' src=\""+data.qrcodeloc+"\" />";
    barimg += "<p class='mt5'>溯源二维码<br/>点击放大</p>";
    $("#file_qrcode").attr("src", data.qrcodeloc);
    $("#qrcodeTraceability").html(barimg);
    //二维码点击事件
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
    
}
