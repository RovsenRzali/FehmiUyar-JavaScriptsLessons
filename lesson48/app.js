var Number1,
  Number2,
  Operator,
  result,
  answer,
  True = 0,
  False = 0;

// Html elementlərini çağırmaq
Number1 = document.querySelector("#Number1");
Number2 = document.querySelector("#Number2");
Operator = document.querySelector("#Operator");
result = document.querySelector("#result");
answer = document.querySelector("#answer");
True = document.querySelector("#True");
False = document.querySelector("#False");

// təsadüfi rəqəm yaradan funksiya
function RandomNumber(min, max) {
  var number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}

// Oyun başlıyanda və ya sual cavablandırıldığında yeni sual yardan funksiya.
function newQuestion() {
  var operation = ["+", "-", "*", "/"];
  Operator.textContent = operation[RandomNumber(0, 4)]; // operator seçimi
  Number1.textContent = RandomNumber(0, 50);
  Number2.textContent = RandomNumber(0, 50);

  // Qalıqsız bölmə formalaşdıran şərt
  if (Operator.textContent == "/") {
    while (true) {
      Number2.textContent = RandomNumber(0, 50);
      if (Number1.textContent % Number2.textContent == 0) {
        break;
      }
    }
  }
}

// Səhfə yüklənəndə yeni sual yaradan funksiyanı işə salır
window.onload = function () {
  newQuestion();
};

// Cavabla butonuna tıklandığında dəyərləndirmə işini həyata keçirmək
answer.onclick = function () {
  var ans, n1, n2;
  n1 = Number(Number1.textContent);
  n2 = Number(Number2.textContent);
  switch (Operator.textContent) {
    case "+":
      ans = n1 + n2;
      break;
    case "-":
      ans = n1 - n2;
      break;
    case "*":
      ans = n1 * n2;
      break;
    case "/":
      ans = n1 / n2;
      break;
    default:
      break;
  }

  if (result.value == ans) {
    True.textContent = Number(True.textContent) + 1;
  } else {
    False.textContent = Number(False.textContent) + 1;
  }
  newQuestion();
};
