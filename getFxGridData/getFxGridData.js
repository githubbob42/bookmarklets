javascript:(function() {
    var tbody = $("tbody");
    if (!tbody.length) return;

    var json = {};
    var headers, data;

    var thead = $("thead");
    for (var hdrNum=0; hdrNum < thead.length; hdrNum++) {
        headers = json[$(tbody[hdrNum]).attr("data-id") + "_headers"] = [];
        for (var rowNum=0; rowNum < thead[hdrNum].rows.length; rowNum++) {
            for (var cellNum=0; cellNum < thead[0].rows[rowNum].cells.length; cellNum++ ) {
                var cell = $(thead[0].rows[rowNum].cells[cellNum]);
                headers.push(cell.text().trim());
            }
        }
    }

    for (var bodyNum=0; bodyNum < tbody.length; bodyNum++) {
        data = json[$(tbody[bodyNum]).attr("data-id")] = [];
        for (var rowNum=0; rowNum < tbody[bodyNum].rows.length; rowNum++) {
            var rowData = {};
            for (var cellNum=0; cellNum < tbody[bodyNum].rows[rowNum].cells.length; cellNum++ ) {
                var cell = $(tbody[bodyNum].rows[rowNum].cells[cellNum]);
                if (!cell.attr("data-id")) continue;
                rowData[cell.attr("data-id").replace("field-", "")] = cell.text().trim();
            }
            data.push(rowData);
        }
    }

    var page = '<html><head></head><body><pre style=&quot;padding:5px 10px;font-family:Courier New,Courier;font-size:11pt;text-align:left&quot;>' + JSON.stringify(json, null, 2) + '</pre></body></html>';
    var w = window.open();
    $(w.document.body).html(page);
})()
