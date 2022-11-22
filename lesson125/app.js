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

let inresult = true;
let x =9;
let y = 3;
 let show = (success,reject) =>{
  if(inresult) {
    success('It is good')
  } else{
    reject(x,y)
  }
 }

 let success =(par) =>{
  $('#result').innerHTML = par
 }

 let reject =() =>{
  $('#result').innerHTML =  x/y
 }

 show(success,reject)

 createAnyElement("p", "result2", "result");
var result2 = document.querySelector("#result2");
document.querySelector("#container").appendChild(result2);

let inresult2 = false;

 let show2 = new Promise(function (success2,reject2){
  if(inresult2) {
    success2('It is good')
  } else{
    reject2()
  }
 })

 

 show2.then(function success2(par) {
  $('#result2').innerHTML = par
 })
 .catch(function reject2 () {
  $('#result2').innerHTML =  9*3
 })

 createAnyElement("p", "result3", "result");
 var result3 = document.querySelector("#result3");
 document.querySelector("#container").appendChild(result3);

 createAnyElement("p", "result4", "result");
 var result4 = document.querySelector("#result4");
 document.querySelector("#container").appendChild(result4);
 
 // Əgər Pomise çox olarsa aşağıdakı kimi çağrılır.

 let inresult3 = false;
 
  let show3 = new Promise(function (success3,reject3) {
  setTimeout(() => {
    success3('It was perfect')
  }, 1000);
  })

  let show4 = new Promise(function (success3,reject3) {
    setTimeout(() => {
      reject3('It was bad')
    }, 2000);
   })
 
  
  Promise.all([show3,show4]).then(function success3(par) {
   $('#result3').innerHTML = par
  })
  .catch(function reject3 (par) {
   $('#result3').innerHTML =  par
  })

  Promise.race([show3,show4]).then(function success3(par) {
    $('#result4').innerHTML = par
   })
   .catch(function reject3 (par) {
    $('#result4').innerHTML =  par
   })

