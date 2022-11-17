var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("div", "container", "container-fluid mt-3");
var container = document.querySelector("#container");
container.style.border = "2px solid #ccc";
container.style.padding = "25px";

createAnyElement("p", "result", "result");
var result = document.querySelector("#result");
document.querySelector("#container").appendChild(result);

var i,
  x,
  text = "",
  t = 1;
for (i = 1; i < 14; i++) {
  if (i <= 7) {
    for (j = 1; j <= i; j++) {
      text += j + "";
    }
  } else {
    for (j = 1; j < i - t; j++) {
      text += j + "";
    }
    t += 2;
  }
  text += "<br>";
}

result.innerHTML = text;
