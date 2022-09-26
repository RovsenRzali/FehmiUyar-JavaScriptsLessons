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

  function show() {
    var i,
      text = "";
    for (i = 0; i < langs.length; i++) {
      text += langs[i] + ", ";
    }
    document.getElementById("result").innerHTML = text;
  }

  // azaltma yolu ilə əksinə yazdırmaq
  function showDecreament() {
    var d,
      text = "";
    for (d = langs.length - 1; d >= 0; d--) {
      text += langs[d] + ", ";
    }
    document.getElementById("result2").innerHTML = text;
  }
  showDecreament();