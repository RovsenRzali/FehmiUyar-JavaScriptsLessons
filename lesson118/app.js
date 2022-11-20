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

let langs = [
  "Javascript",
  "Asp.net",
  "PHP",
  "Node.js",
  "Python",
  "Angular.js",
  "React.js",
  "C++",
  "C#",
  "Bootstrap",
  "CSS3",
  "HTML5",
];

let designProg = ["Figma", "Photoshop", "AutoCad"];

let joinPrograms = [...langs, ...designProg];

$("#result").innerHTML = langs + 
"<br>" + joinPrograms
+ "<br>" ;

console.log(joinPrograms);

function sum(x, y, z) {
  return x + y + z;
}

let num = [5,6,7]

$("#result").innerHTML += sum(...num)

console.log(sum(...num));

