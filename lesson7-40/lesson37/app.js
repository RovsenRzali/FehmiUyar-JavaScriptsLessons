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

  var numbers = [1, 4, 57, 3, 789, 8, 11, 2];

  function sortRandomNumbers() {
    numbers.sort(function (x, y) {
      return 0.6 - Math.random();
    });
    document.getElementById("result").innerHTML = numbers;
  }

  // reverse tətbiq etmək istəsək bu səfər y minus x yazacayıq.
  function sortNumbers1() {
    numbers.sort(function (x, y) {
      return x - y;
    });
    document.getElementById("result2").innerHTML = numbers;
  }
  sortNumbers1();

  document.getElementById("result3").innerHTML =
    "Ən kiçik rəqəm:" + numbers[0] + ".";
  var x = numbers.reverse();
  document.getElementById("result4").innerHTML =
    "Ən böyük rəqəm:" + numbers[0] + ".";

  function show(par1, par2) {
    document.getElementById(par1).innerHTML = par2;
  }

  show("result5", "result5: " + numbers);

  // daha efektli formada yazmaq

  function sortNumbers2() {
    numbers.sort(function (x, y) {
      return x - y;
    });
    show("result6", "Daha efektli: " + numbers);
  }
  sortNumbers2();

  function MaxArray(take) {
    return Math.max.apply(null, take);
  }
  show("result7", "Maxarray=" + MaxArray(numbers));

  function MinArray(take) {
    return Math.min.apply(null, take);
  }
  show("result8", `Minarray=${MinArray(numbers)}.`);

  var pc = [
    { type: "Asus", ram: "16gb", year: "2015" },
    { type: "Samsung", ram: "32gb", year: "2008" },
    { type: "Toshiba", ram: "64gb", year: "2012" },
  ];

  show(
    "result9",
    pc[0].type +
      "-" +
      pc[0].ram +
      "-" +
      pc[0].year +
      "<br>" +
      pc[1].type +
      "-" +
      pc[1].ram +
      "-" +
      pc[1].year +
      "<br>" +
      pc[2].type +
      "-" +
      pc[2].ram +
      "-" +
      pc[2].year
  );

  function sortpc() {
    pc.sort(function (x, y) {
      return x.year - y.year;
    });
    show(
      "result10",
      pc[0].type +
        "-" +
        pc[0].ram +
        "-" +
        pc[0].year +
        "<br>" +
        pc[1].type +
        "-" +
        pc[1].ram +
        "-" +
        pc[1].year +
        "<br>" +
        pc[2].type +
        "-" +
        pc[2].ram +
        "-" +
        pc[2].year
    );
  }
  sortpc();