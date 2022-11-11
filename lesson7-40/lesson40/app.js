var note = 50,
message = "";
function showAnswer() {
if (note >= 60) {
  message = "Imtahan keçdiniz";
} else {
  message = "Bəxtiniz növbəti smestr sinayın";
}
document.getElementById("result3").innerHTML = message;
}

// yuxardakı funksiyanı qısa fromada aşağıdakı fromada yazırıq.
function showAnswer1() {
result = note >= 60 ? "Imtahandan keçdiniz" : "İmtahandan kəsildiniz.";
document.getElementById("result4").innerHTML = result;
}
showAnswer1();

document.getElementById("result5").innerHTML = "2" > "12";