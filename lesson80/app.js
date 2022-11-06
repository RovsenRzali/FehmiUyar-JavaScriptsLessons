var anyElement;
function createP(id) {
  anyElement = document.createElement('p');
  anyElement.id = id;
  document.querySelector('#container').appendChild(anyElement);
}

createP('result') 
createP('result2') 
createP('result3') 
createP('result4') 

function person (first,last,age,color) {
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

  var people = new person ('Fehmi','Uyar',31,'brown')
  document.querySelector('#result').innerHTML = people.eyeColor;
  
  var x,message = "",people, message2= "";
  people.hair = true; 
  for (x in people) {
    message += people[x] + "<br>";
  }

  delete people.eyeColor;

  for (y in people) {
    message2 += people[y] + "<br>";
  }

  document.querySelector('#result2').innerHTML = 
  message + "<br>" + message2
  + "<br>" +
  people.fullName();

  people.changeName("Ayfer")

  document.querySelector('#result3').innerHTML =
  people.fullName() 

