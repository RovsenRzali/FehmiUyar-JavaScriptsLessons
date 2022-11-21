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

 let person = {firstName:"Rzali",Name:'Rovshan',Age:28}

 let messages = "Ecmascript 6 JavaScript study"
 for (let i in person) $('#result').innerHTML += person[i] + " " +"<br>" 

 for (let i of messages)  $('#result').innerHTML += i + "<br>"


 