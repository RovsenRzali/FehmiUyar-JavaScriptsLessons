var person = {
  firstName: "Fehmi",
  lastName: "Uyar",
  age: 5,
  eyeColor: "Brown",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

document.querySelector("#result").innerHTML =
  person.firstName +
  "<br>" +
  person.lastName +
  "<br>" +
  person.age +
  "<br>" +
  person.eyeColor +
  "<br>" +
  person.fullName();

/* Obyekt yaratmağı ikinci metodu. */

var person2 = new Object();
person2.firstName = "Fehmi";
person2.lastName = "Uyar";
person2.age = 28;
person2.eyeColor = "Black";

document.querySelector("#result2").innerHTML =
  person2.firstName +
  "<br>" +
  person2.lastName +
  "<br>" +
  person2.age +
  "<br>" +
  person2.eyeColor +
  "<br>";

function show(first, last, age, color) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = color;
}

var person = new show("Fehmi", "Uyar", 31, "brown");
var person2 = new show("Ayfer", "Uyar", 30, "black");
document.querySelector("#result3").innerHTML =
  person.firstName + " love " + person2.firstName;

var x1, x2, x3, x4, x5, x6, x7, x8;
var x1 = new Object();
var x2 = new Number();
var x3 = new String();
var x4 = new Boolean();
var x5 = new Array();
var x6 = new RegExp();
var x7 = new Function();
var x8 = new Date();

document.querySelector("#result4").innerHTML =
  "x1: " +
  typeof x1 +
  "<br>" +
  "x2: " +
  typeof x2 +
  "<br>" +
  "x3: " +
  typeof x3 +
  "<br>" +
  "x3: " +
  typeof x4 +
  "<br>" +
  "x4: " +
  typeof x5 +
  "<br>" +
  "x5: " +
  typeof x6 +
  "<br>" +
  "x6: " +
  typeof x7 +
  "<br>" +
  "x7: " +
  typeof x8;
