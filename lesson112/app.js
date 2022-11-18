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

let langs = [
  "Javascript",
  "Angular.js",
  "React.js",
  "Vue.js",
  "Node.js",
  "PHP",
  "ASP.NET",
  "JSP",
  "ColdFusion",
  "HTML5",
  "CSS3",
];

let person = { firsName: "Fehmi", lastName: "Uyar", age: 28 };

let { firsName, lastName, age } = person;

let l1 = langs[0];
let l2 = langs[1];
let l3 = langs[2];
let l4 = langs[3];
let l5 = langs[4];

let [t1, , t3, t4, t5, , t7] = langs;

result.innerHTML =
  l1 + "<br>" + 
  l2 + "<br>" + 
  l3 + "<br>" + 
  l4 + "<br>" + 
  l5 + "<br>";

result.innerHTML += 
 t1 + "<br>" +
 t3 + "<br>" + 
 t4 + "<br>" + 
 t5 + "<br>" + 
 t7 + "<br>";

result.innerHTML += firsName + " " + lastName+ " yaş:" + age;
