var UserCenterMember;
UserCenterMember || (UserCenterMember = {});
UserCenterMember.vendorID = "";
UserCenterMember = {
    init: function() {
    	var user = Base.session.getLoginUser();
    	UserCenterMember.vendorID = user.vendorId;
        UserCenterMember.GetBatchData();
      //绑定图片上传的事件，借用UserCompanyOtherLogoUpload的东西
        UserCompanyOtherLogoUpload.initButton("UploadVendorMemberImg", $(".MemberImg"), '<img id="VendorMemberImg" src="{0}" width="132" height="88">');
        $(".btnNewMember").unbind("click").click(function(){UserCenterMember.InitProBatchDialog()});
    },
    
    //商家成员信息
    GetBatchData: function() {
        $.ajax({
            url: "?action=UserCenterMember",
            type:"post",
            data: {
            	htmlMethod:"getVendorMember",
                vendorID: UserCenterMember.vendorID,
            },
            dataType:"json",
            success: function(response) {
                var table = $(".ProBatchMemberTable");
                table.empty();
                if (response.result && 0 < response.data.length) {
                	$(".NoneMemberDivClass").hide();
                	$(".ProBatchMemberTable").parent().parent().show();
                    for (var g = 0,k = response.data.length; g < k; g++) {
                        var c = "",
                        d = response.data[g];
                        c = c + (0 == g % 2 ? '<tr class="even">': "<tr>");
                        c = c + ("<td>" + d.member_name + "</td>");
                        if(d.member_img_loc){
                        	c = c + ("<td>" + "已上传" + "</td>");
                        }else{
                        	c = c + ("<td>" + "未上传" + "</td>");
                        }
                        c = c + ("<td>" + Util.getSubstr(d.member_position,15) + "</td>");
                        //去掉空格
                    	c = c + ("<td>" + Util.getSubstr(d.member_profile.replace(/&nbsp;/ig,""),25) + "</td>");
                        
                        c = c + '<td><span class="opration"> ';
                        c += '<a href="javascript:" class="EditBatch" title="编辑"><i class="icon-edit"></i></a>';
                        c += '<a title="删除成员"  onclick= UserCenterMember.DeleteMember(' + d.member_id +');><i class="icon-recycle"></i></a> </span></td></tr>'
                        table.append(c);
                        $(".EditBatch:last").data("EditBatch", d.member_id);
                    }
                    $(".EditBatch").unbind("click").click(function() {
                        var a = $(this).data("EditBatch");
                        UserCenterMember.InitProBatchDialog(a);
                        return ! 1;
                    })
                }else{
                	$(".ProBatchMemberTable").parent().parent().hide();
                	$(".NoneMemberDivClass").show();
                }
            }
        })
    },
    InitProBatchDialog: function(memberID) {
        $("#SaveVendorMember").unbind("click").click(function() {
    		UserCenterMember.SaveVendorMember();
        });
        $(".CancelSaveVendorMember").unbind("click").click(function() {
            $(".VendorMemberDialog").dialog("destroy")
        });
        $(".VendorMemberDialog .btn-close ").unbind("click").click(function() {
            $(".VendorMemberDialog").dialog("destroy")
        });
        $(".VendorMemberDialog").dialog({
            autoOpen: !1,
            width: "640",
            height: "auto",
            dialogClass: "modal-dialog user-dialog",
            title: "",
            modal: !0,
            resizable: !1,
            close: function() {
                $(this).dialog("destroy")
            }
        }).dialog("open");
        if(memberID){
        	UserCenterMember.GetMemberInfo(memberID);
        	$("#VendorMemberTitle").html("编辑成员信息<br/>");
        }else{
        	$("#VendorMemberTitle").html("新建成员");
        	$("#VendorMemberID").val("");
    		$("#VendorNameInput").val("");
    		$("#VendorMemberImg").attr("src","");
    		$("#VendorPositionInput").val("");
    		$("#VendorProfileInput").html("");
        }
    },
    GetMemberInfo: function(memberID) {
        $.ajax({
            url: "?action=UserCenterMember",
            type:"post",
            data: {
            	htmlMethod:"getVendorMemberInfo",
                memberID: memberID
            },
            dataType:"json",
            success: function(response) {
            	if(response.result){
            		data = response.data;
            		$("#VendorMemberID").val(data.member_id);
            		$("#VendorNameInput").val(data.member_name);
            		$("#VendorMemberImg").attr("src",data.member_img_loc);
            		$("#VendorPositionInput").val(data.member_position);
            		$("#VendorProfileInput").html(data.member_profile);
            	}
            }
        })
    },
    //更新或者保存成员信息
    //后台可根据VendorMemberID来判断是更新还是添加
    SaveVendorMember: function() {
    	var VendorMemberID = $("#VendorMemberID").val();
    	var VendorNameInput = $("#VendorNameInput").val();
    	var FileSrc = $("#VendorMemberImg").attr("src");
    	var files = "";
    	var VendorPositionInput = $("#VendorPositionInput").val();
    	var VendorProfileInput = $("#VendorProfileInput").val();
    	//默认提交方法为更新
    	var htmlMethod = "updateVendorMemberInfo";
    	if(VendorMemberID.trim() == ""){
    		htmlMethod = "addVendorMemberInfo";
    	}
    	//判断商家名称不能为空
    	if(VendorNameInput.trim() == ""){
    		$(".PutVendorMemberName").show();
    		return false;
    	}
    	//判断成员图片是否上传
    	if(FileSrc.trim() != ""){
    		if(UserCompanyOtherLogoUpload.files.length > 0){
    			files += UserCompanyOtherLogoUpload.files[0].File;
    		}
    	}else{
    		ZENG.msgbox.show("请上传成员图片", 5, 2E3);
    		return false;
    	}
    	//判断公司职位是否上传
    	if(VendorPositionInput.trim() == ""){
    		$(".PutVendorPosition").show();
    		return false;
    	}
    	//判断成员简介
    	if(VendorProfileInput.trim() == ""){
    		ZENG.msgbox.show("请填写成员简介", 5, 2E3);
    		return false;
    	}
        $.ajax({
            url: "?action=UserCenterMember",
            type:"post",
            data: {
            	htmlMethod:htmlMethod,
            	memberID: VendorMemberID,
            	files: files,
            	memberName: VendorNameInput,
            	memberPosition: VendorPositionInput,
            	memberProfile:VendorProfileInput,
            	vendorID:UserCenterMember.vendorID,
            },
            dataType:"json",
            success: function(response) {
            	$(".VendorMemberDialog").dialog("destroy");
            	if(response.result){
            		if(VendorMemberID.trim() == ""){
            			ZENG.msgbox.show("添加成员成功",4,2E3);
            		}else{
            			ZENG.msgbox.show("修改成员信息成功",4,2E3);
            		}
            		UserCenterMember.GetBatchData();
            	}else{
            		ZENG.msgbox.show("提交失败，请稍候重新提交", 5, 2E3);
            	}
            }
        })
    },
    DeleteMember: function(memberID) {
        Messages.confirm("您确定要删除这个成员吗 ?",
        	function(){
	            $.ajax({
	                url: "?action=UserCenterMember",
	                type:"post",
	                data: {
	                	htmlMethod:"deleteMember",
	                    memberID: memberID,
	                },
	                dataType:"json",
	                success: function(response) {
	                	if(response.result){
	                		UserCenterMember.GetBatchData();
	                	}else{
	                		Messages.slideResult("操作失败", 3E3);
	                	}
	                }
	            });
        })
        
    }
};