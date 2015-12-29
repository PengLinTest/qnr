//查询入口数据绑定
var queryEntrance;

if (!queryEntrance) {
    queryEntrance = {};
}

queryEntrance.databind = {
    //新鲜上市
    bindNewProTraceData: function (type) {
    	//请求最新的产品数据
    	$.ajax({
    		url:"?action=Product",
    		type:"post",
    		data:{
    			htmlMethod:"getTopProduct",
    			top:4,
    			type:type
    		},
    		dataType:"json",
    		success:function(response){
    			var rightHtml = "", leftHtml = "";
    	        $.each(response, function (i, data) {
    	                leftHtml += i == 3 ? "<li class='product last'>" : "<li class='product'>";
    	                leftHtml += "<a href='?action=ProductDetail&productId=" + data.product_id + "'>";
    	                leftHtml += "<p class='pic'><img src='" + data.basicinfo_img_loc + "' width='190' height='190'></p>";
    	                leftHtml += "<div class='info'><p class='name'>" + data.basicinfo_name + "</p>";
    	                if(data.basicinfo_lable != null){
    	                	var lables = data.basicinfo_lable.split(",");
    	                	for(var i = 0;i < lables.length; i++ ){
    	                		leftHtml += "<p><span class='productlable'>"+lables[i]+"</span></p>";
    	                	}
    	                }
    	                info_name = data.vendor_info != 0?data.vendor_info.info_name:"";
    	                leftHtml += "<p style='font-size:13px;clear:both;padding-top:10px;'>" + info_name + "</p>";
    	                leftHtml += "</div></a></li>";
    	        });
    	        $(".product-list").eq(0).html(leftHtml);
    		}
    	});
        
    },
  //商家团队
    bindNewVendorData: function (type) {
    	//请求最新的商家团队
    	$.ajax({
    		url:"?action=Vendor",
    		type:"post",
    		data:{
    			htmlMethod:"getNewVendorList",
    			top:4,
    			type:type
    		},
    		dataType:"json",
    		success:function(response){
    			var rightHtml = "", leftHtml = "";
    	        $.each(response, function (i, data) {
    	                leftHtml += i == 3 ? "<li class='product last h328'>" : "<li class='product h328'>";
    	                //判断商家是否通过验证
    	                var vendorAuth = data.vendorAuth;
    	                var vendorInfos = data.vendorInfo;
    	                leftHtml += "<a href='?action=VendorDetail&vendorId=" + data.vendor_id + "'>";
    	                if(vendorInfos.length){
    	                	img_loc = vendorInfos[0].vendor_img_loc;
    	                	vendor_name = vendorInfos[0].info_name;
    	                }else{
    	                	img_loc = "";
    	                	vendor_name = "";
    	                }
    	                leftHtml += "<p class='pic'><img src='" + img_loc + "' width='190' height='190'></p>";
	                	leftHtml += "<div class='info'><p class='name'>" + vendor_name + "</p></div>";
    	                
	                	if(vendorAuth != 0){
	                		switch(parseInt(vendorAuth[0]['auth_ispass'])){
	                			case 1:
	                				leftHtml += "<div class='vendor_notrack'>未认证</div>";
	                				break;
	                			case 2:
	                				leftHtml += "<div class='vendor_notrack'>正在审核中</div>";
	                				break;
	                			case 3:
	                				leftHtml += "<div class='vendor_auth'>通过认证</div>";
	                				break;
	                			default:
	                				leftHtml += "<div class='vendor_notrack'>未通过认证</div>";
	                				break;
	                		}
    	                };
    	                leftHtml += "</a></li>";
    	        });
    	        $(".product-list").eq(1).html(leftHtml);
    		}
    	});
        
    },
    //热门推荐
    bindHotProTraceData: function (dataItems) {
        var rightHtml = "", leftHtml = "";
        $.each(dataItems, function (i, data) {
            var HarvestTime = (Util.formatDateTime(data.HarvestTime, "yyyy/MM/dd") == "1900/01/01" ? "" : Util.formatDateTime(data.HarvestTime, "yyyy/MM/dd"));
            var length = data.Currentval / 5 * 58;
            if (i == 0) {
                rightHtml += "<li class='row-product big-row-product'><a href='query.html?p=742&batchid=" + data.BatchID + "' target='_blank'>";
                rightHtml += "<p class='pic'><img src='" + data.LogoIcon + "' width='300' height='300'></p>";
                rightHtml += "<p class='name'>" + data.ProductName + "</p><p class='date'>上市时间：" + HarvestTime + "</p>";
                rightHtml += queryEntrance.databind.setStarLevlHtml(length, data.Total);
                rightHtml += "</a></li>";
            } else {
                leftHtml += "<li class='row-product'><a href='query.html?p=742&batchid=" + data.BatchID + "' target='_blank'>";
                leftHtml += "<p class='pic'><img src='" + data.LogoIcon + "' width='130' height='130'></p>";
                leftHtml += "<p class='name'>" + data.ProductName + "</p><p class='date'>上市时间：" + HarvestTime + "</p>";
                leftHtml += queryEntrance.databind.setStarLevlHtml(length, data.Total);
                leftHtml += "</a></li>";
            }
        });
        $("#hotproleft").html(leftHtml);
        $("#hotproright").html(rightHtml);
    },
    //人气最高
    bindTopProTraceData: function (dataItems) {
        var rightHtml = "", leftHtml = "";
        $.each(dataItems, function (i, data) {
            var HarvestTime = (Util.formatDateTime(data.HarvestTime, "yyyy/MM/dd") == "1900/01/01" ? "" : Util.formatDateTime(data.HarvestTime, "yyyy/MM/dd"));
            var length = data.Currentval / 5 * 58;
            if (i == 0) {
                rightHtml += "<li class='row-product big-row-product'><a href='query.html?p=742&batchid=" + data.BatchID + "' target='_blank'>";
                rightHtml += "<p class='pic'><img src='" + data.LogoIcon + "' width='300' height='300'></p>";
                rightHtml += "<p class='name'>" + data.ProductName + "</p><p class='date'>上市时间：" + HarvestTime + "</p>";
                rightHtml += queryEntrance.databind.setStarLevlHtml(length, data.Total);
                rightHtml += "</a></li>";
            } else {
                leftHtml += "<li class='row-product'><a href='query.html?p=742&batchid=" + data.BatchID + "' target='_blank'>";
                leftHtml += "<p class='pic'><img src='" + data.LogoIcon + "' width='130' height='130'></p>";
                leftHtml += "<p class='name'>" + data.ProductName + "</p><p class='date'>上市时间：" + HarvestTime + "</p>";
                leftHtml += queryEntrance.databind.setStarLevlHtml(length, data.Total);
                leftHtml += "</a></li>";
            }
        });
        $("#topproleft").html(leftHtml);
        $("#topproright").html(rightHtml);
    },
    //该商家的更多产品
    bindMoreProTraceData: function (dataItems) {
        var MoreProHtml = "", k = 0;
        var proTotal = dataItems.length;
        var pageCount = Math.ceil(proTotal / 3) == 0 ? 1 : (Math.ceil(proTotal / 3));
        var pageNum = "<ul>";
        for (var j = 1; j < pageCount + 1; j++) {
            pageNum += j == 1 ? "<li class='current'>" : "<li>";
            pageNum += "<a href='javascript:;'>" + j + "</a></li>";
        }
        pageNum += "</ul>";
        $(".contorls").html(pageNum);
        queryEntrance.databind.moreproTabs();
        $.each(dataItems, function (i, data) {
            var HarvestTime = (Util.formatDateTime(data.basicinfo_time, "yyyy/MM/dd") == "1900/01/01" ? "" : Util.formatDateTime(data.basicinfo_time, "yyyy/MM/dd"));
            //var length = data.Currentval / 5 * 58;
            if (i % 3 == 0) {
                MoreProHtml += k == 0 ? "<div id='sides_" + k + "'>" : "<div id='sides_" + k + "' class='hide'>";
                k++;
            }
            MoreProHtml += "<li class='row-product'><a href='?action=ProductDetail&productId=" + data.product_id + "' target='_blank'>";
            MoreProHtml += "<p class='pic'><img src='" + data.basicinfo_img_loc + "' width='130' height='130'></p>";
            MoreProHtml += "<p class='name'>" + data.basicinfo_name + "</p><p class='date'>上市时间：" + HarvestTime + "</p>";
            //MoreProHtml += queryEntrance.databind.setStarLevlHtml(length, data.Total);
            MoreProHtml += "</a></li>";
            if ((i + 1) % 3 == 0) {
                MoreProHtml += "</div>";
            }
        });
        $("#morepro").html(MoreProHtml);
    },
    //设置星级
    setStarLevlHtml: function (length, Total) {
        var StarLevlHtml = "";
        StarLevlHtml += "<div class='rate'>";
        StarLevlHtml += "<ul class='starbg'>";
        StarLevlHtml += "<li class='starovering' style='width: " + length + "px;'></li>";
        StarLevlHtml += "<li class='staron' style='width: 12px; z-index: 5;'></li>";
        StarLevlHtml += "<li class='staron' style='width: 24px; z-index: 4;'></li>";
        StarLevlHtml += "<li class='staron' style='width: 36px; z-index: 3;'></li>";
        StarLevlHtml += "<li class='staron' style='width: 48px; z-index: 2;'></li>";
        StarLevlHtml += "<li class='staron' style='width: 58px; z-index: 1;'></li>";
        StarLevlHtml += "</ul>";
        StarLevlHtml += "<span>(" + Total + ")</span>";
        StarLevlHtml += "</div>";
        return StarLevlHtml;
    },
    //更多产品标签
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
    /// <summary>
    /// 根据产品id，获取该商家的所有产品
    /// </summary>
    /// <param name="top">top 记录数</param>
    /// <param name="batchid">产品批次号(用于查询该商家的更多产品)</param>
    /// <param name="querydatatype">查询类型 HOT=热门产品,TOP=推荐产品,NEW=新上市</param>
    /// <param name="callBack">回调函数名称</param>
    /// <returns></returns>
    getDataCallBack: function (top, batchid, callBack) {
        $.ajax({
            url: "?action=Product",
            type:"post",
            data: {
            	htmlMethod:"getTraceDataListByProductId",
            	productId:batchid
            },
            dataType:"json",
            success: function (response) {
                if (response) {
                    if (callBack != null) callBack(response);
                }
            },
            error: function() {
            }
        });
    },
    //初始化数据绑定
    initDataBind: function () {
        var self = queryEntrance.databind;
        //新鲜上市
        self.bindNewProTraceData();
        //热门推荐
//        self.getDataCallBack(5, "", "TOP", self.bindHotProTraceData);
        //人气最高
//        self.getDataCallBack(5, "", "HOT", self.bindTopProTraceData);
        //获取最新政策信息
        self.bindNewPolicy();
        self.bindNewVendorData();
    },
  // 政策信息
    bindNewPolicy: function () {
    	//请求数据
    	$.ajax({
    		url:"?action=Policy",
    		type:'post',
    		data:"htmlMethod=getSimplePolicyList",
    		dataType:'json',
    		success:function(data) {
    			var obj = eval(data);
    			var ul = $(".qnrpolicylst ul")[0];
    			for(var i = 0;i < obj.length; i++){
    				var li= document.createElement("li");
    				li.innerHTML = "<a href=\"?action=PolicyDetail&policy_id="+obj[i].policy_id+"\">"+obj[i].policy_title+"</a>";
    				ul.appendChild(li);
    			}
    		},
    		error:function(XMLHttpRequest, textStatus, errorThrown){
//    			alert("request error!");
    		}
    		
    	}); 

    }
}