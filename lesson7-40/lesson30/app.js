
      var x = 128;
      document.getElementById("result3").innerHTML =
        Math.E +
        "<br>" +
        Math.PI +
        "<br>" +
        Math.SQRT2 +
        "<br>" +
        Math.SQRT1_2 +
        "<br>" +
        Math.LN2 +
        "<br>" +
        Math.LN10 +
        "<br>" +
        Math.LOG2E +
        "<br>" +
        Math.random() +
        "<br>";

      document.getElementById("result4").innerHTML = Math.floor(
        10 * Math.random()
      );

      function RanNum() {
        document.getElementById("result5").innerHTML =
          Math.floor(10 * Math.random()) + 1;
      }

      function getRandom(min, max) {
        return Math.floor(Math.random() * max) + min;
      }

      function show(p1, p2) {
        document.getElementById("result6").innerHTML = getRandom(p1, p2);
      }
    