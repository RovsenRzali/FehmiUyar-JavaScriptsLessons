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


createParagraph("button", "btn-Run");
var btnRun = document.querySelector("#btn-Run")
btnRun.type = "button"
btnRun.innerHTML = "Click"
btnRun.className = "btn btn-dark"
btnRun.addEventListener('click',run)

createParagraph("p", "result");
createParagraph("p", "result3");
createParagraph("p", "result4");


let $ = (par) => document.querySelector(par);



function run() {
 var txt,obj;
 txt = '{"firstName":"Ayfer","lastName":"Kaya","birthday":"1994 05 25"}';
 obj = JSON.parse(txt);
 obj["birthday"] = new Date (obj["birthday"]);
 $('#result').innerHTML = obj["birthday"].getFullYear()

}

run() 

function run2() {
  var txt2,obj2;
  txt2 = '{"firstName":"Ayfer","lastName":"Kaya","birthday":"1994 05 25"}';
  // revier ilə qüvvətləndirici funksiya
  obj2 = JSON.parse(txt2,function(key,value){
    if(key==="birthday"){
      return new Date(value)
    } else {
      return value
    }
  });

  $('#result3').innerHTML = 
  obj2["firstName"] + " " + obj2["lastName"] +" " +  obj2["birthday"].getFullYear() + "cu il";
 
 }
 
 run2()