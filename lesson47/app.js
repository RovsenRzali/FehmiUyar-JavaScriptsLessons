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
    const takeValue = document.getElementById("takeValue").value;
    var message = "";
    switch (takeValue) {
      case "JS":
        message = langs;
        break;
      case "backend":
        message = "PHP,Python,Ruby";
        break;
      default:
        message = "Heçnə daxil etməmisiniz";
    }

    document.getElementById("result").innerHTML = message;
  }
  show();

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 55, 333, 44];
  // break yazdıqda ötürülən index nömrəsinə qədər gəlib dayanacaq
  function showNumbers() {
    const takeNumber = document.getElementById("takeNumber").value;
    var message = "";
    for (i = 0; i < numbers.length; i++) {
      if (i == takeNumber) {
        break;
      }
      message += numbers[i] + ",";
    }
    document.getElementById("result2").innerHTML = message;
  }

  /* continue -- yazdıqda if-in içərisində olan şərtin üzərindən keçəcək */
  function showContinue() {
    var message = "";
    const passNumber = document.getElementById("passNumber").value;
    for (i = 0; i <= 20; i++) {
      if (i == passNumber) {
        continue;
      }
      message += i + ",";
    }
    document.getElementById("result3").innerHTML = message;
  }
  showContinue();

  function SingleNumbers() {
    var message = "";
    for (i = 0; i <= 20; i++) {
      if (i % 2 == 0) {
        continue;
      }
      message += "Tək rəqəmlər:" + i + "<br>";
    }
    document.getElementById("result4").innerHTML = message;
  }
  SingleNumbers();

  // break yazılan yerə qədər list-in içərisindəkiləri göstərir.
  var creatList = "";
  list: {
    creatList += langs[0] + "<br>";
    creatList += langs[1] + "<br>";
    creatList += langs[2] + "<br>";
    creatList += langs[3] + "<br>";
    creatList += langs[4] + "<br>";
    creatList += langs[5] + "<br>";
    break list;
    creatList += langs[6] + "<br>";
    creatList += langs[7] + "<br>";
    creatList += langs[8] + "<br>";
    creatList += langs[9] + "<br>";
    creatList += langs[10] + "<br>";
  }
  document.getElementById("result6").innerHTML = creatList;