var DynamicPages;

if (!DynamicPages) {
    DynamicPages = {}
}

(function () {
    var sensorJS = [  
       "/Scripts/HighChart/stock/highstock.js",
        "/Scripts/HighChart/exporting.js", 
        "/Scripts/HighChart/StockChart.js", 
        "/Report/SensorReport/CustomStock.js", 
        "/Report/SensorReport/SensorTables.js",  
        "/Report/SensorReport/GlobalConfig.js" ,
        "/Report/ReportFilter.js" ,
        "/MonitorCenter/DeviceTypeEnum.js" ,
        "/Plugins/SelectSlider/selectSlider.js"
    ];

    var controllerReportJS = [ 
        "/Plugins/FlexiGrid/js/flexigrid.js",
        "/Plugins/FlexiGrid/MyFlexigrid.js",
        "/Report/ControllerReport/OperateRecordGrid.js",
        "/MonitorCenter/DeviceTypeEnum.js" ,
        "/Report/ReportFilter.js" ,
        "/Plugins/SelectSlider/selectSlider.js",   
        "/Report/ControllerReport/ControllerReport.js"  
    ]

    DynamicPages = {
        //监控中心-监控总览
        MonitorDefault : { 
            id : 12,
            url : "/MonitorCenter/MonitorDefault.html", 
            scripts : [  
                "/MonitorCenter/PlantationMap.js",
                "/MonitorCenter/MonitorDefault.config.js",
                "/MonitorCenter/MonitorDefault.logic.js"
            ],
            animate : true,
            initial : "MonitorDefault.config.initial"
        },    
        //监控中心-园区监控
        MonitorDetail : { 
            id : 15,
            url : "/MonitorCenter/Monitor.html", 
            scripts : [   
                "/MonitorCenter/DeviceTypeEnum.js",
                "/MonitorCenter/RunStatusEnum.js",
                "/MonitorCenter/DeviceGlobal.js",
                "/RemoteAssistance/NewAssistance.js",
                "/Report/PhotoRecord/ImgZoomView.js" , 
                "/MonitorCenter/DeviceData.js",
                "/Plugins/Selectable/jquery-selectable.js",
                "/MonitorCenter/DeviceSettings.js",
                "/MonitorCenter/DeviceDialogs.js",
                "/MonitorCenter/DeviceController.js",
                "/MonitorCenter/DeviceActions.js",
                "/MonitorCenter/ControllerClassify.js",
                "/MonitorCenter/DeviceStatus.js",  
                "/Plugins/panzoom/jquery-panzoom.js", 
                "/MonitorCenter/DeviceImageMap.js", 
                "/MonitorCenter/DeviceLayout.js",  
                "/MonitorCenter/Weather.js",  
                "/MonitorCenter/MonitorMessages.js", 
                "/MonitorCenter/MonitorTasks.js", 
                "/MonitorCenter/MonitorWarningMessages.js", 
                "/Scripts/pager/pager.js",
                "/Message/WarningMessages.js", 
                "/Message/InMessageReader.js", 
                "/Message/InWarningMessageReader.js", 
                "/Scripts/jquery.tmpl.min.js",
                "Plugins/FileBase64/swfobject.js",
                "/Plugins/Custom/jquery.InsertAtCursor.js",  
                "/Task/InTaskReader.js",
                "/Plugins/Timepicker/jquery.ui.timepicker.js",
                "/Plugins/Timepicker/jquery-ui-timepicker-zh-CN.js",
                "/MonitorCenter/ControllerSettings.logic.js", 
                "/MonitorCenter/SensorSettings.logic.js",
                "/MonitorCenter/DeviceSettingToolbar.js",  

                "/Report/ReportFilter.js" ,
                "/Scripts/file-upload/load-image.min.js",

                "/MonitorCenter/Monitor.config.js",
                "/MonitorCenter/Monitor.logic.js" 
            ], 
            initial : "Monitor.config.initial", 
            params : null
        },    
        
        //报表中心
        ReportMain : { 
            id : 30,
			url : "/Report/ReportMain.html", 
            scripts : [  
                "/MonitorCenter/DeviceTypeEnum.js",
                "/Report/ReportMain.logic.js" , 
                "/Report/ReportMain.config.js"               
            ],
            animate : true  ,
            initial : "ReportMain.config.initial" //for demo temperaly 
        },   
        
        
        //标准智库-知识管理
        KnowledgeManage : { 
            id : 42,
            url : "/Knowledge/KnowledgeManage.html", 
            scripts : [  
                "/Scripts/ueditor/editor_all.js",
                "/Scripts/ueditor/editor_config.js",
                 "/Scripts/jquery.validate.js",
                "/Scripts/validatebase.js", 
                "/Scripts/validate-customMethods.js",

                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
                "/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Plugins/Custom/jquery.CropVarietyTree.js",  
                "/Plugins/Custom/jquery.singleTree.js"  ,

                "/Plugins/Custom/jquery.InsertAtCursor.js"  , 
                "/Plugins/WYSIWYG/jwysiwyg/jquery.wysiwyg.js"  ,
                "/Plugins/WYSIWYG/jwysiwyg/plugins/wysiwyg.i18n.js"  ,
                "/Plugins/WYSIWYG/jwysiwyg/i18n/lang.zh-cn.js"  ,
                "/Plugins/WYSIWYG/jwysiwyg/plugins/wysiwyg.rmFormat.js"  ,
                "/Plugins/FileBase64/swfobject.js", 
                "/Plugins/WYSIWYG/jwysiwyg/InsertImage/InsertImage.js"  ,
                "/Plugins/WYSIWYG/jwysiwyg/controls/wysiwyg.image.js"  ,
                "/Plugins/WYSIWYG/jwysiwyg/controls/wysiwyg.link.js"  ,
                "/Plugins/WYSIWYG/jwysiwyg/controls/wysiwyg.table.js"   ,


                "/AdminServer/SearchTree.js",
                "/Knowledge/KnowldgeContent.config.js",
                "/Knowledge/KnowldgeContent.logic.js" ,

                "/Knowledge/KnowledgeManage.config.js",
                "/Knowledge/KnowledgeManage.logic.js"                 
            ],
            animate : true,
            initial : "KnowledgeManage.config.initial"
        },    

        //标准智库-智能推送
        SmartPush : { 
            id : 44,
            url : "/Knowledge/SmartPush.html", 
            scripts : [  
                "/Knowledge/SmartPush.config.js",
                "/Knowledge/SmartPush.logic.js"                 
            ],
            animate : true,
            initial : "SmartPush.config.initial"
        },    

        //标准智库-即时推送
        RealPush : { 
            id : 48,
            url : "/Knowledge/RealPush.html", 
            scripts : [  
                "/Knowledge/RealPush.config.js",
                "/Knowledge/RealPush.logic.js"                 
            ],
            animate : true,
            initial : "RealPush.config.initial"
        },    
        
        //健康监控-监控概览
         RealMonitor : { 
            id : 52,
            url : "/HealthCenter/RealMonitor.html", 
            scripts : [  
                "/HealthCenter/RealMonitor.config.js",
                "/HealthCenter/RealMonitor.logic.js"                
            ],
            animate : true,
            initial : "RealMonitor.config.initial"
        },     
        //健康监控-园区监控
        ParkMonitor : { 
            id : 55,
            url : "/HealthCenter/ParkMonitor.html", 
            scripts : [  
                "/HealthCenter/ParkMonitor.config.js",
                "/HealthCenter/ParkMonitor.logic.js",
                "/Plugins/JOrgChart/jquery.jOrgChart.js"                 
            ],
            animate : true,
            initial : "ParkMonitor.config.initial"
        },     
        
        //远程协助
        AssistanceMain : { 
            id : 72,
            url : "/RemoteAssistance/AssistanceMain.html", 
            scripts : [  
                "/Scripts/jquery.tmpl.min.js",
                "/Scripts/pager/pager.js",
                "/Scripts/jquery.mousewheel.min.js", 

                "/Plugins/FileBase64/swfobject.js" ,
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
				"/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Plugins/Selectable/jquery-selectable.js",
                "/Plugins/jQuery.jPlayer.2.4.0/jquery.jplayer.min.js",
                "/Plugins/jQuery.jPlayer.2.4.0/jquery.transform2d.js",
                "/Plugins/jQuery.jPlayer.2.4.0/jquery.grab.js",
                "/Plugins/jQuery.jPlayer.2.4.0/mod.csstransforms.min.js",
                "/Plugins/jQuery.jPlayer.2.4.0/circle.player.js",
                "/Plugins/FlexSlider/jquery.flexslider-min.js", 
                //Slider 滚动条
                "/Plugins/SelectSlider/selectSlider.js",   
                "/Plugins/Grid/Grid.js" ,

                "/AdminServer/SearchTree.js",
                "/MonitorCenter/DeviceTypeEnum.js" ,
                
                "/RemoteAssistance/PlaySound.js",
                "/RemoteAssistance/AssistanceDetail.config.js",
                "/RemoteAssistance/AssistanceDetail.logic.js" ,
                "/RemoteAssistance/NewAssistance.js",

                "/Report/ReportFilter.js" ,
                "/Report/PhotoRecord/ReportPhotos.logic.js" ,  
                "/Report/PhotoRecord/ReportPhotos.config.js" ,

                "/RemoteAssistance/AssistanceMain.config.js",
                "/RemoteAssistance/AssistanceMain.logic.js"                 
            ],
            animate : true,
            initial : "AssistanceMain.config.initial"
        },     
        
        //消息中心
        MessageMain : { 
            id : 82,
			url : "/Message/MessageMain.html",
            scripts : [
                "/Scripts/jquery.tmpl.min.js",
                "/Scripts/pager/pager.js",
                "/Plugins/Selectable/jquery-selectable.js",
                
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
				"/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Scripts/jquery.validate.js",
				"/Scripts/validatebase.js",
                "/Scripts/validate-customMethods.js", 
                "/Message/MessageMain.config.js",
                "/Message/MessageMain.logic.js"          
            ],
            animate : true,
            initial : "MessageMain.config.initial"
        },

        //消息中心--发到人
        UserMessageMain : { 
            id : 82,
			url : "/UserMessage/Message.html",
            scripts : [
                "/Scripts/jquery.tmpl.min.js",
                "/Scripts/pager/pager.js",
                "/Plugins/Selectable/jquery-selectable.js",
                
                "/Plugins/Custom/jquery.orgUsersTree.js",  
                "/Plugins/Custom/jquery.singleTree.js"  ,
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
				"/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Scripts/jquery.validate.js",
				"/Scripts/validatebase.js",
                "/Scripts/validate-customMethods.js", 
                "/UserMessage/Message.config.js",
                "/UserMessage/Message.logic.js",  
                "/Plugins/Scrollbar/jquery.jscrollpane.js",
                "/Plugins/Custom/jquery.InsertAtCursor.js"  , 
                "/Plugins/FileBase64/swfobject.js", 
                "/UserMessage/CommentAttachment.js", 
                "/UserMessage/CommentImgAttachment.js",
                "/UserMessage/MessageAttachment.js", 
                "/UserMessage/MessageImgAttachment.js",  
                 "/Enums/AttachmentOwnerType.js" 
            ],
            animate : true,
            initial : "Message.config.initial"
        }, 

        //个人中心
        UserInfo : { 
            id : 92,
            url : "/Profile/UserInfo.html", 
            scripts : [  
                "/Profile/UserInfo.config.js",
                "/Profile/UserInfo.logic.js"                 
            ],
            animate : true,
            initial : "UserInfo.config.initial"
        },  

        
        //园区 
        Plantations : {
            id : 100,
            url : "/MonitorCenter/Plantations/Plantations.htm",
            scripts : [  
                "/MonitorCenter/RunStatusEnum.js",
                "/Plugins/jcarousel/jquery.jcarousel.min.js", 
                "/MonitorCenter/Plantations/PlantationMessages.js",
                "/MonitorCenter/Plantations/PlantationReceiveTasks.js",
                "/MonitorCenter/Plantations/PlantationsDeviceStatus.js",
                "/MonitorCenter/Plantations/PlantationDetailInfo.js",
                "/Message/SendMessageFrom.js",
                "/MonitorCenter/Plantations/PlantationNavigate.js",  
                "/MonitorCenter/Plantations/PlantationDevicesNavigate.js",  
                //任务
                "/Task/AddTask.js",    

                "/MonitorCenter/Plantations/Plantations.js"  
            ],
            animate : true,
            initial : "Plantations.initial"
        },  

        Login : {
            id : 130,
            url : "/Account/Login.html",
            scripts : [  
                "/Account/Login.js" 
            ], 
            initial : "Login.initial" 
        },

        //控制器设置
        ControllerSettings : {
            id : 140,
            url : "/MonitorCenter/ControllerSettings.htm",
            scripts : [
                "/MonitorCenter/DeviceGlobal.js",
                "/Plugins/Timepicker/jquery.ui.timepicker.js",
                "/Plugins/Timepicker/jquery-ui-timepicker-zh-CN.js",
                "/MonitorCenter/ControllerSettings.logic.js",
                "/Plugins/Custom/jquery.numericInput.js",
                "/MonitorCenter/DeviceSettingToolbar.js",
                "/MonitorCenter/ControllerSettings.config.js",
                "/MonitorCenter/Monitor.config.js"
            ],
            params : null,  
            initial : "ControllerSettings.config.initial"
        },

        SensorSettings : {
            id : 150,
            url : "/MonitorCenter/SensorSettings.htm",
            scripts : [
                "/MonitorCenter/DeviceGlobal.js",
                "/Plugins/Timepicker/jquery.ui.timepicker.js",
                "/Plugins/Timepicker/jquery-ui-timepicker-zh-CN.js",
                "/MonitorCenter/SensorSettings.logic.js",
                "/Plugins/Custom/jquery.numericInput.js",
                "/MonitorCenter/DeviceSettingToolbar.js",
                "/MonitorCenter/SensorSettings.config.js"
            ],
            params : null,  
            initial : "SensorSettings.config.initial"
        },
        //相机设置
        CameraSettings : {
            id : 151,
            url : "/MonitorCenter/CameraSettings.htm",
            scripts : [
                "/MonitorCenter/DeviceGlobal.js",
                "/Plugins/Timepicker/jquery.ui.timepicker.js",
                "/Plugins/Timepicker/jquery-ui-timepicker-zh-CN.js",
                "/MonitorCenter/CameraSettings.logic.js",
                "/Plugins/Custom/jquery.numericInput.js",
                "/MonitorCenter/DeviceSettingToolbar.js",
                "/MonitorCenter/CameraSettings.config.js"
            ],
            params : null,  
            initial : "CameraSettings.config.initial"
        },

        //空气温度
        ReportEnviromentDegree : {
            id : 301,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push(
                    "/Report/SensorReport/ReportEnviromentDegree.logic.js",
                    "/Report/SensorReport/ReportEnviromentDegree.config.js"  ); 

                return js;

            }()),
            animate : true,
            initial : "ReportEnviromentDegree.config.initial",
            params : null
        }, 
        
        //土壤温度
        ReportSoilDegree : {
            id : 302,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push(
                "/Report/SensorReport/ReportSoilDegree.logic.js",   
                "/Report/SensorReport/ReportSoilDegree.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportSoilDegree.config.initial",
            params : null
        },
        
        //空气湿度
        ReportEnviromentHumidity : {
            id : 303,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push(
                "/Report/SensorReport/ReportEnviromentHumidity.logic.js" ,
                "/Report/SensorReport/ReportEnviromentHumidity.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportEnviromentHumidity.config.initial",
            params : null
        },
        
        //土壤水分
        ReportSoilHumidity : {
            id : 304,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push(
                "/Report/SensorReport/ReportSoilHumidity.logic.js"   ,
                "/Report/SensorReport/ReportSoilHumidity.config.js"    ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportSoilHumidity.config.initial",
            params : null
        },
        
        //光照度
        ReportIlluminationDegree : {
            id : 305,
            url : "Report/SensorReport/IlluminationReport.html", 
            scripts : [ 
               "/Scripts/HighChart/stock/highstock.js",
                "/Scripts/HighChart/exporting.js", 
                "/Scripts/HighChart/StockColumn.js", 
                "/Scripts/HighChart/StockChart.js", 
                "/Report/SensorReport/CustomStock.js", 
                "/Report/SensorReport/SensorTables.js",  
                "/Report/SensorReport/GlobalConfig.js" ,
                "/Report/ReportFilter.js" ,
                "/MonitorCenter/DeviceTypeEnum.js" ,
                "/Plugins/SelectSlider/selectSlider.js",
                "/Report/SensorReport/ReportIlluminationDegree.logic.js" ,
                "/Report/SensorReport/ReportIlluminationDegree.config.js",
                "/Plugins/Custom/jquery.numericInput.js",
                "/Plugins/ComboBox/jquery.combo.js",
                "/Report/SensorReport/IlluminationReport.js" 
            ], 
            animate : true, 
            initial : "IlluminationReport.initialTypeReport", 
            params : null 
        },
        
        //CO2
        ReportCO2 : {
            id : 306,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push(
                "/Report/SensorReport/ReportCO2.logic.js"  ,
                "/Report/SensorReport/ReportCO2.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportCO2.config.initial",
            params : null
        },

        
        //报表--图像采集
        ReportPhotos : { 
            id : 307,
            url : "/Report/PhotoRecord/ReportPhotos.html", 
            scripts : [   
                "/Plugins/FlexSlider/jquery.flexslider-min.js", 

                //Slider 滚动条
                "/Plugins/SelectSlider/selectSlider.js",   
                "/Scripts/jquery.mousewheel.min.js",      
                
                "/Scripts/jquery.validate.js",
				"/Scripts/validatebase.js",
                "/Scripts/validate-customMethods.js", 
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
				"/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/RemoteAssistance/NewAssistance.js",
                "/Report/PhotoRecord/ImgZoomView.js" , 
                
                "/Plugins/Grid/Grid.js" ,  
                
                "/Report/ReportFilter.js" ,
                "/MonitorCenter/DeviceTypeEnum.js" ,
                "/Report/PhotoRecord/ReportPhotos.logic.js" ,  
                "/Report/PhotoRecord/ReportPhotos.config.js"     
            ],
            animate : true,
            initial : "ReportPhotos.config.initial"  ,
            params : null
        },   
        
        //降温记录
        ReportSprayRecord : {
            id : 308,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push(
                "/Report/ControllerReport/ReportSprayRecord.logic.js",   
                "/Report/ControllerReport/ReportSprayRecord.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportSprayRecord.config.initial",
            params : null
        },
        
        //灌溉记录
        ReportIrrigationRecord : {
            id : 309,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push(
                "/Report/ControllerReport/ReportIrrigationRecord.logic.js",   
                "/Report/ControllerReport/ReportIrrigationRecord.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportIrrigationRecord.config.initial",
            params : null
        },
        
        //排风记录
        ReportExhaustRecord : {
            id : 310,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push(
                "/Report/ControllerReport/ReportExhaustRecord.logic.js",   
                "/Report/ControllerReport/ReportExhaustRecord.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportExhaustRecord.config.initial",
            params : null
        },
        
        //声光报警
        ReportSoundLightAlarm : {
            id : 311,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push(
                "/Report/ControllerReport/ReportSoundLightAlarm.logic.js",   
                "/Report/ControllerReport/ReportSoundLightAlarm.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportSoundLightAlarm.config.initial",
            params : null
        },  

        //流量记录
        ReportFlow : {
            id : 312,
            url : "Report/SensorReport/AddUpReport.html", 
            scripts : [ 
                "/Scripts/HighChart/stock/highstock.js",
                "/Scripts/HighChart/exporting.js",  
                "/Scripts/HighChart/StockColumn.js", 
                "/Report/SensorReport/SensorTables.js",   
                "/Report/ReportFilter.js" ,
                "/MonitorCenter/DeviceTypeEnum.js" ,
                "/Plugins/SelectSlider/selectSlider.js",
                "/Report/SensorReport/AddUpReport.js",  
                "/Report/SensorReport/FlowReport.js", 
            ], 
            animate : true,
            initial : "FlowReport.initial",
            params : null
        },

        //降雨量记录
        ReportRainfall : {
            id : 313,
            url : "Report/SensorReport/AddUpReport.html", 
            scripts : [ 
                "/Scripts/HighChart/stock/highstock.js",
                "/Scripts/HighChart/exporting.js", 
                "/Scripts/HighChart/StockColumn.js",  
                "/Report/SensorReport/SensorTables.js",   
                "/Report/ReportFilter.js" ,
                "/MonitorCenter/DeviceTypeEnum.js" ,
                "/Plugins/SelectSlider/selectSlider.js",
                "/Report/SensorReport/AddUpReport.js",  
                "/Report/SensorReport/RainfallReport.js", 
            ], 
            animate : true,
            initial : "RainfallReport.initial",
            params : null
        }, 
        
        //风速记录
        ReportWind : {
            id : 314,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push(
                "/Report/SensorReport/ReportWind.logic.js",   
                "/Report/SensorReport/ReportWind.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportWind.config.initial",
            params : null
        },  
        
        //消息报表
        MessageReport : {
            id : 315,
            url : "Report/MessageReport/MessageReport.html", 
            scripts : [
                "/Scripts/jquery.tmpl.min.js",
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
				"/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Scripts/jquery.validate.js",
				"/Scripts/validatebase.js",
                "/Scripts/validate-customMethods.js", 

                "/Scripts/HighChart/stock/highstock.js",
                "/Scripts/HighChart/exporting.js", 
                "/Scripts/HighChart/StockChart.js", 
                "/Report/MessageReport/MessageReport.logic.js",
                "/Report/MessageReport/MessageReport.config.js"              
            ],
            animate : true,
            initial : "MessageReport.config.initial"
        },  

        //照明
        ReportLightRecord : {
            id : 316,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push(
                "/Report/ControllerReport/ReportLightRecord.logic.js",   
                "/Report/ControllerReport/ReportLightRecord.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportLightRecord.config.initial",
            params : null
        },    

        
        //加湿
        ReportWetRecord : {
            id : 317,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push(
                "/Report/ControllerReport/ReportWetRecord.logic.js",   
                "/Report/ControllerReport/ReportWetRecord.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportWetRecord.config.initial",
            params : null
        },   

        //任务报表
        TaskReport : {
            id : 318,
            url : "Report/TaskReport/TaskReport.html", 
            scripts : [
                "/Scripts/jquery.tmpl.min.js",
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
				"/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Scripts/jquery.validate.js",
				"/Scripts/validatebase.js",
                "/Scripts/validate-customMethods.js", 

                "/Scripts/HighChart/stock/highstock.js",
                "/Scripts/HighChart/exporting.js", 
                "/Scripts/HighChart/StockChart.js", 
                "/Report/TaskReport/TaskReport.logic.js",
                "/Report/TaskReport/TaskReport.config.js"              
            ],
            animate : true,
            initial : "TaskReport.config.initial"
        },  

        //风频统计
        ReportWindDirection : {
            id : 320,
            url : "Report/SensorReport/WindDirectionReport.html",
            scripts : [ 
               "/Scripts/HighChart/stock/highstock.js",
               "/Scripts/HighChart/highcharts-more.js",
                "/Scripts/HighChart/exporting.js", 
                "/Scripts/HighChart/PolarChart.js",  
                "/Report/ReportFilter.js" ,
                "/MonitorCenter/DeviceTypeEnum.js" ,
                "/Report/SensorReport/WindDirectionReport.js"  
            ],
            animat : true,
            initial : "WindDirectionReport.initial",
            params : null
        },

         //压力记录
        ReportPlessure : {
            id : 321,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push(
                "/Report/SensorReport/ReportPlessure.logic.js",   
                "/Report/SensorReport/ReportPlessure.config.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "ReportPlessure.config.initial",
            params : null
        },  
        
         //气压记录
        ReportAirPlessure : {
            id : 322,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push( "/Report/SensorReport/AirPlessureReport.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "AirPlessureReport.initial",
            params : null
        },
        
         //液位记录
        ReportLiquidLevel : {
            id : 323,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push( "/Report/SensorReport/LiquidLevelReport.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "LiquidLevelReport.initial",
            params : null
        }, 
        
         //酸碱度记录
        ReportPH : {
            id : 324,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push( "/Report/SensorReport/PHReport.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "PHReport.initial",
            params : null
        },
        
         //硫化氢含量记录
        ReportH2S : {
            id : 325,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push( "/Report/SensorReport/H2SReport.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "H2SReport.initial",
            params : null
        },
        
         //氧含量记录
        ReportO2Percent : {
            id : 326,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push( "/Report/SensorReport/O2PercentReport.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "O2PercentReport.initial",
            params : null
        }, 
        
         //二氧化碳含量记录
        ReportCO2Percent : {
            id : 327,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push( "/Report/SensorReport/CO2PercentReport.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "CO2PercentReport.initial",
            params : null
        }, 
        
         //二氧化碳含量记录
        ReportCH4Percent : {
            id : 328,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push( "/Report/SensorReport/CH4PercentReport.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "CH4PercentReport.initial",
            params : null
        }, 
        
        //搅拌记录
        ReportMixRecord : {
            id : 329,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/MixReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "MixReport.initial",
            params : null
        },
        
        //水泵记录
        ReportPumpRecord : {
            id : 330,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/PumpReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "PumpReport.initial",
            params : null
        },
        
        //输送记录
        ReportConveyRecord : {
            id : 331,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/ConveyReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "ConveyReport.initial",
            params : null
        },
        
        //风机记录
        ReportFanRecord : {
            id : 332,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/FanReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "FanReport.initial",
            params : null
        }, 
        
        //破碎机记录
        ReportCrushRecord : {
            id : 333,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/CrushReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "CrushReport.initial",
            params : null
        },
        
        //抓料机记录
        ReportGrabFeedRecord : {
            id : 334,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/GrabFeedReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "GrabFeedReport.initial",
            params : null
        },
        
        //破壳机记录
        ReportBrokenShellRecord : {
            id : 335,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/BrokenShellReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "BrokenShellReport.initial",
            params : null
        },
        
        //电机记录
        ReportMotorRecord : {
            id : 336,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/MotorReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "MotorReport.initial",
            params : null
        },
        
        //内遮荫
        ReportShadeInRecord : {
            id : 337,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/ShadeInReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "ShadeInReport.initial",
            params : null
        },
        
        //外遮阳
        ReportShadeOutRecord : {
            id : 338,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/ShadeOutReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "ShadeOutReport.initial",
            params : null
        },
        
        //开窗
        ReportOpenWindowRecord : {
            id : 339,
            url : "/Report/ControllerReport/ControllerReport.html",
            scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push("/Report/ControllerReport/OpenWindowReport.js" ); 

                return js;

            }()), 
            animate : true,
            initial : "OpenWindowReport.initial",
            params : null
        },

        //阀门
        ReportValveFlux : {
            id : 340,
            url : "Report/ControllerReport/ValveFluxReport.htm", 
             scripts : (function(){
                var js = $.extend(true, [], controllerReportJS); 
                js.push(
                "/Scripts/HighChart/stock/highstock.js",
                "/Scripts/HighChart/exporting.js", 
                "/Scripts/HighChart/StockColumn.js", 
                "/Scripts/HighChart/StockChart.js", 
                "/Report/SensorReport/CustomStock.js",  
                "/Report/SensorReport/SensorTables.js",
                "/Report/SensorReport/GlobalConfig.js" ,
                "/Report/ReportFilter.js" ,
                "/MonitorCenter/DeviceTypeEnum.js" ,
                "/Plugins/SelectSlider/selectSlider.js",
                "/Report/ControllerReport/ValveFluxReport_More.logic.js" ,
                "/Report/ControllerReport/ValveFluxReport_More.config.js",
                "/Plugins/Custom/jquery.numericInput.js",
                "/Plugins/ComboBox/jquery.combo.js",
                "/Report/ControllerReport/ValveFluxReport.js" ); 

                return js;

            }()), 
//            scripts : [ 
//               "/Scripts/HighChart/stock/highstock.js",
//                "/Scripts/HighChart/exporting.js", 
//                "/Scripts/HighChart/StockColumn.js", 
//                "/Scripts/HighChart/StockChart.js", 
//                "/Report/SensorReport/CustomStock.js",  
//                "/Report/SensorReport/SensorTables.js",
//                "/Report/SensorReport/GlobalConfig.js" ,
//                "/Report/ReportFilter.js" ,
//                "/MonitorCenter/DeviceTypeEnum.js" ,
//                "/Plugins/SelectSlider/selectSlider.js",
//                "/Report/ControllerReport/ValveFluxReport_More.logic.js" ,
//                "/Report/ControllerReport/ValveFluxReport_More.config.js",
//                "/Plugins/Custom/jquery.numericInput.js",
//                "/Plugins/ComboBox/jquery.combo.js",
//                "/Report/ControllerReport/ValveFluxReport.js" 
//            ], 
            animate : true, 
            initial : "ValveFluxReport.initialTypeReport", 
            params : null 
        },
         //实时流量记录报表
        ReportRealTimeFlow : {
            id : 341,
            url : "Report/SensorReport/SensorReport.html", 
            scripts : (function(){
                var js = $.extend(true, [], sensorJS); 
                js.push( "/Report/SensorReport/RealTimeFlowReport.js"  ); 

                return js;

            }()), 
            animate : true,
            initial : "RealTimeFlowReport.initial",
            params : null
        },

        //一氧化碳含量记录
        ReportCO: {
            id: 342,
            url: "Report/SensorReport/SensorReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportCO.logic.js",
                "/Report/SensorReport/ReportCO.config.js");

                return js;

            }()),
            animate: true,
            initial: "ReportCO.config.initial",
            params: null
        },

        //二氧化硫含量记录
        ReportSO2: {
            id: 343,
            url: "Report/SensorReport/SensorReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportSO2.logic.js",
                "/Report/SensorReport/ReportSO2.config.js");

                return js;

            }()),
            animate: true,
            initial: "ReportSO2.config.initial",
            params: null
        },

        //二氧化氮含量记录
        ReportNO2: {
            id: 344,
            url: "Report/SensorReport/SensorReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportNO2.logic.js",
                "/Report/SensorReport/ReportNO2.config.js");

                return js;

            }()),
            animate: true,
            initial: "ReportNO2.config.initial",
            params: null
        },

        //粉尘含量记录
        ReportDust: {
            id: 345,
            url: "Report/SensorReport/SensorReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportDust.logic.js",
                "/Report/SensorReport/ReportDust.config.js");

                return js;

            }()),
            animate: true,
            initial: "ReportDust.config.initial",
            params: null
        },

        //地磅数据记录
        ReportTrackscale: {
            id: 346,
            url: "Report/SensorReport/TrackscaleReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportTrackscale.logic.js",
                "/Report/SensorReport/ReportTrackscale.config.js",
                "/Report/SensorReport/ReportCubeCar.config.js",
                "/Report/SensorReport/ReportCubeBreed.config.js",
                "/Report/SensorReport/ReportCubeRecord.config.js"

                );
                return js;

            }()),
            animate: true,
            initial: "ReportTrackscale.config.initial",
            params: null
        },

        //电导率浓度记录
        ReportConductivity: {
            id: 347,
            url: "Report/SensorReport/SensorReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportConductivity.logic.js",
                "/Report/SensorReport/ReportConductivity.config.js");

                return js;

            }()),
            animate: true,
            initial: "ReportConductivity.config.initial",
            params: null
        },

        //溶解氧浓度记录
        ReportOxygen: {
            id: 348,
            url: "Report/SensorReport/SensorReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportOxygen.logic.js",
                "/Report/SensorReport/ReportOxygen.config.js");

                return js;

            }()),
            animate: true,
            initial: "ReportOxygen.config.initial",
            params: null
        },

        //三维量方记录
        ReportCube: {
            id: 349,
            url: "Report/SensorReport/CubeReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportCube.logic.js",
                "/Report/SensorReport/ReportCube.config.js");

                return js;

            }()),
            animate: true,
            initial: "ReportCube.config.initial",
            params: null
        },

        //开关
        ReportOpenCloseRecord: {
            id: 355,
            url: "/Report/ControllerReport/ControllerReport.html",
            scripts: (function () {
                var js = $.extend(true, [], controllerReportJS);
                js.push("/Report/ControllerReport/OpenCloseReport.js");

                return js;

            }()),
            animate: true,
            initial: "OpenCloseReport.initial",
            params: null
        },

        //麦克风对讲
        ReportVoiceIntercomRecord: {
            id: 356,
            url: "/Report/ControllerReport/ControllerReport.html",
            scripts: (function () {
                var js = $.extend(true, [], controllerReportJS);
                js.push("/Report/ControllerReport/VoiceIntercomRecord.js");

                return js;

            }()),
            animate: true,
            initial: "VoiceIntercomRecord.initial",
            params: null
        },

        //页面湿度
        ReportPageHumidity: {
            id: 357,
            url: "Report/SensorReport/SensorReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportPageHumidity.logic.js",
                "/Report/SensorReport/ReportPageHumidity.config.js");
                return js;

            }()),
            animate: true,
            initial: "ReportPageHumidity.config.initial",
            params: null
        },

        //噪音
        ReportNoise: {
            id: 358,
            url: "Report/SensorReport/SensorReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportNoise.logic.js",
                "/Report/SensorReport/ReportNoise.config.js");
                return js;

            }()),
            animate: true,
            initial: "ReportNoise.config.initial",
            params: null
        },
        
        //红外
        ReportInfrared: {
            id: 359,
            url: "Report/SensorReport/SensorReport.html",
            scripts: (function () {
                var js = $.extend(true, [], sensorJS);
                js.push(
                "/Report/SensorReport/ReportInfrared.logic.js",
                "/Report/SensorReport/ReportInfrared.config.js");
                return js;

            }()),
            animate: true,
            initial: "ReportInfrared.config.initial",
            params: null
        },

		/*任务-发送到组织*/
        //任务中心--tab切换（主页template 页）
        TaskTabs : {
            id : 580,
            url : "/Task/TaskTabs.html",
            scripts : ["/Task/TaskTabSwitch.js"], 
            initial : "TaskTabSwitch.initSwitch"
        },

		//任务中心--我要做的
        TaskMain : { 
            id : 581,
            url : "/Task/TaskReceivedMain.html", 
            scripts : [ 
                "/Scripts/jquery.tmpl.min.js",
                "/Scripts/pager/pager.js",
                "/Plugins/Selectable/jquery-selectable.js", 
                "/Task/Canledar.js",
                "/Task/Canledar.logic.js",   
                "/Task/TaskMain.config.js",
                "/Task/TaskMain.logic.js"   
            ],
            animate : true,
            initial :  "TaskMain.config.initial"
        }, 
        
        //收到的全部任务
        Alltasks : { 
            id : 582,
            url : "/Task/Alltasks.html", 
            scripts : [
                "/Report/PhotoRecord/ImgZoomView.js" , 
                "/Report/ReportFilter.js" ,
                "/Scripts/file-upload/load-image.min.js",

                "Plugins/FileBase64/swfobject.js", 
                "/Plugins/Selectable/jquery-selectable.js",  
                "/Plugins/Custom/jquery.InsertAtCursor.js",  
                "/Task/AddTask.js",
                "/Task/Alltasks.logic.js",   
                "/Task/Alltasks.config.js"
            ],
            params : null,
            initial :  "Alltasks.config.initial"
        }, 

        //收到的任务详情
        TaskDetail : { 
            id : 583,
            url : "/Task/TaskDetail.html", 
            scripts : [   
                "Plugins/FileBase64/swfobject.js",
                "/Task/TaskDetail.config.js",
                "/Task/TaskDetail.logic.js"   
            ],
            params : null,
            initial :  "TaskDetail.config.initial"
        }, 

        //查看任务进度
        TaskProgress : {
            id : 591,
            url : "/Task/TaskProgress.html",
            scripts : [  
                "/Task/TaskStatusEnum.js",
                "/Task/TaskSendGrid.js",
                "/Task/TaskProgressPapers.js" ,
                "/Scripts/pager/pager.js",
                "/Scripts/HighChart/stock/highstock.js",  
                "/Task/TaskProgressAll.js", //高级搜索需要
                "/Task/TaskProgress.js" 
            ],
            animate : true,
            initial : "TaskProgress.initial"
        },

        //任务汇报统计(概览)
        TaskFeedbackOverview : {
            id : 592,
            url : "/Task/TaskFeedbackOverview.html",
            scripts : [  
                "/Task/TaskStatusEnum.js", 
                "/Plugins/jcarousel/jquery.jcarousel.min.js", 
                "/Task/TaskProgressPapers.js" ,
                "/Task/TaskFeedbackOverview.js" 
            ],
            animate : true,
            params : null,
            initial : "TaskFeedbackOverview.initial"
        },

        //执行者执行任务的情况（汇报记录）
        TaskExecRecord : {
            id : 593,
            url : "/Task/TaskExecRecord.html",
            scripts : [
                "/Task/TaskStatusEnum.js", 
                "/Task/TaskProgressPapers.js" ,
                "/Task/FeedbackMap.js" ,
                "/Report/PhotoRecord/ImgZoomView.js" , 
                "/Task/TaskExecRecord.js"
            ],
            animate : true,
            params : null,
            initial : "TaskExecRecord.initial"
        },

        //查看全部任务的进度
        TaskProgressAll : {
            id : 594,
            url : "/Task/TaskProgressAll.html",
            scripts : [ 
                "/Task/TaskStatusEnum.js", 
                "/Task/TaskSendGrid.js",
                "/Task/TaskProgressPapers.js",
                "/Scripts/pager/pager.js",
                "/Task/TaskProgressAll.js"
            ],
            animate : true,
            params : null,
            initial : "TaskProgressAll.initial"
        },

        //我下发的任务
        TaskSendAll : {
            id : 595,
            url : "/Task/TaskSendAll.html",
            scripts : [ 
                "/Task/AddTask.js",
                "/Task/TaskStatusEnum.js", 
                "/Task/TaskSendGrid.js", 
                "/Scripts/pager/pager.js",
                "/Task/TaskSendPapers.js",
                "/Task/TaskSendAll.js"
            ],
            animate : true,
            params : "all",
            initial : "TaskSendAll.initial"
        },

        TaskContent : {
            id : 596,
            url : "/Task/TaskContent.html",
            scripts : [
                "/Task/TaskContent.js"
            ],
            animate : true,
            params : null,
            initial : "TaskContent.viewTaskInfo"
        },
        /*end 任务- 发送到组织*/

        /*任务-发送到用户*/
        //任务中心--tab切换（主页template 页）
        UserTaskTabs : {
            id : 10580,
            url : "/UserTask/TaskTabs.html",
            scripts : ["/UserTask/TaskTabSwitch.js"], 
            initial : "TaskTabSwitch.initSwitch"
        },

		//任务中心--我要做的
        UserTaskMain : { 
            id : 10581,
            url : "/UserTask/TaskReceivedMain.html", 
            scripts : [ 
                "/Scripts/jquery.tmpl.min.js",
                "/Scripts/pager/pager.js",
                "/UserTask/TaskStatusEnum.js",
                "/Plugins/Selectable/jquery-selectable.js", 
                "/UserTask/Canledar.js",
                "/UserTask/Canledar.logic.js",   
                "/UserTask/TaskMain.config.js",
                "/UserTask/TaskMain.logic.js"   
            ],
            animate : true,
            initial :  "TaskMain.config.initial"
        }, 
        
        //收到的全部任务
        AllUserTasks : { 
            id : 10582,
            url : "/UserTask/Alltasks.html", 
            scripts : [
                "/Report/PhotoRecord/ImgZoomView.js" , 
                "/Report/ReportFilter.js" ,
                "/Scripts/file-upload/load-image.min.js",
                
                "/UserTask/TaskStatusEnum.js",
                "Plugins/FileBase64/swfobject.js", 
                "/Plugins/Selectable/jquery-selectable.js",  
                "/Plugins/Custom/jquery.InsertAtCursor.js",  
                "/UserTask/AddTask.js",
                "/UserTask/FeedbackMap.js" ,
                "/UserTask/Alltasks.logic.js",   
                "/UserTask/Alltasks.config.js",
                "/Scripts/DateTime/jquery-ui-timepicker-addon.js",
                "/Scripts/DateTime/jquery-ui-timepicker-zh-CN.js"
            ],
            params : null,
            initial :  "Alltasks.config.initial"
        }, 

        //收到的任务详情
        UserTaskDetail : { 
            id : 10583,
            url : "/UserTask/TaskDetail.html", 
            scripts : [   
                "Plugins/FileBase64/swfobject.js",
                "/UserTask/TaskDetail.config.js",
                "/UserTask/TaskDetail.logic.js"   
            ],
            params : null,
            initial :  "TaskDetail.config.initial"
        }, 

        //查看任务进度
        UserTaskProgress : {
            id : 10591,
            url : "/UserTask/TaskProgress.html",
            scripts : [  
                "/UserTask/AddTask.js",
                "/UserTask/TaskStatusEnum.js",
                "/UserTask/TaskSendGrid.js",
                "/UserTask/TaskProgressPapers.js" ,
                "/Scripts/pager/pager.js",
                "/Scripts/HighChart/stock/highstock.js",  
                "/Plugins/Custom/jquery.singleTree.js"  ,
                "/UserTask/TaskProgressAll.js", //高级搜索需要
                "/UserTask/TaskProgress.js" 
            ],
            animate : true,
            initial : "TaskProgress.initial"
        },

        //任务汇报统计(概览)
        UserTaskFeedbackOverview : {
            id : 10592,
            url : "/UserTask/TaskFeedbackOverview.html",
            scripts : [  
                "/UserTask/TaskStatusEnum.js", 
                "/Plugins/jcarousel/jquery.jcarousel.min.js", 
                "/UserTask/TaskProgressPapers.js" ,
                "/UserTask/TaskFeedbackOverview.js" 
            ],
            animate : true,
            params : null,
            initial : "TaskFeedbackOverview.initial"
        },

        //执行者执行任务的情况（汇报记录）
        UserTaskExecRecord : {
            id : 10593,
            url : "/UserTask/TaskExecRecord.html",
            scripts : [
                "/UserTask/TaskStatusEnum.js", 
                "/UserTask/TaskProgressPapers.js" ,
                "/UserTask/FeedbackMap.js" ,
                "/Report/PhotoRecord/ImgZoomView.js" , 
                "/UserTask/TaskExecRecord.js"
            ],
            animate : true,
            params : null,
            initial : "TaskExecRecord.initial"
        },

        //查看全部任务的进度
        UserTaskProgressAll : {
            id : 10594,
            url : "/UserTask/TaskProgressAll.html",
            scripts : [ 
                "/UserTask/TaskStatusEnum.js", 
                "/UserTask/TaskSendGrid.js",
                "/UserTask/TaskProgressPapers.js",
                "/Scripts/pager/pager.js", 
                "/UserTask/TaskProgressAll.js"
            ],
            animate : true,
            params : null,
            initial : "TaskProgressAll.initial"
        },  

        //抄送我的
        UserTaskCCMeAll : {
            id : 10595,
            url : "/UserTask/TaskCCMeAll.html",
            scripts : [ 
                "/UserTask/TaskStatusEnum.js", 
                "/UserTask/TaskSendGrid.js",
                "/UserTask/TaskProgressPapers.js",
                "/Scripts/pager/pager.js",
                "/Plugins/Custom/jquery.singleTree.js"  ,
                "/UserTask/TaskProgressAll.js"
            ],
            animate : true,
            params : ["all",true],
            initial : "TaskProgressAll.initial"
        },
        
        
//         //抄送我的
//        UserTaskCCMeAll : {
//            id : 10596,
//            url : "/UserTask/TabExcution.html",
//            scripts : [ 
//                "/UserTask/TaskStatusEnum.js",
//                "/UserTask/TabExcution.js"
//            ],
//            animate : true,
//            params : ["all",true],
//            initial : "TabExcution.initial"
//        },   
        /*end 任务- 发送到用户*/

        /*************************************溯源 start zwb add ******************************************/
		//产品生产档案管理
        proTraceability : { 
            id : 601,
            url : "/AgriProTraceability/proTraceCenter/TraceabilityRecords.html",
            scripts : [  
                "/AgriProTraceability/common.js", 
                "/Scripts/pager/pager.js",
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
                "/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Plugins/Custom/jquery.orgUsersTree.js",
                "/Plugins/Custom/jquery.singleTree.js",
                "/Plugins/Selectable/jquery-selectable.js",
                "/Scripts/jquery.validate.js",
                "/Scripts/validatebase.js",
                "/AgriProTraceability/BuildNewOrg.js",
                "/Scripts/validate-customMethods.js",
                "/AgriProTraceability/proTraceCenter/ChooseUser.js",
                "/AgriProTraceability/proTraceCenter/UserAssign.js",
                "/AgriProTraceability/proTraceCenter/TraceabilityRecords.js",
                "/AgriProTraceability/proTraceCenter/TraceabilityRecords.config.js",
                "/AgriProTraceability/proTraceCenter/TraceabilityRecords.page.js",
                "/AgriProTraceability/TraceRecords.js",
                "AgriProTraceability/EditTraceabilityDetails/EditBaseOrgInfo.js",
                "/AgriProTraceability/ProAttributes.config.js"
            ],
            animate : true  ,
            initial : "TraceabilityRecords.config.initial"
        },

        //查看溯源档案
        QueryTraceabilityDetails : { 
            id : 605,
            url : "/AgriProTraceability/TraceabilityDetails.html", 
            scripts : [
                "http://api.map.baidu.com/getscript?v=2.0&ak=wlHI48DOiuAtrQYNcLC5crVM&services=&t=20140925105932",
                "/Scripts/HighChart/stock/highstock.js",
                "/Scripts/HighChart/exporting.js",
                "/Scripts/star.js",
                "/Plugins/Slides/jquery.slides.min.js",
                "/AgriProTraceability/EditTraceabilityDetails/IDImgAttachment.js",
                "/AgriProTraceability/EditTraceabilityDetails/BaseInfoImgAttachment.js",
                "/AgriProTraceability/EditTraceabilityDetails/LincenseImgAttachment.js",
                "/AgriProTraceability/EditTraceabilityDetails/ProductCetificationImgAttachment.js",
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
			    "/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Plugins/Custom/jquery.orgUsersTree.js",
                "/Plugins/Custom/jquery.singleTree.js",
                "/Plugins/FileBase64/swfobject.js",
                "/AgriProTraceability/common.js", 
                "/AgriProTraceability/TraceRecords.js",
                "/AgriProTraceability/ProAttributes.config.js",
                "/AgriProTraceability/JScheckbox.js",
                "/AgriProTraceability/EditTraceabilityDetails/EditBaseOrgInfo.js",
                "/AgriProTraceability/EditTraceabilityDetails/EditTraceabilityArchives.js",
                "/AgriProTraceability/EditTraceabilityDetails/EditProductAttributes.js",
                "/AgriProTraceability/EditTraceabilityDetails/EditProductCetification.js",
                "/AgriProTraceability/EditTraceabilityDetails/EditTraceabilityArchives.js",
                "/AgriProTraceability/EditTraceabilityDetails/EditBuyInfo.js",
                "/AgriProTraceability/EditTraceabilityDetails/modifyPics.js",
                "/AgriProTraceability/TraceabilityDetails.js",
                "/AgriProTraceability/exploratory.config.js",
                "/Scripts/HighChart/StockChart.js", 
                "/Report/SensorReport/CustomStock.js",
                "/Report/ReportFilter.js",
                "/Scripts/pager/pager.js",
                "/AgriProTraceability/FertilizerOperation.js",
                "/AgriProTraceability/PesticideOperation.js"
            ],
            params : null,
            initial :  "exploratory.config.initial"
        },
        //新建档案
        NewArchives : { 
            id : 608,
            url : "/AgriProTraceability/newArchives.html",
            scripts : [  
                "/AgriProTraceability/EditTraceabilityDetails/BaseInfoImgAttachment.js",
                "/Plugins/FileBase64/swfobject.js",
                "/AgriProTraceability/newArchives.config.js",
                "/AgriProTraceability/proTraceCenter/SelCropsEnum.js",
                "/AgriProTraceability/common.js", 
                "/AgriProTraceability/TraceRecords.js",
                "/AgriProTraceability/proTraceCenter/StepUserAssign.js",
                "/AgriProTraceability/proTraceCenter/ChooseUser.js",
                "/AgriProTraceability/proTraceCenter/TraceabilityRecords.js",
                "/AgriProTraceability/proTraceCenter/TraceabilityRecords.page.js",
                "/AgriProTraceability/TraceFlow/TraceFlow.config.js",
                "/AgriProTraceability/EditTraceabilityDetails/EditBaseOrgInfo.js"

            ],
            animate : true,
            params : null,
            initial : "newArchives.config.initial"
        },

		/**************************************溯源 end *****************************************/

        //系统管理-组织架构
        OrgStruct : { 
            id : 192,
            url : "/AdminServer/SysManage/OrgStruct.html", 
            scripts : [  
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
                "/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Scripts/file-upload/ParentDirectoryEnum.js",
                "/Scripts/file-upload/vendor/jquery.ui.widget.js",
                "/Scripts/file-upload/load-image.min.js",
                "/Scripts/file-upload/canvas-to-blob.min.js",
                "/Scripts/file-upload/bootstrap.min.js" ,
                "/Scripts/file-upload/bootstrap-image-gallery.min.js",
                "/Scripts/file-upload/jquery.iframe-transport.js",
                "/Scripts/file-upload/jquery.fileupload.js",
                "/Scripts/file-upload/jquery.fileupload-fp.js",
                "/Scripts/file-upload/jquery.fileupload-ui.js",
                "/Scripts/pager/pager.js",
                //图片容器 
                "/Scripts/fadeslideshow.js",
                "/AdminServer/ImgGallery.js",
                "/Plugins/FileBase64/swfobject.js" ,
                "/Plugins/Custom/jquery.CropVarietyTree.js",
                "/AdminServer/UserTreeRadio.js",
                "/AdminServer/SysManage/CitySelect.js" ,

                "/Scripts/jquery.validate.js",
				"/Scripts/validatebase.js",
                "/Scripts/validate-customMethods.js",
                 "/AdminServer/SearchTree.js" ,
                "/AdminServer/SysManage/orgManagers.js",
                "/AdminServer/SysManage/OrgStruct.config.js",
                "/AdminServer/SysManage/OrgStruct.logic.js"                 
            ],
            initial : "OrgStruct.config.initial"
        }, 
        //系统管理-用户权限管理
        UserRights:{
            id:193,
            url: "/AdminServer/SysManage/UserRights.htm", 
            scripts : [
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
                "/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Plugins/Selectable/jquery-selectable.js",
                "/Scripts/jquery.validate.js",
                "/Scripts/validatebase.js", 
                "/Scripts/validate-customMethods.js",
                "/AdminServer/SearchTree.js" ,
                "/AdminServer/SysManage/userManageOrg.js",
                "/AdminServer/SysManage/UserManage.config.js",
                "/AdminServer/SysManage/UserManage.logic.js" ,
                "/AdminServer/SysManage/UserRights.config.js",
                "/AdminServer/SysManage/UserRights.logic.js"                 
            ],
            initial : "UserRights.config.initial"
        },

        //用户账号
        UserAccount : {
            id : 1000,
            url : "/Account/AccountMain.html" ,
            scripts : [
                "/Account/webUploadImg.js",
                "/Account/UserInfo.js",
                "/Scripts/jquery.base64.js",
                "/Account/ChangePassword.js",
                "/Account/AccountMain.js"
            ],
            animate : true,
            initial : "AccountMain.initial"
        },

        //通知公告
        SystemNotice : {
            id : 1010,
            url : "/SystemNotice/SystemNotice.html",
            scripts : [
                "/Scripts/pager/pager.js",
                "/SystemNotice/SystemNoticeGrid.js",
                "/Scripts/jquery.tmpl.min.js",
                "/Enums/ServiceStatus.js",
                "/SystemNotice/SystemNotice.js"
            ],
            animate : true,
            initial : "SystemNotice.initial"
        },

        // 周期任务
        StandProcess : {
            id : 1011,
            url : "/StandardProcess/StandardProcess.html",
            scripts : [
                "/Scripts/ueditor/editor_all.js",
                "/Scripts/ueditor/editor_config.js",
                "/Scripts/jquery.validate.js",
                "/Scripts/validatebase.js",
                "/Scripts/validate-customMethods.js",
                "/Scripts/DateTime/jquery-ui-timepicker-addon.js",
                "/Scripts/DateTime/jquery-ui-timepicker-zh-CN.js",

                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
                "/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Plugins/Custom/jquery.CropVarietyTree.js",
                "/Plugins/Custom/jquery.singleTree.js",
                "/Plugins/Custom/jquery.orgUsersTree.js",
                "/Plugins/Custom/jquery.prevTaskListTree.js",

                "/Plugins/Custom/jquery.InsertAtCursor.js",
                "/Plugins/WYSIWYG/jwysiwyg/jquery.wysiwyg.js",
                "/Plugins/WYSIWYG/jwysiwyg/plugins/wysiwyg.i18n.js",
                "/Plugins/WYSIWYG/jwysiwyg/i18n/lang.zh-cn.js",
                "/Plugins/WYSIWYG/jwysiwyg/plugins/wysiwyg.rmFormat.js",
                "/Plugins/FileBase64/swfobject.js",
                "/Plugins/WYSIWYG/jwysiwyg/InsertImage/InsertImage.js",
                "/Plugins/WYSIWYG/jwysiwyg/controls/wysiwyg.image.js",
                "/Plugins/WYSIWYG/jwysiwyg/controls/wysiwyg.link.js",
                "/Plugins/WYSIWYG/jwysiwyg/controls/wysiwyg.table.js",
               
                "/AdminServer/SearchTree.js",
                "/StandardProcess/Flow.logic.js",
                "/StandardProcess/Flow.config.js",
                "/StandardProcess/Content.logic.js",
                "/StandardProcess/Content.config.js",
                "/StandardProcess/Task.logic.js",
                "/StandardProcess/Task.config.js",
                "/StandardProcess/Execution.config.js",
                "/StandardProcess/Execution.logic.js",
                "/StandardProcess/FlowTaskUser.js",
                "/StandardProcess/FlowTaskListForUser.js",
                "/StandardProcess/IntelligenceTask.config.js",
                "/StandardProcess/IntelligenceTask.logic.js",
                "/StandardProcess/StandardProcess.logic.js",
                "/StandardProcess/StandardProcess.config.js",
                "/AgriProTraceability/common.js" 
            ],
            initial : "StandardProcess.config.initial"
        },

        // 流程执行进度
        FlowTaskProcess : {
            id : 1021,
            url : "/StandardProcess/FlowTaskProcess/FlowTaskProcessMain.html",
            scripts : [
                "/AdminServer/SearchTree.js",
                "/StandardProcess/Task.logic.js",
                "/StandardProcess/Task.config.js",
                "/StandardProcess/FlowTaskProcess/FlowTaskProcessMain.logic.js",
                "/StandardProcess/FlowTaskProcess/FlowTaskProcessMain.config.js",
                "/StandardProcess/FlowTaskProcess/CreateTaskPocessTable.js"
            ],
            initial : "FlowTaskProcessMain.config.initial"
        },
        // 溯源流程执行进度
        TraceFlowTaskProcess : {
            id : 1022,
            url : "/AgriProTraceability/TraceFlow/TraceFlowProcess.html",
            scripts : [
                "/AgriProTraceability/TraceFlow/TraceFlowProcess.config.js",
                "/AgriProTraceability/TraceFlow/TraceFlowPocessTable.js"

            ],
            params : null,
            initial : "TraceFlowProcess.config.initial"
        },

        VedioMonitor : {
            id : 1012,
            url : "/VedioMonitor/VedioMonitor.html",
            params : { OrgID : 1401, DeviceType : 99 },
            scripts : [
                "/Scripts/jquery.base64.js",
                "/Scripts/jquery.cookie.js",
                "/VedioMonitor/VedioMonitor.js",
                "/Plugins/WebVideo/webVideoCtrl.js"
            ],
            initial : "VedioMonitor.initial"
        },

        VedioSetting : {
            id : 1013,
            url : "/VedioMonitor/VedioMonitor.html",
            params : null,
            scripts : [
                "/Scripts/jquery.base64.js",
                "/Scripts/jquery.cookie.js",
                "/VedioMonitor/VedioSetting.js"
            ],
            initial : "VedioMonitor.initial"
        },

        //执行力报表
        ReportExcution : { 
            id : 24,
			url : "/Report/ReportExcution.htm", 
            scripts : [  
                "/Plugins/ZTree/jquery.ztree.core-3.5.min.js",
                "/Plugins/ZTree/jquery.ztree.excheck-3.5.min.js",
                "/Scripts/HighChart/stock/highstock.js",
               "/Scripts/HighChart/highcharts-more.js",
                "/Scripts/HighChart/PolarChart_excution.js",  
                "/AdminServer/SearchTree.js" ,
                "/MonitorCenter/DeviceTypeEnum.js",
                "/Report/ReportMain.logic.js" , 
                "/Account/AccountGlobalInfo.js",
                "/Report/ComprehensiveRepor/ExecutionAreaReport.js",
                "/Report/ReportExcution.config.js",  
                "/Report/ReportExcution.logic.js"               
            ],
            animate : true,
            params : null,
            initial : "ReportExcution.config.initial" //for demo temperaly 
        }, 
		
        //根据id load 指定的内容
        loadById : function(target,id,hasParams){
            $.each(DynamicPages,function(key,value){
                if (typeof(value) == "object" && value.id == id){
                    if (hasParams){
                        value.params = Base.sessionStorage.getSession(SessionNameEnums.stateParamsName);
                    }
                    Transfer.reload(target,value);
                    return false; //break;
                }
            });
        } ,

        findById : function(id){
            var result = null;

            $.each(DynamicPages,function(index,item){
                if (typeof(item) == "object" && item.id == id){
                    result = item;
                    return false; //break
                }
            });

            return result;
        },
        findByIdandSetParam : function(id,value){
            var result = null;

            $.each(DynamicPages,function(index,item){
                if (typeof(item) == "object" && item.id == id){
                    result = item;
                    item.params=value;
                    return false; //break
                }
            });

            return result;
        }

    }
    
    //单个设备报表--图像采集(弹窗) 
    var html = DynamicPages.ReportPhotos;
    DynamicPages.ReportPhotosDialog = { 
        id : 400,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportPhotos.config.initialDialogReport",
        loadData : "ReportPhotos.logic.getPhotos"  
    }  

    //单个设备报表--空气温度记录
    var html = DynamicPages.ReportEnviromentDegree;
    DynamicPages.ReportEnviromentDegreeDialog = { 
        id : 410,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportEnviromentDegree.config.initialDialogReport",
        loadData : "ReportEnviromentDegree.logic.defaultLoad" 
    }  

    //单个设备报表--空气湿度度记录
    var html = DynamicPages.ReportEnviromentHumidity;
    DynamicPages.ReportEnviromentHumidityDialog = { 
        id : 420,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportEnviromentHumidity.config.initialDialogReport",
        loadData : "ReportEnviromentHumidity.logic.defaultLoad"  
    }  

    //单个设备报表--土壤温度记录
    var html = DynamicPages.ReportSoilDegree;
    DynamicPages.ReportSoilDegreeDialog = { 
        id : 430,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportSoilDegree.config.initialDialogReport",
        loadData : "ReportSoilDegree.logic.defaultLoad"   
    }  

    //单个设备报表--土壤水分记录
    var html = DynamicPages.ReportSoilHumidity;
    DynamicPages.ReportSoilHumidityDialog = { 
        id : 440,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportSoilHumidity.config.initialDialogReport",
        loadData : "ReportSoilHumidity.logic.defaultLoad"  
    } 
    
    //单个设备报表--光照度记录
    var html = DynamicPages.ReportIlluminationDegree;
    DynamicPages.ReportIlluminationDegreeDialog = { 
        id : 450,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "IlluminationReport.initialTypeReportDialog" 
    } 
    
    //单个设备报表--CO2浓度记录
    var html = DynamicPages.ReportCO2;
    DynamicPages.ReportCO2Dialog = { 
        id : 460,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportCO2.config.initialDialogReport",
        loadData : "ReportCO2.logic.defaultLoad"   
    }  
    
    //单个设备报表--流量记录
    var html = DynamicPages.ReportFlow;
    DynamicPages.ReportFlowDialog = { 
        id : 470,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "FlowReport.initialDialogReport"  
    } 
    
    //单个设备报表--降雨量记录
    var html = DynamicPages.ReportRainfall;
    DynamicPages.ReportRainfallDialog = { 
        id : 480,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "RainfallReport.initialDialogReport" 
    } 
    
    //单个设备报表--风速记录
    var html = DynamicPages.ReportWind;
    DynamicPages.ReportWindDialog = { 
        id : 490,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportWind.config.initialDialogReport",
        loadData : "ReportWind.logic.defaultLoad" 
    } 

    //单个设备报表--降温记录
    var html = DynamicPages.ReportSprayRecord;
    DynamicPages.ReportSprayRecordDialog = { 
        id : 500,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportSprayRecord.config.initialDialogReport",
        loadData : "ReportSprayRecord.logic.defaultLoad" 
    } 

    //单个设备报表--排风记录
    var html = DynamicPages.ReportExhaustRecord;
    DynamicPages.ReportExhaustRecordDialog = { 
        id : 510,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportExhaustRecord.config.initialDialogReport",
        loadData : "ReportExhaustRecord.logic.defaultLoad" 
    }  
    
    //单个设备报表--灌溉记录
    var html = DynamicPages.ReportIrrigationRecord;
    DynamicPages.ReportIrrigationRecordDialog = { 
        id : 520,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportIrrigationRecord.config.initialDialogReport",
        loadData : "ReportIrrigationRecord.logic.defaultLoad" 
    }  
    
    //单个设备报表--声光报警记录
    var html = DynamicPages.ReportSoundLightAlarm;
    DynamicPages.ReportSoundLightAlarmDialog = { 
        id : 530,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportSoundLightAlarm.config.initialDialogReport",
        loadData : "ReportSoundLightAlarm.logic.defaultLoad" 
    } 

    
    //单个设备报表--照明记录
    var html = DynamicPages.ReportLightRecord;
    DynamicPages.ReportLightRecordDialog = { 
        id : 540,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportLightRecord.config.initialDialogReport",
        loadData : "ReportLightRecord.logic.defaultLoad" 
    }  
    
    //单个设备报表--加湿记录
    var html = DynamicPages.ReportWetRecord;
    DynamicPages.ReportWetRecordDialog = { 
        id : 550,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportWetRecord.config.initialDialogReport",
        loadData : "ReportWetRecord.logic.defaultLoad" 
    } 

     //风频统计
    var html = DynamicPages.ReportWindDirection;
    DynamicPages.ReportWindDirectionDialog = {
        id : 552,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "WindDirectionReport.initialDialogReport" 
    }

     //单个设备报表--压力记录
    var html = DynamicPages.ReportPlessure;
    DynamicPages.ReportPlessureDialog = { 
        id : 554,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ReportPlessure.config.initialDialogReport",
        loadData : "ReportPlessure.logic.defaultLoad"   
    } 

     //单个设备报表--气压记录
    var html = DynamicPages.ReportAirPlessure;
    DynamicPages.ReportAirPlessureDialog = { 
        id : 722,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "AirPlessureReport.initialDialogReport" 
    } 

     //单个设备报表--液位记录
    var html = DynamicPages.ReportLiquidLevel;
    DynamicPages.ReportLiquidLevelDialog = { 
        id : 723,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "LiquidLevelReport.initialDialogReport" 
    }  
    
     //单个设备报表--酸碱度记录
    var html = DynamicPages.ReportPH;
    DynamicPages.ReportPHDialog = { 
        id : 724,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "PHReport.initialDialogReport" 
    } 
    
     //单个设备报表--硫化氢含量
    var html = DynamicPages.ReportH2S;
    DynamicPages.ReportH2SDialog = { 
        id : 725,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "H2SReport.initialDialogReport" 
    }  
    
     //单个设备报表--氧含量
    var html = DynamicPages.ReportO2Percent;
    DynamicPages.ReportO2PercentDialog = { 
        id : 726,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "O2PercentReport.initialDialogReport" 
    } 
    
     //单个设备报表--二氧化碳含量
    var html = DynamicPages.ReportCO2Percent;
    DynamicPages.ReportCO2PercentDialog = { 
        id : 727,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "CO2PercentReport.initialDialogReport" 
    } 
    
     //单个设备报表--甲烷含量
    var html = DynamicPages.ReportCH4Percent;
    DynamicPages.ReportCH4PercentDialog = { 
        id : 728,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "CH4PercentReport.initialDialogReport" 
    } 
    
    //单个设备报表--搅拌机
    var html = DynamicPages.ReportMixRecord;
    DynamicPages.ReportMixRecordDialog = { 
        id : 729,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "MixReport.initialDialogReport" 
    }   
    
    //单个设备报表--水泵
    var html = DynamicPages.ReportPumpRecord;
    DynamicPages.ReportPumpRecordDialog = { 
        id : 730,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "PumpReport.initialDialogReport" 
    }  
    
    //单个设备报表--输送机
    var html = DynamicPages.ReportConveyRecord;
    DynamicPages.ReportConveyRecordDialog = { 
        id : 731,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ConveyReport.initialDialogReport" 
    } 
    
    //单个设备报表--风机
    var html = DynamicPages.ReportFanRecord;
    DynamicPages.ReportFanRecordDialog = { 
        id : 732,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "FanReport.initialDialogReport" 
    } 
    
    //单个设备报表--破碎机
    var html = DynamicPages.ReportCrushRecord;
    DynamicPages.ReportCrushRecordDialog = { 
        id : 733,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "CrushReport.initialDialogReport" 
    } 
    
    //单个设备报表--抓料机
    var html = DynamicPages.ReportGrabFeedRecord;
    DynamicPages.ReportGrabFeedRecordDialog = { 
        id : 734,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "GrabFeedReport.initialDialogReport" 
    } 
    
    //单个设备报表--破壳机
    var html = DynamicPages.ReportBrokenShellRecord;
    DynamicPages.ReportBrokenShellRecordDialog = { 
        id : 735,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "BrokenShellReport.initialDialogReport" 
    } 
    
    //单个设备报表--电机
    var html = DynamicPages.ReportMotorRecord;
    DynamicPages.ReportMotorRecordDialog = { 
        id : 736,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "MotorReport.initialDialogReport" 
    } 
    
    //单个设备报表--内遮荫
    var html = DynamicPages.ReportShadeInRecord;
    DynamicPages.ReportShadeInRecordDialog = { 
        id : 737,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ShadeInReport.initialDialogReport" 
    } 
    
    //单个设备报表--外遮阳
    var html = DynamicPages.ReportShadeOutRecord;
    DynamicPages.ReportShadeOutRecordDialog = { 
        id : 738,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ShadeOutReport.initialDialogReport" 
    } 
    
    //单个设备报表--开窗
    var html = DynamicPages.ReportOpenWindowRecord;
    DynamicPages.ReportOpenWindowRecordDialog = { 
        id : 739,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "OpenWindowReport.initialDialogReport" 
    }  

     //单个设备报表--阀门
    var html = DynamicPages.ReportValveFlux;
    DynamicPages.ReportOpenValveFluxRecordDialog = { 
        id : 740,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "ValveFluxReport.initialTypeReportDialog" 
    }  

      //单个设备报表--实时流量
    var html = DynamicPages.ReportRealTimeFlow;
    DynamicPages.ReportRealTimeFlowDialog = { 
        id : 741,
        url : html.url, 
        excludeSelector: ".dialogExclude",
        scripts : html.scripts,
        animate : html.animate,
        params : null,
        initial : "RealTimeFlowReport.initialDialogReport" 
    } 

    //单个溯源档案页面
    var html = DynamicPages.QueryTraceabilityDetails; 
    DynamicPages.QueryTraceabilityDetailsDialog = { 
        id : 742, 
        url : html.url, 
        excludeSelector: ".dialogExclude", 
        scripts : html.scripts, 
        animate : html.animate, 
        params : null, 
        initial : html.initial 
    }  

    //单个设备报表--页面湿度
    var html = DynamicPages.ReportPageHumidity; 
    DynamicPages.ReportPageHumidityDialog = { 
        id : 744, 
        url : html.url, 
        excludeSelector: ".dialogExclude", 
        scripts : html.scripts, 
        animate : html.animate, 
        params : null, 
        initial : "ReportPageHumidity.config.initialDialogReport",
        loadData : "ReportPageHumidity.logic.defaultLoad" 
    }  

    //单个设备报表--噪音
    var html = DynamicPages.ReportNoise; 
    DynamicPages.ReportNoiseDialog = { 
        id : 745, 
        url : html.url, 
        excludeSelector: ".dialogExclude", 
        scripts : html.scripts, 
        animate : html.animate, 
        params : null, 
        initial : "ReportNoise.config.initialDialogReport",
        loadData : "ReportNoise.logic.defaultLoad" 
    }  

    //单个设备报表--红外
    var html = DynamicPages.ReportInfrared; 
    DynamicPages.ReportInfraredDialog = { 
        id : 746, 
        url : html.url, 
        excludeSelector: ".dialogExclude", 
        scripts : html.scripts, 
        animate : html.animate, 
        params : null, 
        initial : "ReportInfrared.config.initialDialogReport",
        loadData : "ReportInfrared.logic.defaultLoad" 
    }  

    //单个设备报表--一氧化碳含量
    var html = DynamicPages.ReportCO;
    DynamicPages.ReportCODialog = {
        id: 747,
        url: html.url,
        excludeSelector: ".dialogExclude",
        scripts: html.scripts,
        animate: html.animate,
        params: null,
        initial: "ReportCO.config.initialDialogReport",
        loadData: "ReportCO.logic.defaultLoad"
    }


    //单个设备报表--二氧化氮含量
    var html = DynamicPages.ReportNO2;
    DynamicPages.ReportNO2Dialog = {
        id: 748,
        url: html.url,
        excludeSelector: ".dialogExclude",
        scripts: html.scripts,
        animate: html.animate,
        params: null,
        initial: "ReportNO2.config.initialDialogReport",
        loadData: "ReportNO2.logic.defaultLoad"
    }

    //单个设备报表--二氧化硫含量
    var html = DynamicPages.ReportSO2;
    DynamicPages.ReportSO2Dialog = {
        id: 749,
        url: html.url,
        excludeSelector: ".dialogExclude",
        scripts: html.scripts,
        animate: html.animate,
        params: null,
        initial: "ReportSO2.config.initialDialogReport",
        loadData: "ReportSO2.logic.defaultLoad"
    }

    //单个设备报表--粉尘含量
    var html = DynamicPages.ReportDust;
    DynamicPages.ReportDustDialog = {
        id: 750,
        url: html.url,
        excludeSelector: ".dialogExclude",
        scripts: html.scripts,
        animate: html.animate,
        params: null,
        initial: "ReportDust.config.initialDialogReport",
        loadData: "ReportDust.logic.defaultLoad"
    }

    //单个设备报表--地磅数据
    var html = DynamicPages.ReportTrackscale;
    DynamicPages.ReportTrackscaleDialog = {
        id: 751,
        url: html.url,
        excludeSelector: ".dialogExclude",
        scripts: html.scripts,
        animate: html.animate,
        params: null,
        initial: "ReportTrackscale.config.initialDialogReport",
        loadData: "ReportTrackscale.logic.defaultLoad"
    }

    //单个设备报表--电导率
    var html = DynamicPages.ReportConductivity;
    DynamicPages.ReportConductivityDialog = {
        id: 752,
        url: html.url,
        excludeSelector: ".dialogExclude",
        scripts: html.scripts,
        animate: html.animate,
        params: null,
        initial: "ReportConductivity.config.initialDialogReport",
        loadData: "ReportConductivity.logic.defaultLoad"
    }

    //单个设备报表--溶解氧
    var html = DynamicPages.ReportOxygen;
    DynamicPages.ReportOxygenDialog = {
        id: 753,
        url: html.url,
        excludeSelector: ".dialogExclude",
        scripts: html.scripts,
        animate: html.animate,
        params: null,
        initial: "ReportOxygen.config.initialDialogReport",
        loadData: "ReportOxygen.logic.defaultLoad"
    }

    //单个设备报表--三维量方
    var html = DynamicPages.ReportCube;
    DynamicPages.ReportCubeDialog = {
        id: 754,
        url: html.url,
        excludeSelector: ".dialogExclude",
        scripts: html.scripts,
        animate: html.animate,
        params: null,
        initial: "ReportCube.config.initialDialogReport",
        loadData: "ReportCube.logic.defaultLoad"
    }

    //单个设备报表--开关
    var html = DynamicPages.ReportOpenCloseRecord;
    DynamicPages.ReportOpenCloseRecordDialog = {
        id: 755,
        url: html.url,
        excludeSelector: ".dialogExclude",
        scripts: html.scripts,
        animate: html.animate,
        params: null,
        initial: "OpenCloseReport.initialDialogReport"
    }

    //单个设备报表--麦克风报表
    var html = DynamicPages.ReportVoiceIntercomRecord;
    DynamicPages.ReportVoiceIntercomRecordDialog = {
        id: 756,
        url: html.url,
        excludeSelector: ".dialogExclude",
        scripts: html.scripts,
        animate: html.animate,
        params: null,
        initial: "VoiceIntercomRecord.initialDialogReport"
    }
 }())