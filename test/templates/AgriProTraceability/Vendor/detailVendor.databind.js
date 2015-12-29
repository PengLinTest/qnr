/**
 * 专门用于处理商家详细页面
 */
var Detail_vendor;

if (!Detail_vendor) {
	Detail_vendor = {};
}

Detail_vendor.databind = {
//		@param vendorId 商家id
//	QueryVendorDetail:function(vendorId){
//		$.ajax({
//			url:"?action=VendorDetail",
//			type:"post",
//			data:{
//				htmlMethod:"getVendorDetail",
//				vendorId:vendorId
//			},
//			dataType:"json",
//			success:function(response){
//				//初始化商家顶端的广告logo
//				//填写公司简介信息
//				//公司title填写
//				if(response.length){
//					$('#advertise').attr("src",response[0].vendor_adver_loc);
//					$('#vendor_desc').html(response[0].vendor_desc);
//					$('#traceTitle').html(response[0].vendor_name + "公司");
//				}else{
//					$('#advertise').attr("src","templates/UpFiles/Vendor/addvertisements/default.jpg");
//				}
//			}
//		});
//	},
	QueryVendorMember:function(vendorId){
		$.ajax({
			url:"?action=VendorDetail",
			type:"post",
			data:{
				htmlMethod:"getVendorMemberList",
				vendorId:vendorId
			},
			dataType:"json",
			success:function(response){
				if(response.length){
					//公司员工信息
					html = "";
					$.each(response,function(i,data){
						html += "<div class='vendor_member'>"
						html += "<div class='member_left'>";
						html += "<img src=" + data.member_img_loc + " width='190px' height='190px'>";
						html += "</div>";
						html += "<div class='member_right'>";
						html +=	"<div class='member_right_top'>";
						html += "<span class='mr20'>" + data.member_name + "</span>"
						html += "<span>" + data.member_position + "</span>"
						html +=	"</div>"
						html += "<div class='member_right_bottom'>"
						html += data.member_profile;
						html +="</div></div></div>"
					});
					$('#member_list').html(html);
				}
			}
		});
		
	},
	//底部联系信息
	getVendorInfo:function(vendorId){
		$.ajax({
			url:"?action=VendorDetail",
			type:"post",
			data:{
				htmlMethod:"getVendorInfo",
				vendorId:vendorId
			},
			dataType:"json",
			success:function(response){
				if(response){
					data = response;
					//初始化商家顶端的广告logo
					//填写公司简介信息
					//公司title填写
					$('#advertise').attr("src",response.vendor_adver_loc);
					$('#vendor_desc').html(response.vendor_desc);
					$('#traceTitle').html(response.info_name + "公司");
					var bottom = "";
					bottom += "<div class='vendor_info_left'>";
					bottom += "<div class='w_50'><div class='w_70'>";
					bottom += "<div class='vendor_info_view_left  clearfix'><div class='vendor_w70fl'>地址：</div><div class='vendor_address'>" + data.info_address + "</div></div>";
					bottom += "<div class='vendor_info_view_left clearfix'><div class='vendor_w70fl'>淘宝店：</div><div class='vendor_address'>" + data.info_taobao + "</div></div>";		
					bottom += "</div>";
					bottom += "<div class='top15'>";
					bottom += "<img src="+data.info_qrcode_taobao+" width='100px' height='100px'>";
					bottom += "</div></div><div class='w_50'><div class='w_70'>";
					bottom += "<div class='vendor_info_view'>联系电话："+data.info_tele+"</div>";
					bottom += "<div class='vendor_info_view'>QQ："+data.info_qq+"</div>";	
					bottom += "<div class='vendor_info_view'>官方微信："+data.info_wechat+"</div>"
					bottom += "</div><div class='top15'>"
					bottom += "<img src="+data.info_qrcode_wechat+" width='100px' height='100px'>"	
					bottom += "</div></div></div>";	
					$("#info_list").html(bottom);
				}else{
					$('#advertise').attr("src","templates/UpFiles/Vendor/addvertisements/default.jpg");
				}
			}
		});
	},
	//获取该商家的所有产品
	QueryProductList:function(vendorId){
		$.ajax({
			url:"?action=VendorDetail",
			type:"post",
			data:{
				htmlMethod:"getVendorProductList",
				vendorId:vendorId,
			},
			dataType:"json",
			success:function(response){
				if(response.length){
					var MoreProHtml = "", k = 0;
			        var proTotal = response.length;
			        var pageCount = Math.ceil(proTotal / 6) == 0 ? 1 : (Math.ceil(proTotal / 6));
			        var pageNum = "<ul>";
			        for (var j = 1; j < pageCount + 1; j++) {
			            pageNum += j == 1 ? "<li class='current'>" : "<li>";
			            pageNum += "<a href='javascript:;'>" + j + "</a></li>";
			        }
			        pageNum += "</ul>";
			        $(".contorls").html(pageNum);
			        Detail_vendor.databind.moreproTabs();
			        $.each(response, function (i, data) {
			            var HarvestTime = (Util.formatDateTime(data.basicinfo_time, "yyyy/MM/dd") == "1900/01/01" ? "" : Util.formatDateTime(data.basicinfo_time, "yyyy/MM/dd"));
			            //var length = data.Currentval / 5 * 58;
			            if (i % 6 == 0) {
			                MoreProHtml += k == 0 ? "<div id='sides_" + k + "'>" : "<div id='sides_" + k + "' class='hide'>";
			                k++;
			            }
			            MoreProHtml += "<li class='row-product'><a href='?action=ProductDetail&productId=" + data.product_id + "' target='_blank'>";
			            MoreProHtml += "<p class='pic'><img src='" + data.basicinfo_img_loc + "' width='130' height='130'></p>";
			            MoreProHtml += "<p class='name'>" + data.basicinfo_name + "</p><p class='date'>上市时间：" + HarvestTime + "</p>";
			            //MoreProHtml += queryEntrance.databind.setStarLevlHtml(length, data.Total);
			            MoreProHtml += "</a></li>";
			            if ((i + 1) % 6 == 0) {
			                MoreProHtml += "</div>";
			            }
			        });
			        $("#morepro").html(MoreProHtml);
				}
			}
		});
	},
	moreproTabs: function () {
        var $div_li = $(".t-section .contorls ul li");
        $div_li.click(function () {
            $div_li.removeClass("current");
            $(this).addClass("current");
            var morediv = $("#morepro > div");
            morediv.addClass("hide");
            var index = $(this).text() - 1;
            $("#sides_" + index).removeClass("hide");
        });
    },
	init: function () {
        var self = Detail_vendor.databind;
        //获取商家详细信息
        var vendorId = Util.getQuery("vendorId");
//        self.QueryVendorDetail(vendorId);
        //初始化商家团队信息
        self.QueryVendorMember(vendorId);
        //该商家更多的产品
        self.QueryProductList(vendorId);
        //底部联系信息
        self.getVendorInfo(vendorId);
    }
}