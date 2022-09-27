/*Bu formada yazanda boruzerin çökməyinə səbəb olur. 
      9  10-dan kiçik olduğu və i++ yazmadığımız üçün bu proses dayanmadan icra olunur.
      */
/*
      function show() {
        var message = "", i=0;
        while(i<10) {
            message = "Number: "+i+"<br>";
        }
        document.getElementById("result").innerHTML = message;
      }
      */

// Düzgün forması

function creatP(par1, par2) {
  var getElementP = document.createElement("p");
  getElementP.id = par1;
  getElementP.innerHTML = par2;
  document.body.appendChild(getElementP);
}

function show2() {
  var message = "",
    i = 0;
  while (i < 10) {
    message += "Number: " + i + ".<br>";
    i++;
  }
  creatP("result2", message);
}
show2();

/* do/while do birinci yerinə yetirir sora şərti doğruluğunu yoxlayır.
      Əgər şərt ödənsə hamısın yerinə yetirəcək, ödənməsə 1 dəfə icra olunur.*/
function show3() {
  var message = "",
    i = 3;
  do {
    message += "DoWhile: " + i + ".<br>";
    i++;
  } while (i < 10);
  creatP("result3", message);
}
show3();
