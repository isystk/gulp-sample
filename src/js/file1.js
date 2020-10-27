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