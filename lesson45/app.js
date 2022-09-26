var pc = { type: "Hp", MemoryType: "256gb SSD", ram: "8Gb", year: 2013 };

function show() {
  var text = "";
  for (x in pc) {
    text += pc[x] + ", ";
  }
  document.getElementById("result").innerHTML = text;
}
show();
