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
createParagraph("p", "result2");
createParagraph("p", "result3");
createParagraph("p", "result4");
createParagraph("p", "result5");
createParagraph("p", "result6");

let $ = (par) => document.querySelector(par);

var obj, i;
obj = {
  firstName: "Rovshan",
  familyName: "Rzali",
  age: 28,
  info: ["57", "1.73", "black"],
  cars: [
    { nameCar: "Fiat", models: ["fiesta", "doblo", "200"] },
    { nameCar: "BMW", models: ["X5", "x3", "F10"] },
    { nameCar: "Mercedes", models: ["S600", "C250", "GL650"] },
  ],
}


$("#result").innerHTML = obj["info"][0];

for (i in obj["info"]) {
  $("#result2").innerHTML += i + ":" + obj["info"][i] + "<br>";
}

obj["info"][0] = 90;
for (i in obj["info"]) {
  $("#result3").innerHTML += i + ":" + obj["info"][i] + "<br>";
}

delete obj["info"][2];
for (i in obj["info"]) {
  $("#result4").innerHTML += i + ":" + obj["info"][i] + "<br>";
}



var information  = "",j;
for (i in obj["cars"]) {
  information += "<h2>"+ obj["cars"][i].nameCar + "</h2>";
  for (j in obj["cars"][i]["models"]) {
    information += "<p>"+ obj["cars"][i]["models"][j]+ "</p>"; 
  } 
}

$("#result5").innerHTML = information;



$("#result6").innerHTML = obj.cars[0]["models"][0]

