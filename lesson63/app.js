"use strict";
var obj = {};
Object.defineProperty(obj, "x", { value: 5, writable: false });
obj.x = 10;
document.querySelector("#result").innerHTML = obj.x;

var public = "JAvaScript";
document.querySelector("#result2").innerHTML = public;