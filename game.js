// スイカの要素を取得
var watermelon = document.getElementById("watermelon");

// 割るボタンの要素を取得
var smashButton = document.getElementById("smash-button");

// 割るボタンがクリックされたときの処理を設定
smashButton.addEventListener("click", function() {
  // スイカの画像を割れた状態に変更
  watermelon.src = "smashed_watermelon.png";
  
  // 割るボタンを無効化
  smashButton.disabled = true;
  
  // メッセージを表示
  alert("スイカを割りました！");
});
