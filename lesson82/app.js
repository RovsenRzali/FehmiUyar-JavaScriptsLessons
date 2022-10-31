function result (par1,par2) {
  document.querySelector(par1).innerHTML = par2
}

function multi(x,y) {
  return x * y
}
  
result('#result',multi(5,6))

function Message() {
  alert("Forever JavaScript")
}

function process (x,y,z) {
  return multi(x,y) + z
}


// (function () {
//   alert("Funksiya özü-özünü çağırır")
// })()

result('#result2',process(3,4,5))

function percentage (x,y,z) {
  return arguments.length
}

result ('#result3',percentage(4,5,6))
result ('#result4',percentage.toString())