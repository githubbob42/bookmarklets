# Bookmarklets
This is a collection of "bookmarklets": handly tools/scriptlets to make life better.

### Installation
* Copy the javascript code from the bookmarklet you want.
* Create a bookmark:
 * Right-click on bookmar toolbar and select "Add Page..."
 * Paste copied javascript into the "URL" box
 * Enter an appropriate name
 * Save


### getFxGridData
Searches current page for a `tbody` tag and generates a JSON object based on the data within the table for use with our Selenium tests and the `verifyGridData` fixture.  The generated JSON is opened in a new window.  __NOTE: you need to allow popups from the mobile app__

```javascript
{
  "items-ticket-items": [
    {
      "FX5__Input_Qty__c": "2.00",
      "FX5__Catalog_UOM__c": "HR",
      "Qty__c": "2.00",
      "FX5__Item_Code__c": "AC1050",
      "FX5__Price__c": "10.47",
      "FX5__Description__c": "KO3A",
...
   ]
}
```



