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

   /*i-ni bu formada 2,3 v' daha çoxda artırmaq olur. */
  function show() {
    var i,
      text = "";
    for (i = 0; i < langs.length; i+=2) {
      text += langs[i] + "<br>";
    }
    document.getElementById("result").innerHTML = text;
  }
  show()


  var numbers = [1,2,3,4,5,6,7,8,9,10,55,333,44]

  function showEvenNumbers() {
    var evenNumbers = ""
    for (i=0;i<numbers.length;i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers += numbers[i] + ","
        }
        document.getElementById("result2").innerHTML = evenNumbers;

    }
  }
  showEvenNumbers();
  function showSingleNumbers() {
    var evenNumbers = ""
    for (i=0;i<numbers.length;i++) {
        if (numbers[i] % 2 !== 0) {
            evenNumbers += numbers[i] + ","
        }
        document.getElementById("result3").innerHTML = evenNumbers;

    }
  }
  showSingleNumbers();

  function countFactorial() {
    var take,i,factor = 1;
    var take = Number(document.getElementById('takeValue').value)
    for (i=1; i<=take;i++) {
        factor *= i;
        document.getElementById("result4").innerHTML = factor;

    }
  }
  showSingleNumbers();