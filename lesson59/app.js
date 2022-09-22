try {
  alerd("JavaScript");
} catch (e) {
  document.querySelector("#result").innerHTML = e.message + "<br>" + e.name;
}
var num = 7;
try {
  // eval("alert('JavaScript')")
  num.toPrecision(400)
} catch (e) {
  document.querySelector("#result2").innerHTML = e.message + "<br>" + e.name;
}
 
try {
  num.toUpperCase()
} catch (e) {
  document.querySelector("#result3").innerHTML = e.message + "<br>" + e.name;
}

try {
decodeURI("%")
} catch (e) {
  document.querySelector("#result4").innerHTML = e.message + "<br>" + e.name;
}

try {
  num = y* 8
  } catch (e) {
    document.querySelector("#result5").innerHTML = e.message + "<br>" + e.name;
  }

// function errors() {
//   var message, inputValue;
//   inputValue = document.querySelector("#data").value;
//   message = document.querySelector("#result2");
//   message.innerHTML = "";
//   try {
//     if (inputValue == "") throw "Bu hissə mütləq duldurulmalıdır.";
//     if (isNaN(inputValue)) throw "Enter only digital.";
//     inputValue = Number(inputValue);
//     if (inputValue < 5) {
//       throw "Daxil etdiyiniz rəqəm 5-dən kiçik olmamalıdır.";
//     } else if (inputValue > 15) {
//       throw "Daxil etdiyiniz rəqəm 15-dən böyük olmamalıdır.";
//     }
//     else if (inputValue > 5 & inputValue < 15) {
//       throw "It is correct."
//     }
//   } catch (e) {
//     message.innerHTML = e;
//   } finally {
//     document.querySelector('#data').value = ""
//   }
// }
