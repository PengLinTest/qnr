var PageData = {
    pageSize: 10,
    pageCount: 0,
    organicFerType:0,//化肥类型
    inorganicFerType:1//农药类型
}

// 化肥/有机肥的数据绑定
function loadFertilizerData(pageNumber, fertilizerType, idList) {
    if (!pageNumber) {
        pageNumber = 1;
    }
    $.ajax({
        url: "?action=ProductDetail",
        type:"post",
        data: {
        	htmlMethod:"getProductFerPesList",
        	idList: idList,
            PageNumber: pageNumber,
            PageSize: PageData.pageSize
        },
        dataType:"json",
        success: function(response) {
            var tbodyHtml = fertilizerType == 0 ? $("#tb_fertilizer") : $("#tb_pesticide");
            tbodyHtml.empty();
            $(".webPager").empty();
            if (response && response.Item.length > 0) {
                $.each(response.Item, function(index, item) {
                    var trHtml = "<tr><td>{0}</td><td title={1}>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td>";
                    var taskName = item.use_time == null ? "未知" : (Util.formatDateTime(item.use_time, "yyyy/MM/dd"));
                        fertilizerName = item.use_name;

                    if (20 < fertilizerName.length)
                        fertilizerName = fertilizerName.substring(0, 20) + '...';

                    trHtml = String.format(trHtml, taskName, item.use_name, fertilizerName, item.use_level, item.use_brand, item.use_suppliers);
                    tbodyHtml.append(trHtml);
                });
                var addSize = response.Total % PageData.pageSize > 0 ? 1 : 0;
                PageData.pageCount = (response.Total / PageData.pageSize + addSize);
                $(".webPager").pager({
                    pagenumber: pageNumber,
                    pagecount: PageData.pageCount,
                    buttonClickCallback: function(pageNumber) {
                        loadFertilizerData(pageNumber, fertilizerType, idList);
                    }
                });
            }
        },
        mask: function() {
            $("#FertilizerModal").mask("正在获取数据,请稍候...");
        },
        unmask: function() {
            $("#FertilizerModal").unmask();
        }
    });
}