//政策信息的处理
var Policy;

if (!Policy) {
	Policy = {};
}
Policy.policy_type = 1;
Policy.databind = {
	//获取页面的列表
	getPageList:function(pageNum){
		var flag = false;
		$.ajax({
    		url:"?action=Policy",
    		type:'post',
    		data:"htmlMethod=getPolicyList&type="+Policy.policy_type+"&pageNum="+pageNum,
    		dataType:'json',
    		success:function(data) {
    			var obj = eval(data);
    			var ul = $(".newspolicy ul")[0];
    			var li_len = ul.childNodes.length;
    			for(var i = 0; i < li_len; i++){
    				ul.removeChild(ul.childNodes[0]);
    			}
    			for(i = 0;i < obj.length; i++){
    				var li= document.createElement("li");
    				li.innerHTML = "<a href=\"?action=PolicyDetail&policy_id="+obj[i].policy_id+"\">"+obj[i].policy_title+"</a>"+"<span style=\"float:right\">["+obj[i].policy_time+"]</span>";
    				ul.appendChild(li);
    			}
    		},
    		error:function(XMLHttpRequest, textStatus, errorThrown){
    			alert("请求失败");
    		}
    	});
	},
		
//	初始化加载政策列表信息	
	loadPolicyList:function(){
		Policy.databind.getPageList(1);
		$("#courIndex").innerHTML = 1;
		//加载policydetail_left的样式
		Policy.databind.updateLeftStyle();
		
	},
	updateLeftStyle:function(){
		var ul = $(".policydetail_left ul")[0];
		//清除所有的css
		for(var i = 0; i < ul.children.length; i++){
			ul.children[i].className = "";
		}
		ul.children[Policy.policy_type-1].className = "selected";
	},
	
	
//	获取分页信息	
	getPageInfo:function(){
		$.ajax({
    		url:"?action=Policy",
    		type:'post',
    		data:"htmlMethod=getPageInfo&"+"type="+Policy.policy_type,
    		dataType:'json',
    		success:function(data) {
    			if(data == null){
    				//没有数据
    				$("#totalPage")[0].innerHTML = 1;
    			}else{
    				$("#totalPage")[0].innerHTML = eval(data);
    			}
    		},
    		error:function(XMLHttpRequest, textStatus, errorThrown){
    			alert("error");
    		}
    		
    	}); 
	},
	// 请求上一页
	prevPage:function(){
		var nowPage = parseInt($("#courIndex")[0].innerHTML);
		if(nowPage <= 1){
			alert("已经是第一页了");
		}else{
			Policy.databind.getPageList(nowPage-1);
			$("#courIndex")[0].innerHTML = nowPage-1;
		}
	},
	//请求下一页
	nextPage:function(){
		var nowPage = parseInt($("#courIndex")[0].innerHTML);
		var totalPage = parseInt($("#totalPage")[0].innerHTML);
		if(nowPage == totalPage){
			alert("已经是最后一页了");
		}else{
			Policy.databind.getPageList(nowPage+1);
			$("#courIndex")[0].innerHTML = nowPage+1;
		}
	},
	//根据类型请求政策信息
	getPolicyByType:function(type){
		
		//修改全局的type定义
		Policy.policy_type = type;
		//加载policydetail_left的样式
		Policy.databind.updateLeftStyle();
		Policy.databind.getPageList(1);
		//更新总页数信息
		Policy.databind.getPageInfo();
		//更新现在页数信息
		$("#courIndex")[0].innerHTML = 1;
		//更新小标题
		Policy.databind.updateTopLableType();
	},
	//更新小标题top_lable_type
	updateTopLableType:function(value){
		var type;
		if(value == null){
			type = parseInt(Policy.policy_type);
		}else{
			type = parseInt(value);
		}
		var html = "";
		switch(type){
			case 1: html = "政策专题";break;
			case 2: html = "农业法规";break;
			case 3: html = "农业标准";break;
			default: html = "综合法规";break;
		}
		$("#top_lable_type")[0].innerHTML = html;
	},
//  初始化函数
	init:function(){
		var self = Policy.databind;
		self.loadPolicyList();
		self.getPageInfo();
	}
}