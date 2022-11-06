function creatP(par1, par2, par3) {
  getElementP = document.createElement("p");
  getElementP.id = par1;
  getElementP.innerHTML = par2;
  getElementP.className = "page-link";
  document.querySelector("#container").appendChild(getElementP);
}

var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.querySelector("#container").appendChild(anyElement);
}

function creatImg() {
  var getElementImg = document.createElement("img");
  getElementImg.src = "img/bulb-off.jpg";
  getElementImg.id = "picture";
  getElementImg.style.width = "180px";
  getElementImg.style.height = "180px";
  document.querySelector("#container").appendChild(getElementImg);
}

function changeImgon() {
  document.querySelector("#picture").src = "img/bulb-on.jpg";
  document.querySelector("#picture").setAttribute("height", "350px");
}
function changeImgoff() {
  document.querySelector("#picture").src = "img/bulb-off.jpg";
  document.querySelector("#picture").setAttribute("height", "350px");
}
creatImg();

createAnyElement("btn", "btn-bulb-on", "btn btn-dark");
createAnyElement("btn", "btn-bulb-off", "btn btn-dark ml-2");

var btnBulbOn = document.querySelector("#btn-bulb-on");
btnBulbOn.innerHTML = "on";
btnBulbOn.addEventListener("click", changeImgon);
var btnBulbOff = document.querySelector("#btn-bulb-off");
btnBulbOff.innerHTML = "off";
btnBulbOff.addEventListener("click", changeImgoff);

creatP("result", "Javascript");

creatP("result2", "The world will be nice");

function changeCss() {
  var changeCss = document.querySelector("#result2");
  changeCss.style.background = "green";
  changeCss.style.color = "white";
  changeCss.style.marginTop = "10px";
}

createAnyElement("btn3", "ChangeCss", "btn btn-success");

var btn3 = document.querySelector("#ChangeCss");
btn3.innerHTML = "Change css";
btn3.addEventListener("click", changeCss);
document.querySelector("#container").appendChild(btn3);

var box = document.querySelector("#box");
document.querySelector("#container").appendChild(box);

createAnyElement("btn4", "ChangeBoxCss", "btn btn-success mt-4");
anyElement.innerHTML = "Change Box Css";
var btn4 = document.querySelector("#ChangeBoxCss");
btn4.addEventListener("click", changeBoxCss);
document.querySelector("#container").appendChild(btn4);

function changeBoxCss() {
  var changeBoxCss,
    position = 0,
    speed;
  changeBoxCss = document.querySelector("#move");
  speed = setInterval(repeat, 3);
  function repeat() {
    if (position == 550) {
      clearInterval(speed);
    } else {
      position++;
      changeBoxCss.style.top = position + "px";
      changeBoxCss.style.left = position + "px";
    }
  }
}
