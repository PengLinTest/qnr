//全部产品数据绑定
var Tctrace_vendor;

if (!Tctrace_vendor) {
    Tctrace_vendor = {};
}

Tctrace_vendor.databind = {

    //获取存在溯源档案的省份地区和作物
    pageSize: 16,
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
    QueryTraceData: function (pageNumber, keyword) {
        if (!pageNumber) {
            pageNumber = 1;
        }
        Tctrace_vendor.databind.keyword = keyword;
        $.ajax({
            url: "?action=Vendor",
            type:"post",
            data:{
            	htmlMethod:"getVendorList",
            	PageNumber:pageNumber,
            	PageSize: Tctrace_vendor.databind.pageSize,
            	keyword: keyword
            },
            dataType:'json',
            success: function (response) {
            	var data = eval(response);
            	Tctrace_vendor.databind.getQueryDataCount();
                var proTotoal = Tctrace_vendor.databind.pageCount;
                $("#totalpro").html(proTotoal);
                var addSize = proTotoal % Tctrace_vendor.databind.pageSize > 0 ? 1 : 0;
                Tctrace_vendor.databind.pageData.pageCount = (proTotoal / Tctrace_vendor.databind.pageSize + addSize);
                $("#totalPage").html(parseInt(Tctrace_vendor.databind.pageData.pageCount, 10));
                $("#courIndex").html(pageNumber);
                $(".webPager").pager(
                    { pagenumber: pageNumber, pagecount: Tctrace_vendor.databind.pageData.pageCount, totalcount: Tctrace_vendor.databind.pageData.totalCount, buttonClickCallback: Tctrace_vendor.databind.QueryTraceDataPageClick}
                    );
                Tctrace_vendor.databind.createProTraceInfoRows(data);
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
    getQueryDataCount:function(keyword){
    	$.ajax({
            url: "?action=Vendor",
            type:"post",
            async:false,
            data:{
            	htmlMethod:"getCountVendor",
            	keyword: keyword
            },
            dataType:'json',
            success: function (response) {
            	var data = eval(response);
            	Tctrace_vendor.databind.pageCount = parseInt(data.total);
            },
            error:function(){
            }
    	});
    },
    //跳转分页
    QueryTraceDataPageClick: function (pageClickedNumber) {
        Tctrace_vendor.databind.QueryTraceData(pageClickedNumber, Tctrace_vendor.databind.CropID, Tctrace_vendor.databind.keyword);
    },

    //创建数据行
    createProTraceInfoRows: function (dataItems) {
        $(".mainview").empty();
        var proHtml = "<ul>";
        Tctrace_vendor.databind.pageData.lastRows = dataItems.length;
        if (Tctrace_vendor.databind.pageData.lastRows == 0) {
            proHtml += "暂无相关数据";
            proHtml += "</ul>";
            $(".mainview").html(proHtml);
            return;
        }
        $.each(dataItems, function (i, data) {
        	var vendorInfo = data.vendorInfo[0];
        	var img = "";
        	var address = "";
        	var lable = "";
        	
        	if(vendorInfo){
        		img = vendorInfo.vendor_img_loc;
            	address = Util.getSubstr(vendorInfo.info_address,5);
            	lable = Util.getSubstr(vendorInfo.vendor_lable,10);
            	name = Util.getSubstr(vendorInfo.info_name,15)
        	}
        	
            proHtml += "<li class='vendor'>"
            proHtml += "<a href='?action=VendorDetail&vendorId=" + data.vendor_id + "'><p class='pic'>";
            proHtml += "<img src='" + img + "' width='300px' height='190px'></p>";
            //获取商家名字
            proHtml += "<p class='name'>" + name + "</p>";
            proHtml += "<p><span><img src='templates/images/1.png' width='30px' height='30px' style='margin-left:0 10px 10px 0;'></span>";
            proHtml += address +"</span>";
            proHtml += "<span><img src='templates/images/download.png' width='30px' height='30px' style='margin:5px 10px 5px 30px;'>";
            proHtml += lable +"</span></p></a>";
            //获取公司最新的三个产品
            var products = Tctrace_vendor.databind.getNewThreeProduct(data.vendor_id);
            if(products && products.length > 0){
            	proHtml += "<p>";
            	for(var i = 0,j = products.length;i < j; i++){
            		proHtml += "<span><a href='?action=ProductDetail&productId="+products[i]['product_id']+"'><img src="+products[i]['basicinfo_img_loc']+" width='70px' height='70px' class='product_image'></a></span>";
            	}
            	proHtml += "</p>";
            }else{
            	proHtml += "<p>";
            	proHtml +="<div class='nocon'>该商家还没有产品</div>";
            	proHtml += "</p>";
            }
            proHtml += "</a></li>";
        });
        proHtml += "</ul>";
        $(".mainview").html(proHtml);
    },
    //获取该商家最新的三个产品
    getNewThreeProduct:function(vendorId){
    	var res;
    	$.ajax({
    		url:"?action=Vendor",
    		type:"post",
    		async:false,
    		data:{
    			htmlMethod:"getThreeProductByVendorId",
    			vendorId:vendorId,
    		},
    		dataType:"json",
    		success:function(response){
    			res = response;
    		}
    	});
    	return res;
    },
    //上一页下一页
    jumpPage: function () {
        $(".btn-prev").unbind("click").click(function () {
            var pageNumber = parseInt($("#courIndex").text(), 10);
            if (pageNumber == 1) return false;
            $("#courIndex").html(pageNumber - 1);
            Tctrace_vendor.databind.QueryTraceData(parseInt($("#courIndex").text(), 10), "", Tctrace_vendor.databind.cropidlist, Tctrace_vendor.databind.provincenames, Tctrace_vendor.databind.keyword);
        });
        $(".btn-next").unbind("click").click(function () {
            var pageNumber = parseInt($("#courIndex").text(), 10);
            var totalPage = parseInt($("#totalPage").text(), 10);
            if (pageNumber == totalPage) return false;
            $("#courIndex").html(pageNumber + 1);
            Tctrace_vendor.databind.QueryTraceData(parseInt($("#courIndex").text(), 10), "", Tctrace_vendor.databind.cropidlist, Tctrace_vendor.databind.provincenames, Tctrace_vendor.databind.keyword);
        });
    },
    //初始化
    init: function () {
        var self = Tctrace_vendor.databind;
        self.keyword = unescape(Util.getQuery("keyword"));
        //初始化上一页下一页
        self.jumpPage();
        //获取溯源档案
        self.QueryTraceData(1,self.keyword);
        
    }
}