var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

function changeAppenChild(id1, id2) {
  var id1 = document.querySelector(id2);
  document.querySelector("#container").appendChild(id1);
}

createAnyElement("div", "container", "container-fluid mt-3");

createAnyElement("div", "result", "alert alert-success");
anyElement.innerHTML = "Javascript";
var result = document.querySelector("#result");
document.querySelector("#container").appendChild(result);

createAnyElement("button", "btn", "btn btn-dark");
anyElement.innerHTML = "Click";
changeAppenChild(btn, "#btn");

function showDate() {
  result.innerHTML = "<span>" + Date() + "</span>";
}

function mclick() {
  alert("First Click");
}

function mOtherClick() {
  alert("Second click event");
}

btn.addEventListener("click", showDate);
btn.addEventListener("mouseover", mclick);
btn.addEventListener("mouseout", mOtherClick);
