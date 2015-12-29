var TctraceProductDetail;
if (!TctraceProductDetail) {
    var TctraceProductDetail = {};
}
TctraceProductDetail = {
    //获取91溯源完整度：生长周期，肥料记录，农药记录
    GetGrowthImg: function (ProductID) {
    	alert("fas");
       /* Service.post({
            url: "/TraceabilityService.svc/GetGrowthImg",
            params: {
                ProductID: ProductID
            },
            success: function (response) {
                TctraceProductDetail.ShowGrowthImg(response);
            }
        });*/
    	TctraceProductDetail.ShowGrowthImg();
    },
    //获取91溯源完整度：肥料记录
    GetFertilizer: function (PageNum) {
        var PageSize = 5;
        Service.post({
            url: "/TraceabilityService.svc/GetFertilizer",
            params: {
                PageNum: PageNum,
                PageSize: PageSize,
                ProductID: TctraceProductDetail.ProductID
            },
            success: function (response) {
                $(".FertilizerTab").hide();
                if (response && response.Items.length > 0) {
                    TctraceProductDetail.ShowFertilizer(response);
                    var addSize = response.Total % PageSize > 0 ? 1 : 0;
                    var pageCount = (response.Total / PageSize + addSize);
                    $(".webPager").pager({
                        pagenumber: PageNum,
                        pagecount: pageCount,
                        buttonClickCallback: function (pageNumber) {
                            TctraceProductDetail.GetFertilizer(pageNumber);
                        }
                    });
                } else {
                    $(".btn_fertilizer").html("沒有记录");
                    $(".btn_fertilizer").parents("li").addClass("notrack");
                    $(".btn_fertilizer").unbind("click").click(function () {
                    })
                }

            }
        });
    },
    //获取91溯源完整度：农药记录
    GetPesticide: function (PageNum) {
        var PageSize = 5;
        Service.post({
            url: "/TraceabilityService.svc/GetSpraying",
            params: {
                PageNum: PageNum,
                PageSize: PageSize,
                ProductID: TctraceProductDetail.ProductID
            },
            success: function (response) {
                if (response && response.Items.length > 0) {
                    TctraceProductDetail.ShowSpraying(response);
                    $(".webPager").empty();
                    var addSize = response.Total % PageSize > 0 ? 1 : 0;
                    var pageCount = (response.Total / PageSize + addSize);
                    $(".webPager").pager({
                        pagenumber: PageNum,
                        pagecount: pageCount,
                        buttonClickCallback: function (pageNumber) {
                            TctraceProductDetail.GetPesticide(pageNumber);
                        }
                    });
                } else {
                    $(".btn_chemicals").html("沒有记录");
                    $(".btn_chemicals").parents("li").addClass("notrack");
                    $(".btn_chemicals").unbind("click").click(function () {
                    })
                }
            }
        });
    },
    //显示生长图片
    ShowGrowthImg: function (response) {
        $(".AllGrowCycle").hide();
        if (response && response.Items.length > 0) {
            $(".growth-images-slides").remove();
            var $growthImgDiv = $('<div class="growth-images-slides"></div>');
            $growthImgDiv.appendTo(".growthImagesClass");
            var imgHtml = "";
            var jsonData = response.Items;
            var jsonLen = jsonData.length; //图片总数
            for (var i = 0; i < jsonLen; i++) {
                var photos = jsonData[i].Path.split(':');
                var imgUrl = photos[0].toString();
                imgHtml += "<div class=\"img-slide\" id='growImgdata" + i + "'>";
                imgHtml += "<img src=" + imgUrl + " style=\"width:680px\" />";
                imgHtml += "<div class=\"location\">"
                imgHtml += "<p class=\"time\">" + Util.formatDateTime(jsonData[i].TakePhotoTime, "yyyy-MM-dd") + "</p>";
                imgHtml += "<p>" + jsonData[i].PhotoAddress + "</p>";
                imgHtml += "</div>";
                imgHtml += "</div>";
            }
            $(".growth-images-slides").append(imgHtml);
            $(".slides-total .slide-number").html(1);
            $("#picCount").html(jsonLen);
            TctraceProductDetail.GrowImgData = jsonData;
            $(".img-remarks").html(jsonData[0].Remark ? jsonData[0].Remark : "");

            if (jsonLen <= 1) return;
            TctraceProductDetail.GrowthImagesSlides();
           
        } else {
            $(".btn_images").html("沒有图片");
            $(".btn_images").parents("li").addClass("notrack");
        }
    },
    GrowthImagesSlides: function () {
        $('.growth-images-slides').slidesjs({
            width: 680,
            height: 540,
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
                    var dataNum = number - 1;
                    var data = TctraceProductDetail.GrowImgData[dataNum];
                    $(".img-remarks").html(data.Remark ? data.Remark : "");
                }
            }
        });
    },
    //显示化肥
    ShowFertilizer: function (response) {
        var tbodyHtml = $("#tb_fertilizer");
        tbodyHtml.empty();
        if (response && response.Items.length > 0) {
            $.each(response.Items, function (index, item) {
                var trHtml = "<tr><td>{0}</td><td title={1}>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td></tr>",
                  FertilizerTime = (Util.formatDateTime(item.FertilizerTime, "yyyy-MM-dd") == "1900-01-01" ? "" : Util.formatDateTime(item.FertilizerTime, "yyyy-MM-dd")),
                        fertilizerName = item.FertilizerName;
                if (20 < fertilizerName.length)
                    fertilizerName = fertilizerName.substring(0, 20) + '...';

                trHtml = String.format(trHtml, FertilizerTime, item.FertilizerName, fertilizerName, item.FertilizerAmount, item.FertilizerBrand, item.FertilizerSource);
                tbodyHtml.append(trHtml);
            });

        } else {
            tbodyHtml.html("没有查询到相关数据");
        }
    },
    //显示农药
    ShowSpraying: function (response) {
        var tbodyHtml = $("#tb_pesticide");
        tbodyHtml.empty();
        if (response && response.Items.length > 0) {
            $.each(response.Items, function (index, item) {
                var trHtml = "<tr><td>{0}</td><td title={1}>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td>",
                    SprayTime = (Util.formatDateTime(item.SprayTime, "yyyy-MM-dd") == "1900-01-01" ? "" : Util.formatDateTime(item.SprayTime, "yyyy-MM-dd")),
                        pesticideName = item.PesticideName;

                if (20 < pesticideName.length)
                    pesticideName = pesticideName.substring(0, 20) + '...';

                trHtml = String.format(trHtml, SprayTime, item.PesticideName, pesticideName, item.SprayAumont, item.PesticideBrand, item.PesticideSoucre);
                tbodyHtml.append(trHtml);
            });
        } else {
            tbodyHtml.html("没有查询到相关数据");
        }

    },
    //显示生长周期图片信息
    getTraceDataIntegrity: function (ProductID) {
        Service.post({
            url: "/TraceabilityService.svc/get91TraceDataIntegrity",
            params: {
                ProductID: ProductID
            },
            success: function (response) {
                if (response) {
                    var Integrity = 1; //用于统计档案完整度,有生长周期图片，有肥料，有农药，有环境数据任何一个加一分
                    if (response.SprayingNum > 0) {
                        Integrity++
                    }
                    if (response.FertilizerNum > 0) {
                        Integrity++
                    }
                    if (response.ProGrowthNum > 0) {
                        Integrity++
                    } else { 
                        //没有生长周期图片
                        $(".btn_images").html("沒有图片");
                        $(".btn_images").parents("li").addClass("notrack");
                        $(".btn_images").unbind("click").click(function () { 
                        });
                    }
                    var newWidth = parseInt(Integrity, 10) * 20;
                    $("#track_studyplay").css("width", newWidth + "px");
                }
            }
        });
    },
    //获取企业信息
    GetCompanyInfo: function (OrgID, ChildOrgID) {
        Service.post({
            url: "/TraceabilityService.svc/Get91CompanyInfo",
            params: {
                OrgID: OrgID,
                ChildOrgID: ChildOrgID
            },
            success: function (response) {
                if (response) {
                    $("#companyname").html("<span title=" + response.Name + ">" + Util.getSubstr(response.Name, 10) + "</span>");
                    $("#traceTitle").html(response.Name + "产品溯源档案");
                    if (response.CertifiedStatus == 1) {
                        var html = "营业执照已验证" + '<a style="margin-left: 6px;" href="javascript:;" id="viewCompanyImg">[查看]</a>'
                        $("#check_c").html(html);
                        $("#cplogo").removeClass("no-license");
                        $("#viewCompanyImg").unbind("click").click(function () {
                            var src = response.AttachmentFile.split(":")[0].toString();
                            $("#CompanyImgdiv").dialog({
                                autoOpen: false,
                                width: '840',
                                height: 'auto',
                                title: "营业执照",
                                modal: true,
                                resizable: false,
                                close: function (e) { }
                            }).dialog("open");
                            $("#CompanyImg").attr("src", src);
                            return false;
                        })
                    } else {
                        $("#check_c").html("营业执照未验证");
                        $("#cplogo").addClass("no-license");
                    }
//                    var personInfo = (response.ContactName && response.ContactName.length) > 0 ? response.ContactName : "暂无";
//                    $("#headUser").html(personInfo);
                    //设置地块的地址
                    $("#company-address").html((response.Address && response.Address.length) > 0 ? response.Address : "暂无");
                    if (response.Address && response.Address.length > 0) {
                        exploratory.config.SetAddressForMap(response.Address, "divMap-0");
                    }

                }
            }
        });
    }

}