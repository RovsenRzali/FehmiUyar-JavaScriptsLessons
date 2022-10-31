function result (par1,par2) {
  document.querySelector(par1).innerHTML = par2
}

var person ={
  firstName: "Fehmi",
  lastName: "Uyar",
  age: 25,
  eyeColor: "black",
  fullName: function() {
   return this.firstName + " " + this.lastName
  }
}


var people = {
  firstName: "Ayfer",
  lastName: "Uyar"
}
var x = person.fullName.call(people)
  
result('#result',x)

var y = person.fullName.apply(people)

result('#result2',y)

result('#result3',Math.max(2,3,4,7,5))

result('#result4',Math.max.apply(null,[2,3,4,7,14]))


