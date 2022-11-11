function show() {
    var a = new Date();
    var d = new Date();
    document.getElementById("result").innerHTML = a;
    document.getElementById("result2").innerHTML = d.getDay();
  }
  show();

  var x = new Date();
  var y = new Date();
  var z = new Date();
  var b = new Date();
  var c = new Date();

  document.getElementById("result3").innerHTML =
    "Year: " +
    x.getFullYear() +
    "<br>" +
    "Month: " +
    x.getMonth() +
    "<br>" +
    "Day: " +
    x.getDay() +
    "<br>" +
    "Hours:" +
    y.getHours() +
    " :" +
    "Minutes:" +
    z.getMinutes() +
    ":" +
    "Seconds:" +
    z.getSeconds() +
    "<br>" +
    "Milliseconds: " +
    b.getMilliseconds() +
    "<br>" +
    "Time: " +
    c.getTime();

  function showWeekDay() {
    var d = new Date();
    var days = [
      "Bazar",
      "Bazarertəsi",
      "Çərşənbə axşamı",
      "Çərşənbə",
      "Cümə axşamı",
      "Cümə",
      "Şənbə",
    ];
    document.getElementById("result5").innerHTML = days[d.getDay()];
  }
  showWeekDay();

  // "Set"-in necə işlədiyin göstərmək üçün nümunə
  // Set  vasitəsilə istədiyimizi dəyişdirə bilərik
  function showSet() {
    var d = new Date();
    d.setDate("23");
    d.setHours("22");
    document.getElementById("result5").innerHTML = d;
  }
  showSet();

  var ms = Date.parse("june 21 1970");
  var e = new Date(ms);
  document.getElementById("result6").innerHTML = e;