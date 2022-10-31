function result (par1,par2) {
  document.querySelector(par1).innerHTML = par2
}

function showMax() {
  var i, Max=-Infinity
  for(i=0;i<arguments.length;i++) {
    if(arguments[i]>Max) {
      Max = arguments[i]
    }
  }
  return Max
}
  
result('#result',showMax(5,6,56))

function sumAll() {
  var i, sum=0;
  for (i=0;i<arguments.length;i++) {
   sum +=arguments[i]
  }
  return sum
}

result('#result2',sumAll(5,6,5))


