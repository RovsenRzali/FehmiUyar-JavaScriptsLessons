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

function createParagraph(elmnt, id) {
  var ElementP = document.createElement(elmnt);
  ElementP.id = id;
  document.querySelector("#container").appendChild(ElementP);
}


createParagraph("p", "result");
createParagraph("p", "result2");
createParagraph("p", "result3");
createParagraph("p", "result4");
createParagraph("p", "result5");
createParagraph("p", "result6");

let $ = (par) => document.querySelector(par);


let takeJSON = '{"firstName":"Ayfer","lastName":"Kaya"}';
let obj = JSON.parse(takeJSON)
$('#result').innerHTML = obj["firstName"] + "" + obj["lastName"]