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
};

createParagraph('p', 'result') 


let $ = (par) => document.querySelector(par);

 
var obj,takeJson,txt,Json,storageObj,workerInfo;
takeJson= '{"firstName":"Rovshan","familyName":"Rzali"}'
obj= JSON.parse(takeJson)

$('#result').innerHTML = obj.firstName + " " + obj.familyName + "<br>"


workerInfo = {Name:"Kamran",position:"engineer"}
Json = JSON.stringify(workerInfo)
localStorage.setItem('storegeJSON',Json)
txt = localStorage.getItem('storegeJSON')
storageObj = JSON.parse(txt)

$('#result').innerHTML += storageObj.Name + " " + storageObj.position



