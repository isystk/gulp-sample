(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./file1":1}]},{},[2]);
