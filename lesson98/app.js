var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("div", "DivParent", "container-fluid mt-3");

function changeAppenChild(id1, id2) {
  var id1 = document.querySelector(id2);
  document.querySelector("#DivParent").appendChild(id1);
}

createAnyElement("h1", "head", "alert alert-danger");
changeAppenChild(head, "#head");
var head = document.querySelector("#head");
head.innerHTML = "JavaScript";
head.setAttribute('ajax','open')

programLangs = ['Angular',"React",'Vue',"Node","PHP","ASP.NEt","JSP","ColdFusion"]

for(i=0;i<programLangs.length;i++) {
  createAnyElement("p", `p${i+1}`, `p${i+1}`);
  var id = document.querySelector(`#p${i+1}`);
  document.querySelector("#DivParent").appendChild(id);
  document.querySelector(`#p${i+1}`).innerHTML = programLangs[i]
}

var elementNodes = document.querySelector('#head').firstChild.nodeValue
//alert(elementNodes)

var elementNodes2 = document.querySelector('#DivParent').firstChild.nodeValue
//alert(elementNodes2)

var elementNodes3 = document.querySelector('#head').nodeName
//alert(elementNodes3)

var elementNodes4 = document.querySelector('#p4').firstChild.nodeValue
//alert(elementNodes4)

var elementNodes5 = document.querySelector('#head').getAttributeNode('ajax').nodeValue
//alert(elementNodes5)

var elementNodes6 = document.querySelector('#p6').firstChild.nodeType
alert(elementNodes6)



