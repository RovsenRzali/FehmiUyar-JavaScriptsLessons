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

createAnyElement("button", "obj", "btn btn-dark");
changeAppenChild(obj, "#obj");
var obj = document.querySelector("#obj");
obj.style.width = "110px";
obj.style.height = "110px";
obj.style.position = "absolute";
obj.style.border = "none";

var counter = 0,
  xpos,
  ypos;

obj.onmouseover = function () {
  counter++;
  xpos = parseInt(Math.random() * 1000);
  ypos = parseInt(Math.random() * 800);
  obj.style.left = xpos + "px";
  obj.style.top = ypos + "px";
  obj.style.width = this.clientWidth + 10 + "px";
  obj.style.height = this.clientHeight + 10 + "px";
};

obj.onclick = function () {
  alert(counter + "dəfədə tutdun.");
  obj.style.width = "110px";
  obj.style.height = "110px";
  counter = 0;
};
