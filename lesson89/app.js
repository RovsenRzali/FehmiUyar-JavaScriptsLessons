function creatP(par1, par2, par3) {
  getElementP = document.createElement("p");
  getElementP.id = par1;
  getElementP.innerHTML = par2;
  getElementP.className = "page-link";
  document.querySelector("#container").appendChild(getElementP);
}

creatP("result", "Javascript");

function creatImg() {
  var getElementImg = document.createElement("img");
  getElementImg.src = "img/bulb-on.jpg";
  getElementImg.id = "picture2";
  getElementImg.style.width = "180px";
  getElementImg.style.height = "180px";
  document.querySelector("#container").appendChild(getElementImg);
}
creatImg();

function changeImgon() {
  document.querySelector("#picture").src = "img/bulb-on.jpg";
  document.querySelector("#picture").setAttribute("height", "350px");
}
function changeImgoff() {
  document.querySelector("#picture").src = "img/bulb-off.jpg";
  document.querySelector("#picture").setAttribute("height", "350px");
}

creatP("result2", "The world will be nice");

function changeCss() {
  var changeCss = document.querySelector("#result2");
  changeCss.style.background = "green";
  changeCss.style.color = "white";
  changeCss.style.marginTop = "10px";
}

var btn = document.querySelector("#ChangeCss");
document.querySelector("#container").appendChild(btn);

var box = document.querySelector("#box");
document.querySelector("#container").appendChild(box);

var box = document.querySelector("#ChangeBoxCss");
document.querySelector("#container").appendChild(box);

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
