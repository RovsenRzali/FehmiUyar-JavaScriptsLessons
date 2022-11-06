function createAnyElement(elmnt, id, clsnm) {
  var anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}
createAnyElement("div", "container", "container-fluid mt-3");
function creatInput(id) {
  var inpt = document.createElement("input");
  inpt.id = id;
  inpt.type = "text";
  inpt.className = "form-control";
  inpt.name = "username";
  document.querySelector("#container").appendChild(inpt);
}

creatInput("username");

function changeFunction() {
  var getInput = document.querySelector("#username");
  getInput.value = getInput.value.toUpperCase();
}

var username = document.querySelector("#username");
username.addEventListener("change", changeFunction);

function creatImg(id, picturesrc) {
  var img = document.createElement("img");
  img.id = id;
  img.src = picturesrc;
  img.alt = "bulb";
  img.className = "mt-5";
  document.querySelector("#container").appendChild(img);
}

creatImg("picture", "img/bulb-on.jpg");
var picture = document.querySelector("#picture");

function onMouseOver() {
  picture.src = "img/bulb-off.jpg";
}

function onMouseOut() {
  picture.src = "img/bulb-on.jpg";
}

picture.addEventListener("mouseover", onMouseOver);
picture.addEventListener("mouseout", onMouseOut);
