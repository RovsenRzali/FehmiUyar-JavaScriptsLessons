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

  document.getElementById("result").innerHTML = Langs;

  var pc = {
    graphics: "Nvdia",
    ram: "ddr5 16gb",
    processor: "Core i12-12th  ",
  };
  document.getElementById("result2").innerHTML = pc.processor + pc["ram"];
  document.getElementById("result3").innerHTML = Langs.length;

  for (i = 0; i < Langs.length; i++) {
    document.getElementById("result4").innerHTML +=
      "<li>" + Langs[i] + "</li>";
  }

  var text, y;
  text = "<ul>";
  for (y = 0; y < Langs.length; y++) {
    text += "<li>" + Langs[y] + "</li>";
  }
  text += "</ul>";
  document.getElementById("result5").innerHTML = text;

  function AddPushMethods() {
    Langs.push("Bootstrap");
    document.getElementById("result6").innerHTML = Langs;
  }

  function AddLengthMethods() {
    Langs[Langs.length] = "Python";
    document.getElementById("result7").innerHTML = Langs;
  }
  AddLengthMethods();