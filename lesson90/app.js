function creatParagraph(par1, par2) {
  var paragraph = document.createElement("p");
  paragraph.id = par1;
  paragraph.innerHTML = par2;
  paragraph.style.width = "70px";
  paragraph.style.height = "70px";
  paragraph.style.marginBottom = "10px";
  paragraph.style.border = "2px solid";
  document.querySelector("#container").appendChild(paragraph);
}
creatParagraph("result", "Ededin kokaltisi");

function sqrt() {
  var getNumber, result;
  getNumber = prompt("Enter digit", " ");
  result = document.querySelector("#result");
  result.innerHTML = Math.sqrt(getNumber);
}
var sqr = document.querySelector("#sqr");
document.querySelector("#container").appendChild(sqr);

function creatbtn(par1, par2) {
  var btn = document.createElement("button");
  btn.id = par1;
  btn.innerHTML = par2;
  btn.className = "btn btn-danger";
  btn.style.marginLeft = "10px";
  document.querySelector("#container").appendChild(btn);
}

creatbtn("btn2", "click me");
document.querySelector("#btn2").onclick = sqrt;

creatbtn("btn3", "click me");

creatParagraph("result2", "ededin kvadrati");
var btn3 = document.querySelector("#btn3");
btn3.onclick = function () {
  var getNumber3, result2;
  getNumber3 = prompt("Reqemi daxil edin", "Buraya..");
  result2 = document.querySelector("#result2");
  result2.innerHTML = Math.sqrt(getNumber3);
};
