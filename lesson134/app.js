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
createParagraph("button", "btn-Run");
var btnRun = document.querySelector("#btn-Run")
btnRun.type = "button"
btnRun.innerHTML = "Click"
btnRun.className = "btn btn-dark"
btnRun.addEventListener('click',run)

createParagraph("p", "result3");
createParagraph("p", "result4");
createParagraph("p", "result5");
createParagraph("p", "result6");

let $ = (par) => document.querySelector(par);


let takeJSON = '{"firstName":"Ayfer","lastName":"Kaya"}';
let obj2 = JSON.parse(takeJSON)
$('#result').innerHTML = obj2["firstName"] + " " + obj2["lastName"]

function run() {
 let xmlRequest,obj;
 xmlRequest = new XMLHttpRequest();
 xmlRequest.onreadystatechange = function(){
  if(this.readyState===4 && this.status === 200){
    obj = JSON.parse(this.responseText);
    $('#result3').innerHTML = obj["firstName"] + " " + obj["familyName"]
    $('#result3').innerHTML = obj["cars"][0]["nameCar"] + " " + obj["cars"][0]["models"][0]
  } 
 }
 xmlRequest.open("GET","info.json",true);
 xmlRequest.send();
}