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

let text = "Javascript ecmascript 6 ilə gələn yeni string metodları. \
 Javascript Ecmascript 6 ilə OOP yönümlü proqramlamaya adım atmış oldu. \
 Artık class, inheritance Javascriptde mümkün."

 let txt = "Node.js"
 $('#result').innerHTML = txt.repeat(6)

 createParagraph('p', 'result2')
 createParagraph('p', 'result3')
 createParagraph('p', 'result4')
 createParagraph('p', 'result5')
 createParagraph('p', 'result6')
 createParagraph('p', 'result7')
 createParagraph('p', 'result8')
 createParagraph('p', 'result9')

 $('#result2').innerHTML = text.startsWith('Javascript') ? 'this words are start of sentences' : 
 "this word isnt found at the beginig"

 $('#result3').innerHTML = text.endsWith('Javascript') ? 'this words are ends of sentences' : 
 "this word isnt found at the ends"

 $('#result4').innerHTML = text.includes('Ecmascript') ? "this word has found amoung sentences" : "this isnot found amoung sentences";

 $('#result5').innerHTML = 
 Number.isFinite(7)+ '<br>' +
 Number.isFinite('7')+ '<br>' +
 Number.isFinite(3.14)+ '<br>' +
 Number.isFinite('Ecmascript 6')+ '<br>' +
 Number.isFinite(true) + '<br>' +
 Number.isFinite(NaN) + '<br>' +
 Number.isFinite(Infinity) ;

 $('#result6').innerHTML = 
 Number.isNaN(7)+ '<br>' +
 Number.isNaN('7')+ '<br>' +
 Number.isNaN(3.14)+ '<br>' +
 Number.isNaN('Ecmascript 6')+ '<br>' +
 Number.isNaN(true) + '<br>' +
 Number.isNaN(NaN) + '<br>' +
 Number.isNaN(Infinity) ;

 $('#result7').innerHTML = 
 Number.isInteger(7)+ '<br>' +
 Number.isInteger('7')+ '<br>' +
 Number.isInteger(3.14)+ '<br>' +
 Number.isInteger('Ecmascript 6')+ '<br>' +
 Number.isInteger(true) + '<br>' +
 Number.isInteger(NaN) + '<br>' +
 Number.isInteger(Infinity) ;

 $('#result8').innerHTML = 
 Number.isSafeInteger(7)+ '<br>' +
 Number.isSafeInteger('7')+ '<br>' +
 Number.isSafeInteger(3.14)+ '<br>' +
 Number.isSafeInteger('Ecmascript 6')+ '<br>' +
 Number.isSafeInteger(true) + '<br>' +
 Number.isSafeInteger(NaN) + '<br>' +
 Number.isSafeInteger(Infinity) ;

 $('#result9').innerHTML = 
 Number.EPSILON+ '<br>' +
 Number.MAX_SAFE_INTEGER+ '<br>' +
 Number.MIN_SAFE_INTEGER