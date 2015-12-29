<?php /* Smarty version Smarty-3.1.21-dev, created on 2015-12-28 03:41:59
         compiled from ".\templates\page\UserCenter.html" */ ?>
<?php /*%%SmartyHeaderCode:47015680a177879985-16921717%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '08829e7a9c43bddee92a83a1ea781d89a5e640aa' => 
    array (
      0 => '.\\templates\\page\\UserCenter.html',
      1 => 1450926250,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '47015680a177879985-16921717',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5680a1778be995_42264723',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5680a1778be995_42264723')) {function content_5680a1778be995_42264723($_smarty_tpl) {?><!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8"/>
<title>青农人用户中心Test</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="renderer" content="webkit" />
<link rel="stylesheet" type="text/css" href="templates/Plugins/jqueryui/jquery-ui.css" />
<link rel="stylesheet" type="text/css" href="templates/Scripts/jquery.Cloud/jquery.Cloud.css" />
<link rel="stylesheet" type="text/css" href="templates/Plugins/LoadMask/jquery.loadmask.css" />
<link rel="stylesheet" type="text/css" href="templates/Styles/uniform.default.css">
<link rel="stylesheet" type="text/css" href="templates/Plugins/WYSIWYG/jwysiwyg/jquery.wysiwyg.css">
<link rel="stylesheet" href="templates/Plugins/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="templates/Styles/reset.css">
<link rel="stylesheet" href="templates/Styles/global.css">
<link rel="stylesheet" href="templates/Styles/newTrace.css">
<link rel="stylesheet" href="templates/Styles/usercenter.css">
<link rel="stylesheet" type="text/css" href="templates/Styles/exploratory.css">

</head>

<body>
<div class="topwrapper" id="UserHead"></div>
<div class="actionbar">
  <div class="w1030">
    <h2 class="title">用户中心</h2>
  </div>
</div>
<div class="tab-bar usernav-tab">
<div class="w1030">
	<ul class="usercenter-nav">
    	<li><a href="javascript:">个人资料</a></li>
        <li><a href="javascript:">产品档案</a></li>
        <li><a href="javascript:">商家成员管理</a></li>
    </ul>
</div>
</div>
<div class="midwrapper mt10">
  <div class="w1030 clearfix">
  <div class="tabcontent">
  <!--个人资料 Begin-->
      <div class="base-info clearfix">
        <div class="card-list">
        <div class="col-8 fl mr10">
          <div class="card">
            <div class="title">
              <div class="opration fr"> </div>
              <h2>账号信息</h2>
            </div>
            <div class="bd">
              <ul class="info">
                <li> <span class="col-name">账号</span>
                  <p class="loginuser"></p>
                </li>
                <li> <span class="col-name">上次登录</span>
                  <p class="LastLoginTime"></p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card card-contact">
            <div class="title">
              <div class="opration fr"><a href="#" class="btn-editContact"><i class="icon-edit"></i></a> </div>
              <h2>联系信息</h2>
            </div>
            <div class="bd">
              <ul class="info ">
                <li> <span class="col-name">负责人</span>
                  <p id="Showleader">-</p>
                </li>
                <li> <span class="col-name">企业类型</span>
                  <p id="ShowCompanyType">-</p>
                </li>
                <li> <span class="col-name">电话</span>
                  <p id="Showtelephone">-</p>
                </li>
                <li> <span class="col-name">传真</span>
                  <p id="ShowFaxes">-</p>
                </li>
                <li> <span class="col-name">电子邮件</span>
                  <p id="ShowEmail">-</p>
                </li>
                <li> <span class="col-name">qq</span>
                  <p id="Showinfoqq">-</p>
                </li>
                <li> <span class="col-name">微信号</span>
                  <p id="Showwechat">-</p>
                </li>
                <li> <span class="col-name">淘宝地址</span>
                  <p id="Showtaobao">-</p>
                </li>
                <li> <span class="col-name">商家标签</span>
                  <p id="Showlable">-</p>
                </li>
                <li> <span class="col-name">地址</span>
                  <p id="Showaddr">-</p>
                </li>
              </ul>
              <p class="nocon-text hide"> 你的联系信息是什么？<br/>
                <a href="#">立刻填写</a></p>
            </div>
          </div>
        </div>
        <div class="col-8 fl mr10">
	        <div class="card">
	            <div class="title">
	              <div class="opration fr editCompany"><a href="javascript:" class="btn-editCompany"><i class="icon-edit"></i></a> </div>
	              <h2>企业认证</h2>
	            </div>
	            <div class="bd">
	              <ul class="info">
	                <li> <span class="col-name">企业名称</span>
	                  <p class="ShowCampanyName">-</p>
	                </li>
	                <li> <span class="col-name">营业执照</span>
	                  <p class="ShowCompanyImg">-</p>
	                </li>
	              </ul>
	            </div>
	         </div>
	        <div class="card card-contact">
	            <div class="title">
	              <div class="opration fr"><a href="#" class="btn-editLogo"><i class="icon-edit"></i></a> </div>
	              <h2>其他信息</h2>
	            </div>
	            <div class="bd">
	              <ul class="info ">
	                <li> <span class="col-name">商家描述</span>
	                  <p id="ShowCompanyDesc">-</p>
	                </li>
	                <li> <span class="col-name">商家广告</span>
	                  <p id="Showtopimg">-</p>
	                </li>
	                <li> <span class="col-name">商家logo</span>
	                  <p id="ShowLogo">-</p>
	                </li>
	              </ul>
	            </div>
	        </div>
        </div>
        <div class="col-10 fl">
	        <div class="card card-produces">
	            <div class="title CardReordClick" style="cursor:pointer">
	              <h2>产品档案</h2>
	            </div>
	            <div class="bd">
	              <div class="statistics CardRecorddiv"></div>
	            </div>
	        </div>
	        <div class="card card-produces">
	            <div class="title">
	              <h2>身份认证</h2>
	            </div>
	            <div class="bd" id="IDcardUncheck">
	              <div class="statistics"> <i class="icon-checked icon-disabled"></i>
	                <p class="nocon-text"> 还未提交身份认证<br/>
	                  <a href="javascript:;" class="btn-editAuthentication">立刻认证</a> </p>
	              </div>
	            </div>
          	</div>
        </div>
      	</div>
      </div>
      <!--个人资料 End--> 

      <!--产品档案 Begin-->
      <div class="clearfix hide">
        <div class="col-20 fr">
          <div class="produces">
            <div class="title"> <a href="javascript:" class="btn btn-primary fr btnNewRecord">新建产品档案</a>
              <!--<div class="dropdown sort fr"> <a class="dropdown-toggle"  role="button" data-toggle="dropdown" data-target="#" href="javascript:;"> 按创建时间排序 <b class="caret"></b> </a>
                <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:;">Action</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:;">Another action</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:;">Something else here</a></li>
                </ul>
              </div>-->
            </div>
            <div class="bd">
              <div class="item-list RecordDivClass RecordDiv">
                <!--<div class="item">
                  <div class="pic"><img src="/images/trace/p3.jpg" width="58" height="58">
                    <p class="name">水果农场现摘现卖不打腊柑橘</p>
                    <p class="show-batchfile pointer expand">已发布 7 个批次<b class="caret"></b></p>
                  </div>
                  <div class="time">2015-1-20</div>
                  <span class="opration"> <a href="#" data-toggle="tooltip" title="" data-original-title="发布批次" data-placement="bottom"><i class="icon-batch"></i></a> <a href="#" data-toggle="tooltip" title="" data-original-title="编辑档案" data-placement="bottom"><i class="icon-edit"></i></a>
                  <div class="dropdown more-action"> <a class="dropdown-toggle" id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="javascript:;"><i class="icon-more"></i></a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:;">预览</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:;">删除档案</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:;">归档</a></li>
                    </ul>
                  </div>
                  </span>
                  <div class="clear"></div>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th width="17%" scope="col">采收时间</th>
                        <th width="20%" scope="col">批次号 (追溯码)</th>
                        <th width="15%" scope="col">二维码</th>
                        <th width="20%" scope="col">条形码</th>
                        <th width="18%" scope="col"></th>
                      </tr>
                    </thead>
                    <tbody class="ProBatchTable">
                    </tbody>
                    <tfoot class="btn-takeup">
                      <tr>
                        <td class="ac" colspan="5"><a href="javascript:;">收起列表</a></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div class="item">
                  <div class="pic"><img src="/images/trace/p3.jpg" width="58" height="58">
                    <p class="name">水果农场现摘现卖不打腊柑橘</p>
                    <p class="show-batchfile pointer">已发布 7 个批次<b class="caret"></b></p>
                  </div>
                  <div class="time">2015-1-20</div>
                  <span class="opration"> <a href="#"><i class="icon-batch"></i></a> <a href="#"><i class="icon-edit"></i></a> <a href="#"><i class="icon-more"></i></a> </span>
                  <div class="clear"></div>
                </div>
                <div class="item">
                  <div class="pic"><img src="/images/trace/p3.jpg" width="58" height="58">
                    <p class="name">水果农场现摘现卖不打腊柑橘</p>
                    <p class="show-batchfile pointer">已发布 7 个批次<b class="caret"></b></p>
                  </div>
                  <div class="time">2015-1-20</div>
                  <span class="opration"> <a href="#"><i class="icon-batch"></i></a> <a href="#"><i class="icon-edit"></i></a> <a href="#"><i class="icon-more"></i></a> </span>
                  <div class="clear"></div>
                </div>
                <div class="item">
                  <div class="pic"><img src="/images/trace/p3.jpg" width="58" height="58">
                    <p class="name">水果农场现摘现卖不打腊柑橘</p>
                    <p class="show-batchfile pointer">已发布 7 个批次<b class="caret"></b></p>
                  </div>
                  <div class="time">2015-1-20</div>
                  <span class="opration"> <a href="#"><i class="icon-batch"></i></a> <a href="#"><i class="icon-edit"></i></a> <a href="#"><i class="icon-more"></i></a> </span>
                  <div class="clear"></div>
                </div>-->
              </div>
              <div class="pagination ar RecordDivClass">
                <div class="webPager" id="webPager">
                  <!--<ul class="pages">
                    <li class="pgNext pgFirst pgEmpty">首页</li>
                    <li class="page-number pgCurrent">1</li>
                    <li class="page-number">2</li>
                    <li class="page-number">3</li>
                    <li class="page-number">4</li>
                    <li class="page-number">5</li>
                  </ul>-->
                </div>
              </div>
              <div class="no-content NoneRecordDivClass">
                <p>还没有任何产品档案</p>
                <p><a href="javascript:" class="btnNewRecord"> <span class="btn-new"><i class="icon-new"></i></span><br/>
                  点击新建 </a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="count"> <strong class="num RecordNum">0</strong> 条档案 </div>
        </div>
      </div>
      <!--产品档案 End--> 

      <!--商家成员管理 Begin-->
      <div class="clearfix hide">
        <div style="width:1000px">
          <div class="produces">
            <div class="title"> <a href="javascript:" class="btn btn-primary fr btnNewMember">新建商家成员</a>
            </div>
            <div class="bd">
              <div class="item-list RecordDivClass MemberRecordDiv">
                <div class="item">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th width="10%" scope="col">姓名</th>
                        <th width="10%" scope="col">图像</th>
                        <th width="25%" scope="col">公司职位</th>
                        <th width="40%" scope="col">成员简介</th>
                        <th width="15%" scope="col"></th>
                      </tr>
                    </thead>
                    <tbody class="ProBatchMemberTable">
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="no-content NoneMemberDivClass">
                <p>还没有商家成员</p>
                <p><a href="javascript:" class="btnNewMember"> <span class="btn-new"><i class="icon-new"></i></span><br/>
                  点击新建 </a></p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-6">
          <div class="count"> <strong class="num RecordNum">0</strong> 条档案 </div>
        </div> -->
      </div>
      <!--商家成员管理 End-->
      
      <!--地块管理 Begin-->
      <div class="clearfix hide">
      	<div class="card-list">
          <div class="card card-field add-field btn-addfield">
          <span class="btn-new"><i class="icon-new"></i></span>点击新建地块
          </div>
          <div id="FieldCardDiv">
          <!--<div class="card card-field">
          <div class="map"><img src="/images/trace/fmap.jpg" width="180" height="180"></div>
            <div class="title">
              <div class="opration fr"><a href="#"><i class="icon-more"></i></a> </div>
              <h2>湖南道县葡萄种植园</h2>
            </div>
            <div class="bd">
              <ul class="info">
                <li> <span class="col-name">负责人</span>
                  <p>赵帆山</p>
                </li>
                <li> <span class="col-name">联系方式</span>
                  <p>13238219022</p>
                </li>
                <li> <span class="col-name">地址</span>
                  <p>湖南省道县何家庄文华村12号</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card card-field">
          <div class="map"><img src="/images/trace/fmap.jpg" width="180" height="180"></div>
            <div class="title">
              <div class="opration fr"><a href="#"><i class="icon-more"></i></a> </div>
              <h2>湖南道县葡萄种植园</h2>
            </div>
            <div class="bd">
              <ul class="info">
                <li> <span class="col-name">负责人</span>
                  <p>赵帆山</p>
                </li>
                <li> <span class="col-name">联系方式</span>
                  <p>13238219022</p>
                </li>
                <li> <span class="col-name">地址</span>
                  <p>湖南省道县何家庄文华村12号</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card card-field">
          <div class="map"><img src="/images/trace/fmap.jpg" width="180" height="180"></div>
            <div class="title">
              <div class="opration fr"><a href="#"><i class="icon-more"></i></a> </div>
              <h2>湖南道县葡萄种植园</h2>
            </div>
            <div class="bd">
              <ul class="info">
                <li> <span class="col-name">负责人</span>
                  <p>赵帆山</p>
                </li>
                <li> <span class="col-name">联系方式</span>
                  <p>13238219022</p>
                </li>
                <li> <span class="col-name">地址</span>
                  <p>湖南省道县何家庄文华村12号</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card card-field">
          <div class="map"><img src="/images/trace/map-default.jpg" width="180" height="180"></div>
            <div class="title">
              <div class="opration fr"><a href="#"><i class="icon-more"></i></a> </div>
              <h2>湖南道县葡萄种植园</h2>
            </div>
            <div class="bd">
              <ul class="info">
                <li> <span class="col-name">负责人</span>
                  <p>赵帆山</p>
                </li>
                <li> <span class="col-name">联系方式</span>
                  <p>13238219022</p>
                </li>
                <li> <span class="col-name">地址</span>
                  <p>湖南省道县何家庄文华村12号</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card card-field">
          <div class="map"><img src="/images/trace/fmap.jpg" width="180" height="180"></div>
            <div class="title">
              <div class="opration fr"><div class="dropdown more-action"> <a class="dropdown-toggle" id="A3" role="button" data-toggle="dropdown" data-target="#" href="javascript:;"><i class="icon-more"></i></a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:;">菜单1</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:;">菜单2</a></li>
                    </ul>
                  </div> </div>
              <h2>湖南道县葡萄种植园</h2>
            </div>
            <div class="bd">
              <ul class="info">
                <li> <span class="col-name">负责人</span>
                  <p>赵帆山</p>
                </li>
                <li> <span class="col-name">联系方式</span>
                  <p>13238219022</p>
                </li>
                <li> <span class="col-name">地址</span>
                  <p>湖南省道县何家庄文华村12号</p>
                </li>
              </ul>
            </div>
          </div>-->
          </div>
          
        </div>	
      </div>
      <!--地块管理 End--> 
    </div>
  </div>
</div>
<div id="UserFooter" class="footer">
  
</div>

<!--联系方式弹出层-->
<div class="dialog-contact UserDetailDialog hide"> <span class="btn-close"><i class="icon-close"></i></span>
  <div class="title">
    <h2>联系方式<br/>
      <small>完善联系信息，可以让你获得更多潜在商机。</small></h2>
  </div>
  <div class="bd">
    <ul class="form-group">
     <li class="form-item">
        <label class="form-label">负责人</label>
        <input id="InputLeader" type="text" value="" class="form-text form-text-nomal">
      </li>
      <li class="form-item">
        <label class="form-label">企业类型</label>
        <select id="CampanyType" class="form-text form-text-nomal">
        	<option value="1">食品</option>
        	<option value="2">种养殖</option>
        	<option value="3">生活用品</option>
        </select>
      </li>
      <li class="form-item">
        <label class="form-label">手机</label>
        <input id="InputMobile" type="text" value="" class="form-text form-text-nomal">
      </li>
      <li class="form-item">
        <label class="form-label">传真</label>
        <input id="InputFaxes" type="text" value="" class="form-text form-text-nomal">
      </li>
      <li class="form-item">
        <label class="form-label">电子邮件</label>
        <input id="InputEmail" type="text" value="" class="form-text form-text-nomal">
      </li>
       <li class="form-item">
        <label class="form-label">qq</label>
        <input id="InputQQ" type="text" value="" class="form-text form-text-nomal">
      </li>
       <li class="form-item">
        <label class="form-label">微信号</label>
        <input id="InputWeChat" type="text" value="" class="form-text form-text-nomal">
      </li>
       <li class="form-item">
        <label class="form-label">淘宝地址</label>
        <input id="InputTaoBao" type="text" value="" class="form-text form-text-nomal">
      </li>
       <li class="form-item">
        <label class="form-label">商家标签</label>
        <input id="InputVendorLabel" type="text" value="" class="form-text form-text-nomal">
      </li>
      <li class="form-item text-primary hide" style="display: list-item;">
      		商家标签建议最多填写三个，并且以逗号隔开（例如：大米，主食，干吃）
      </li>
      <li class="form-item">
        <label class="form-label">地址</label>
        <input id="InputAddress" type="text" value="" class="form-text form-text-block">
      </li>
      <li class="form-item form-actions"> <a href="javascript:;" class="btn btn-primary mr10" id="btn_savebaseinfo">保存</a> <a href="javascript:;" class="btn btn-default Cancelsavebaseinfo">取消</a> </li>
    </ul>
  </div>
</div>

<!--营业执照认证弹出层-->
<div class="dialog-company hide"> <span class="btn-close"><i class="icon-close"></i></span>
  <div class="title">
    <h2>我的企业<br/>
      <small>完善企业信息，让产品档案更真实。</small></h2>
  </div>
  <div class="bd">
    <ul class="form-group">
      <li class="form-item">
        <label class="form-label">企业名称</label>
        <input id="CampanyNameInput" type="text" value="" class="form-text form-text-block">
      </li>
      <li class="form-item  repeatUploadID text-primary hide">重新提交认证照片，系统会重新审查认证.</li>
      <li class="form-item">
        <label class="form-label">营业执照</label>
        <div class="photo">
            <div class="CompanyImg">
               <img  src="templates/images/trace/upload-img02.jpg" width="132" height="88"> 
            </div>
            <a title="添加图片" href="javascript:" class="btn-addAttachment">
                <i class="icon icon-img"></i><object id="UploadCompanyImginfo" style="width: 150px;"></object>
            </a>
        </div>
        <p class="tips"> 说明：<br>
          请提供清晰、完整的原件扫描件或数码照，<br>
          仅支持.jpg.bmp.png.gif的图片格式，<span class="text-primary">图片大小不超过2M。</span> </p>
      </li>
      <li class="form-item form-actions"> <a href="javascript:;" class="btn btn-primary mr10" id="btnSaveCompany">保存</a> <a href="javascript:;" class="btn btn-default CancelCompany">取消</a> </li>
    </ul>
  </div>
</div>


<!--其他信息认证弹出层-->
<div class="dialog-otherinfo hide"> <span class="btn-close"><i class="icon-close"></i></span>
  <div class="title" style="float:left;width:640px;">
    <h2>我的企业<br/>
      <small>完善企业信息，让产品档案更真实。</small></h2>
  </div>
  <div class="title" style="float:left;width:560px;"></div>
  <div class="bd" style="clear:both">
    <ul class="form-group">
    <li class="form-item" style="width:10px;height:10px"></li>
      <li class="form-item">
        	<label class="form-label">商家描述</label>
        	<div><textarea id="ShowCompanyDescInput" class="form-text form-text-block" style="height:100px;max-width:992px"></textarea></div>
      </li>
      <li class="form-item">
        <label class="form-label">商家广告位</label>
        <div class="photo">
            <div class="TopImg">
               <img src="templates/images/trace/upload-img02.jpg" width="132" height="88"> 
            </div>
            <a title="添加图片" href="javascript:" class="btn-addAttachment">
                <i class="icon icon-img"></i>
                <object id="UploadCompanyTopImg" style="width: 150px;"></object>
            </a>
        </div>
      </li>
      <li class="form-item">
        <label class="form-label">商家Logo</label>
        <div class="photo">
            <div class="Logo">
               <img  src="templates/images/trace/upload-img02.jpg" width="132" height="88"> 
            </div>
            <a title="添加图片" href="javascript:" class="btn-addAttachment">
                <i class="icon icon-img"></i>
                <object id="UploadCompanyLogo" style="width: 150px;"></object>
            </a>
        </div>
      </li>
      <li class="form-item form-actions"> <a href="javascript:;" class="btn btn-primary mr10" id="btnSaveOtherInfo">保存</a> <a href="javascript:;" class="btn btn-default CancelOtherInfo">取消</a> </li>
    </ul>
  </div>
</div>


<!--身份认证弹出层-->
<div class="dialog-authentication hide"> <span class="btn-close"><i class="icon-close"></i></span>
  <div class="title">
    <h2>身份认证<br/>
      <small>发布产品档案前，请先提交身份认证信息。</small></h2>
  </div>
  <div class="bd">
    <ul class="form-group">
      <li class="form-item  repeatUploadID text-primary hide">重新提交认证照片，系统会重新审查认证.</li>
      <li class="form-item">
        <label class="form-label">身份认证<span class="ui-form-required">*</span></label>
        <div class="photo">
        <div class="IDImg ">
            <img id="IDImginfo" src="templates/images/trace/upload-img01.jpg" width="132" height="88">
        </div>
         <!--<a href="#" class="btn btn-default">点击上传</a> -->
         <a title="添加图片" href="javascript:" class="btn-addAttachment">
            <i class="icon icon-img"></i><object id="upload_IDImg" style="width: 150px;"></object>
         </a>
         </div>
        <p class="tips"> 说明：<br>
          <span class="text-primary">请上传有效的身份证图片，非证件图片不予受理。</span><br/>
          证件必须是彩色原件电子版，可以是扫描件或者数码拍摄照片。<br>
          仅支持.jpg.bmp.png.gif的图片格式。<span class="text-primary">图片大小不超过2M。</span> </p>
      </li>
      <li class="form-item form-actions"> <a href="javascript:;" class="btn btn-primary mr10" id="btnIDCertified">提交</a></li>
    </ul>
  </div>
</div>

<!--新建地块弹出层-->
<div class="dialog-field hide"> <span class="btn-close"><i class="icon-close"></i></span>
  <div class="title">
    <h2 id="DialogTitle">新建地块<br/>
      <small>新建地块，需要填写以下信息</small></h2>
  </div>
  <div class="bd">
    <ul class="form-group">
      <li class="form-item">
        <label class="form-label">地块名称</label>
        <input id="OrgName" type="text" value="" class="form-text form-text-block">
      </li>
      <li class="form-item">
        <label class="form-label">负责人</label>
        <input id="OrgContactor" type="text" value="" class="form-text form-text-nomal">
      </li>
      <li class="form-item">
        <label class="form-label">联系方式</label>
        <input id="OrgContactPhone" type="text" value="" class="form-text form-text-nomal">
      </li>
      <li class="form-item">
        <label class="form-label">地址</label>
        <input id="OrgAddr" type="text" value="" class="form-text form-text-block">
      </li>
      <li class="form-item form-actions"> <a href="javascript:;" class="btn btn-primary mr10" id="btnSaveNewOrg">确定</a> <a href="javascript:;" class="btn btn-default CancelOrg">取消</a> </li>
    </ul>
  </div>
</div>
<div id='buildTraceInfoID' class="hide"></div>

<!-- 弹窗 产品指标 START -->
<div class="dialog-contact ProductAttributesDialog hide"> <span class="btn-close"><i class="icon-close"></i></span>
  <div class="title">
    <h2 id="ProductAttributesTitle">编辑批次<br/>
      <small>完善产品指标，产品档案更加完整。</small></h2>
  </div>
  <div class="bd">
    <ul class="form-group">
      <li class="form-item">
        <label class="form-label">外观</label>
        <textarea rows="2" cols="50" class="form-text form-text-block" id="RemarkColorInput"></textarea>
      </li>
      <li class="form-item">
        <label class="form-label">成熟度</label>
		<textarea rows="2" cols="50" class="form-text form-text-block" id="RemarkPowerInput"></textarea>
      </li>
       <li class="form-item">
        <label class="form-label">口感</label>
        <textarea rows="2" cols="50" class="form-text form-text-block" id="RemarkWeightInput"></textarea>
      </li>
       <li class="form-item">
        <label class="form-label">多糖含量</label>
        <textarea rows="2" cols="50" class="form-text form-text-block" id="RemarkSugarInput"></textarea>
      </li>
      <li class="form-item">
        <label class="form-label">其他</label>
        <textarea rows="2" cols="50" class="form-text form-text-block" id="RemarkOtherInput"></textarea>
      </li>
      <li class="form-item form-actions"> <a href="javascript:;" class="btn btn-primary mr10" id="SaveProductAttributes">提交</a> 
      <a href="javascript:;"  class="btn btn-default CancelSaveProductAttributes">取消</a> </li>
    </ul>
  </div>
</div>
<!-- 弹窗 产品指标 END -->

<!-- 弹窗 商家成员 START -->
<div class="dialog-contact VendorMemberDialog hide"> <span class="btn-close"><i class="icon-close"></i></span>
  <div class="title">
    <h2 id="VendorMemberTitle">编辑成员信息<br/></h2>
  </div>
  <div class="bd">
    <ul class="form-group">
      <li>
      	<input type="hidden" id="VendorMemberID"/>
      </li>
      <li class="form-item">
        <label class="form-label">姓名</label>
        <input type="text" style="width: 200px;" class="form-text form-text-block" id="VendorNameInput"/>
        <span class="help-inline PutVendorMemberName" style="display:none">
        	<span class="error">请输入成员姓名</span>
        </span>
      </li>
      <li class="form-item">
      	<label class="form-label">图像</label>
      	<div class="photo">
        <div class="MemberImg">
            <img id="VendorMemberImg" src="templates/images/trace/upload-img01.jpg" width="132" height="88">
        </div>
         <a title="添加图片" href="javascript:" class="btn-addAttachment">
            <i class="icon icon-img"></i><object id="UploadVendorMemberImg" style="width: 150px;"></object>
         </a>
         </div>
        <p class="tips"> 说明：
         	<span class="text-primary">图片大小不超过2M。</span> </p>
      </li>
      <li class="form-item">
        <label class="form-label">公司职位</label>
        <input type="text" style="width: 200px;" class="form-text form-text-block" id="VendorPositionInput"/>
        <span class="help-inline PutVendorPosition" style="display:none">
        	<span class="error">请输入公司职位</span>
        </span>
      </li>
      <li class="form-item">
        <label class="form-label" autofocus>成员简介</label>
        <textarea rows="4" cols="50" class="form-text form-text-block" id="VendorProfileInput"></textarea>
      </li>
      <li class="form-item form-actions">
       	<a href="javascript:;" class="btn btn-primary mr10" id="SaveVendorMember">提交</a> 
      	<a href="javascript:;"  class="btn btn-default CancelSaveVendorMember">取消</a> </li>
    </ul>
  </div>
</div>
<!-- 弹窗 商家成员 END -->

<!-- 弹窗 公司联系人 -->
<div id="contactDialog" class="hide">
            <div class="environment-records-dialog">
        <div class="hd">
            <span class="cat-name fl">待审核</span>
        </div>
        <div class="bd">
        <a class ="fl">如需快速审核通过，可以拨打以下电话</a>
        <br/><br/><br/>
        <a class ="fl">咨询热线   400-687-8171</a>
        </div>
        </div>
  <span class="dialog_close_btn" title="关闭"><i class="icon_close"></i></span>
</div>
<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/jquery-1.9.1.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Scripts/Base.Storage.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Scripts/CookieStorage.js" type="text/javascript"><?php echo '</script'; ?>
>
<!-- <?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/Setting.js"><?php echo '</script'; ?>
> -->
<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/Util.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/Transfer.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src="templates/Plugins/LoadMask/jquery.loadmask.min.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src="templates/Plugins/Slides/jquery.slides.min.js"><?php echo '</script'; ?>
>
<!-- <?php echo '<script'; ?>
 src="templates/Plugins/DateTime/jquery-ui-timepicker-addon.js" type="text/javascript"><?php echo '</script'; ?>
> -->
<!-- <?php echo '<script'; ?>
 src="templates/Plugins/DateTime/jquery-ui-timepicker-zh-CN.js" type="text/javascript"><?php echo '</script'; ?>
> -->
<?php echo '<script'; ?>
 src="templates/Plugins/WYSIWYG/jwysiwyg/jquery.wysiwyg.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Plugins/WYSIWYG/jwysiwyg/plugins/wysiwyg.i18n.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Plugins/WYSIWYG/jwysiwyg/i18n/lang.zh-cn.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Plugins/WYSIWYG/jwysiwyg/plugins/wysiwyg.rmFormat.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Scripts/jquery.uniform.min.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Scripts/Messages.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Scripts/pager/pagelist.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/Scripts/custom.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/UserCenter/UserCompanyApplyUpload.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/UserCenter/UserCompanyOtherLogoUpload.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/UserCenter/UserCompanyOtherTopUpload.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/UserCenter/UserIDApplyUpload.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/UserCenter/UserCenterField.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/UserCenter/UserCenterRecord.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/UserCenter/UserCenterMember.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/UserCenter/UserCenter.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="templates/AgriProTraceability/LoadUser/TransferloadUser.js" type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript">
    $(function () {
        TransferloadUser.initLoadHtml();
        //身份认证信息弹出框
        custom.initIDcheckClick();
        //公司认证信息弹出框
        custom.initCompanycheckClick();
        //其他认证信息弹出框
        custom.initOtherInfoClick();
        //登录信息初始化
        UserCenter.Init();
        //保存信息的按钮单击事件
        UserCenter.InitClick();

    });
<?php echo '</script'; ?>
>

</body>
</html>

<?php }} ?>
