let username;
let userresult;

// promptは入力
username = prompt("お名前を教えて下さい。");

// "name"というidを持つタグに囲まれている文字列を、
// usernameという箱に入っている値で上書きする
document.getElementById("name").innerHTML = username;
if (username == ""){
  username = "名無し";
  document.getElementById("name").innerHTML = username;
}

// ランダムで1から5の数値を取得。これをrandに入れる
let rand = Math.floor( Math.random() * 5) ;
if (rand == 0) {
  userresult = "大吉";
}
if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}

// "result"というidを持つタグに囲まれている文字列を、
// userresultという箱に入っている値で上書きする
document.getElementById("result").innerHTML = userresult;