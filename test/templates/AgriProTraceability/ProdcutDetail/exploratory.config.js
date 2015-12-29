var exploratory;

if (!exploratory) {
    exploratory = {};
}

exploratory.config = {
    //********顾客评分↓********
    CustomerRatings: function (batchid) {

        $(".btn_rate").unbind("click").click(function (e) {
            if (!$(this).hasClass("btn_rate")) {
                return false;
            }
            $("#scoreModal").dialog({
                autoOpen: false,
                width: '980',
                height: 'auto',
                dialogClass: "modal-dialog",
                title: "",
                modal: true,
                resizable: false
            }).dialog("open");

            //自定义弹出层关闭事件，点击关闭时摧毁弹出层
            $("#scoreModal .dialog_close_btn .icon_close").unbind("click").click(function (e) {
                e.preventDefault();
                $("#scoreModal").dialog("destroy");
            })
            e.preventDefault();
            return false;
        });

        var CurrentVal = 4;
        //顾客星级评分	
        $("#z").studyplay_star({
            MaxStar: 5,
            StarWidth: 40,
            CurrentStar: CurrentVal,
            Enabled: true
        }, function (value) {
            CurrentVal = value;
            if (value == 1) {
                $(".StarDescripe").html("与描述严重不符");
            } else if (value == 2) {
                $(".StarDescripe").html("与描述不一致");
            } else if (value == 3) {
                $(".StarDescripe").html("没有描述的那么好");
            } else if (value == 4) {
                $(".StarDescripe").html("与描述基本一致");
            } else if (value == 5) {
                $(".StarDescripe").html("与描述完全一致");
            }

        });


        $("#BtnCustomerRating").unbind("click").click(function () {
            var data = {
                currentval: CurrentVal,
                batchid: batchid,
                FromType: 0//web
            }
            exploratory.config.SaveCustomerRating(data);
        });

    },
    SaveCustomerRating: function (data) {
        Service.post({
            url: "/TraceabilityService.svc/SaveCustomerRating",
            params: data,
            success: function (response) {
                exploratory.config.StarLevelShow(response.currentval, response.Total);
                $("#scoreModal .dialog_close_btn .icon_close").trigger("click");
            }
        });
    },
    GetCustomerRatings: function (batchid) {
        Service.post({
            url: "/TraceabilityService.svc/GetCustomerRatings",
            params: {
                batchid: batchid
            },
            success: function (response) {
                exploratory.config.StarLevelShow(response.currentval, response.Total)
            }
        });

    },
    StarLevelShow: function (currentval, total) {
        if (currentval) {
            var length = currentval / 5 * 58;
            $(".starovering").css("width", length + "px");
        } else {
            $(".starovering").css("width", 0 + "px");
        }
        $("#starTotal").html("(" + (total == null ? 0 : total) + ")");
    },
    //********顾客评分↑********
    //农药使用记录
    // pesticides_list 产品的农药使用id列表
    PesticideUseRecords: function (perIdList) {
        $(".btn_chemicals").unbind("click").click(function (e) {
            //loadPesticideData(1, productId);
            loadFertilizerData(1,PageData.inorganicFerType,perIdList);
            if ($(this).hasClass('btn_chemicals')) {
                $("#ChemicalsModal").dialog({
                    autoOpen: false,
                    width: '980',
                    height: 'auto',
                    dialogClass: "modal-dialog",
                    title: "",
                    modal: true,
                    resizable: false
                }).dialog("open");

                //自定义弹出层关闭事件，点击关闭时摧毁弹出层
                $("#ChemicalsModal .dialog_close_btn .icon_close").unbind("click").click(function () {
                    $("#ChemicalsModal").dialog("destroy");
                })
                e.preventDefault();
                return false;
            }
        });
    },

    //购买信息TAB切换
    buyTabs: function () {
        var $div_li = $(".buy-list .tabs ul li");
        $("div.buy-list .bd > div").eq(0).show();
        $div_li.click(function () {
            $(this).addClass("current").siblings().removeClass("current");
            var index = $div_li.index(this);
            $("div.buy-list .bd > div")
				.eq(index).show()
				.siblings().hide();
        });
    },

    //肥料使用记录
    FertilizerUseRecords: function (ferIdList) {
        $(".btn_fertilizer").unbind("click").click(function (e) {
            loadFertilizerData(PageData.organicFerType,0,ferIdList);
            if ($(this).hasClass('btn_fertilizer')) {
                $("#FertilizerModal").dialog({
                    autoOpen: false,
                    width: '980',
                    height: 'auto',
                    dialogClass: "modal-dialog",
                    title: "",
                    modal: true,
                    resizable: false
                }).dialog("open");

                //自定义弹出层关闭事件，点击关闭时摧毁弹出层
                $("#FertilizerModal .dialog_close_btn .icon_close").unbind("click").click(function () {
                    $("#FertilizerModal").dialog("destroy");
                })
                e.preventDefault();
                return false;
            }
        });

        //化肥/有机肥TAB切换
        var index = 0;
        var $div_li = $(".chemicals-dialog .tabs ul li");
        $("div.fertilizer-list > div").eq(0).show();
        $div_li.click(function () {
            $(this).addClass("current").siblings().removeClass("current");
            index = $div_li.index(this);
            loadFertilizerData(data == null ? orgid : data.ChildOrgID, 1, index, data == null ? ProductID : data.ProductID);
            $("div.fertilizer-list > div").eq(index).show().siblings().hide();
        });
    },

    //产品认证图片切换
    certificationSlides: function (certiId) {
        $(".btn_certification").unbind("click").click(function (e) {
            $("#certificationModal").dialog({
                autoOpen: false,
                width: '980',
                height: '600',
                dialogClass: "modal-dialog",
                title: "",
                modal: true,
                resizable: false
            }).dialog("open");

            //自定义弹出层关闭事件，点击关闭时摧毁弹出层
            $("#certificationModal .dialog_close_btn .icon_close").unbind("click").click(function () {
                $("#certificationModal").dialog("destroy");
            })
            //获取所有认证图片
            //if (QueryTraceaDetail91.RecordType == 0) { //如果是云平台的溯源档案
            var ZSid = $(this).parent().parent().data("id");
            getOrgProCertifiedPicsData(certiId, ZSid);
            e.preventDefault();
            return false;
        });
    },
    //根据产品id获取作物类型的索引
    getCropTypeByProductId:function(productId){
    	var res = 0;
    	$.ajax({
    		url:"?action=Product",
    		type:"post",
    		async: false,//同步，必须获取结果后才能执行下一步
    		data:{
    			htmlMethod:"getCropIdByProductId",
    			productId:productId
    		},
    		dataType:"json",
    		success : function (response){
    			res = response.cropId;
    		}
    	});
    	return res;
    },
    //关键环境数据弹出层
    EnvironmentRecords: function (productId) {
        $(".btn_environment").unbind("click").click(function (e) {
            if (!$(this).hasClass("btn_environment")) {
                return false;
            }
            $("#environmentModal").dialog({
                autoOpen: false,
                width: '980',
                height: 'auto',
                dialogClass: "modal-dialog",
                title: "",
                modal: true,
                resizable: false
            }).dialog("open");

            //自定义弹出层关闭事件，点击关闭时摧毁弹出层
            $("#environmentModal .dialog_close_btn .icon_close").unbind("click").click(function () {
                $("#environmentModal").dialog("destroy");
            });
            exploratory.config.environmentTab(productId,exploratory.config.getCropTypeByProductId(productId));
            e.preventDefault();
            return false;
        });
    },
    //请求服务端, 将获取的温度数据绑定到HighChart插件
    loadTemperatureDate: function (deviceID, startTime, endTime, DeviceType, title, yAxisTitle, seriesname, valueSuffix, unitValue) {
        Service.post({
            url: "/TraceabilityService.svc/GetTemperatureInfo",
            params: {
                DeviceID: deviceID,
                DeviceType: DeviceType,
                StartDate: startTime,
                EndDate: endTime
            },
            success: function (response) {
                var ulHtml = $(".statistics").children("ul"),
						categories = [],
						maxByMonth = [],
						minByMonth = [],
						avgByMonth = [];

                //空气温度和土壤温度
                ulHtml.children('#avg_total').find(".num").html("");
                ulHtml.children('#avg_diff').find(".num").html("");
                if (DeviceType == 1 || DeviceType == 3) {
                    if (response.AvgTotal.Items[0].AvgTotal) {
                        ulHtml.children('#avg_total').find(".num").html(response.AvgTotal.Items[0].AvgTotal);
                    } else {
                        ulHtml.children('#avg_total').find(".num").html(0);
                    }

                    if (response.AvgDiff.Items[0].AvgDiff) {
                        ulHtml.children('#avg_diff').find(".num").html(response.AvgDiff.Items[0].AvgDiff);
                    } else {
                        ulHtml.children('#avg_diff').find(".num").html(0);
                    }
                }

                $.each(response.ForChartPlugin.Items, function (i, data) {
                    //zwb modify 0822
                    categories.push(data.Year + '年' + data.Month + "月");
                    maxByMonth.push(data.MaxByMonth);
                    minByMonth.push(data.MinByMonth);
                    avgByMonth.push(data.AvgByMonth);

                });

                //将获取的温度数据绑定到HighChart插件
                exploratory.config.tempReport(categories, maxByMonth, minByMonth, avgByMonth, title, yAxisTitle, seriesname, valueSuffix, unitValue);
            },
            mask: function () {
                $(".environmentMain").mask("正在获取数据,请稍候...");
            },
            unmask: function () {
                $(".environmentMain").unmask();
            }
        });
    },

    //关键环境数据温度报表
    tempReport: function (categories, data_MaxValue, data_MinValue, data_AvgValue, title, yAxisTitle, seriesname, valueSuffix, unitValue ) {
        $(".temp-chart").highcharts({
            title: {
                text: title,
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                tickPixelInterval: 100,
                categories: categories,
                x: -70
            },
            yAxis: {
                title: {
                    text: yAxisTitle
                },
                labels: {
                    formatter: function () {
                        return this.value + unitValue;
                    },
                 
                },
            
            },

            plotOptions: {
                line: {
                    marker: {
                        enabled: false,
                        hover: {
                            radius: 3.0
                        }
                    },
                    states: {
                        hover: {
                            lineWidth: 2
                        }
                    }
                }
            },

            exporting: {
                enabled: false //设置导出按钮不可用
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                valueDecimals: 2,
                valueSuffix: valueSuffix
            },

            legend: {
                //layout: 'vertical',
                align: 'center',
                verticalAlign: 'top',
                borderWidth: 0
            },

            series: [{
                name: '最高' + seriesname,
                data: data_MaxValue,
                color: '#CC0000'
            }, {
                name: '最低' + seriesname,
                data: data_MinValue,
                color: '#6699FF'
            }, {
                name: '平均' + seriesname,
                data: data_AvgValue,
                color: '#339900'
            }]
        });
    },

    tempStockReport: function (categories, data_MaxValue, data_MinValue, data_AvgValue) {
        var pos = [],
				testData = [];

        for (i = 0; i < 180; i++) {
            pos[i] = Date.UTC(2014, 9, i);
            testData.push([Date.UTC(2014, (9 - 1), i), Math.random(1000)]);
        }
        var chart = new Highcharts.StockChart({
            chart: {
                renderTo: 'temp-chart'
            },

            rangeSelector: {
                inputEnabled: false,
                selected: 0
            },

            title: {
                text: ''
            },

            xAxis: {
                tickPixelInterval: 100,
                type: 'datetime',
                dateTimeLabelFormats: {
                    second: '%H:%M:%S',
                    minute: '%H:%M',
                    hour: '%H:%M',
                    day: '%m/%d',
                    week: '%m/%d',
                    month: '%Y年%m月',
                    year: '%Y年'
                }
            },

            yAxis: {
                labels: {
                    formatter: function () {
                        return this.value + "°C";
                    }
                }
            },

            tooltip: {
                valueSuffix: '°C'
            },

            exporting: {
                enabled: false
            },

            navigator: {
                enabled: false
            },

            scrollbar: {
                enabled: true
            },

            series: [{
                name: '最高温度',
                data: data_MaxValue
            }, {
                name: '最低温度',
                data: data_MinValue
            }, {
                name: '平均温度',
                data: data_AvgValue
            }]
        });

        chart.rangeSelector.zoomText.hide();
        $.each(chart.rangeSelector.buttons, function () {
            this.hide();
        });
        $(chart.rangeSelector.divRelative).hide();
        /*hideZoomBar(chart);*/
    },

    //关键环境数据光照报表
    luxReport: function (categories, data) {
        $('.temp-chart').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value + "小时";
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
						'<td style="padding:0"><b>{point.y:.1f} 小时</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointWidth: 10,
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            exporting: {
                enabled: false //设置导出按钮不可用
            },
            series: [{
                name: '光照强度',
                data: data,
                color: '#227744'

            }]
        });
    },

    //全生长期图片展示弹出层
    GrowthImages: function (imglist) {
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
                getTraceFlowTaskFeedbackPics(imglist);
                e.preventDefault();
                return false;
            }
        });
    },

    //全生长期图片切换
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
                    var Imgobj = $("#growthImagesModal").data("Imgobj");
                    $(".img-remarks").html(Imgobj[number-1].img_desc);
                }
            }
        });
    },

    viewSurveillanceVideo: function (VedioURL) {
        if (VedioURL != null) {
            $(".btn_viewVideo").unbind("click").click(function (e) {

                $("#videoDialog").dialog({
                    autoOpen: false,
                    width: '540',
                    height: 'auto',
                    title: "实时视频",
                    modal: true,
                    resizable: false
                }).dialog("open");

                //自定义弹出层关闭事件，点击关闭时摧毁弹出层
                $("#videoDialog .dialog_close_btn .icon_close").unbind("click").click(function () {
                    $("#videoDialog").dialog("destroy");
                })
                exploratory.config.write_live(VedioURL);
                e.preventDefault();
                return false;
            })
        } 
    },
    write_live: function (VedioURL) {
        Base.sessionStorage.storeSession("VedioURL",VedioURL);
        //Base.sessionStorage.storeSession("PicUrl",WebVedioURL);
        $("#videoDialog .bd").html("<iframe src='?action=VedioMonitor' width='500' height='300' frameBorder=0 scrolling=no class='vedioiframe' style='border: none'></iframe>");

    },
    environmentTab: function (productId, cropid) {
        var tabHtml = "";
        switch (parseInt(cropid, 10)) {
            case ProAttributes.config.Cropneum.稻谷:
                tabHtml += "<li class=\"current\">空气温度</li><li>空气湿度</li><li>土壤温度</li><li>土壤湿度</li>"
                break;
            default:
                tabHtml = "<li class=\"current\">空气温度</li><li>光照度</li>";
                break
        }
        $("#tabEnvironTool").html(tabHtml);
        //var index = 0;
        var $div_li = $(".environment-records-dialog .tabs ul li");
        $div_li.click(function () {
            $(this).addClass("current").siblings().removeClass("current");
            $("#temp-chart").empty();
            TraceRecords_getDevices(productId, exploratory.config.setDeviceType($(this).text()));
        });
        $("#temp-chart").empty();
        $("#lightul").hide();
        TraceRecords_getDevices(productId, 1);
    },
    setDeviceType: function (text) {
        var devType; //设备类型
        switch (text) {
            case "空气温度":
                devType = 1;
                $("#tempul").show();
                $("#lightul").hide();
                break;
            case "空气湿度":
                devType = 2;
                $("#tempul").hide();
                $("#lightul").hide();
                break;
            case "土壤温度":
                devType = 3;
                $("#tempul").show();
                $("#lightul").hide();
                break;
            case "土壤湿度":
                devType = 4;
                $("#tempul").hide();
                $("#lightul").hide();
                break;
            case "光照度":
                devType = 5;
                $("#tempul").hide();
                $("#lightul").show();
                break;
        }
        return devType;
    },
    SetAddressForMap: function (address, mapid) {
        // 百度地图API功能
        var map = new BMap.Map(mapid);
        //var point = new BMap.Point(116.331398, 39.897445);
        //map.centerAndZoom(point, 13);
        // 创建地址解析器实例
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint(address, function (point) {
            if (point) {
                map.centerAndZoom(point, 16);
                map.addOverlay(new BMap.Marker(point));
            }
        }, "南宁市");
        map.enableScrollWheelZoom(true); // 启动鼠标滚轮操作
        map.enableContinuousZoom(); // 开启连续缩放效果
        map.enableInertialDragging(); // 开启惯性拖拽效果
    },
    initial: function (data) {
        var self = exploratory.config;
        if (data != null) {
        	//主要是绑定单击事件函数
            //self.CustomerRatings();
        	//产品认证绑定事件
            self.certificationSlides(data.product_certi_list);
            //全生长周期图片
            //判断生长周期是否存在照片，存在则调用绑定函数，不存在则不显示
            if(data.growthing_img_list == "" || !data.growthing_img_list){
            	$(".btn_view.btn_images").html("沒有记录");
                $(".btn_images").parents("li").addClass("notrack");
            }else{
            	self.GrowthImages(data.growthing_img_list);
            }
            
          //肥料使用情况
            if(data.fertilizer_list == "" || !data.fertilizer_list){
            	$(".btn_view.btn_fertilizer").html("沒有记录");
                $(".btn_fertilizer").parents("li").addClass("notrack");
            }else{
            	self.FertilizerUseRecords(data.fertilizer_list);
            }
            
            //农药使用记录绑定事件
            if(data.pesticides_list == "" || !data.pesticides_list){
            	$(".btn_view.btn_chemicals").html("沒有记录");
                $(".btn_chemicals").parents("li").addClass("notrack");
            }else{
            	self.PesticideUseRecords(data.pesticides_list);
            }
            //实时视频
            if(data.video_loc == "" || !data.video_loc){
            	$(".btn_view.btn_viewVideo").html("没有实时视频");
                $(".btn_viewVideo").parents("li").addClass("notrack");
            }else{
            	  self.viewSurveillanceVideo(data.video_loc);
            }
            
            //关键环境记录
            if(data.environment_data_exist == "" || !data.environment_data_exist){
            	$(".btn_view.btn_environment").html("没有记录");
                $(".btn_environment").parents("li").addClass("notrack");
            }else{
            	self.EnvironmentRecords(data.product_id);
            }
            
            //加载数据 TraceabilityDetails.js
            TraceabilityDetailsInitial(data);
        }
        //$(".btn_goto").parent().hide();

        //编辑溯源档案栏目TAB切换
        var $div_li = $("#product-track-form .step-list ul li");
        $("#product-track-form .bd > div").eq(0).show();
        $div_li.click(function () {
            $(this).addClass("current").siblings().removeClass("current");
            var index = $div_li.index(this);
            $("#product-track-form .bd > div")
					.eq(index).show()
					.siblings().hide();
        });


        //化肥/有机肥TAB切换
        var $chemicals_tabs = $(".chemicals .tabs ul li");
        $("div.chemicals-content > div").eq(0).show();
        $chemicals_tabs.unbind("click").click(function () {
            $(this).addClass("current").siblings().removeClass("current");
            var chemicals_tabs_index = $chemicals_tabs.index(this);
            $("div.chemicals-content > div")
					.eq(chemicals_tabs_index).show()
					.siblings().hide();
        });

        self.buyTabs();
    }

}