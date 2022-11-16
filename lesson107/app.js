var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("div", "result", "container-fluid mt-3");
var result = document.querySelector("#result");
result.innerText = "Javascript ilə arxa plan rənginin dəyişdirilməsi.";
result.style.border = "2px solid #ccc";
result.style.padding = "25px";

createAnyElement("button", "btn", "btn btn-dark ml-3");
var btn = document.querySelector("#btn");
btn.type = "button";
btn.innerText = "Change Background  Color";

var count = 0;
btn.addEventListener("click", function () {
  if (count % 2 === 0) {
    result.style.background = "blue";
  } else {
    result.style.background = "red";
  }
  count++;
});
