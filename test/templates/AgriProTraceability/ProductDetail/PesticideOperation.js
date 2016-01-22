
// 农药 
// pageNumber 页面数
// pesIdList 产品农药使用的id列表
function loadPesticideData(pageNumber, productId) {
    if (!pageNumber) {
        pageNumber = 1;
    }
    $.ajax({
    	url: "?action=ProductDetail",
    	type:"post",
        data: {
            htmlMethod: "getProductFerPesList",
            //StartTime: $(".date").data("StartTime"),
            //EndTime: $(".date").data("HarvestTime"),
            PageNumber: pageNumber,
            PageSize: PageData.pageSize,
    		productId:productId
        },
        dataType:"json",
        success: function (response) {
            var tbodyHtml = $("#tb_pesticide");
            tbodyHtml.empty();
            if (response && response.Items.length > 0) {
                $.each(response.Items, function (index, item) {
                    var trHtml = "<tr><td>{0}</td><td title={1}>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td>",
                        taskName = item.TaskName == null ? "未知" : item.TaskName,
                        pesticideName = item.PesticideName;

                    if (20 < pesticideName.length)
                        pesticideName = pesticideName.substring(0, 20) + '...';

                    trHtml = String.format(trHtml, taskName, item.PesticideName, pesticideName, item.SprayAumont, item.PesticideBrand, item.PesticideSoucre);
                    tbodyHtml.append(trHtml);
                });
                var addSize = response.Total % PageData.pageSize > 0 ? 1 : 0;
                PageData.pageCount = (response.Total / PageData.pageSize + addSize);
                $(".webPager").pager({
                    pagenumber: pageNumber,
                    pagecount: PageData.pageCount,
                    buttonClickCallback: function (pageNumber) {
                        loadPesticideData(orgID, pageNumber, ProductID);
                    }
                });
            } else {
                tbodyHtml.html("没有查询到相关数据");
            }
        },
        mask: function () {
            $("#ChemicalsModal").mask("正在获取数据,请稍候...");
        },
        unmask: function () {
            $("#ChemicalsModal").unmask();
        }
    });
}