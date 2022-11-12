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

createAnyElement("img", "picture", "picture");
changeAppenChild(picture, "#picture");
var picture = document.querySelector("#picture");
picture.src = "img/bulb-on.jpg";
picture.style.width = "100px";
picture.style.height = "180px";
picture.style.display = "block";

createAnyElement("button", "btnOnOff", "btn btn-dark");
changeAppenChild(btnOnOff, "#btnOnOff");
var btnOnOff = document.querySelector("#btnOnOff");
btnOnOff.innerText = "on/off";
btnOnOff.type = "button";
btnOnOff.style.display = "block";
btnOnOff.addEventListener("click", hideShow);

function hideShow() {
  if (picture.style.display == "none") {
    picture.style.display = "block";
  } else {
    picture.style.display = "none";
  }
}

createAnyElement("a", "doComment", "form-controll");
changeAppenChild(doComment, "#doComment");
var doComment = document.querySelector("#doComment");
doComment.innerText = "comment /";
doComment.href = "#";
doComment.addEventListener("click", Show);

createAnyElement("a", "cancelComment", "form-controll");
changeAppenChild(cancelComment, "#cancelComment");
var cancelComment = document.querySelector("#cancelComment");
cancelComment.innerText = "cancelComment";
cancelComment.href = "#";
cancelComment.addEventListener("click", hide);

createAnyElement("input", "username", "form-controll");
changeAppenChild(username, "#username");
var username = document.querySelector("#username");
username.style.display = "none";
DivParent.insertBefore(username, cancelComment);

function Show() {
  username.style.display = "block";
}

function hide() {
  username.style.display = "none";
}
