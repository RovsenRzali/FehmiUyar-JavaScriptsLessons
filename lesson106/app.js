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

createAnyElement("label", "lbl", "lbl");
var lbl = document.querySelector("#lbl");
lbl.for = "tc";
lbl.innerText = 'TC NO'
document.querySelector("#form-group").appendChild(lbl);

createAnyElement("div", "row", "row");
var row = document.querySelector("#row");
document.querySelector("#form-group").appendChild(row);

createAnyElement("div", "col3", "col-3");
var col3 = document.querySelector("#col3");
document.querySelector("#row").appendChild(col3);

createAnyElement("input", "tc", "form-control");
var tc = document.querySelector("#tc");
tc.type = 'text';
tc.name = 'tc'
document.querySelector("#col3").appendChild(tc);

createAnyElement("button", "btn", "btn btn-dark");
var btn = document.querySelector("#btn");
btn.type = 'button';
btn.innerText = 'Control'
document.querySelector("#row").appendChild(btn);

createAnyElement("p", "resultFalse", "alert alert-danger");
var resultFalse = document.querySelector("#resultFalse");
document.querySelector("#frm").appendChild(resultFalse);
resultFalse.style.display = 'none'

createAnyElement("p", "resultTrue", "alert alert-success");
var resultTrue = document.querySelector("#resultTrue");
document.querySelector("#frm").appendChild(resultTrue);
resultTrue.style.display = 'none'



