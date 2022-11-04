function checkCookies() {
  var messages = "";
  if (navigator.cookieEnabled == false) {
    messages = "If cookies was deactive, page can not work smoothly";
  } else {
    messages = "Cookies is active";
  }
  alert(messages);
}

function creatHead(par1, iner, par2) {
  var getHead = document.createElement("h2");
  getHead.id = par1;
  getHead.innerHTML = iner;
  getHead.className = par2;
  document.querySelector("#container").appendChild(getHead);
}
creatHead("result", "basliq");

window.onload = function () {
  var obj = document.querySelector("#result");
  obj.style.color = "red";
  obj.innerHTML = "Javascript study";
  obj.style.fontSize = "39px";
};

function creatDiv(par1, iner) {
  var getDiv = document.createElement("div");
  getDiv.id = par1;
  getDiv.innerHTML = iner;
  getDiv.className = "container-fluid mt-3";
  getDiv.style.border = "1px solid";
  getDiv.style.width = "280px";
  getDiv.style.height = "380px";
  getDiv.style.overflow = "scroll";
  document.querySelector("#container").appendChild(getDiv);
}

// function creatp(par1, iner, par2) {
//   var getp = document.createElement("p");
//   getp.id = par1;
//   getp.innerHTML = iner;
//   getp.className = par2;
//   document.querySelector("#demo").appendChild(getp);
// }

function creatHead2(par1, iner, par2) {
  var getHead2 = document.createElement("h2");
  getHead2.id = par1;
  getHead2.innerHTML = iner;
  getHead2.className = par2;
  document.querySelector("#demo").appendChild(getHead2);
}

creatDiv("demo", "test");
var x = 0;
document.querySelector("#demo").onscroll = function () {
  document.querySelector("#result5").innerHTML = x++;
};

for (i = 0; i < 10; i++) {
  creatHead2("result3", `Test${i + 1}`);
}
