function creatP(par1,par2) {
  var getElementP = document.createElement("p")
  getElementP.id = par1;
  getElementP.innerHTML = par2;
  document.body.appendChild(getElementP)
}
try {
  alerd("JavaScript");
} catch (e) {
  creatP("result",e.message + "<br>" + e.name)
}
var num = 7;
try {
  // eval("alert('JavaScript')")
  num.toPrecision(400)
} catch (e) {
  creatP("result2",e.message + "<br>" + e.name)
}
 
try {
  num.toUpperCase()
} catch (e) {
  creatP("result3",e.message + "<br>" + e.name)
}

try {
decodeURI("%")
} catch (e) {
  creatP("result4",e.message + "<br>" + e.name)
}

try {
  num = y* 8
  } catch (e) {
    creatP("result5",e.message + "<br>" + e.name)
  }

