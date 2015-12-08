/** Yahoo YUI with nested object namespacing. **/
YAHOO.utils.Dom.getElementsByClassName('test');

/** Simple implementation of nested namespacing. Nested namespaces can be as complex as required. **/
var myApp = myApp || {};
myApp.routers = myApp.routers || {};
myApp.model = myApp.model || {};
myApp.model.special = myApp.model.special || {};
myApp.modules.financePlanner.getSummary();

/** New nested properties as indexed properties **/
myApp["routers"] = myApp["routers"] || {};
myApp["models"] = myApp["models"] || {};
myApp["controllers"] = myApp["controllers"] || {};