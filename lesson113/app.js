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

function $(par) {
  return document.querySelector(par)
}

// let arrow =  () => {
//   return "Javascript Ecmascript 6"
// }

let arrow =  () =>  "Javascript Ecmascript 6"

let multiple = (x,y) => x*y

$('#result').innerHTML = arrow() + "<br>" + 
   multiple(8,9);