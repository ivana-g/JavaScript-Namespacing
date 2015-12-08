/** Anonymous immediately-invoked function expression **/
(function () { })();
/** Named immediately-invoked function expression **/
(function foobar() { })();
/** Self executing function expression **/
function foobar() { foobar(); };

/** Example */

var namespace = namespace || {};

/** Namespace obj is passed as a function parameter, where we assign public methods 
    and properties to it. */
(function (o) {

    o.foo = "foo";
    o.bar = function () {
        return "bar";
    };

})(namespace);

console.log(namespace);

/** 
    namespace and undefined are passed in the iife to endure: 
    1. namespace can be modified locally and isn't overwritten outside of our function context
    2. the value of undefined is guaranteed as being trylly undefined. Avoids issues with undefind
       being mutable pre_ES5.
*/

(function (namespace, undefined) {

    //private properties
    var foo = "fooo",
        bar = "bar";

    //public properties
    namespace.foobar = "foobar";
    namespace.sayHello = function () {
        speak("hello world");
    };

    //private function
    function speak(msg) {
        console.log("You said: " + msg);
    }
   
})(window.namespace = windown.namespace || {});

console.log(namespace.foobar);
console.log(namespace.sayHello());

namespace.foobar2 = "foobar";
console.log(namespace.foobar2);

/** Extension of namespace with new functionality */

(function (namespace, undefined) {
    namespace.sayGoodbye = function () {
        console.log(namespace.foo);
        console.log(namespace.bar);
        speak("goodbye");
    };
})(window.namespace = window.namespace || {});