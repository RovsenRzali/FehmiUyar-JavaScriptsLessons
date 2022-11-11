function show() {
    var x = 7.8;
    var y = new Number(8);
    document.getElementById("result").innerHTML = Math.PI;
    document.getElementById("result2").innerHTML = Math.round(x);
  }
  show();

  var x = 128;
  document.getElementById("result3").innerHTML =
    Math.pow(2, 3) +
    "<br>" +
    Math.sqrt(4) +
    "<br>" +
    Math.abs(-9) +
    "<br>" +
    Math.ceil(7.8) +
    "<br>" +
    Math.floor(7.8) +
    "<br>" +
    Math.sin(1) +
    "<br>" +
    Math.cos(-1) +
    "<br>" + // 7 ilə 60 arasında boşluq olduğu üçün Number metodu onu rəqəmə çevirə bilmir.
    Math.random() +
    "<br>"; // bur dada hərflər rəqəmə çevrilmir.

  document.getElementById("result4").innerHTML =
    Math.sin(90 * (Math.PI / 180)) +
    "<br>" + // dərəcənin radyana çevrilməsi
    Math.cos(90 * (Math.PI / 180));

  document.getElementById("result5").innerHTML =
    Math.max(7, 8, 9, 13, 56, 89) + "<br>" + Math.min(7, 8, 9, 13, 56, 89);