var x;

document.querySelector("#result").innerHTML =
  "JavaScript: " +
  typeof "JavaScript" +
  "<br>" +
  "7: " +
  typeof 7 +
  "<br>" +
  "3.14: " +
  typeof 3.14 +
  "<br>" +
  "NaN: " +
  typeof NaN +
  "<br>" +
  "true: " +
  typeof true +
  "<br>" +
  "[5,6,8,9]: " +
  typeof [5, 6, 8, 9] +
  "<br>" +
  "{name:'Asus', ram:'8gb', Memory:'SSD'}: " +
  typeof { name: "Asus", ram: "8gb", Memory: "SSD" } +
  "<br>" +
  "new Date(): " +
  typeof new Date() +
  "<br>" +
  "function() {}: " +
  typeof function () {} +
  "<br>" +
  "null: " +
  typeof null +
  "<br>" +
  "x dəyişkəni: " +
  typeof x;

document.querySelector("#result2").innerHTML =
  "JavaScript: " +
  "JavaScript".constructor +
  "<br>" +
  "7: " +
  (7).constructor +
  "<br>" +
  "3.14: " +
  (3.14).constructor +
  "<br>" +
  "NaN: " +
  NaN.constructor +
  "<br>" +
  "true: " +
  true.constructor +
  "<br>" +
  "[5,6,8,9]: " +
  [5, 6, 8, 9].constructor +
  "<br>" +
  "{name:'Asus', ram:'8gb', Memory:'SSD'}: " +
  { name: "Asus", ram: "8gb", Memory: "SSD" }.constructor +
  "<br>" +
  "new Date(): " +
  new Date().constructor +
  "<br>" +
  "function() {}: " +
  function () {}.constructor;

// null və x-in konstruktoru yoxdu.

var langs = [
  "Javascript",
  "Angular Js",
  "PHP",
  "Node.js",
  "Vue Js",
  "ASp.net",
  "JSP",
  "Reaact JS",
  "HTML",
  "CSS3",
];

var d = new Date();

function isArray(langs) {
  // -1 ilə müqayisə edirik, əgər Array varsa true yazılacaq yoxdusa false.
  /*Əgər burda -1 ilə müqayisəni yazmasaq ekranda axtardığımız dəyəri tapmayanda
  -1 göstərəcək. */
  return langs.constructor.toString().indexOf("Array") > -1;
}

document.querySelector("#result3").innerHTML = isArray(langs);
document.querySelector("#result4").innerHTML = langs.constructor === Array;

var toDay = new Date();
function isDate() {
  return toDay.constructor.toString().indexOf("Date") > -1;
}

document.querySelector("#result5").innerHTML = isDate();
