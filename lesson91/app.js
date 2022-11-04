function checkCookies() {
  var messages = "";
  if (navigator.cookieEnabled == false) {
    messages = "If cookies was deactive, page can not work smoothly";
  } else {
    messages = "Cookies is active";
  }
  alert(messages)
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
