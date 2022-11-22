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

let m = new Map();
m.set("Javascript","I will be full-stack Js devloper");
m.set("React.js",'It is library of JS');

console.log(m.keys())
console.log(m.values())

$("#result").innerHTML =
  m.has("Javascript") +
  "<br>" +
  m.has("python") +
  "<br>" +
  "m.get('Javascript'): " +m.get('Javascript') +
  "<br>";

m.delete("React.js");

$("#result").innerHTML += 
m.size + "<br>" +
 m.get('React.js')+ "<br>" ;

m.clear();
$("#result").innerHTML +='m.clear:' + m.size;

/* Map və Weakmap eyni metodlardı, sadəcə Weakmap hazır metodlar
Map-dan daha azdı.  */



