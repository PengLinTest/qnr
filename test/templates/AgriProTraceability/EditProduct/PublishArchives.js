var PublishArchives;
if (!PublishArchives) {
    PublishArchives = {};
}
PublishArchives = {
    i: 0,
    j: 0,
    init: function () {
        TransferloadUser.TraceabilityInfo = Base.session.getLoginUser();
        if (TransferloadUser.TraceabilityInfo) {
            $(".loginuser").html(TransferloadUser.TraceabilityInfo.UserName);
            $(".Unlogin").hide();
            $(".Hadlogin").show();
        }
        else {
            window.location = "?action=Index";
            return;
        }

        UserIDApplyUpload.initButton("upload_IDImg", $(".IDImg"), '<img src="{0}" width="88" height="88">');  //初始化基本信息的上传图片
        //初始化图片裁剪中的上传图片
        BaseInfoImgAttachment.initButton("Upload_BaseInfoImgAttachment", $(".BaseInfoImgAttachment"), '<dd class="imagedd"><p class="imgAttachment" style="cursor: pointer"><img src="{0}"></p></dd>');
        $("#GrowImgDiv").empty();
        var html = '<div class="item clearfix"> <div class="col-right aaa"> <img src="{0}" width="286" height="207"></div>'
                   + '<div class="col-left"><ul class="form-group"><li class="form-item"> <label class="form-label"> 拍照日期</label>'
                   + '<input type="text" value="" class="form-text GrowImgTime"  name="username" placeholder="" /></li>'
                   + '<li class="form-item"><label class="form-label"> 地理位置</label>'
                   + '<input type="text" value="" class="form-text GrowAddr"  name="username" placeholder=""> </li><li class="form-item">'
                   + '<label class="form-label"> 图片说明</label><textarea name="basic" class="form-text col19 Growintro" rows="7"></textarea>'
                   + '</li></ul></div><span class="opration DeleteImagCard"><a href="javascript:"><i class="icon-recycle "></i></a></span></div>'
        PublishUploadGrowImg.initButton("UploadGrowImg", $("#GrowImgDiv"), html);  //初始化生长周期的上传图片

        $("#TitleName").html("新建产品档案");

        PublishArchives.getProCertifiedType(); //初始化认证下拉数据
        //PublishArchives.GetDetectionType(); //初始化检测类型下拉数据
        PublishArchives.GetCrops(); //获取作物
        PubishSaveProduct.ProductRecordData = Base.sessionStorage.getSession("ProductRecord");
        if (PubishSaveProduct.ProductRecordData) {
            $("#TitleName").html("编辑产品档案");
            setTimeout("PubishSaveProduct.GetProductRecordDetailData()", 1000);//等待半秒，初始化下拉框数据
            PublishArchives.SubmitRecord(PubishSaveProduct.ProductRecordData); //提交档案
        }else{
            PublishArchives.ProductIntroEditor = new baidu.editor.ui.Editor();
            PublishArchives.ProductIntroEditor.render('ProductIntro');

            PublishArchives.CompanyIntroEditor = new baidu.editor.ui.Editor();
            PublishArchives.CompanyIntroEditor.render('CompanyIntro');  
            PublishArchives.SubmitRecord(); //提交档案
        }
        PublishArchives.initClick();
    },
    SubmitRecord: function (data) {
        $(".SubmitRecord").unbind("click").click(function () {
            PubishSaveProduct.SaveRecord(data); //提交档案
        });
    },
    initClick: function () {

        $(".BackUserCenter").unbind("click").click(function () {
            window.location = "?action=UserCenter";
        });
        $("#selCrops").unbind("change").change(function () {
            var value = $(this).val();
            PublishArchives.GetCropVariety(value, "新增");
        });
        //新增肥料
        $(".newManure").unbind("click").click(function () {
            var html = '<tr><td><input type="text" value="" style="width:85px" class="form-text ManureDateTime"  placeholder="2000-01-01"/></td>'
                        +'<td><input type="text" value="" style="width:85px" class="form-text ManureTypetxt"  placeholder="化肥"/></td>'
                        + '<td><input type="text" value="" style="width:150px" class="form-text ManureName"  placeholder="化肥名称"/></td>'
                        + '<td><input type="text" value="" style="width:60px" class="form-text ManureDosage"  placeholder="10 L/m²"/></td>'
                        + '<td><input type="text" value="" style="width:70px" class="form-text ManureBrand" placeholder="化肥品牌"/></td>'
                        + '<td><input type="text" value="" style="width:180px" class="form-text ManureCompany"  placeholder="化肥供应商"/></td>'
                      + '<td> <span class="opration"><a href="javascript:"><i class="icon-recycle DeleteManure"></i></a></span></td></tr>';
            $("#ManureTable").append(html);

            $("#ManureTable").children().last().find(".ManureDateTime").datepicker({
                dateFormat: 'yy-mm-dd',
                changeMonth: true,
                changeYear: true
            });

            $(".ManureDateTime").watermark("2000-01-01");
            $(".ManureTypetxt").watermark("化肥");
            $(".ManureName").watermark("化肥名称");
            $(".ManureDosage").watermark("10 L/m²");
            $(".ManureBrand").watermark("化肥品牌");
            $(".ManureCompany").watermark("化肥供应商");

            if ($("#ManureTable").children().length > 0) {
                $("#ManureTable").show();
                $(".ManureTableTfoot").hide()
            } else {
                $(".ManureTableTfoot").show()
                $("#ManureTable").hide();
            }
            $(".DeleteManure").unbind("click").click(function () {
                $(this).parents('tr').first().remove();
                if ($("#ManureTable").children().length > 0) {
                    $("#ManureTable").show();
                    $(".ManureTableTfoot").hide()
                } else {
                    $(".ManureTableTfoot").show()
                    $("#ManureTable").hide();
                }
            });
        });
        //新增农药
        $(".btnNewPesticide").unbind("click").click(function () {
            var html = '<tr><td><input type="text" value="" style="width:85px" class="form-text PesticideDateTime"  placeholder="2000-01-01"></td>'
                        +'<td><input type="text" value="" style="width:150px" class="form-text PesticideName" placeholder="农药名称"></td>'
                        + '<td><input type="text" value="" style="width:60px" class="form-text PesticideDosage"   placeholder="用量"></td>'
                        + '<td><input type="text" value="" style="width:70px" class="form-text PesticideBrand"   placeholder="农药品牌"></td>'
                        + '<td><input type="text" value="" style="width:180px" class="form-text PesticideCompany"  placeholder="农药供应商"></td>'
                      + '<td> <span class="opration"><a href="javascript:"><i class="icon-recycle DeletePesticeide"></i></a></span></td></tr>';
            $("#PesticideTable").append(html);

            $("#PesticideTable").children().last().find(".PesticideDateTime").datepicker({
                dateFormat: 'yy-mm-dd',
                changeMonth: true,
                changeYear: true
            });

            $(".PesticideDateTime").watermark("2000-01-01");
            $(".PesticideName").watermark("农药名称");
            $(".PesticideDosage").watermark("用量");
            $(".PesticideBrand").watermark("农药品牌");
            $(".PesticideCompany").watermark("农药供应商");

            if ($("#PesticideTable").children().length > 0) {
                $("#PesticideTable").show();
                $(".PesticideTableTfoot").hide()
            } else {
                $(".PesticideTableTfoot").show()
                $("#PesticideTable").hide();
            }
            $(".DeletePesticeide").unbind("click").click(function () {
                $(this).parents('tr').first().remove();
                if ($("#PesticideTable").children().length > 0) {
                    $("#PesticideTable").show(); $(".PesticideTableTfoot").hide()

                } else {
                    $(".PesticideTableTfoot").show(); $("#PesticideTable").hide();

                }
            });
        });

        //新增认证
        PubilshUploadCertificate.Files = [];
        $(".btnNewCertificate").unbind("click").click(function () {
            var html = String.format('<div style="height: 250px;" class="item clearfix" id="item_{0}"><ul class="form-group"><li class="form-item form-item-inline"><label class="form-label"> 认证类型</label>'
                      + '<select name="select"  class="form-text form-text-block CertifiedSeleted"></select></li><li class="form-item form-item-inline even">'
                      + '<label class="form-label"> 颁证日期</label><input type="text" value="" class="form-text form-text-block CertifiedDate" '
                      + 'placeholder="填写颁证日期"></li><li class="form-item form-item-inline"> <label class="form-label"> 证书编号</label>'
                      + '<input type="text" value="" class="form-text form-text-block CertifiedNo"  placeholder="填写证书编号"> </li>'
                      + '<li class="form-item form-item-inline even"><label class="form-label"> 有效日期</label><input type="text" value=""'
                      + 'class="form-text form-text-block CertifiedValidDate"  placeholder="填写有效日期"> </li> <li class="form-item form-item-inline">'
                      + '<label class="form-label"> 颁证机构</label> <input type="text" value="" class="form-text form-text-block CertifiedOrg"  name="username"'
                      + 'placeholder="填写颁证机构名称"></li><li style="position: absolute;top: 135px;" class="form-item ImgContainer{0}">'
                      + '<span id="Certificateidimg' + PublishArchives.i + '"><img src="templates/images/trace/upload-img03.jpg" width="50" height="50"></span>'
                      + '</li><li style="position: absolute;top: 200px;" class="form-item"><label class="form-label"> 证书图片</label>'
                      + '<p><a title="添加图片" href="javascript:" class="btn-addAttachment"><i class="icon icon-img"></i><object class="UploadCertificate_{0}" style="width: 150px;">'
                      + '</object> </a></p></li></ul> <span class="opration"><a href="javascript:">'
                      + '<i class="icon-recycle DeleteCertificate"></i></a></span></div>', PublishArchives.i);
            $("#CertificateDiv").append(html);

            $("#CertificateDiv").children().last().find(".CertifiedSeleted").empty();
            $("#CertificateDiv").children().last().find(".CertifiedSeleted").append(PublishArchives.CertifiedTypedl);
            PublishArchives.initDateTime();      //初始化时间控件
            PubilshUploadCertificate.Files["UploadCertificate_" + PublishArchives.i] = [];
            PubilshUploadCertificate.initButton("UploadCertificate_" + PublishArchives.i, ".ImgContainer", '<span><img src="{0}" width="50" height="50"><s class="dddel dddelCer"></s></span>');  //初始化基本信息的上传图片
            PublishArchives.i++;
            $(".DeleteCertificate").unbind("click").click(function () {
                $(this).parents('div').first().remove();
            });
        });


        //新增农残检测
        PublishUploadDetection.Files = [];
        $(".btnNewDetection").unbind("click").click(function () {
            var html = String.format('<div style="height: 250px;" class="item clearfix" id="item_{0}"><ul class="form-group"><li class="form-item form-item-inline"><label class="form-label"> 检测类型</label>'
                      + '<select name="select"  class="form-text form-text-block DetectionSeleted"></select></li><li class="form-item form-item-inline even">'
                      + '<label class="form-label"> 检测日期</label><input type="text" value="" class="form-text form-text-block DetectionDate" '
                      + 'placeholder="填写检测日期"></li><li class="form-item form-item-inline"> <label class="form-label"> 检测员</label>'
                      + '<input type="text" value="" class="form-text form-text-block DetectionUser"  placeholder="填写检测员姓名"> </li><li class="form-item form-item-inline even">'
                      + '<label class="form-label"> 检测值</label> <input type="text" value="" class="form-text form-text-block DetectionValue"  name="username"'
                      + 'placeholder="填写检测值"><span class="unit"></span></li><li class="form-item form-item-inline"> <label class="form-label"> 标准</label>'
                      +'<span class="IspassU"></span></li>'
                      + '<li class="form-item form-item-block"><label class="form-label"> 检测图片</label>'
                      + '<p class="ImgDeContainer{0} mt10"><span id="DetectionImg{0}"><img src="templates/images/trace/upload-img03.jpg" width="50" height="50"></span></p><p class="mt10"><a title="添加图片" href="javascript:" class="btn-addAttachment"><i class="icon icon-img"></i><object class="UploadDetection_{0}" style="width: 150px;">'
                      + '</object> </a></p></li></ul> <span class="opration"><a href="javascript:">'
                      + '<i class="icon-recycle DeleteDetectionI"></i></a></span></div>', PublishArchives.j);
            $("#DetectionDiv").append(html);

            $("#DetectionDiv").children().last().find(".DetectionSeleted").empty();
            $("#DetectionDiv").children().last().find(".DetectionSeleted").append(PublishArchives.DetectionTypedl);
            $("#DetectionDiv").children().last().find(".DetectionSeleted").unbind("change").change(function(){
                var selectoption=$(this).find("option:selected");
                var unit=selectoption.data("unit");
                $(this).parents("ul").first().find(".unit").html(unit);
                var Condition=selectoption.data("condition");
                var standarvalue=selectoption.data("standarvalue");
                var value=$(this).parents("ul").first().find(".DetectionValue").val();
                var ispass=PublishArchives.returnCpmpare(value,standarvalue,Condition)+"("+Condition+standarvalue+" "+unit+")";
                $(this).parents("ul").first().find(".IspassU").html(ispass);
            })
            $("#DetectionDiv").children().last().find(".DetectionValue").unbind("keyup").keyup(function(){
                 var value=$(this).val();
                 var Condition= $(this).parents("ul").first().find(".DetectionSeleted").find("option:selected").data("condition");
                 var standarvalue= $(this).parents("ul").first().find(".DetectionSeleted").find("option:selected").data("standarvalue");
                if(standarvalue){
                   var ispass=PublishArchives.returnCpmpare(value,standarvalue,Condition);
                   $(this).parents("ul").first().find(".IspassU").html(ispass);
                }else{
                    ZENG.msgbox.show("未选择检测类型", 4, 2000);
                }
                
            });
            $("#DetectionDiv").children().last().find(".DetectionDate").datepicker({
                dateFormat: 'yy-mm-dd',
                changeMonth: true,
                changeYear: true
             });      //初始化时间控件
            PublishUploadDetection.Files["UploadDetection_" + PublishArchives.j] = [];
            PublishUploadDetection.initButton("UploadDetection_" + PublishArchives.j, ".ImgDeContainer", '<span><img src="{0}" width="50" height="50"><s class="dddel dddelDetection"></s></span>');  //初始化基本信息的上传图片
            PublishArchives.j++;
            $(".DeleteDetectionI").unbind("click").click(function () {
                $(this).parents('div').first().remove();
            });
        });
        
        $("#dLabelbuyinfo").unbind("click").click(function () {
            if ($(this).parent().hasClass("open")) {
                $(this).parent().removeClass("open");
            }
            else {
                $(this).parent().addClass("open");
            }
        });

        $(".btnNewInternetLink").unbind("click").click(function () {
            var html = '<p class="mt10"> <input type="text" value="" class="form-text IternetShoplink"  name="IternetShoplink" placeholder="填写产品的网店销售链接"/>'
                    + '<span class="opration"><a href="javascript:"><i class="icon-recycle DelIternetShoplink"></i></a> </span></p>'
            $(".IternetShopLi").append(html);
            $(".DelIternetShoplink").unbind("click").click(function () {
                $(this).parents('p').first().remove();
            })
        });
        $(".btn_uploadPic").unbind("click").click(function(){
        	PublishArchives.TraceRecords_ImgCutDialog();
        });
        $(".DelIternetShoplink").unbind("click").click(function () {
            $(this).parents('p').first().remove();
        })
        $(".btnNewShopAddr").unbind("click").click(function () {
            var html = ' <p class="mt10"> <input type="text" value="" class="form-text ShopAddr"  name="ShopAddr" placeholder="填写实体店地址"/>'
                    + '<span class="opration"><a href="javascript:"><i class="icon-recycle DelShopAddr"></i></a> </span></p>'
            $(".ShopAddrLi").append(html);
            $(".DelShopAddr").unbind("click").click(function () {
                $(this).parents('p').first().remove();
            })
        });
        $(".DelShopAddr").unbind("click").click(function () {
            $(this).parents('p').first().remove();
        })
        $(".btnNewSalerinfo").unbind("click").click(function () {
            var html = ' <p class="mt10"><span class="fr"><label class="col-name">联系人电话</label><input type="text" value="" class="form-text form-text-block SalerPhone" '
                       + 'name="SalerName" placeholder="填写联系人电话 " style="width:210px"></span><span><label class="col-name">联系人</label>'
                    + '<input type="text" value="" class="form-text SalerName"   placeholder="填写联系人姓名" style="width:150px">'
                    + '</span> <span class="opration"><a href="javascript:"><i class="icon-recycle DelSalerinfo"></i></a> </span> </p>';
            $(".SalerinfoLi").append(html);
            $(".DelSalerinfo").unbind("click").click(function () {
                $(this).parents('p').first().remove();
            })
        });
        $(".DelSalerinfo").unbind("click").click(function () {
            $(this).parents('p').first().remove();
        })

    },
    returnCpmpare:function(value,standardvalue,Symbol){
         var ispass="";
         switch (Symbol)
            {
                case "<":
                    Symbol=value-standardvalue<0?"符合标准":"不符合标准";
                    break;
                case "<=":
                    Symbol=value-standardvalue<=0?"符合标准":"不符合标准";
                    break;
                case ">":
                    Symbol=value-standardvalue>0?"符合标准":"不符合标准";
                    break;
                case ">=":
                    Symbol=value-standardvalue>=0?"符合标准":"不符合标准";
                    break;
                case "=":
                    Symbol=value==standardvalue?"符合标准":"不符合标准";
                    break;
            }
          return Symbol;
    },
    initDateTime: function () {
        $("#CertificateDiv").children().last().find(".CertifiedValidDate").datepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true
        });
        $("#CertificateDiv").children().last().find(".CertifiedDate").datepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true
        });
    },
    //获取认证类型
    getProCertifiedType: function (Onoff) {
        $.ajax({
            url: "?action=UserCenterEditProduct",
            type:"post",
            data: {
                htmlMethod: "getProductCertiType",
            },
            dataType:"json",
            success: function (response) {
                if (response && response.length) {
                    var jsonData = response;
                    PublishArchives.CertifiedTypedl = "";
                    PublishArchives.CertifiedTypedl += "<option value='-1'>请选择证书类型</option>";
                    for (var i = 0; i < jsonData.length; i++) {
                        PublishArchives.CertifiedTypedl += "<option value='" + jsonData[i].certi_id + "'>" + jsonData[i].certi_desc + "</option>";
                    }
                }
            }
        });
    },
//    //获取检测类型
//     GetDetectionType: function () {
//        Service.post({
//            url: "/TraceabilityService.svc/GetDetectionType",
//            params: {
//                PageNum:1,
//                PageSize:9999
//            },
//            success: function (response) {
//                if (response && response.Items) {
//                    var jsonData = response.Items;
//                    PublishArchives.DetectionTypedl = "";
//                    PublishArchives.DetectionTypedl += "<option value='-1'>请选择检测类型</option>";
//                    for (var i = 0; i < jsonData.length; i++) {
//                        PublishArchives.DetectionTypedl += "<option data-unit='"+jsonData[i].Unit+"' data-condition='"+jsonData[i].Condition+"' data-standarvalue='"
//                                            +jsonData[i].StandardValue+"' value='" + jsonData[i].DetectionTypeId 
//                                            + "'>" + jsonData[i].DetectionTypeName + "</option>";
//                    }
//                }
//            }
//        });
//    },
    GetCrops: function () {
        $.ajax({
            url: "?action=Crop",
            type:"post",
            data: {
            	htmlMethod:"getTraceDataCrop",
            },
            dataType:"json",
            success: function (response) {
                $("#selCrops").empty();
                if (response && response.length) {
                    PublishArchives.dlCropList = "";
                    PublishArchives.dlCropList += "<option value='-1'>请选择作物</option>";
                    for (var i = 0,len = response.length; i < len; i++) {
                        PublishArchives.dlCropList += "<option value='" + response[i].crops_id + "'>" + response[i].crops_desc + "</option>";
                    }
                    $("#selCrops").append(PublishArchives.dlCropList);
                }
            }
        });
    },
    // <summary>
    /// 获取品种列表
    /// </summary>
    /// <param name="selectedValue">当前选中的值</param>
    /// <param name="data">编辑状态下的数据</param>
    /// <param name="useType">用途</param>
    /// <param name="orgid">组织ID</param>
    /// <param name="cropid">作物ID</param>
    /// <returns></returns>
    GetCropVariety: function (cropid,CropVarietyID) {
        $.ajax({
            url: "?action=Crop",
            type:"post",
            data:{
            	htmlMethod:"getVarietiesList",
            	cropID: cropid
            },
            dataType:"json",
            success: function (response) {
                $("#txtCropVariety").empty();
                if (response.result) {
                    var jsonData = response.data;
                    var dlCropList = "";
                    dlCropList += "<option value='-1'>请选择品种</option>";
                    for (var i = 0; i < jsonData.length; i++) {
                        dlCropList += "<option value='" + jsonData[i]['varieties_id'] + "'>" + jsonData[i]['varieties_desc'] + "</option>";
                    }
                    $("#txtCropVariety").append(dlCropList);
                    if (CropVarietyID != "新增") { //编辑档案的时候用
                        $("#txtCropVariety").val(CropVarietyID);
                    }
                }
            }
        });
    },
  //图片裁剪
    TraceRecords_ImgCutDialog:function () {
        $("#CancelsaveImg").unbind("click").click(function (e) {
            $("#ImgCutDialogID").dialog("destroy");
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
}