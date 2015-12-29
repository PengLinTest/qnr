//全部产品数据绑定
var Tctrace_product;

if (!Tctrace_product) {
    Tctrace_product = {};
}

Tctrace_product.databind = {

    //获取存在溯源档案的省份地区和作物
    cropidlist: "",
    provincenames: "",
    getTraceDataCrop: function () {
        $.ajax({
            url: "?action=Crop",
            type:"post",
            data:"htmlMethod=getTraceDataCrop",
            dataType:'json',
            success: function (response) {
                if (response) {
                    //绑定作物
                    var cropHtml = "";
                    for (var i = 0; i < response.length; i++) {
                        cropHtml += "<a class=\"filter-item\" href=\"javascript:;\" title=" + response[i].crops_desc + " id=" + response[i].crops_id + "><s class=\"\"></s>" + response[i].crops_desc + "</a> ";
                    }
                    $("#cropHtml").html(cropHtml);
                    $(".filter-group .filter-item").unbind("click").click(function () {
                        if ($(this).hasClass("selected")) {
                            $(this).removeClass("selected");
                        } else {
                            $(this).addClass("selected");
                        }
                        var listObj = $(".filter-group .filter-item");
                        var j = 0;
                        Tctrace_product.databind.cropidlist = "";
                        for (var i = 0; i < listObj.length; i++) {
                            if (listObj[i].className.indexOf("selected") != -1) {
                                    if (j == 0) {
                                        Tctrace_product.databind.cropidlist = "("+listObj[i].id;
                                    } else {
                                        Tctrace_product.databind.cropidlist += "," + listObj[i].id;
                                    }
                                    j++;
                            }
                        }
                        if(Tctrace_product.databind.cropidlist != ""){
                        	Tctrace_product.databind.cropidlist += ")";
                        }
                        //请求数据
                        Tctrace_product.databind.QueryTraceData(1,Tctrace_product.databind.cropidlist,Tctrace_product.databind.keyword);
                    });
                }
            },
            error:function(){
            }
        });
    },
    pageSize: 16,
//    QueryDataType: "",
    CropID: "",
    keyword: "",
    pageCount:1,
    pageData: {
        lastRows: 0,
        pageCount: 1,
        totalCount: 150
    },
//    / <summary>
//    / 获取溯源档案
//    / </summary>
//    / <param name="pageNumber">页码</param>
//    / <param name="cropid">作物</param>
//    / <param name="keyword">查询关键字</param>
//    / <returns></returns>
    QueryTraceData: function (pageNumber, cropid, keyword) {
        if (!pageNumber) {
            pageNumber = 1;
        }
        Tctrace_product.databind.CropID = cropid;
        Tctrace_product.databind.keyword = keyword;
        $.ajax({
            url: "?action=Product",
            type:"post",
            data:{
            	htmlMethod:"getTraceDataList",
            	PageNumber:pageNumber,
            	PageSize: Tctrace_product.databind.pageSize,
            	CropID:cropid,
            	keyword: keyword
            },
            dataType:'json',
            success: function (response) {
            	var data = eval(response);
            	Tctrace_product.databind.getQueryDataCount();
                var proTotoal = Tctrace_product.databind.pageCount;
                $("#totalpro").html(proTotoal);
                var addSize = proTotoal % Tctrace_product.databind.pageSize > 0 ? 1 : 0;
                Tctrace_product.databind.pageData.pageCount = (proTotoal / Tctrace_product.databind.pageSize + addSize);
                $("#totalPage").html(parseInt(Tctrace_product.databind.pageData.pageCount, 10));
                $("#courIndex").html(pageNumber);
                $(".webPager").pager(
                    { pagenumber: pageNumber, pagecount: Tctrace_product.databind.pageData.pageCount, totalcount: Tctrace_product.databind.pageData.totalCount, buttonClickCallback: Tctrace_product.databind.QueryTraceDataPageClick}
                    );
                Tctrace_product.databind.createProTraceInfoRows(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
            	$(".webPager").empty();
                $(".mainview").empty();
                var proHtml = "<ul>";
                proHtml += "暂无相关数据";
                proHtml += "</ul>";
                $(".mainview").html(proHtml);
            }
        });
        
    },
    //获取查询数据的总个数
    getQueryDataCount:function(cropid,keyword){
    	$.ajax({
            url: "?action=Product",
            type:"post",
            async:false,
            data:{
            	htmlMethod:"getCountTraceData",
            	CropID:cropid,
            	keyword: keyword
            },
            dataType:'json',
            success: function (response) {
            	var data = eval(response);
            	Tctrace_product.databind.pageCount = parseInt(data.total);
            },
            error:function(){
            	alert("getQueryDataCount()调用失败！");
            }
    	});
    },
    //跳转分页
    QueryTraceDataPageClick: function (pageClickedNumber) {
        Tctrace_product.databind.QueryTraceData(pageClickedNumber, Tctrace_product.databind.CropID, Tctrace_product.databind.keyword);
    },

    //创建数据行
    createProTraceInfoRows: function (dataItems) {
        $(".mainview").empty();
        var proHtml = "<ul>";
        Tctrace_product.databind.pageData.lastRows = dataItems.length;
        if (Tctrace_product.databind.pageData.lastRows == 0) {
            proHtml += "暂无相关数据";
            proHtml += "</ul>";
            $(".mainview").html(proHtml);
            return;
        }
        $.each(dataItems, function (i, data) {
            var HarvestTime = (Util.formatDateTime(data.HarvestTime, "yyyy/MM/dd") == "1900/01/01" ? "" : Util.formatDateTime(data.basicinfo_time, "yyyy/MM/dd"));
            proHtml += "<li class='product'><a href='?action=ProductDetail&productId=" + data.product_id + "'><p class='pic'>";
            proHtml += "<img src='" + data.basicinfo_img_loc + "' width='190' height='190'>";
            proHtml += "</p><p class='name'>" + data.basicinfo_name + "</p>";
            if(data.basicinfo_lable != null){
            	var lables = data.basicinfo_lable.split(",");
            	for(var i = 0;i < lables.length; i++ ){
            		proHtml += "<p><span class='productlable'>"+lables[i]+"</span></p>";
            	}
            }
            
            proHtml += "<div class='producttime'>上市时间：" + HarvestTime + "</div>";
            proHtml += "</a></li>";
        });
        proHtml += "</ul>";
        $(".mainview").html(proHtml);
    },
    //上一页下一页
    jumpPage: function () {
        $(".btn-prev").unbind("click").click(function () {
            var pageNumber = parseInt($("#courIndex").text(), 10);
            if (pageNumber == 1) return false;
            $("#courIndex").html(pageNumber - 1);
            Tctrace_product.databind.QueryTraceData(parseInt($("#courIndex").text(), 10), "", Tctrace_product.databind.cropidlist, Tctrace_product.databind.provincenames, Tctrace_product.databind.keyword);
        });
        $(".btn-next").unbind("click").click(function () {
            var pageNumber = parseInt($("#courIndex").text(), 10);
            var totalPage = parseInt($("#totalPage").text(), 10);
            if (pageNumber == totalPage) return false;
            $("#courIndex").html(pageNumber + 1);
            Tctrace_product.databind.QueryTraceData(parseInt($("#courIndex").text(), 10), "", Tctrace_product.databind.cropidlist, Tctrace_product.databind.provincenames, Tctrace_product.databind.keyword);
        });
    },
    //初始化
    init: function () {
        var self = Tctrace_product.databind;
        self.keyword = unescape(Util.getQuery("keyword"));
        //获取存在溯源档案的省份地区和作物
        self.getTraceDataCrop();
        //初始化上一页下一页
        self.jumpPage();
        //获取溯源档案
        self.QueryTraceData(1,"", self.keyword);
        
    }
}