var text =
  "Javascript ilə HTML və CSS ə daha yaxşı hökm edir, ekranı canlandırırıq. javascript web dünyasının ruhudur. O yoksa web dünyası cəsəddir.";

document.querySelector("#result").innerHTML =
  text.search(/javascript/i) +
  "<br>" +
  text.search(/javascript/gi) +
  "<br>" +
  text.search(/javascript/gim) +
  "<br>" +
  /ilə/.test(text) +
  "<br>" +
  /HTML/.exec(text);