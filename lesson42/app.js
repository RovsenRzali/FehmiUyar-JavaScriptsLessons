/* Əgər "break" sözünü yazmasaq funksiya sona qədər davam edəcək 
        və sonda nə varsa onu ekranda göstərəcək */
/* switch-də mötərizənin içərisində string-lərdə ola bilər */
function showDay() {
  var day = new Date();
  var d = day.getDay();
  switch (d) {
    case 1:
      d = "Bazarertəsi";
      break;
    case 2:
      d = "Çərşənbə axşamı";
      break;
    case 3:
      d = "Çərşənbə";
      break;
    case 4:
      d = "Cümə axşamı";
      break;
    case 5:
      d = "Cümə";
      break;
    case 6:
      d = "Şənbə";
      break;
    case 0:
      d = "Bazar";
    case "JS":
      d = "Bu bir JavaScript dərsdir.";
    default:
      d = "Belə bir gün yoxdu";
  }
  document.getElementById("result").innerHTML = d;
}

function show() {
  var a = new Date();
  var month = new Date().getMonth();
  var year = a.getFullYear();
  var monthDay = a.getDate();
  switch (month) {
    case 0:
      month = "Yanvar";
      break;
    case 1:
      month = "Fevral";
      break;
    case 2:
      month = "Mart";
      break;
    case 3:
      month = "Aprel";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "İyun";
      break;
    case 6:
      month = "İyul";
      break;
    case 7:
      month = "Avqust";
      break;
    case 8:
      month = "Sentyabır";
      break;
    case 9:
      month = "Oktyabır";
      break;
    case 10:
      month = "Noyabır";
      break;
    case 11:
      month = "Dekabır";
      break;
  }
  document.getElementById("result3").innerHTML =
    monthDay + " " + month + " " + year;
}
show();
