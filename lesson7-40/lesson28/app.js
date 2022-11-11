function show() {
    var x = 7;
    var y = new Number(8);
    document.getElementById("result").innerHTML = typeof x.valueOf();
    document.getElementById("result2").innerHTML = typeof y.valueOf();
  }
  show();

  var x = 128;
  document.getElementById("result3").innerHTML =
    Number(true) +
    "<br>" +
    Number(false) +
    "<br>" +
    Number(new Date()) +
    "<br>" +
    Number("7") +
    "<br>" +
    Number("70 ") +
    "<br>" +
    Number(" 50") +
    "<br>" +
    Number("7 60") +
    "<br>" + // 7 ilə 60 arasında boşluq olduğu üçün Number metodu onu rəqəmə çevirə bilmir.
    Number("JS") +
    "<br>"; // bur dada hərflər rəqəmə çevrilmir.

  document.getElementById("result4").innerHTML =
    parseInt("7") +
    "<br>" +
    parseInt("70 ") +
    "<br>" +
    parseInt(" 50") +
    "<br>" +
    parseInt("7 60") +
    "<br>" + //  7ilə 60 arasındakı boşluq olduğuna görə NaN deil 7ni verir. amma Number() metodunda ferqli idi.
    parseInt("JS") +
    "<br>" +
    parseInt("3.14") +
    "<br>" + // tam sayıya çevirir
    parseInt("7.56 days") +
    "<br>" +
    parseInt("days 28") +
    "<br>"; // ilk yazı string olduğu üçün ondan sonrakınıda string hesab edib nəticə NaN verir.

  document.getElementById("result5").innerHTML =
    parseFloat("7") +
    "<br>" +
    parseFloat("70 ") +
    "<br>" +
    parseFloat(" 50") +
    "<br>" +
    parseFloat("7 60") +
    "<br>" +
    parseFloat("JS") +
    "<br>" +
    parseFloat("3.14") +
    "<br>" + // olonluq  sayı kimi  saxlayır.
    parseFloat("7.56 days") +
    "<br>" +
    parseFloat("days 28") +
    "<br>";

  document.getElementById("result6").innerHTML =
    Number.MAX_VALUE +
    "<br>" +
    Number.MIN_VALUe +
    "<br>" +
    Number.NEGATIVE_INFINITY +
    "<br>" +
    Number.NaN +
    "<br>" +
    Number.POSITIVE_INFINITY;
