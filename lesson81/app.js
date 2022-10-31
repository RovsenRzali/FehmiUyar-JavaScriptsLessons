function Person (first,last,age,color) {
  this.firstName = first;
  this.lastName = last
  this.age = age
  this.eyeColor = color
  this.fullName = function () {
    return this.firstName + " " + this.lastName
  }
  this.changeName = function (name) {
    return this.firstName = name;
  } 
  }

  Person.prototype.hair = "yellow"
  Person.prototype.changeName2 = function(name) {
    return this.firstName = name
  }
  var people = new Person ('Fehmi','Uyar',31,'brown')
  people.changeName2("Susema")
  document.querySelector('#result').innerHTML = people.hair;
  document.querySelector('#result2').innerHTML = people.firstName;
  
  