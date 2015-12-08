/** Population of the behavior for two namespaces. One initially defined (utils) 
    and another wihchi we dynamically create as a part of the functionality assignment 
    for utils (a new namespace called tools)**/
var myApp = myApp || {};
myApp.utils = {};

(function () {
    var val = 5;

    this.getValue = function () {
        return val;
    };

    this.setValue = function (newVal) {
        return newVal;
    };

    this.tools = {};

}).apply(myApp.utils);

/** Inject new behaviour into the tools namespace which we defined via the untilities module 
**/

(function () {
    this.diagnose = function () {
        return 'diagnosis';
    };
}).apply(myApp.utils.tools);


/** 
    This same approach to extension could be applied toa regular IIFE by just passing in the 
    context as an argument and modifying the context rather than just 'this'.
**/
console.log(myApp);
console.log(myApp.utils.getValue()); // test get
myApp.utils.setValue(25); // test set
console.log(myApp.utils.getValue());
console.log(myApp.utils.tools.diagnose())