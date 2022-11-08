var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("button", "btn1", "btn btn-dark");
anyElement.innerHTML = "Boxes";
document.querySelector("#btn1").addEventListener("click", boxes);
document.querySelector("#btn1").style.display = "block";
document.querySelector("#btn1").style.marginBottom = "10px";

createAnyElement("button", "btn2", "btn btn-success");
anyElement.innerHTML = "Valid";
document.querySelector("#btn2").addEventListener("click", valid);

createAnyElement("p", "result", "result");

createAnyElement("button", "btn3", "btn");
anyElement.innerHTML = "Enter lesson Name";
document.querySelector("#btn3").addEventListener("click", enterLessonName);

createAnyElement("p", "result2", "result");

var result, result2;
result = document.querySelector("#result");
result2 = document.querySelector("#result2");

function boxes() {
  alert("Hello \n JavaScript"); // \n asağı sətrə keçir.
}

function valid() {
  var message;
  if (confirm("Are you sure to exit?") == true) {
    message = "Deleted chosen item";
  } else {
    message = "Cancel delete for chosen item";
  }
  result.innerHTML = message;
}

function enterLessonName() {
  var message, getValue;
  getValue = prompt("Enter the name of lesson", "HTML"); // vergwld'n sonra yazılan HTML default sayılır.
  if (getValue == null || getValue == "") {
    message = "This part must be filled";
  } else if (getValue == "Javascript") {
    message =
      "You entered the lesson's name as " + getValue + " and it is correct";
  } else {
    message = "Which part of lesson did you explain about " + getValue;
  }
  result2.innerHTML = message;
}
