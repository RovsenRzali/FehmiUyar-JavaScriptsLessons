var x = 7;

document.querySelector("#result").innerHTML =
  String(x) +
  "<br>" +
  String(3.14) +
  "<br>" +
  String(18 + 9) +
  "<br>" +
  typeof String(x) +
  "<br>" +
  typeof String(3.14) +
  "<br>" +
  typeof String(18 + 9);

// toString() -d' eyni i.i g[rwr]
document.querySelector("#result2").innerHTML =
  x.toString() +
  "<br>" +
  (3.14).toString() +
  "<br>" +
  (18 + 9).toString() +
  "<br>" +
  typeof x.toString() +
  "<br>" +
  typeof (3.14).toString() +
  "<br>" +
  typeof (18 + 9).toString();

// null və x-in konstruktoru yoxdu.

var langs = [
  "Javascript",
  "Angular Js",
  "PHP",
  "Node.js",
  "Vue Js",
  "ASp.net",
  "JSP",
  "Reaact JS",
  "HTML",
  "CSS3",
];

document.querySelector("#result3").innerHTML =
  String("false") +
  "<br>" +
  String("true") +
  "<br>" +
  typeof String("false") +
  "<br>" +
  typeof String("true");

document.querySelector("#result4").innerHTML =
  false.toString() +
  "<br>" +
  true.toString() +
  "<br>" +
  typeof false.toString() +
  "<br>" +
  typeof true.toString();

document.querySelector("#result5").innerHTML =
  String(new Date()) +
  "<br>" +
  typeof String(new Date()) +
  "<br>" +
  new Date().toString() +
  "<br>" +
  typeof new Date().toString();

document.querySelector("#result5").innerHTML =
  Number("10") +
  "<br>" +
  Number("3.14") +
  "<br>" +
  Number("") +
  "<br>" +
  Number(" ") +
  "<br>" +
  Number("10 17") +
  "<br>" + // 2 qəqəm arasında boşluq olarsa bu string zənn edib NaN-a çevirir.
  Number("JavaScript") +
  "<br>" +
  Number(" 100") +
  "<br>" +
  typeof Number("10") +
  "<br>" +
  typeof Number("10") +
  "<br>" +
  typeof Number("10") +
  "<br>" +
  typeof Number("10") +
  "<br>" +
  typeof Number("10") +
  "<br>" +
  typeof Number("10") +
  "<br>" +
  typeof Number("10");

var a = "5";
var b = +a; // artı operatoru stringi rəqəmə çevirir.
var c = "JavaScript";
var d = +c;
document.querySelector("#result5").innerHTML =
  b + "<br>" + typeof b + "<br>" + d + "<br>" + typeof d;

document.querySelector("#result6").innerHTML =
  Number("true") +
  "<br>" +
  Number("false") +
  "<br>" +
  typeof Number("true") +
  "<br>" +
  typeof Number("false");

document.querySelector("#result7").innerHTML =
  Number(new Date()) + "<br>" + typeof Number(new Date());

document.querySelector("#result8").innerHTML =
  Boolean(0) + "<br>" + Boolean(NaN) + "<br>" +
  Number([]) + "<br>" + Number([20]);
