//var x = 7;
      //function verify() {
      //document.getElementById('result').innerHTML = (x!=="7");
      // }

      //document.getElementById('result2').innerHTML = (x!==7);

      var note = 60,
        message = "";
      function showAnswer() {
        if (note >= 60) {
          message = "Imtahan keçdiniz";
        } else {
          message = "Bəxtiniz növbəti smestr sinayın";
        }
        document.getElementById("result3").innerHTML = message;
      }

      var x = 9;
      var y = 9;
      document.getElementById("result4").innerHTML = x < 9 && y > 8;
      document.getElementById("result5").innerHTML = x <= 9 || y > 8;
      document.getElementById("result6").innerHTML = x !== 9 && y > 8;