var x = true;
var y = false;
function verify() {
  document.getElementById("result").innerHTML = x;
}

document.getElementById("result2").innerHTML = Boolean(70 < 7);

// Aşağədakıların boolean dəyərin yoxlamaq
var x1;
var y1 = 7 / "Js"; // = NaN
document.getElementById("result3").innerHTML =
  Boolean(0) +
  "<br>" +
  Boolean(-0) +
  "<br>" +
  Boolean("") +
  "<br>" +
  Boolean(null) +
  "<br>" +
  Boolean(true) +
  "<br>" +
  Boolean(false) +
  "<br>" +
  Boolean(NaN) +
  "<br>" +
  Boolean(x1) +
  "<br>" +
  Boolean(y1) +
  "<br>" +
  Boolean(780) +
  "<br>" +
  Boolean(3.24) +
  "<br>" +
  Boolean(-70) +
  "<br>" +
  Boolean("JavaScript");

var x2 = false;
var y2 = new Boolean(false);
document.getElementById("result4").innerHTML =
  typeof x2 + "<br>" + typeof y2;
document.getElementById("result5").innerHTML = x2 == y2;
document.getElementById("result6").innerHTML = x2 === y2;