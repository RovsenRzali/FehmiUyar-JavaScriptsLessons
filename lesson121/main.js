let $ = (par) => document.querySelector(par);

// import { Pi, sum, square, hipotenus } from "./js/lib.js";

// $("#result").innerHTML =
//  Pi + "<br>" +
//  square(3, 4) + "<br>" +
//  hipotenus(3, 4);

/*Əgər lib dəki bütün funksiyaların hamısın çəkmək istəsək 
   bu zaman import u aşağıdakı formada yazacayıq:
   import * as lib from "./js/lib.js"; 
   
  və 
  çəkdiyimiz funksiyalraın qabağına lib. yazacayıq
  
  $("#result").innerHTML =
 lib.Pi + "<br>" + 
 lib.square(3, 4) + "<br>" +
  lib.hipotenus(3, 4);*/

import * as lib from "./js/libA.js";
import multi, { x } from "./js/libB.js";
import car from "./js/libC.js";

$("#result").innerHTML =
  lib.Pi +
  "<br>" +
  lib.square(3, 4) +
  "<br>" +
  lib.hipotenus(3, 4) +
  "<br>" +
  lib.increamentNum() +
  "<br>";

$("#result").innerHTML += 
   multi(5, 6) + "<br>" + x;

class Test {
  constructor() {
    let newCar = new car("Mercedes S600");
    this.Name = newCar.name;
  }
}

let y = new Test();
$("#result2").innerHTML =
   "Class -ların çağrılması: " + y.Name;
