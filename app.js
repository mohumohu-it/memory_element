// min～maxまでの整数の乱数を作る関数
const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cards = [
  "1", "2", "3", "4", "5", "6", "7", "8",
  "1", "2", "3", "4", "5", "6", "7", "8",
];

let te1;
let te2;
let te3;
let te4;
let te5;
let te6;
let te7;
let te8;

// シャッフルのアルゴリズム
for (let i = cards.length - 1; i > 0; i--) {
  let r = rand(0, i);
  let tmp = cards[i];
  cards[i] = cards[r];
  cards[r] = tmp;
}

let field = document.getElementById("field");

for (let i = 0; i < cards.length; i++) {
  const elm = document.createElement("img");

  elm.className = "card";
  elm.index = i;
  elm.onclick = click;
  field.appendChild(elm);

  elm.src = "img/属性/none.png";
}

let first = null;
let second = null;
let timer = null;

// 経過時間に関する要素の定義
let count = 0;
let open = 0;
let clock = document.getElementById("clock");
let timer2 = setInterval(() => {
  clock.innerText = "経過時間:" + (++count);
}, 1000);

// クリックされた時の処理
function click(e) {

  if (timer) {
    clearTimeout(timer);
    judge();
  }


  let elm = e.target;

  if (cards[elm.index] == 1) {
    elm.src = "img/属性/火.png";
  } else if (cards[elm.index] == '2') {
    elm.src = "img/属性/水.png";
  } else if (cards[elm.index] == '3') {
    elm.src = "img/属性/木.png";
  } else if (cards[elm.index] == '4') {
    elm.src = "img/属性/雷.png";
  } else if (cards[elm.index] == '5') {
    elm.src = "img/属性/岩.png";
  } else if (cards[elm.index] == '6') {
    elm.src = "img/属性/氷.png";
  } else if (cards[elm.index] == '7') {
    elm.src = "img/属性/風.png";
  } else if (cards[elm.index] == '8') {
    elm.src = "img/属性/闇.png";
  }

  if (!first) {
    first = cards[elm.index];
    firstElm = elm;
  } else if (firstElm.index == elm.index) {
    return;
  } else {
    second = cards[elm.index];
    secondElm = elm;
    timer = setTimeout(judge, 1000);
  }
}

// ペアをジャッジする関数
const judge = () => {

  if (first == second) {
    console.log(first);
    firstElm.style.visibility = "hidden";
    secondElm.style.visibility = "hidden";
    open += 2;
    if (open == cards.length) {
      clearInterval(timer2);
    }
  } else {
    firstElm.src = "img/属性/none.png";
    secondElm.src = "img/属性/none.png";
    count += 5;
  }
  first = null;
  second = null;
  timer = null;
}
