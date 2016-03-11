javascript:(function() {
    var tbody = $("tbody");
    if (!tbody.length) return;
    var thead = $("thead");

    var json = {};
    var headers = json[$(tbody[0]).attr("data-id") + "_headers"] = [];
    var data = json[$(tbody[0]).attr("data-id")] = [];

    for (var rowNum=0; rowNum < thead[0].rows.length; rowNum++) {
        for (var cellNum=0; cellNum < thead[0].rows[rowNum].cells.length; cellNum++ ) {
            var cell = $(thead[0].rows[rowNum].cells[cellNum]);
            headers.push(cell.text().trim());
        }
    }

    for (var rowNum=0; rowNum < tbody[0].rows.length; rowNum++) {
        var rowData = {};
        for (var cellNum=0; cellNum < tbody[0].rows[rowNum].cells.length; cellNum++ ) {
            var cell = $(tbody[0].rows[rowNum].cells[cellNum]);
            if (!cell.attr("data-id")) continue;
            rowData[cell.attr("data-id").replace("field-", "")] = cell.text().trim();
        }
        data.push(rowData);
    }

    var page = '<html><head></head><body><pre style=&quot;padding:5px 10px;font-family:Courier New,Courier;font-size:11pt;text-align:left&quot;>' + JSON.stringify(json, null, 2) + '</pre></body></html>';
    var w = window.open();
    $(w.document.body).html(page);
})()
