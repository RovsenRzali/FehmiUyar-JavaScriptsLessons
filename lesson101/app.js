var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("div", "DivParent", "container-fluid mt-3");

function changeAppenChild(id1, id2) {
  var id1 = document.querySelector(id2);
  document.querySelector("#DivParent").appendChild(id1);
}

programLangs = ["Angular", "React", "Vue", "Node"];

for (i = 0; i < programLangs.length; i++) {
  createAnyElement("p", `p${i + 1}`, `p${i + 1}`);
  var id = document.querySelector(`#p${i + 1}`);
  document.querySelector("#DivParent").appendChild(id);
  document.querySelector(`#p${i + 1}`).innerHTML = programLangs[i];
}

createAnyElement("div", "DivParent2", "container-fluid mt-3");

var btninner = ["Add", "Remove", "Replace"];

for (i = 0; i < btninner.length; i++) {
  createAnyElement("button", `btn${i + 1}`, `btn btn-dark ml-2`);
  var id = document.querySelector(`#btn${i + 1}`);
  document.querySelector("#DivParent2").appendChild(id);
  document.querySelector(`#btn${i + 1}`).innerHTML = btninner[i];
}

var DivParent = document.querySelector("#DivParent");
var p3 = document.querySelector("#p3");
var p4 = document.querySelector("#p4");

function createElementDOM() {
  var p = document.createElement("p");
  var text = document.createTextNode("JavaScript");
  p.appendChild(text);
  DivParent.insertBefore(p, p3);
}

var add = document.querySelector("#btn1");
add.addEventListener("click", createElementDOM);

function removeElementDOM() {
  // DivParent.removeChild(p3)  // 1ci usul
  p3.parentNode.removeChild(p3); //2ci yo
}

var remove = document.querySelector("#btn2");
remove.addEventListener("click", removeElementDOM);

function replaceElementDOM() {
  var p = document.createElement("p");
  var text = document.createTextNode("New Creater");
  p.appendChild(text);
  DivParent.replaceChild(p, p2);
}

var replace = document.querySelector("#btn3");
replace.addEventListener("click", replaceElementDOM);
