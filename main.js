  'use strict';
  //即時関数を使う
(function(){

  // 要素の取得
  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let result = document.getElementById('result');

  // クリックした時の時間を保持するため変数宣言
  let startTime;

  // クリックイベントの設定
  start.addEventListener('click', function(){
    startTime = Date.now(); //現在時刻の基準日からの経過ミリ秒は Date.now() で取得
 // クリックされた時にボタンが押し込める処理
    this.className = 'pushed';
    stop.className = ''; //ボタンが元に戻る

  });


  stop.addEventListener('click', function(){
    // 経過時間を示す変数
    let elapsedTime;
    //差分を示す変数
    let diff;
    // stop押した時の処理 1000で割って秒単位にする
    elapsedTime = (Date.now() - startTime) / 1000;
    // elapsedTime = 7.77
    // 経過時間をの結果を小数点以下２桁まで表示
    result.textContent = elapsedTime.toFixed(2)
    this.className = 'pushed';
    start.className = ''; //ボタンが元に戻る
    //秒数が合致すればperfectの処理/背景が変わる
    diff = elapsedTime - 7.77;
    if (Math.abs(diff) < 0.5) {
      result.className = 'perfect';
    }
  });
})();
