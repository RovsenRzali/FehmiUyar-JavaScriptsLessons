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
