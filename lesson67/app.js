/* keyword-u  dəyişən adı kimi istifadə etmək olmaz.
   name istifadə etdiyimiz üçün səhvlər yaranır*/
var name = [4,5,3,2,9],
  i,
  result;
result = document.querySelector("#result");
for (i = 0; i < name.length; i++) {
  result.innerHTML += name[i] + "<br>";
}
