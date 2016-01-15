<?php /* Smarty version Smarty-3.1.21-dev, created on 2016-01-15 03:47:31
         compiled from ".\templates\page\ProductDetail.html" */ ?>
<?php /*%%SmartyHeaderCode:277355694ba162ab296-65493017%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c89604eea024af45a04dec2aa33b5642b668b0f1' => 
    array (
      0 => '.\\templates\\page\\ProductDetail.html',
      1 => 1452826048,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '277355694ba162ab296-65493017',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_5694ba16314672_01479306',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5694ba16314672_01479306')) {function content_5694ba16314672_01479306($_smarty_tpl) {?><!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>产品详情页面</title>
<link rel="stylesheet" type="text/css"
	href="templates/Plugins/jqueryui/jquery-ui.css">
<link rel="stylesheet"
	href="templates/Plugins/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="templates/Styles/reset.css">
<link rel="stylesheet" href="templates/Styles/global.css">
<link rel="stylesheet" type="text/css"
	href="templates/Styles/jquery.Cloud.css">
<link rel="stylesheet" type="text/css"
	href="templates/Plugins/LoadMask/jquery.loadmask.css">
<link rel="stylesheet" href="templates/Styles/newTrace.css">
<link rel="stylesheet" type="text/css" href="templates/Plugins/WYSIWYG/jwysiwyg/jquery.wysiwyg.css">
<link rel="stylesheet" type="text/css" href="templates/Plugins/FileBase64/Attachment/Attachment.css">
<link href="templates/Plugins/ImgCutter/css/jquery.Jcrop.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="templates/Styles/Message2.css">
<link rel="stylesheet" type="text/css" href="templates/Styles/exploratory.css">
<link rel="stylesheet" type="text/css" href="templates/Styles/nexploratory.css">
<link rel="stylesheet" href="templates/Styles/trace.css">
<link rel="stylesheet" type="text/css" href="templates/Scripts/ueditor/themes/default/ueditor.css"> 

<style type="text/css">
.newArchives-wrap {
	width: 100% !important;
}

.exploratory-wrap .w980 {
	width: 100% !important;
}

.trace-detail .mc {
	width: 978px;
	margin: 0 auto;
	position: relative;
}

.trace-detail .title {
	background: #116633 !important;
}
</style>
</head>
<body>
	<div class="topwrapper"></div>
	<div class="midwrapper">
		<div class="clearfix">
			<div id="danganContent" class="clearfix">
				<div class="newArchives-wrap">
					<div id="NewArchivesDetail">
						<div id="content" class="exploratory-wrap clearfix">
							<div class="w980 clearfix">
								<div class="trace-detail clearfix">
									<div class="title" id="traceTitle"></div>
									<div class="mc">
										<div class="side-qrcode">
											<div class="qrcode" id="qrcodeTraceability"></div>
										</div>
										<div class="summary clearfix">
											<div class="main-left">
												<div class="produce-info">
													<p class="pic" id="produce_photo">
														<img src="" width="300px">
													</p>
													<p class="sub-title">
														<span class="col-name" id="produce_name"></span>
													</p>
													<div class="statistics mt10">
														<ul>
															<li>
																<p>品种</p>
																<p class="value" id="cropname"></p>
															</li>
															<li>
																<p>上市时间</p>
																<p class="value date" id="harvesttime"></p>
															</li>
														</ul>
													</div>
													<div class="quota-list break-word" id="quota"></div>
													<div class="nocon" id="quotanone" style="display: none;">
														<div class="text">
															<p>产品指标</p>
															<p class="tips">这部分内容在“创建批次”时填写</p>
														</div>
													</div>
												</div>
											</div>
											<div class="main-right">
												<div class="company_profile">
													<div class="clearfix">
														<i id="cplogo" class="icon-logo"></i>
														<div class="text fl">
															<p class="name nowarp" id="companyname"></p>
															<p class="flag" id="check_c"></p>
														</div>
													</div>
													<ul class="info">
														<li><label class="label-like"> 负责人</label>
															<p id="headUser"></p></li>
														<li><label class="label-like"> 地址</label>
															<p id="company-address"></p></li>
													</ul>
												</div>
											</div>
										</div>
										<div class="mod_product product-quota">

											<div class="mod_product_left">
												<div class="hd">
													<i class="icon ic_track"></i>溯源档案<span id="checkflowspan">
													</span>
												</div>
											</div>
											<div class="mod_product_right">
												<div class="track-list">
													<ul>
														<li>
															<p class="circle_image">
																<span class="bg_circle btn_images">
																	<i class="icon ic_images"></i>
																</span>
															</p>
															<p>全生长期图片</p>
															<p class="action">
																<a href="javascript:void(0)" class="btn_view btn_images">查看图片</a>
															</p>
														</li>
														<li>
															<p class="circle_image">
																<span class="bg_circle btn_fertilizer"><i
																	class="icon ic_fertilizer"></i></span>
															</p>
															<p>肥料使用表</p>
															<p class="action">
																<a href="javascript:void(0)"
																	class="btn_view btn_fertilizer">查看记录</a>
															</p>
														</li>
														<li>
															<p class="circle_image">
																<span class="bg_circle btn_chemicals"><i class="icon ic_chemicals"></i></span>
															</p>
															<p>农药使用表</p>
															<p class="action">
																<a href="javascript:void(0)" class="btn_view btn_chemicals">查看记录</a>
															</p>
														</li>
														<li>
															<p class="circle_image">
																<span class="bg_circle btn_viewVideo"><i
																	class="icon ic_cctv"></i></span>
															</p>
															<p>实时监控视频</p>
															<p class="action">
																<a href="javascript:void(0)"
																	class="btn_view btn_viewVideo">查看视频</a>
															</p>
														</li>
														<li>
															<p class="circle_image">
																<span class="bg_circle btn_environment"><i
																	class="icon ic_environment"></i></span>
															</p>
															<p>关键环境数据</p>
															<p class="action">
																<a href="javascript:void(0)"
																	class="btn_view btn_environment">查看记录</a>
															</p>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="mod_product product-quota">
											<div class="mod_product_left">
												<div class="hd">
													<i class="icon ic_certification"></i>产品认证 <span
														id="modifyProcertifiedSpan"></span>
												</div>
											</div>
											<div class="mod_product_right">
												<div class="certification-list" style="display: none;">
													<div class="tb-void clearfix">
														<table id="procer">
															<thead>
																<tr>
																	<th width="40%" scope="col">认证名称</th>
																	<th width="30%" scope="col">认证状态</th>
																	<th width="30%" scope="col">操作</th>
																</tr>
															</thead>
															<tbody id="tb_procertied">
																<tr>
																	<td>没有认证</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div class="nocon" id="procernone">还没有认证记录</div>
											</div>
										</div>
										<div class="mod_product product-brief clearfix">

											<div class="mod_product_left">
												<div class="hd">
													<i class="icon ic_brief"></i>产品简介 <span id="Span1"></span>
												</div>
											</div>
											<div class="mod_product_right">
												<div class="brief" id="proremark">
												</div>
												<div class="nocon" id="proremarknone" style="display: none;">
													还没有产品简介</div>
											</div>
										</div>
										<div class="mod_product clearfix nobor">

											<div class="mod_product_left">
												<div class="hd">
													<i class="icon ic_buyInfo"></i>购买信息 <span id="Span2"></span>
												</div>
											</div>
											<div class="mod_product_right">
												<div class="buy-list BuyListDiv">
													<div class="tabbar">
														<div class="tabs">
															<ul>
																<li class="current">网店购买</li>
																<li>实体店购买</li>
																<li>销售联络方式</li>
															</ul>
														</div>
													</div>
													<div class="bd clearfix">
														<div class="online-store-list">
															<ul id="BuyForOnlineUL"></ul>
														</div>
														<div class="physical-store-list hide">
															<div class="tb-void clearfix">
																<table>
																	<thead>
																		<tr>
																			<th width="90%" scope="col">实体店地址</th>
																			<!-- <th width="10%" scope="col">地图</th> -->
																		</tr>
																	</thead>
																	<tbody id="PhysicalForBuyT">
																	</tbody>
																</table>
															</div>
															<p class="clearfix ac mt20 hide">
																<a href="javascript:void(0);"
																	class="btn-more PhysicalForBuyTMore true">查看更多</a>
															</p>
														</div>
														<div class="sales-contact-list hide">
															<div class="tb-void clearfix">
																<table>
																	<thead>
																		<tr>
																			<th width="80%" scope="col">销售人员</th>
																			<th width="20%" scope="col">联系方式</th>
																		</tr>
																	</thead>
																	<tbody id="SalesContactorT"></tbody>
																</table>
															</div>
															<p class="clearfix ac hide">
																<a href="javascript:void(0);"
																	class="btn-more SalesContactorTMore true">查看更多</a>
															</p>
														</div>
													</div>
												</div>
												<div class="nocon NoBuyListDiv" style="display: none;">
													还没有购买信息</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--顾客评分弹出层-->

						<!--农药使用表-->
						<div id="scoreModal" class="hide">
							<div class="score-dialog">
								<p class="title ac">请评分</p>
								<p class="tips ac">点击星形来评分</p>
								<div class="rate_star">
									<div class="overallrating clearfix">
										<div class="Star">
											<div id="z" style="position: relative;">
												<ul class="studyplay_starBg" style="width: 200px;">
													<li class="studyplay_starovering"
														style="width: 160px; z-index: 0; display: list-item;"
														id="studyplay_current"></li>
													<li class="studyplay_starON"
														style="width: 40px; z-index: 5;"></li>
													<li class="studyplay_starON"
														style="width: 80px; z-index: 4;"></li>
													<li class="studyplay_starON"
														style="width: 120px; z-index: 3;"></li>
													<li class="studyplay_starON"
														style="width: 160px; z-index: 2;"></li>
													<li class="studyplay_starON"
														style="width: 200px; z-index: 1;"></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<p class="rate-text ac StarDescripe">与描述基本一致</p>
								<p class="ac">
									<a href="javascript:void(0);" id="BtnCustomerRating"
										class="btn_rate_submit">确定</a>
								</p>
								<span class="dialog_close_btn" title="关闭"><i
									class="icon_close"></i></span>
							</div>
						</div>
						<div id="ChemicalsModal" class="hide">
							<div class="chemicals-dialog">
								<div class="hd">
									<span class="cat-name">农药使用表</span>
								</div>
								<div class="bd">
									<div class="chemicals-list">
										<div class="tb-void clearfix">
											<table>
												<thead>
													<tr>
														<th width="15%" scope="col" class="UseTime">使用时期</th>
														<th width="20%" scope="col">名称</th>
														<th width="15%" scope="col">用量 (克/亩)</th>
														<th width="20%" scope="col">品牌</th>
														<th width="30%" scope="col">供应商</th>
													</tr>
												</thead>
												<tbody id="tb_pesticide"></tbody>
											</table>
										</div>
										<div class="fr webPager"></div>
									</div>
								</div>
								<span class="dialog_close_btn" title="关闭"><i
									class="icon_close"></i></span>
							</div>
						</div>
						<!--肥料使用表-->
						<div id="FertilizerModal" class="hide">
							<div class="chemicals-dialog">
								<div class="hd">
									<span class="cat-name fl">肥料使用表</span>
									<div class="tabs fl FertilizerTab" style="display: none;">
										<ul>
											<li class="current">化肥</li>
											<li>有机肥</li>
										</ul>
									</div>
								</div>
								<div class="bd">
									<div class="chemicals-list fertilizer-list">
										<div class="fertilizer-box">
											<div class="tb-void clearfix">
												<table>
													<thead>
														<tr>
															<th width="15%" scope="col">使用时期</th>
															<th width="20%" scope="col">名称</th>
															<th width="15%" scope="col">用量 (千克/亩)</th>
															<th width="20%" scope="col">品牌</th>
															<th width="30%" scope="col">供应商</th>
														</tr>
													</thead>
													<tbody id="tb_fertilizer"></tbody>
												</table>
											</div>
											<div class="fr webPager"></div>
										</div>
									</div>
								</div>
								<span class="dialog_close_btn" title="关闭"><i
									class="icon_close"></i></span>
							</div>
						</div>
						<!--产品认证图片内容展示-->
						<div id="certificationModal" class="hide">
							<div class="certification-dialog">
								<!--<div class="certification-slides"></div>-->
								<div class="slides-total">
									第<span class="slide-number">1</span>张 <span id="picCounts">共3张</span>
								</div>
								<span class="dialog_close_btn" title="关闭"><i
									class="icon_close"></i></span>
							</div>
						</div>
						<!--关键环境数据-->
						<div id="environmentModal" class="hide">
							<div class="environment-records-dialog">
								<div class="hd">
									<span class="cat-name fl">关键环境数据</span>
									<div class="tabs fl">
										<ul id="tabEnvironTool"></ul>
									</div>
								</div>
								<div class="bd environmentMain">
									<div class="report_char temp">
										<div class="statistics clearfix">
											<ul id="tempul">
												<li id="avg_total" class="count">
													<p>生长期平均日温度</p>
													<p>
														<em class="num"></em><span class="unit">℃</span>
													</p>
												</li>
												<li id="avg_diff" class="count">
													<p>生长期平均昼夜温差</p>
													<p>
														<em class="num"></em><span class="unit">℃</span>
													</p>
												</li>
											</ul>
											<ul id="lightul">
												<li class="count">
													<p>累计光照时长</p>
													<p>
														<em class="num"><span id="timelen">0</span></em><span
															class="unit">小时</span>
													</p>
												</li>
											</ul>
										</div>
										<div id="temp-chart" class="temp-chart clearfix"
											style="width: 900px; height: 260px; overflow: hidden">
										</div>
									</div>
								</div>
								<span class="dialog_close_btn" title="关闭"><i
									class="icon_close"></i></span>
							</div>
						</div>
						<!--全生长期图片切换-->
						<div id="growthImagesModal" class="hide">
							<div class="growthImages-dialog">
								<div class="bd">
									<div class="col-main growthImagesClass">
										<div class="growth-images-slides"></div>
										<div class="slides-total">
											<span class="slide-number">1</span>/<span id="picCount">0</span>
										</div>
									</div>
									<div class="col-sub">
										<div class="sub-title AllGrowCycle">全生长期图片</div>
										<div class="growth-period-nav" id="growthpic"></div>
										<div class="sub-title">图片备注</div>
										<p class="img-remarks break-word"></p>
									</div>
								</div>
								<span class="dialog_close_btn" title="关闭"><i
									class="icon_close"></i></span>
							</div>
						</div>
						<!--视频弹出层-->
						<div id="videoDialog" class="hide">
							<div class="bd"></div>
							<span class="dialog_close_btn" title="关闭">
								<i class="icon_close"></i>
							</span>
						</div>
					</div>
				</div>
				<div class="map hide" id="dialogMapDiv">
					<div class="map-area"></div>
					<i class="arrow-left"></i>
				</div>
				<div class="hide" id="CompanyImgdiv">
					<img id="CompanyImg" src="./TraceabilityReg_files/bg_plane1.gif"
						width="800">
				</div>

				<div class="qrcode-popup hide">
					<div class="hd">
						<h4>溯源档案二维码</h4>
						<p class="tips">手机扫一扫</p>
					</div>
					<div class="bd">
						<img src="" width="265"
							height="265" title="溯源档案二维码" alt="溯源档案二维码" id="file_qrcode">
					</div>
					<span class="dialog_close_btn" title="关闭"><i
						class="icon_close"></i></span>
				</div>
			</div>
			<div class="w980">
                <div class="t-section">
                    <div class="commanded clearfix">
                        <div class="hd">
                            <div class="contorls"><ul><li class="current"><a href="javascript:;">1</a></li></ul></div>
                            <span class="title">该商家的更多产品</span>
                        </div>
                        <div class="bd clearfix">
                            <ul class="product-row-list" id="morepro"></ul>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</div>
	<div id="footer" class="footer mt10"></div>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/jquery-1.9.1.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/Base.Storage.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/CookieStorage.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/Util.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/Transfer.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/Scripts/History/MyHistory.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/Messages.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/DynamicPages.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/Plugins/LoadMask/jquery.loadmask.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Plugins/bootstrap/js/bootstrap.min.js"
		type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/Plugins/Slides/jquery.slides.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Scripts/CreateCaptcha.js" type="text/javascript"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/QueryTrace/Transferload.pageHtml.js"><?php echo '</script'; ?>
>
	<!-- <?php echo '<script'; ?>

		src="templates/AgriProTraceability/QueryTrace/TctraceProductDetail.js"
		type="text/javascript"><?php echo '</script'; ?>
> -->
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/ProductDetail/exploratory.config.js"><?php echo '</script'; ?>
>	
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/ProductDetail/FertilizerOperation.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/ProductDetail/PesticideOperation.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/ProductDetail/ProAttributes.config.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/ProductDetail/TraceabilityDetails.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/ProductDetail/TraceRecords.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/Scripts/pager/pagelist.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/Scripts/Common.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript"
		src="templates/AgriProTraceability/QueryTrace/queryEntrance.databind.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Plugins/HighChart/stock/highstock.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Plugins/HighChart/exporting.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="templates/Plugins/HighChart/StockChart.js"><?php echo '</script'; ?>
>
	
	<?php echo '<script'; ?>
 type="text/javascript">
        $(function () {
            Transferload.pageHtml.initLoadHtml();
            init();
        });
        function init() {
            var productId = Util.getQuery("productId");
            if (productId == null || productId == "") return;
            QueryTraceData(productId);
            //商家更多产品
            queryEntrance.databind.getDataCallBack(0, productId, queryEntrance.databind.bindMoreProTraceData);
        }

        function QueryTraceData(productId) {
            if (productId == "") {
                ZENG.msgbox.show("溯源编码不能为空!", 5, 2000);
                location.href = "?action=Index";
                return;
            }
            $.ajax({
                url: "?action=ProductDetail",
                type:"post",
                data: {
                	htmlMethod:"getProductDetail",
                	productId: productId
                },
                dataType:"json",
                success: function (response) {
                	var data = eval(response);
                      //exploratory.config.js 文件中，用于初始化函数response 是获取的产品详细信息
                    exploratory.config.initial(data);
                },
                error:function(){
                }
            }); 
        }
    <?php echo '</script'; ?>
>
</body>
</html><?php }} ?>
