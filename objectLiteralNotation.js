/** The object literal can contain any type of object **/
var myApplication = {
    getInfo: function () { /*...*/ },
    models: {},
    views: {
        pages: {}
    },
    collections: {}
};

/** Adding properties directly to the namespace **/
myApplication.foo = function () {
    return "bar";
}

myApplication.units = {
    toString: function () {
        /****/
    },
    export: function () {
        /****/
    }
}

/** Check variable/namespace existance. If already defined we use the defined instance, 
    otherwise we assign a new object literal to myAppplication. The following show 
    5 different ways to check for existance. */

var myApplication = myAppication || {};
if (!myApplication) myApplication = {};
var myApplication = myApplication = myApplication || {};
myApplication || (myApplication = {});
var myApplication = myApplication === undefined ? {} : myApplication;

/** Default Configuration set-up of an appilcation **/\
var myConfig = {
    language: 'english', 
    defaults: {
        enableGeolocation: true,
        enableSharing: false,
        maxPhotos: 20
    }, 
    theme: {
        skin: 'a', 
        toolbars: {
            index: 'ui-navigation-toolbar', 
            pages: 'ui-custom-toolbar'
        }
    }
};