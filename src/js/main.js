"use strict";

exports.__esModule = true;
exports.Hello = void 0; //クラス

var Hello =
/** @class */
function () {
  function Hello() {}

  Hello.prototype.greeting = function (name) {
    return "Hello " + name;
  };

  return Hello;
}();

exports.Hello = Hello;
"use strict";

exports.__esModule = true;

var file1_1 = require("./file1");

window.addEventListener('load', function () {
  var myHello = new file1_1.Hello();
  var name = "Ise";
  alert(myHello.greeting(name));
});