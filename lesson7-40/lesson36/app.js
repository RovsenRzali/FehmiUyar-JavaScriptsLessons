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

  function sortArray() {
    Langs.sort();
    document.getElementById("result").innerHTML = Langs;
  }

  function reverseArray() {
    Langs.reverse();
    document.getElementById("result2").innerHTML = Langs;
  }

  var numbers = [1, 4, 57, 3, 789, 8, 11, 2];
  document.getElementById("result3").innerHTML = numbers.sort();

  function sortNumbers() {
    numbers.sort(function (x, y) {
      return x - y;
    });
    document.getElementById("result4").innerHTML = numbers;
  }
  sortNumbers();
  // reverse tətbiq etmək istəsək bu səfər y minus x yazacayıq.
  function sortNumbersReverse() {
    numbers.sort(function (x, y) {
      return y - x;
    });
    document.getElementById("result5").innerHTML = numbers;
  }
  sortNumbersReverse();