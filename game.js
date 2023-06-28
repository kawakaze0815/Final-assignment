// ランダムな数字を生成
var targetNumber = Math.floor(Math.random() * 10) + 1;

// 必要な要素を取得
var guessInput = document.getElementById("guess-input");
var guessButton = document.getElementById("guess-button");
var result = document.getElementById("result");

// 答えるボタンがクリックされたときの処理を設定
guessButton.addEventListener("click", function() {
  // 入力された値を取得
  var guess = parseInt(guessInput.value);

  // 答えを判定して結果を表示
  if (guess === targetNumber) {
    result.textContent = "正解です！おめでとうございます！";
  } else if (guess < targetNumber) {
    result.textContent = "もっと大きな数です。";
  } else {
    result.textContent = "もっと小さな数です。";
  }

  // 入力欄をクリア
  guessInput.value = "";
});
