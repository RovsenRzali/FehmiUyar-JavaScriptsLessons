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

function $(par) {
  return document.querySelector(par)
}

function person(par,par2,par3) {
  this.Name = par
  this.age = par2
  this.weigth = par3
  this.getName = function() {
    return this.Name
  }
}

class person2 {
  constructor(p,p2,p3) {
    this.Name = p
    this.age = p2
    this.weigth = p3
  }

  getName() {
    return this.Name
  }

  getAge() {
    return this.age
  }

  getWeight() {
    return this.weigth
  }

  setName(name) {
     this.Name = name
  }

  setAge(age) {
     this.age = age
  }

  setWeight(weight) {
     this.weigth = weight
  }
}

var myObject = new person ("Fehmi","Uyar",28)

$('#result').innerHTML = myObject.getName() + "<br>"

var myObject2 = new person2 ("Fehmi","Uyar",28)

$('#result').innerHTML += 
myObject2.getName() + "<br>" +
myObject2.getAge() + "<br>" +
myObject2.getWeight() + "<br>" ;

myObject2.setName('Rovshan')
myObject2.setAge(26 + "yaş")
myObject2.setWeight('96' + 'kq')

$('#result').innerHTML += 
myObject2.getName() + " " +
myObject2.getAge ()
+ " " +
myObject2.getWeight();

