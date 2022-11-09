var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("h3", "h3", "h3");

document.querySelector("#h3").innerText = "Div Disindayim";

createAnyElement("div", "DivParent", "container-fluid mt-3");

function changeAppenChild(id1, id2) {
  var id1 = document.querySelector(id2);
  document.querySelector("#DivParent").appendChild(id1);
}

createAnyElement("h1", "head", "alert alert-danger");

changeAppenChild(head, "#head");
var head = document.querySelector("#head");
head.innerHTML = "JavaScript";
head.setAttribute("ajax", "open");

programLangs = [
  "Angular",
  "React",
  "Vue",
  "Node",
  "PHP",
  "ASP.NEt",
  "JSP",
  "ColdFusion",
];

for (i = 0; i < programLangs.length; i++) {
  createAnyElement("p", `p${i + 1}`, `p${i + 1}`);
  var id = document.querySelector(`#p${i + 1}`);
  document.querySelector("#DivParent").appendChild(id);
  document.querySelector(`#p${i + 1}`).innerHTML = programLangs[i];
}

createAnyElement("span", "p8", "p8");
document.querySelector("#p8").innerText = "ColdFusion";

createAnyElement("p", "result", "result ml-3");

function printResult(par1, par2) {
  document.querySelector("#result").innerHTML += par1 + ": " + par2 + ".<br>";
}

var elementNodes = document.querySelector("#DivParent").parentNode.nodeName;
printResult("elementNodes", elementNodes);

var elementNodes2 = document.querySelector("#h3").parentNode.nodeName;
printResult("elementNodes2", elementNodes2);

var elementNodes3 = document.querySelector("#p4").parentNode;
elementNodes3.style.color = "red";
elementNodes3.style.backgroundColor = "black";
elementNodes3.style.padding = "50px";

var elementNodes4 = document.querySelector("#DivParent").children;
printResult("elementNodes4", elementNodes4.length);
for (i = 0; i < elementNodes4.length; i++) {
  elementNodes4[i].style.color = "blue";
}

var elementNodes5 =
  document.querySelector("#DivParent").children[0].firstChild.nodeValue;
printResult("elementNodes5", elementNodes5);

var elementNodes6 = document.querySelector("#DivParent").children;
var x = "";
for (i = 0; i < elementNodes6.length; i++) {
  x += elementNodes6[i].firstChild.nodeValue + "\n";
  //firstChild.nodeValue bunun evezine innerHTML de yaza bilerik
}
printResult("elementNodes6", x);
printResult("h1in deyeri", elementNodes6[0].textContent);

var elementNodes7 = document.querySelector("#DivParent").firstElementChild;
elementNodes7.style.color = "grey";
printResult("elementNodes7", elementNodes7);

var elementNodes8 = document.querySelector("#DivParent").lastElementChild;
printResult("elementNodes8", elementNodes8.firstChild.nodeValue);

var elementNodes9 = document.querySelector("#head").nextElementSibling;
printResult("elementNodes9", elementNodes9.firstChild.nodeValue);
printResult("elementNodes9", elementNodes9.textContent);

var elementNodes10 = document.querySelector("#p8").previousElementSibling;
printResult("elementNodes10", elementNodes10.firstChild.nodeValue);
printResult("elementNodes10", elementNodes10.textContent);
