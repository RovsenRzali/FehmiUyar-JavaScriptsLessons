var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("div", "container", "container-fluid mt-3");
createAnyElement("p", "result", "result ml-3");
anyElement.innerHTML = "Javascript";

var result = document.querySelector("#result");
document.querySelector("#container").appendChild(result);

var container = document.querySelector("#container");
container.style.border = "1px solid";

function creatInput(id) {
  var inpt = document.createElement("input");
  inpt.id = id;
  inpt.type = "text";
  inpt.className = "form-control";
  inpt.name = "username";
  document.querySelector("#container").appendChild(inpt);
}

function creatImg(id, picturesrc) {
  var img = document.createElement("img");
  img.id = id;
  img.src = picturesrc;
  img.alt = "bulb";
  img.className = "mt-5";
  document.querySelector("#container").appendChild(img);
}

creatImg("picture", "img/bulb-on.jpg");

creatInput("username");

createAnyElement("div", "demo", "brd");
anyElement.innerHTML = "Javascript";
var demo = document.querySelector("#demo");
document.querySelector("#container").appendChild(demo);
demo.style.width = "200px";
demo.style.height = "60px";
demo.style.color = "white";
demo.style.border = "1px solid red";
demo.style.backgroundColor = "crimson";
demo.style.padding = "16px";
demo.style.marginLeft = "10px";

var picture = document.querySelector("#picture");
picture.onmousemove = function () {
  document.querySelector("#picture").src = "img/bulb-off.jpg";
};

picture.onmouseout = function () {
  document.querySelector("#picture").src = "img/bulb-on.jpg";
};

result.onmousedown = function () {
  result.style.backgroundColor = "blue";
  document.querySelector("#result").innerHTML = "Hello Javascript";
};

result.onmouseup = function () {
  result.style.backgroundColor = "green";
  result.style.paddingLeft = "5px";
  result.style.textAlign = "center";
  document.querySelector("#result").innerHTML = "JavaScript was switched off";
};

result.ondblclick = function () {
  result.style.backgroundColor = "yellow";
  result.style.paddingLeft = "5px";
  result.style.textAlign = "center";
  document.querySelector("#result").innerHTML =
    "You are increasing your skills";
};

var username = document.querySelector("#username");

function test() {
  username.style.backgroundColor = "orange";
  username.style.padding = "17px";
  username.style.color = "white";
  username.style.width = "200px";
}
username.addEventListener("focus", test);

username.onkeypress = function () {
  username.style.backgroundColor = "grey";
  document.querySelector("#demo").innerHTML = "Pressed one button";
};

username.onkeydown = function () {
  username.style.backgroundColor = "grey";
  document.querySelector("#demo").innerHTML = "Taked your hand over button";
};

username.onkeyup = function () {
  username.style.backgroundColor = "grey";
  document.querySelector("#demo").innerHTML = "Stoped press a button";
};
