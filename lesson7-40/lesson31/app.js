function show() {
    var a = new Date();
    var d = new Date("August 22,  2022");
    document.getElementById("result").innerHTML = a;
    document.getElementById("result2").innerHTML = d.toDateString(); // tarixi string-ə çevirir.
  }
  show();

  var x = new Date(86400000);
  var y = new Date(1506763678782);
  var z = new Date(1994, 05, 20, 12, 45, 13);
  var b = new Date("2022-08-22T12:32:20Z");
  var c = new Date("2022-08-22T16:32:20+04:00");

  document.getElementById("result3").innerHTML =
    x +
    "<br>" +
    y +
    "<br>" +
    z +
    "<br>" +
    z.toUTCString() +
    "<br>" +
    z.toDateString() +
    "<br>" +
    b +
    "<br>" +
    c;
