var Langs = [
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
  Langs[12] = "MySql";
  var text, i;
  text = "";
  for (i = 0; i < Langs.length; i++) {
    text += Langs[i] + "<br>";
  }
  document.getElementById("result").innerHTML = text;

  var langs1 = new Array("Javascript", "Angular Js", "PHP", "Node.js"); // səhv istifadə

  document.getElementById("result2").innerHTML = Array.isArray(Langs);

  document.getElementById("result3").innerHTML = Langs instanceof Array;

  function isArray(isHave) {
    return isHave.constructor.toString().indexOf("Array") > -1;
  }
  document.getElementById("result4").innerHTML =
    "Array olub-olmadığını yoxla: " + isArray(Langs);
  document.getElementById("result5").innerHTML =
    "Array olub olmadığını yoxla: " + isArray(text);

  document.getElementById("result6").innerHTML = Langs;
  document.getElementById("result7").innerHTML = Langs.toString();
  document.getElementById("result8").innerHTML = Langs.join("---");

  var Langs1 = [
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
  Langs1.pop(); // bu formada yazanda sonuncundəyəri silir.
  document.getElementById("result9").innerHTML = Langs1;

  var x = Langs1.pop(); // bu formada yazanda çıxardılan sonuncu dəyəri çap edir.
  document.getElementById("result10").innerHTML = x;

  var y = Langs1.push("net"); // yeni dəyər əlavə olunur
  document.getElementById("result11").innerHTML =
    "Yeni dəyər əlavə olundu: " + Langs1;

  // arrayin uzunluğun çap edir
  document.getElementById("result12").innerHTML = "Array-in uzunluğu: " + y;

  var a = Langs1.shift();
  document.getElementById("result13").innerHTML = a;
  document.getElementById("result14").innerHTML = Langs1;