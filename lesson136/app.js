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

let $ = (par) => document.querySelector(par);

// JSON obyekti JSON mətninə çevirmək
function run() {
  var txt, jsonData;
  //JSON obyekti
  txt = { "firstName": "Ayfer", "lastName": "Kaya", "birthday": "1994 05 25" };
  jsonData = JSON.stringify(txt);
  $("#result").innerHTML = jsonData
}

run();


