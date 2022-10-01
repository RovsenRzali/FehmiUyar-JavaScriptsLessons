var result, result2;
result = document.querySelector("#result");
result2 = document.querySelector("#result2");

result.innerHTML =
  "screen.windth: " +
  screen.width +
  "<br>" +
  "screen.height: " +
  screen.height +
  "<br>" +
  "screen.availWidth: " +
  screen.availWidth +
  "<br>" +
  "screen.availHeight: " +
  screen.availHeight +
  "<br>" +
  "screen.colorDepth: " +
  screen.colorDepth +
  "<br>" +
  "screen.pixelDepth: " +
  screen.pixelDepth;

result2.innerHTML =
  "window.location.href: " +
  window.location.href +
  "<br>" +
  "window.location.hostname: " +
  window.location.hostname +
  "<br>" +
  "window.location.pathname: " +
  window.location.pathname +
  "<br>" +
  "window.location.protocol: " +
  window.location.protocol.pathname +
  "<br>" +
  "window.location.protocol: " +
  window.location.protocol +
  "<br>" +
  "window.location.port: " +
  window.location.port;

function load() {
  window.location.assign("https://www.youtube.com/watch?v=Qy5t5VdJCEc&list=PLY20HpFruiK12kqke7T5OQVu1BK2ELQL8&index=71");
}
