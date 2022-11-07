var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("div", "container", "container-fluid mt-3");

function changeAppenChild(id1, id2) {
  var id1 = document.querySelector(id2);
  document.querySelector("#container").appendChild(id1);
}

createAnyElement("div", "text", "alert alert-danger");
changeAppenChild(text, "#text");
var text = document.querySelector("#text");
text.innerHTML = "HTML DOM remove eventlistener";
text.style.background = "#123225";

createAnyElement("p", "result", "result");
changeAppenChild(result, "#result");
result.innerHTML = "00";

createAnyElement("button", "btn", "btn btn-dark");
changeAppenChild(btn, "#btn");
var btn = document.querySelector("#btn");
btn.innerHTML = "Click";

text.addEventListener("mousemove", randomNumber, false);

function randomNumber() {
  document.querySelector("#result").innerText = Math.floor(
    Math.random() * 1000000
  );

  x = Math.floor(Math.random() * 10);
  text.style.background = `#${x}34522`;
}

btn.onclick = function () {
  text.removeEventListener("mousemove", randomNumber);
};

if (btn.addEventListener) {
  btn.addEventListener("click", mClick, false);
} else if (btn.attachEvent) {
  btn.attachEvent("onclick", mClick);
}

function mClick() {
  alert("Javascript");
}
