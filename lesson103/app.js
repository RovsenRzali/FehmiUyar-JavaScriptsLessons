var anyElement;
function createAnyElement(elmnt, id, clsnm) {
  anyElement = document.createElement(elmnt);
  anyElement.id = id;
  anyElement.className = clsnm;
  document.body.appendChild(anyElement);
}

createAnyElement("div", "DivParent", "container-fluid mt-3");
var DivParent = document.querySelector("#DivParent");

function changeAppenChild(id1, id2) {
  var id1 = document.querySelector(id2);
  document.querySelector("#DivParent").appendChild(id1);
}

createAnyElement("p", "result", "result");
changeAppenChild(result, '#result')   
function go(ID,address,second) {
  if(second === 0) {
    window.location.href = address
    return;
  }
  second--;
  document.querySelector(ID).innerHTML = second + " in you will directed"
  setTimeout(function(){
    go(ID,address,second)
  },1000)
}

go('#result','https://www.xe.com/currencyconverter/convert/?Amount=1&From=TRY&To=AZN',9)