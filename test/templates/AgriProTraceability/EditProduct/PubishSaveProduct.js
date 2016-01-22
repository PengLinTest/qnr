var PubishSaveProduct;
PubishSaveProduct || (PubishSaveProduct = {});
PubishSaveProduct = {
    SaveRecord: function(a) {
    	//产品名称
        var c = $("#txtProductName").val() || null;
        //产品图片
        var s = "";
        s = $(".ImgCutAttachment").data("LogoIcon");
        //作物类型
        d = $("#selCrops").val();
        //品种类型
        l = $("#txtCropVariety").val();
        //种植季次
        t = $("#selQuarter").val();
        //产品类型
        productType = $('#selProductType').val();
        //产品标签
        productLable = $('#productLable').val();
        //备注
        u = $("#txtContent").val();
        //产品简介
        q = PublishArchives.ProductIntroEditor.getContent();
        
        if(!c){
        	ZENG.msgbox.show("请输入产品名称", 5, 2E3);
            $("#txtProductName").focus();
            return ;
        } 
        if (4E3 <= q.length) {
        	ZENG.msgbox.show("请输入2500以内的产品简介", 5, 2E3);
        	$("#ProductIntro").focus();
        	return ;
        }

        if(!s || s == ""){
        	ZENG.msgbox.show("请上传产品图片", 5, 2E3);
        	return ;
        }
        
        if ( - 1 == d){
        	ZENG.msgbox.show("请选择作物", 5, 2E3);
        	$("#selCrops").focus();
        	return ;
    	}
        if ( - 1 == l){
        	ZENG.msgbox.show("请选择品种", 5, 2E3),
            $("#txtCropVariety").focus();
        	return ;
        }
        //处理产品标签
        if(productLable){
        	var temp = productLable.split(",");
        	if(temp && temp.length > 3){
        		productLable = temp[0]+","+temp[1]+","+temp[2];
        	}
        }else{
        	ZENG.msgbox.show("请选择产品标签", 5, 2E3),
            $("#productLable").focus();
        	return ;
        }
        //获取生长周期的数据，多个数据以#分开
        PubishSaveProduct.GrowImgTime = PubishSaveProduct.getInputTextValue("GrowImgTime").split("|");
        PubishSaveProduct.GrowAddr = PubishSaveProduct.getInputTextValue("GrowAddr").split("|");
        PubishSaveProduct.Growintro = PubishSaveProduct.getInputTextValue("Growintro").split("|");
        for (var m = "",h = 0; h < $("#GrowImgDiv")[0].children.length; h++){ 
        	for (var b = $("#GrowImgDiv img:eq(" + h + ")"), e = 0; e < b.length; e++){ 
        		var k = b[e].src.replace(PubishSaveProduct.getRootPath(), "");
        		m = -1 != k.indexOf("base64") ? m + (b[e].src + "|") : (m + k + "|");
        	}
        }
        if(0 < m.length){
    		m = m.substring(0, m.length - 1);	
    	}
        //获取新增肥料
        PubishSaveProduct.ManureDateTime = PubishSaveProduct.getInputTextValue("ManureDateTime").split("|");
        PubishSaveProduct.ManureTypetxt = PubishSaveProduct.getInputTextValue("ManureTypetxt").split("|");
        PubishSaveProduct.ManureName = PubishSaveProduct.getInputTextValue("ManureName").split("|");
        PubishSaveProduct.ManureDosage = PubishSaveProduct.getInputTextValue("ManureDosage").split("|");
        PubishSaveProduct.ManureBrand = PubishSaveProduct.getInputTextValue("ManureBrand").split("|");
        PubishSaveProduct.ManureCompany = PubishSaveProduct.getInputTextValue("ManureCompany").split("|");
        //新增农药
        PubishSaveProduct.PesticideDateTime = PubishSaveProduct.getInputTextValue("PesticideDateTime").split("|");
        PubishSaveProduct.PesticideName = PubishSaveProduct.getInputTextValue("PesticideName").split("|");
        PubishSaveProduct.PesticideDosage = PubishSaveProduct.getInputTextValue("PesticideDosage").split("|");
        PubishSaveProduct.PesticideBrand = PubishSaveProduct.getInputTextValue("PesticideBrand").split("|");
        PubishSaveProduct.PesticideCompany = PubishSaveProduct.getInputTextValue("PesticideCompany").split("|");
        //新增认证
        PubishSaveProduct.CertifiedSeleted = PubishSaveProduct.getInputTextValue("CertifiedSeleted").split("|");
        PubishSaveProduct.CertifiedDate = PubishSaveProduct.getInputTextValue("CertifiedDate").split("|");
        PubishSaveProduct.CertifiedNo = PubishSaveProduct.getInputTextValue("CertifiedNo").split("|");
        PubishSaveProduct.CertifiedValidDate = PubishSaveProduct.getInputTextValue("CertifiedValidDate").split("|");
        PubishSaveProduct.CertifiedOrg = PubishSaveProduct.getInputTextValue("CertifiedOrg").split("|");
//        //新增企业自检
//        PubishSaveProduct.DetectionSeleted = PubishSaveProduct.getInputTextValue("DetectionSeleted").split("|");
//        PubishSaveProduct.DetectionDate = PubishSaveProduct.getInputTextValue("DetectionDate").split("|");
//        PubishSaveProduct.DetectionUser = PubishSaveProduct.getInputTextValue("DetectionUser").split("|");
//        PubishSaveProduct.DetectionValue = PubishSaveProduct.getInputTextValue("DetectionValue").split("|");
        
        //新增购买信息
        PubishSaveProduct.IternetShoplink = PubishSaveProduct.getInputTextValue("IternetShoplink").split("|");
        PubishSaveProduct.ShopAddr = PubishSaveProduct.getInputTextValue("ShopAddr").split("|");
        PubishSaveProduct.SalerName = PubishSaveProduct.getInputTextValue("SalerName").split("|");
        PubishSaveProduct.SalerPhone = PubishSaveProduct.getInputTextValue("SalerPhone").split("|");
        for (var f = "",h = 0; h < $("#CertificateDiv")[0].children.length; h++) {
            b = $("#CertificateDiv div:eq(" + h + ")")[0].id.toString();
            b = b.split("_")[1].toString();
            b = $(".ImgContainer" + b).find("img");
            if (0 < b.length){
            	for (e = 0; e < b.length; e++){ 
            		k = b[e].src.replace(PubishSaveProduct.getRootPath(), "");
            		f = -1 != k.indexOf("base64") ? f + (b[e].src + "|") : (f + k + "|");
            	}
            }else{ 
            	f += "none|";
            }
            f = f.substring(0, f.length - 1);
            f += "#"
        }
        //企业自检，暂时不用
//        for (var f = f.substring(0, f.length - 1), g = "", h = 0; h < $("#DetectionDiv")[0].children.length; h++) {
//            b = $("#DetectionDiv div:eq(" + h + ")")[0].id.toString();
//            b = b.split("_")[1].toString();
//            b = $(".ImgDeContainer" + b).find("img");
//            if (0 < b.length) for (e = 0; e < b.length; e++) k = b[e].src.replace(PubishSaveProduct.getRootPath(), ""),
//            g = -1 != k.indexOf("base64") ? g + (b[e].src + "|") : g + (k.replace("_550x500", "") + ":" + k + "|");
//            else g += "none|";
//            g = g.substring(0, g.length - 1) + "#"
//        }
//        g = g.substring(0, g.length - 1);
        f = f.substring(0, f.length - 1);
        c = {
        	//产品基本信息
            txtProductName: c,
            ProductLogoImg: s,
            selCrops: d,
            txtCropVariety: l,
            selQuarter: t,
            productType:productType,
            productLable:productLable,
            txtContent: u,//备注
            
            //产品表
            ProductIntro: q,
            
            //生长周期图片
            GrowImgTime: null == PubishSaveProduct.GrowImgTime ? "": "" + PubishSaveProduct.GrowImgTime[0] + "",
            GrowAddr: null == PubishSaveProduct.GrowAddr ? "": "" + PubishSaveProduct.GrowAddr[0] + "",
            Growintro: null == PubishSaveProduct.Growintro ? "": "" + PubishSaveProduct.Growintro[0] + "",
            GrowImg: m,
            
            //肥料
            ManureDateTime: null == PubishSaveProduct.ManureDateTime ? "": "" + PubishSaveProduct.ManureDateTime[0] + "",
            ManureTypetxt: null == PubishSaveProduct.ManureTypetxt ? "": "" + PubishSaveProduct.ManureTypetxt[0] + "",
            ManureName: null == PubishSaveProduct.ManureName ? "": "" + PubishSaveProduct.ManureName[0] + "",
            ManureDosage: null == PubishSaveProduct.ManureDosage ? "": "" + PubishSaveProduct.ManureDosage[0] + "",
            ManureBrand: null == PubishSaveProduct.ManureBrand ? "": "" + PubishSaveProduct.ManureBrand[0] + "",
            ManureCompany: null == PubishSaveProduct.ManureCompany ? "": "" + PubishSaveProduct.ManureCompany[0] + "",
            
            //农药
            PesticideDateTime: null == PubishSaveProduct.PesticideDateTime ? "": "" + PubishSaveProduct.PesticideDateTime[0] + "",
            PesticideName: null == PubishSaveProduct.PesticideName ? "": "" + PubishSaveProduct.PesticideName[0] + "",
            PesticideDosage: null == PubishSaveProduct.PesticideDosage ? "": "" + PubishSaveProduct.PesticideDosage[0] + "",
            PesticideBrand: null == PubishSaveProduct.PesticideBrand ? "": "" + PubishSaveProduct.PesticideBrand[0] + "",
            PesticideCompany: null == PubishSaveProduct.PesticideCompany ? "": "" + PubishSaveProduct.PesticideCompany[0] + "",
            
            //产品认证
            CertifiedSeleted: null == PubishSaveProduct.CertifiedSeleted ? "": "" + PubishSaveProduct.CertifiedSeleted[0] + "",
            CertifiedDate: null == PubishSaveProduct.CertifiedDate ? "": "" + PubishSaveProduct.CertifiedDate[0] + "",
            CertifiedNo: null == PubishSaveProduct.CertifiedNo ? "": "" + PubishSaveProduct.CertifiedNo[0] + "",
            CertifiedValidDate: null == PubishSaveProduct.CertifiedValidDate ? "": "" + PubishSaveProduct.CertifiedValidDate[0] + "",
            CertifiedOrg: null == PubishSaveProduct.CertifiedOrg ? "": "" + PubishSaveProduct.CertifiedOrg[0] + "",
            Certificateimg: f,
//            DetectionSeleted: null == PubishSaveProduct.DetectionSeleted ? "": "" + PubishSaveProduct.DetectionSeleted[0] + "",
//            DetectionDate: null == PubishSaveProduct.DetectionDate ? "": "" + PubishSaveProduct.DetectionDate[0] + "",
//            DetectionUser: null == PubishSaveProduct.DetectionUser ? "": "" + PubishSaveProduct.DetectionUser[0] + "",
//            DetectionValue: null == PubishSaveProduct.DetectionValue ? "": "" + PubishSaveProduct.DetectionValue[0] + "",
//            DetectionImg: g,
            IternetShoplink: null == PubishSaveProduct.IternetShoplink ? "": "" + PubishSaveProduct.IternetShoplink[0] + "",
            ShopAddr: null == PubishSaveProduct.ShopAddr ? "": "" + PubishSaveProduct.ShopAddr[0] + "",
            SalerName: null == PubishSaveProduct.SalerName ? "": "" + PubishSaveProduct.SalerName[0] + "",
            SalerPhone: null == PubishSaveProduct.SalerPhone ? "": "" + PubishSaveProduct.SalerPhone[0] + ""
        };
        c.ProductID = a ? a.product_id: 0;
        c.BasicinfoID = a ? a.basicinfo_id:0;
        c.htmlMethod = "saveProductRecord";
        $.ajax({
            url: "?action=UserCenterEditProduct",
            type:"post",
            data: c,
            dataType:"json",
            success: function(response) {
            	if(response.result){
            		Messages.slideResult("提交成功", 2E3,function() {
                          $(".BackUserCenter").trigger("click")
                      })
                }else{
                	Messages.slideResult("提交失败", 2E3)
                }
            	UserCenterRecord.GetProductRecord(UserCenterRecord.pageNum);
            },
            mask: function() {
                $("body").mask("正在提交数据,请稍候...")
            },
            unmask: function() {
                $("body").unmask()
            }
        })
    },
    //保存产品的显示模块模式，这个并不需要
//    SaveProductMoudle: function(a) {
//        var c = $(".switch-on"),
//        d = "";
//        $.each(c,
//        function(a, c) {
//            d += c.id.split("_")[1].toString() + ","
//        });
//        d = 0 < d.length ? d.substring(0, d.length - 1) : "";
//        Service.post({
//            url: "/TraceabilityService.svc/SaveProductMoudle",
//            params: {
//                ProductID: a,
//                Moudleid: d
//            },
//            success: function(a) {
//                115 == a.Status ? Messages.slideResult("\u63d0\u4ea4\u6210\u529f\uff01", 2E3,
//                function() {
//                    $(".BackUserCenter").trigger("click")
//                }) : Messages.slideResult("\u63d0\u4ea4\u5931\u8d25\uff01", 2E3)
//            },
//            mask: function() {
//                $("body").mask("\u6b63\u5728\u63d0\u4ea4\u6570\u636e,\u8bf7\u7a0d\u5019...")
//            },
//            unmask: function() {
//                $("body").unmask()
//            }
//        })
//    },
    getInputTextValue: function(a) {
        var c = "",
        d = !1;
        a = $("." + a);
        for (var l = 0; l < a.length; l++) c = 0 == l ? a[l].value: c + ("#" + a[l].value),
        "" == a[l].value && (d = !0);
        return c + "|" + d
    },
    //获取产品的所有信息，用来编辑产品
    GetProductRecordDetailData: function() {
        $.ajax({
            url: "?action=UserCenterEditProduct",
            type:"post",
            data: {
            	htmlMethod:"GetProductRecordDetailData",
            	ProductID: PubishSaveProduct.ProductRecordData.product_id
            },
            dataType:"json",
            success: function(a) {
            	if(a.result){
            		PublishUpdateProduct.ShowProductBaseInfo(a['product'],a['basicinfo']);
            		PublishUpdateProduct.ShowGorwthCycle(a['growthing_img_list']);
            		PublishUpdateProduct.ShowManure(a['fertilizer_list']);
            		PublishUpdateProduct.ShowSpraying(a['pesticides_list']);
            		PublishUpdateProduct.ShowProCertified(a['product_certi_list']);
            		PublishUpdateProduct.ShowBuywayInfo(a['buy_info_list']);
//            		初始化模式选择，放弃
//            		PublishUpdateProduct.ShowProductMoudle(a[6]);
            		//企业自检，放弃
//            		PublishUpdateProduct.ShowDectionRecord(a[7]);
            	}
                
            }
        })
    },
    getRootPath: function() {
        var a = window.document.location.href,
        c = window.document.location.pathname,
        d = a.lastIndexOf(c),
        a = a.substring(0, d);
        c.substring(0, c.substr(1).indexOf("/") + 1);
        return a
    }
};