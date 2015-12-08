/** Single Variable Pattern **/
var myApplication = (function () {
    function A (){
        /*...*/
    };

    return {
        /*...*/
    }

})();

/** Prefix namespace to narrow the chances for the unique variable 
    to be in use already. **/
var myApplication_PropertyA = {};
var myApplication_propertyB = {};
function myApplication_myMethod() { /*...*/};