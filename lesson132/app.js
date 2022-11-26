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
createParagraph('p', 'result2') 
createParagraph('p', 'result3') 
createParagraph('p', 'result4') 

let $ = (par) => document.querySelector(par);

 
var obj,i;
obj= {"firstName":"Rovshan",
"familyName":"Rzali",
"age":28,
"info": {
  "weight":96,
  "Hair":"black",
  "Length":1.73
}
},
   
$('#result').innerHTML = obj.firstName

for(i in obj) {
  $('#result2').innerHTML += i + ":" + obj[i] + "<br>"
}

obj["info"]["weight"] = 90;
for(i in obj["info"]) {
  $('#result3').innerHTML += i + ":" + obj["info"][i] + "<br>"
}

delete obj["info"]["Length"]
for(i in obj["info"]) {
  $('#result4').innerHTML += i + ":" + obj["info"][i] + "<br>"
}




