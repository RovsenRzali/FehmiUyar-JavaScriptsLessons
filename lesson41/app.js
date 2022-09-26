function noteResult() {
  var lessonNote, examNote, message, average;
  lessonNote = Number(document.getElementById("midTerm").value);
  examNote = Number(document.getElementById("final").value);
  average = lessonNote + examNote;
  if (isNaN(lessonNote)) {
    message = "enter only digital";
  } else if (isNaN(examNote)) {
    message = "enter only digital into final";
  } else {
    message = average >= 60 ? "Kafi" : "Qeyri kafi";
  }

  document.getElementById("result2").innerHTML = message;
}

// yuxarıdakı funksiyanı başqa bir formada yazırıq.
function noteResult2() {
  var lessonNote2, examNote2, message2, average2;
  lessonNote2 = Number(document.getElementById("midTerm2").value);
  examNote2 = Number(document.getElementById("final2").value);
  average2 = lessonNote2 + examNote2;
  if (isNaN(lessonNote2)) {
    message2 = "enter only digital";
  } else if (isNaN(examNote2)) {
    message2 = "enter only digital into final";
  } else {
    if (average2 < 51) {
      message2 = "Imtahandan kəsildiniz.";
    } else if (average2 >= 51 && average2 <= 60) {
      message2 = "Kafi:E";
    } else if (average2 >= 61 && average2 <= 70) {
      message2 = "Kafi:D";
    } else if (average2 >= 71 && average2 <= 80) {
      message2 = "Kafi:C";
    } else if (average2 >= 81 && average2 <= 90) {
      message2 = "Kafi:B";
    } else if (average2 >= 91 && average2 <= 100) {
      message2 = "Kafi:A";
    } else {
      message2 = "Zəhmət olmasa 0 ilə 50 arasında rəqəm daxil edin.";
    }
  }

  document.getElementById("result3").innerHTML = message2;
}
