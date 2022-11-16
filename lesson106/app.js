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
lbl.innerText = "TC NO";
document.querySelector("#form-group").appendChild(lbl);

createAnyElement("div", "row", "row");
var row = document.querySelector("#row");
document.querySelector("#form-group").appendChild(row);

createAnyElement("div", "col3", "col-3");
var col3 = document.querySelector("#col3");
document.querySelector("#row").appendChild(col3);

createAnyElement("input", "tc", "form-control");
var ID = document.querySelector("#tc");
ID.type = "text";
ID.name = "tc";
document.querySelector("#col3").appendChild(ID);

createAnyElement("button", "btn", "btn btn-dark");
var btn = document.querySelector("#btn");
btn.type = "button";
btn.innerText = "Control";
document.querySelector("#row").appendChild(btn);

createAnyElement("p", "resultFalse", "alert alert-danger");
var resultFalse = document.querySelector("#resultFalse");
document.querySelector("#frm").appendChild(resultFalse);
resultFalse.style.display = "none";

createAnyElement("p", "resultTrue", "alert alert-success");
var resultTrue = document.querySelector("#resultTrue");
document.querySelector("#frm").appendChild(resultTrue);
resultTrue.style.display = "none";

var odd = 0,
  even = 0,
  result,
  i,
  z,
  tcTotal = 0;

btn.addEventListener("click", function () {
  resultFalse.style.display = "block";
  for (i = 0; i < 9; i += 2) {
    odd += Number(ID.value[i]);
  }
  odd *= 7;
  for (i = 1; i < 8; i += 2) {
    even += Number(ID.value[i]);
  }
  result = Math.abs(odd - even);

  for (z = 0; z < 10; z++) {
    tcTotal += Number(ID.value[z]);
  }

  if (ID.value == "") {
    resultFalse.textContent = "Bu hissə doldrulmalıdır.";
  } else if (isNaN(ID.value)) {
    resultFalse.textContent = "Seriya nömrəsi  rəqəmlərdən ibarət olmalıdır.";
  } else if (ID.value.length !== 11) {
    resultFalse.textContent = "Seriya nömrəsi 11 rəqəmdən ibarət olmalıdır.";
  } else if (ID.value[0] == 0) {
    resultFalse.textContent = "İlk rəqəm 0 ola bilməz.";
  } else if (result % 10 != Number(ID.value[9])) {
    resultFalse.textContent = "Uyğunluq tapılmadı.";
  } else if (tcTotal % 10 != Number(ID.value[10])) {
    resultFalse.textContent = "Uyğunluq tapılmadı." + tcTotal;
  } else {
    resultFalse.style.display = "none";
    resultTrue.style.display = "block";
    resultTrue.textContent = "Daxil edilən seriya nömrəsi doğrudur.";
  }
});

// 02345678952
// 12345678952
// 12345678950
