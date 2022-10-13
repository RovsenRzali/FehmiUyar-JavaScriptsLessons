var result, times;
result = document.querySelector("#result");
times = setInterval(process, 1000);

function process() {
  result.innerHTML = "setTimeout ilə JavaScript istifadəsi";
  var d = new Date();
  result.innerHTML += "<br>" + d.toLocaleTimeString();
}

function operations() {
  var result2, data1, data2;
  result2 = document.querySelector("#result2");
  data1 = Number(document.querySelector("#data1").value);
  data2 = Number(document.querySelector("#data2").value);
  result2.innerHTML = data1 * data2;
}

setInterval(operations, 1000);
