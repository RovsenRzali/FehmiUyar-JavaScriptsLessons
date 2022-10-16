function validateForm() {
  var valueInput, resultTrue, resultFalse;
  resultTrue = document.querySelector("#resultTrue");
  resultFalse = document.querySelector("#resultFalse");
  valueInput = document.querySelector("#number");

  if (valueInput.checkValidity() == false) {
    resultTrue.style.display = "none";
    resultFalse.style.display = "block";
    resultFalse.innerHTML = valueInput.validationMessage;
  } else {
    resultFalse.style.display = "none";
    resultTrue.style.display = "block";
    resultTrue.innerHTML = "This is Correct";
  }
}

function validateForm2() {
  var valueInput2, resultTrue2, resultFalse2;
  resultTrue2 = document.querySelector("#resultTrue2");
  resultFalse2 = document.querySelector("#resultFalse2");
  valueInput2 = document.querySelector("#number2");

  if (valueInput2.validity.rangeOverflow) {
    //rangeOverflow-- Daxil edilmiş dəyər HTML elementə verilmişin dəyərin max-un yoxlayır.
    resultTrue2.style.display = "block";
    resultFalse2.style.display = "none";
    resultTrue2.innerHTML = valueInput2.validationMessage;
  } else {
    resultFalse2.style.display = "block";
    resultTrue2.style.display = "none";
    resultFalse2.innerHTML = "This is Correct";
  }
}

function validateForm3() {
  var resultTrue3, resultFalse3;
  resultTrue3 = document.querySelector("#resultTrue3");
  resultFalse3 = document.querySelector("#resultFalse3");

  if (document.formValidate.chckbox.checked) {
    resultFalse3.style.display = "none";
    alert("I accept contract.");
  } else {
    resultFalse3.style.display = "block";
    resultTrue3.style.display = "none";
    resultFalse3.innerHTML = "You must sign otherwise you can not continue.";
  }
}
