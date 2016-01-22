var PublishUpdateProduct;
PublishUpdateProduct || (PublishUpdateProduct = {});
PublishUpdateProduct = {
    ShowProductBaseInfo: function(product,basicinfo) {
        $("#txtProductName").val(basicinfo.basicinfo_name);
//        $("#txtProductManager").val(e.ProductManager);
        $("#selCrops").val(basicinfo.basicinfo_crops_index);
        PublishArchives.GetCropVariety(basicinfo.basicinfo_crops_index,basicinfo.basicinfo_varieties_index);
        $("#selQuarter").val(basicinfo.basicinfo_season);
//        $("#SelectedOrg").val(e.ChildOrgID);
        //产品类型
        $("#selProductType").val(basicinfo.basicinfo_type);
        //产品标签
        $("#productLable").val(basicinfo.basicinfo_lable);
        $("#txtContent").val(basicinfo.basicinfo_remark);
        PublishArchives.ProductIntroEditor = new baidu.editor.ui.Editor;
        PublishArchives.ProductIntroEditor.render("ProductIntro");
        PublishArchives.ProductIntroEditor.addListener("ready",
        function() {
            PublishArchives.ProductIntroEditor.setContent(product.product_intro)
        });
//        PublishArchives.CompanyIntroEditor = new baidu.editor.ui.Editor;
//        PublishArchives.CompanyIntroEditor.render("CompanyIntro");
//        PublishArchives.CompanyIntroEditor.addListener("ready",
//        function() {
//            PublishArchives.CompanyIntroEditor.setContent(e.Introduce)
//        });
        //产品图片
        b = "/images/trace/upload-img03.jpg";
        0 < basicinfo.basicinfo_img_loc.length && (b = basicinfo.basicinfo_img_loc);
        $(".ImgCutAttachment").empty();
        d = '<dd class="imagesadd"><p class="imgAttachment" style="cursor: pointer">' + ("<img src=" + b + "></p></dd>");
        $(".ImgCutAttachment").html(d);
        $(".ImgCutAttachment").data("LogoIcon",b);
    },
    //展示生长周期图片
    ShowGorwthCycle: function(b) {
        $("#GrowImgDiv").empty();
        $.each(b,
        function(b, a) {
//            var c = a.Path.split(":")[1].toString(),
            var c = a.img_loc,
            d = "1900-01-01" == Util.formatDateTime(a.img_date, "yyyy-MM-dd hh:mm") ? "": Util.formatDateTime(a.img_date, "yyyy-MM-dd hh:mm"),
            c = String.format('<div class="item clearfix"> <div class="col-right aaa"> <img src="{0}" width="286" height="207"></div><div class="col-left"><ul class="form-group"><li class="form-item"> <label class="form-label"> \u62cd\u7167\u65e5\u671f</label><input type="text" value="{1}" class="form-text GrowImgTime"  name="username" placeholder="" /></li><li class="form-item"><label class="form-label"> \u5730\u7406\u4f4d\u7f6e</label><input type="text" value="{2}" class="form-text GrowAddr"  name="username" placeholder=""> </li><li class="form-item"><label class="form-label"> \u56fe\u7247\u8bf4\u660e</label><textarea name="basic" class="form-text col19 Growintro" rows="7">{3}</textarea></li></ul></div><span class="opration DeleteImagCard"><a href="javascript:"><i class="icon-recycle "></i></a></span></div>', c, d, a.img_address, a.img_desc);
            $("#GrowImgDiv").append(c);
            $("#GrowImgDiv").children().last().find(".GrowImgTime").datetimepicker({
                dateFormat: "yy-mm-dd",
                showSecond: !1,
                timeFormat: "hh:mm",
                stepHour: 1,
                stepMinute: 1,
                stepSecond: 1,
                hour: 23,
                minute: 59
            })
        });
        $(".DeleteImagCard").unbind("click").click(function() {
            $(this).parents("div").first().remove()
        })
    },
    //展示肥料
    ShowManure: function(b) {
        $("#ManureTable").empty();
        $.each(b,
        function(b, a) {
            var c = "";
            0 == b % 2 && (c = "even");
            var d = "1900-01-01" == Util.formatDateTime(a.use_time, "yyyy-MM-dd") ? "": Util.formatDateTime(a.use_time, "yyyy-MM-dd"),
            c = String.format('<tr class="{0} ManureTR"><td><input type="text" value="{6}" style="width:85px" class="form-text ManureDateTime"  placeholder="\u4f7f\u7528\u65f6\u95f4"></td><td><input type="text" value="{1}" style="width:85px" class="form-text ManureTypetxt"  placeholder="\u5316\u80a5"></td><td><input type="text" value="{2}" style="width:150px" class="form-text ManureName"  placeholder="\u571f\u58e4\u8425\u517b\u6db2"></td><td><input type="text" value="{3}" style="width:60px" class="form-text ManureDosage"  placeholder="300"></td><td><input type="text" value="{4}" style="width:70px" class="form-text ManureBrand" placeholder="\u5065\u5c14\u5eb7"></td><td><input type="text" value="{5}" style="width:180px" class="form-text ManureCompany"  placeholder="\u5b89\u5409\u80a5\u529b\u5f97\u751f\u7269\u79d1\u6280\u6709\u9650\u516c\u53f8"></td><td> <span class="opration"><a href="javascript:"><i class="icon-recycle DeleteManure"></i></a></span></td></tr>', c, a.use_type, a.use_name, a.use_level, a.use_brand, a.use_suppliers, d);
            $("#ManureTable").append(c);
            $("#ManureTable").children().last().find(".ManureDateTime").datepicker({
                dateFormat: "yy-mm-dd",
                changeMonth: !0,
                changeYear: !0
            })
        });
        $(".DeleteManure").unbind("click").click(function() {
            $(this).parents("tr").first().remove()
        });
        0 < b.length ? ($("#ManureTable").show(), $(".ManureTableTfoot").hide()) : ($(".ManureTableTfoot").show(), $("#ManureTable").hide())
    },
    //展示农药
    ShowSpraying: function(b) {
        $("#PesticideTable").empty();
        $.each(b,
        function(b, a) {
            var c = "";
            0 == b % 2 && (c = "even");
            var d = "1900-01-01" == Util.formatDateTime(a.use_time, "yyyy-MM-dd") ? "": Util.formatDateTime(a.use_time, "yyyy-MM-dd"),
            c = String.format('<tr class="{0} PesticideTR"><td><input type="text" value="{5}" style="width:150px" class="form-text PesticideDateTime" placeholder="\u571f\u58e4\u8425\u517b\u6db2"></td><td><input type="text" value="{1}" style="width:150px" class="form-text PesticideName" placeholder="\u571f\u58e4\u8425\u517b\u6db2"></td><td><input type="text" value="{2}" style="width:60px" class="form-text PesticideDosage"   placeholder="300"></td><td><input type="text" value="{3}" style="width:70px" class="form-text PesticideBrand"   placeholder="\u5065\u5c14\u5eb7"></td><td><input type="text" value="{4}" style="width:180px" class="form-text PesticideCompany"  placeholder="\u5b89\u5409\u80a5\u529b\u5f97\u751f\u7269\u79d1\u6280\u6709\u9650\u516c\u53f8"></td><td> <span class="opration"><a href="javascript:"><i class="icon-recycle DeletePesticeide"></i></a></span></td></tr>', c, a.use_name, a.use_level, a.use_brand, a.use_suppliers,d);
            $("#PesticideTable").append(c);
            $("#PesticideTable").children().last().find(".PesticideDateTime").datepicker({
                dateFormat: "yy-mm-dd",
                changeMonth: !0,
                changeYear: !0
            })
        });
        $(".DeletePesticeide").unbind("click").click(function() {
            $(this).parents("tr").first().remove()
        });
        $(".PesticideTR").unbind("click").click(function() {
            $(this).children("td")
        });
        0 < b.length ? ($("#PesticideTable").show(), $(".PesticideTableTfoot").hide()) : ($(".PesticideTableTfoot").show(), $("#PesticideTable").hide())
    },
    //产品认证
    ShowProCertified: function(b) {
        $("#CertificateDiv").empty();
        PublishArchives.i = 0;
        $.each(b,
        function(b, a) {
            var c = "1900-01-01" == Util.formatDateTime(a.certi_date, "yyyy-MM-dd") ? "": Util.formatDateTime(a.certi_date, "yyyy-MM-dd"),
            d = "1900-01-01" == Util.formatDateTime(a.certi_valid, "yyyy-MM-dd") ? "": Util.formatDateTime(a.certi_valid, "yyyy-MM-dd"),
            c = String.format('<div style="height: 250px;" class="item clearfix" id="item_{0}"><ul class="form-group"><li class="form-item form-item-inline"><label class="form-label"> \u8ba4\u8bc1\u7c7b\u578b</label><select name="select"  class="form-text form-text-block CertifiedSeleted"></select></li><li class="form-item form-item-inline even"><label class="form-label"> \u9881\u8bc1\u65e5\u671f</label><input type="text" value="{1}" class="form-text form-text-block CertifiedDate" placeholder="\u586b\u5199\u9881\u8bc1\u65e5\u671f"></li><li class="form-item form-item-inline"> <label class="form-label"> \u8bc1\u4e66\u7f16\u53f7</label><input type="text" value="{2}" class="form-text form-text-block CertifiedNo"  placeholder="\u586b\u5199\u8bc1\u4e66\u7f16\u53f7"> </li><li class="form-item form-item-inline even"><label class="form-label"> \u6709\u6548\u65e5\u671f</label><input type="text" value="{3}"class="form-text form-text-block CertifiedValidDate"  placeholder="\u586b\u5199\u6709\u6548\u65e5\u671f"> </li> <li class="form-item form-item-inline"><label class="form-label"> \u9881\u8bc1\u673a\u6784</label> <input type="text" value="{4}" class="form-text form-text-block CertifiedOrg"  name="username"placeholder="\u586b\u5199\u9881\u8bc1\u673a\u6784\u540d\u79f0"></li><li style="position: absolute;top: 135px;" class="form-item ImgContainer{0}"></li><li style="position: absolute;top: 200px;" class="form-item"><label class="form-label"> \u8bc1\u4e66\u56fe\u7247</label><p><a title="\u6dfb\u52a0\u56fe\u7247" href="javascript:" class="btn-addAttachment"><i class="icon icon-img"></i><object class="UploadCertificate_{0}" style="width: 150px;"></object> </a></p></li></ul> <span class="opration"><a href="javascript:"><i class="icon-recycle DeleteCertificate"></i></a></span></div>', PublishArchives.i, c, a.certi_num, d, a.certi_awarddepart);
            $("#CertificateDiv").append(c);
            $("#CertificateDiv").children().last().find(".CertifiedSeleted").empty();
            $("#CertificateDiv").children().last().find(".CertifiedSeleted").append(PublishArchives.CertifiedTypedl);
            $("#CertificateDiv").children().last().find(".CertifiedSeleted").val(a.certi_type_index);
            for (var c = a.certi_imgloclist.split(","), f = "", d = 0; d < c.length; d++) f = c[d],
            f = 1 < f.length ? String.format('<span><img src="{0}" width="50" height="50"><s class="deleteImg dddel dddelCer"></s></span>', f) : '<span id="Certificateidimg' + PublishArchives.i + '"><img  src="/images/trace/upload-img03.jpg" width="50" height="50"><s class="deleteImg dddel dddelCer"></s></span>',
            $(".ImgContainer" + PublishArchives.i).append(f);
            PublishArchives.initDateTime();
            PubilshUploadCertificate.Files["UploadCertificate_" + PublishArchives.i] = [];
            PubilshUploadCertificate.initButton("UploadCertificate_" + PublishArchives.i, ".ImgContainer", '<span><img src="{0}" width="50" height="50"><s class="dddel dddelCer"></s></span>');
            PublishArchives.i++
        });
        $(".dddelCer").unbind("click").click(function() {
            $(this).parents("span").first().remove()
        });
        $(".DeleteCertificate").unbind("click").click(function() {
            $(this).parents("div").first().remove()
        })
    },
    //商家自检信息
//    ShowDectionRecord: function(b) {
//        $("#DetectionDiv").empty();
//        b = b.Items;
//        PublishArchives.j = 0;
//        $.each(b,
//        function(b, a) {
//            var c = "1900-01-01" == Util.formatDateTime(a.DetectionDate, "yyyy-MM-dd") ? "": Util.formatDateTime(a.DetectionDate, "yyyy-MM-dd"),
//            c = String.format('<div style="height: 250px;" class="item clearfix" id="item_{0}"><ul class="form-group"><li class="form-item form-item-inline"><label class="form-label"> \u68c0\u6d4b\u7c7b\u578b</label><select name="select"  class="form-text form-text-block DetectionSeleted"></select></li><li class="form-item form-item-inline even"><label class="form-label"> \u68c0\u6d4b\u65e5\u671f</label><input type="text" value="{1}" class="form-text form-text-block DetectionDate" placeholder="\u586b\u5199\u68c0\u6d4b\u65e5\u671f"></li><li class="form-item form-item-inline"> <label class="form-label"> \u68c0\u6d4b\u5458</label><input type="text" value="{2}" class="form-text form-text-block DetectionUser"  placeholder="\u586b\u5199\u68c0\u6d4b\u5458\u59d3\u540d"> </li><li class="form-item form-item-inline even"><label class="form-label"> \u68c0\u6d4b\u503c</label> <input type="text" value="{3}" class="form-text form-text-block DetectionValue"  name="username"placeholder="\u586b\u5199\u68c0\u6d4b\u503c"><span class="unit">{4}</span></li><li class="form-item form-item-inline"> <label class="form-label"> \u6807\u51c6</label><span class="IspassU">{5}</span></li><li class="form-item form-item-block"><label class="form-label"> \u68c0\u6d4b\u56fe\u7247</label><p class="ImgDeContainer{0} mt10"><span id="DetectionImg{0}"><img src="/images/trace/upload-img03.jpg" width="50" height="50"></span></p><p class="mt10"><a title="\u6dfb\u52a0\u56fe\u7247" href="javascript:" class="btn-addAttachment"><i class="icon icon-img"></i><object class="UploadDetection_{0}" style="width: 150px;"></object> </a></p></li></ul> <span class="opration"><a href="javascript:"><i class="icon-recycle DeleteDetectionI"></i></a></span></div>', PublishArchives.j, c, a.DetectionUser, a.DetectionValue, a.Unit, (1 == a.IsPass ? "\u7b26\u5408\u6807\u51c6": "\u4e0d\u7b26\u5408\u6807\u51c6") + "(" + a.Condition + a.StandardValue + " " + a.Unit + ")");
//            $("#DetectionDiv").append(c);
//            $("#DetectionDiv").children().last().find(".DetectionSeleted").empty();
//            $("#DetectionDiv").children().last().find(".DetectionSeleted").append(PublishArchives.DetectionTypedl);
//            $("#DetectionDiv").children().last().find(".DetectionSeleted").val(a.DetectionTypeId);
//            $("#DetectionDiv").children().last().find(".DetectionSeleted").unbind("change").change(function() {
//                var b = $(this).find("option:selected"),
//                c = b.data("unit");
//                $(this).parents("ul").first().find(".unit").html(c);
//                var d = b.data("condition"),
//                b = b.data("standarvalue"),
//                e = $(this).parents("ul").first().find(".DetectionValue").val(),
//                c = PublishArchives.returnCpmpare(e, b, d) + "(" + a.Condition + b + " " + c + ")";
//                $(this).parents("ul").first().find(".IspassU").html(c)
//            });
//            $("#DetectionDiv").children().last().find(".DetectionValue").unbind("keyup").keyup(function() {
//                var a = $(this).val(),
//                b = $(this).parents("ul").first().find(".DetectionSeleted").find("option:selected").data("condition"),
//                c = $(this).parents("ul").first().find(".DetectionSeleted").find("option:selected").data("standarvalue");
//                c ? (a = PublishArchives.returnCpmpare(a, c, b), $(this).parents("ul").first().find(".IspassU").html(a)) : ZENG.msgbox.show("\u672a\u9009\u62e9\u68c0\u6d4b\u7c7b\u578b", 4, 2E3)
//            });
//            for (var c = a.DetectionImg.split("|"), d = "", f = 0; f < c.length; f++) d = c[f].split(":"),
//            d = 1 < d.length && -1 == d[0].toString().indexOf("/trace") ? String.format('<span><img src="{0}" width="50" height="50"><s class="deleteImg dddel dddelDetection"></s></span>', d[1].toString()) : '<span id="DetectionImg' + PublishArchives.j + '"><img  src="/images/trace/upload-img03.jpg" width="50" height="50"><s class="deleteImg dddel dddelDetection"></s></span>',
//            $(".ImgDeContainer" + PublishArchives.j).append(d);
//            $("#DetectionDiv").children().last().find(".DetectionDate").datepicker({
//                dateFormat: "yy-mm-dd",
//                changeMonth: !0,
//                changeYear: !0
//            });
//            PublishUploadDetection.Files["UploadDetection_" + PublishArchives.j] = [];
//            PublishUploadDetection.initButton("UploadDetection_" + PublishArchives.j, ".ImgDeContainer", '<span><img src="{0}" width="50" height="50"><s class="dddel dddelDetection"></s></span>');
//            PublishArchives.j++
//        });
//        $(".dddelDetection").unbind("click").click(function() {
//            $(this).parents("span").first().remove()
//        });
//        $(".DeleteDetectionI").unbind("click").click(function() {
//            $(this).parents("div").first().remove()
//        })
//    },
    ShowBuywayInfo: function(b) {
        $(".IternetShopLi").children("p").remove();
        $(".ShopAddrLi").children("p").remove();
        $(".SalerinfoLi").children("p").remove();
        $.each(b,
        function(b, a) {
            if (1 == a.buy_type) {
                var c = String.format('<p class="mt10"><input type="text" value="{0}" class="form-text IternetShoplink" name="IternetShoplink" placeholder="\u586b\u5199\u4ea7\u54c1\u7684\u7f51\u5e97\u9500\u552e\u94fe\u63a5"/><span class="opration"><a href="javascript:"><i class="icon-recycle DelIternetShoplink"></i></a> </span></p>', a.buy_desc_first);
                $(".IternetShopLi").append(c)
            } else if(2 == a.buy_type){
            	c = String.format('<p class="mt10"> <input type="text" value="{0}" class="form-text ShopAddr"  name="ShopAddr" placeholder="\u586b\u5199\u5b9e\u4f53\u5e97\u5730\u5740"/><span class="opration"><a href="javascript:"><i class="icon-recycle DelShopAddr"></i></a> </span></p>', a.buy_desc_first);
            	$(".ShopAddrLi").append(c);
        	}else if(3 == a.buy_type){
        		c = String.format('<p class="mt10"><span class="fr"><label class="col-name">\u8054\u7cfb\u4eba\u7535\u8bdd</label><input type="text" value="{0}" class="form-text form-text-block SalerPhone" name="SalerName" placeholder="\u586b\u5199\u8054\u7cfb\u4eba\u7535\u8bdd " style="width:210px"></span><span><label class="col-name">\u8054\u7cfb\u4eba</label><input type="text" value="{1}" class="form-text SalerName" placeholder="\u586b\u5199\u8054\u7cfb\u4eba\u59d3\u540d" style="width:150px"></span> <span class="opration"><a href="javascript:"><i class="icon-recycle DelSalerinfo"></i></a></span></p>', a.buy_desc_first, a.buy_desv_sec);
        		$(".SalerinfoLi").append(c);
            }
        });
        $(".DelIternetShoplink").unbind("click").click(function() {
            $(this).parents("p").first().remove()
        });
        $(".DelShopAddr").unbind("click").click(function() {
            $(this).parents("p").first().remove()
        });
        $(".DelSalerinfo").unbind("click").click(function() {
            $(this).parents("p").first().remove()
        })
    },
    //产品模块显示
//    ShowProductMoudle: function(b) {
//        $(".SwitchMoudle").removeClass("switch-on");
//        $(".txtMoudle").html("\u9690\u85cf\u6a21\u5757");
//        $.each(b.Items,
//        function(b, a) {
//            $("#Moudle_" + a.MoudleID).addClass("switch-on");
//            $(".txtMoudle_" + a.MoudleID).html("\u663e\u793a\u6a21\u5757")
//        })
//    }
};