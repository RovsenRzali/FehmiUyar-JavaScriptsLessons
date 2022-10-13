function validateForm() {
  var valueInput, result;
  result = document.querySelector("#result");
  valueInput = document.querySelector("#username").value;
  if (valueInput == "") {
    result.style.display = "block";
    result.innerHTML = "Istifadəçi adı doldurulmalıdır.";
    return false;
  }
}
/* Bu işi HTML də inputun içərisinə "required" yazmaqlada həll etmək olar. */


function validateForm2() {
  var valueInput, result,messages;
  result2 = document.querySelector("#result2");
  result2.style.display = "block";
  valueInput = document.querySelector("#username2").value;
  if (valueInput == "") {
    messages = "Istifadəçi adı doldurulmalıdır.";
  } else if (isNaN(valueInput)) {
    messages = "Zəhmət olmasa rəqəm daxil edin"
  } else if(valueInput < 1 || valueInput >6) {
    messages = "Enter number from 1 to 6"
  } else {
    messages= "This is correct"
  }
  result2.innerHTML = messages

}