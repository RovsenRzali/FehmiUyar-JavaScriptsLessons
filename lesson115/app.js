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
  return document.querySelector(par);
}

class person {
  constructor(p, p2, p3) {
    this.Name = p;
    this.age = p2;
    this.weigth = p3;
  }

  get firstName() {
    return this.Name;
  }

  get Age() {
    return this.age;
  }

  get Weight() {
    return this.weigth;
  }

  set firstName(name) {
    this.Name = name;
  }

  set Age(age) {
    this.age = age;
  }

  set Weight(weight) {
    this.weigth = weight;
  }

  Message() {
    return "Object Oriented Programming";
  }
}

class Engineer extends person {
  constructor(p, p2, p3, p4) {
    super(p, p2, p3);
    this.familyName = p4;
  }

  get familyN() {
    return this.familyName;
  }

  set familyN(familyname) {
    this.familyName = familyname;
  }

  MessageAlert() {
    alert(super.Message());
  }
}

var myObject = new Engineer("Fehmi", "26", 56, "Uyar");

$("#result").innerHTML +=
  myObject.firstName +
  "<br>" +
  myObject.familyN +
  "<br>" +
  myObject.Age +
  "<br>" +
  myObject.Weight +
  "<br>" +
  "--------" +
  "<br>";

myObject.firstName = "Rovshan";
myObject.Age = "28yaş";
myObject.Weight = "98kq";
myObject.familyN = "Rzalı";

$("#result").innerHTML +=
  myObject.firstName +
  " " +
  myObject.familyN +
  " " +
  myObject.Age +
  " " +
  myObject.Weight;
  myObject.MessageAlert();
