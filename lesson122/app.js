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

let data = new Set();
data.add("Javascript");
data.add("React.js");
data.add("Node.js");
data.add("Angular.js");
data.add("vue.js");

$("#result").innerHTML =
  data.has("Javascript") +
  "<br>" +
  data.has("python") +
  "<br>" +
  data.size +
  "<br>";

data.delete("React.js");

$("#result").innerHTML += data.size + "<br>";

data.clear();
$("#result").innerHTML += data.size;
