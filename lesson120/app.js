"use strict";
var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("div", "container", "container-fluid mt-3");
var container = document.querySelector("#container");
container.style.border = "2px solid #ccc";
container.style.padding = "25px";

createAnyElement("p", "result", "result");
var result = document.querySelector("#result");
document.querySelector("#container").appendChild(result);

let $ = (par) => document.querySelector(par);

function* gen() {
  yield "Hello";
  yield "Javascript";
  yield "Ecmascript 6";
  return "Generators code";
}

let newGen = gen();
let item = newGen.next();

$("#result").innerHTML = "Value:" + item.value + "  Done:" + item.done + "<br>";
item = newGen.next();
$("#result").innerHTML +=
  "Value:" + item.value + "  Done:" + item.done + "<br>";
item = newGen.next();
$("#result").innerHTML +=
  "Value:" + item.value + "  Done:" + item.done + "<br>";
item = newGen.next();
$("#result").innerHTML +=
  "Value:" + item.value + "  Done:" + item.done + "<br>";

let newGen2 = gen();
let item2 = newGen2.next();
// konsolda göstərilməsi
console.log(newGen2.next());
console.log(newGen2.next());
console.log(newGen2.next());
console.log(newGen2.next());

//  "for of" istifadəsi ilə dəyərlərin göstərilməsi.
// sonuncuda yield yazılmadığı üçün göstərilmir.
for (let item of gen()) {
  $("#result").innerHTML += item + " ";
}
