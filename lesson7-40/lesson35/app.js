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
  var x = Langs.unshift("GoLang");
  document.getElementById("result").innerHTML = x; // 1-den başlıyaraq içərisindəki dəyərlərin sayın çap edir.
  document.getElementById("result2").innerHTML = Langs;

  Langs[10] = "Java"; // element dəyişdirmə
  document.getElementById("result3").innerHTML = Langs;

  delete Langs[5]; // bunun istifadəsi çatışmazlıq yaradır.
  document.getElementById("result4").innerHTML = Langs;

  var Langs1 = [
    "Javascript",
    "Angular.Js",
    "PHP",
    "Node.js",
    "Vue.Js",
    "ASp.net",
    "JSP",
    "Reaact.JS",
    "HTML",
    "CSS3",
  ];
  Langs1.splice(2, 0, "C++");
  // 2 yəni 2ci elementdən sonra əlavə etmək, 0-silmək və ya dəyişdirmək istədiyimiz elment.
  document.getElementById("result5").innerHTML = Langs1;
  Langs1.splice(2, 5);
  // 2ci elementden sonra 5 dənə elementi sil.
  document.getElementById("result6").innerHTML = Langs1;

  var Langs2 = [
    "godaddy",
    "cubics",
    "C#",
    "photoShop",
    "VCstudio",
    "MicroSoft",
  ];

  var langs3 = Langs1.concat(Langs, Langs2); // parametrlər qəbul edə bilir.
  document.getElementById("result7").innerHTML = langs3;

  var x = Langs2.slice(2); // ilk 2 elementi kəsəcək.
  var y = Langs2.slice(0, 5); // 0-dan 5-ə qədər elementləri kəsəcək.

  document.getElementById("result8").innerHTML = x;
  document.getElementById("result9").innerHTML = y;