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

createAnyElement("p", "result", "result");
changeAppenChild(result, "#result");
result.innerHTML = "00";

createAnyElement("button", "btn", "btn btn-dark");
changeAppenChild(btn, "#btn");
btn.innerHTML = "Click";

window.addEventListener("resize", function () {
  result.innerText = Math.floor(Math.random() * 100);
});

let num1 = 7;
let num2 = 6;
btn.addEventListener("dblclick", function () {
  process(num1, num2);
});

function process(p1, p2) {
  result.innerText = p1 * p2;
}

createAnyElement("div", "div1", "container-fluid mt-3");
createAnyElement("div", "div2", "container-fluid mt-3");

createAnyElement("p", "p1", "change");
anyElement.innerText = "Ben Kabarciklanma olayiyim";
var p1 = document.querySelector("#p1");
document.querySelector("#div1").appendChild(p1);
createAnyElement("p", "p2", "change");
anyElement.innerHTML = "Ben yakalama olayiyim";
var p2 = document.querySelector("#p2");
document.querySelector("#div2").appendChild(p2);

p1.style.background = "black";
p1.style.color = 'white';
p1.style.border = "2px solid";
p1.style.padding = "20px";

p1.addEventListener('click',function(){
  alert('P1 elementine tikladin')
},false)
div1.addEventListener('click',function(){
  alert('div1 elementine tikladin')
},false)
p2.addEventListener('click',function(){
  alert('P2 elementine tikladin')
},true)
div2.addEventListener('click',function(){
  alert('div2 elementine tikladin')
},true)

/*False yazdiqda birinci hansi elementı tıkladıqsa həmin elmentə aid funksiya
göstərilir, ikinci isə tıkladığımız elementin içərisində olduğu elmentə aid funksiya göstərilir.  
false - içəridən çölə doğru
true  - çöldən içəri doğru*/
