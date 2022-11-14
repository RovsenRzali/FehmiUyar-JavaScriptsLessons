var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("div", "DivParent", "container-fluid mt-3");
var DivParent = document.querySelector("#DivParent");

function changeAppenChild(id1, id2) {
  var id1 = document.querySelector(id2);
  document.querySelector("#DivParent").appendChild(id1);
}

createAnyElement("form", "frm", "frm");
changeAppenChild(frm, "#frm");

createAnyElement("div", "form-group", "form-group");
var formGroup = document.querySelector("#form-group");
document.querySelector("#frm").appendChild(formGroup);

createAnyElement("textarea", "message", "form-control");
var message = document.querySelector("#message");
message.name = "message";
document.querySelector("#form-group").appendChild(message);

createAnyElement("p", "result", "badge badge-dark p-2 mt-3");
var result = document.querySelector("#result");
document.querySelector("#form-group").appendChild(result);
result.innerHTML = "150";

var character = 150,
  characterLength;
message.onkeydown = characterControl;
message.onkeyup = characterControl;

function characterControl() {
  characterLength = this.value.length;
  if (character >= characterLength) {
    var lastLength = character - characterLength;
    result.innerText = lastLength + " hərf qaldı";
  } else {
    this.value = this.value.substr(0, character);
    result.innerHTML =
      "Hərf limitiniz bitdi. Ərizə 150 hərfdən artıq ola bilməz";
  }
}
