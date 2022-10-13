function printScreen() {
  var valueForm, result;
  result = document.querySelector("#result");
  //valueForm = document.forms[0].username.value // bunu aşağıda digər formada yazaq
  //valueForm = document.frmBegin.username.value //HTML də name verməsək bu çalışmayacaq
  valueForm = document.querySelector("#username").value; // digər bir metod.
  result.innerHTML = valueForm;
}
