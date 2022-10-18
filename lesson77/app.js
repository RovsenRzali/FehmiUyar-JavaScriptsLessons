function show() {
  var username, usernames;
  username = document.querySelector("#username").value;
  usernames = document.getElementsByName("test")[0];
  usernames.style.display = "block";
  usernames.innerHTML = usernames.length;
}

/* Hamısını yazdırmaq üçün "for" loop-dan istifadə edirik.*/

function show2() {
  var username, usernames, i, j;
  username = document.querySelector("#username").value;
  usernames = document.getElementsByName("test");
  for (i = 0; i < usernames.length; i++) usernames[i].style.display = "block";

  for (j = 0; j < usernames.length; j++) {
    usernames[j].innerHTML = j + 1 + "." + username;
  }
}
