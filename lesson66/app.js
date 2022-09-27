var num = [3, 5, 678, 3, 45, 6];

for (var i = 0; i < num.length; i++) {
  document.querySelector("#result").innerHTML += num[i] + ",";
}

/* yuxarıdakı kodu aşağıdakı kimi yazmaq  kodun icrasın sürətləndirir,
for-un iççində nə qədər az bir şey yazsaq kod o qədər surətli icra olunur. */
var i = 0;
len = num.length;
for (; i < len; i++) {
  document.querySelector("#result2").innerHTML += num[i] + ",";
}

var result3 = document.querySelector("#result3");
var i = 0;
for (; i < len; i++) {
  result3.innerHTML += num[i] + ",";
}

var result4 = document.querySelector("#result4");

result4.innerHTML = num[0] + ",";
result4.innerHTML += num[1];
