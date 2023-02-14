// 클래스가 orange인 DOM 요소를 선택하여 출력
let boxEl = document.querySelector(".orange")
console.log(boxEl);

// ID가 skyblue인 DOM 요소를 선택하여 출력
let sixthboxEl = document.getElementById("skyblue");
console.log(sixthboxEl);

// ul 리스트의 2번째 자식 li 요소를 선택한 다음,
// 해당 요소에 orange 클래스를 부여한 다음 출력해주세요.
let listEl = document.querySelector("ul>li:nth-child(2)")
listEl.classList.add("orange");
console.log(boxEl, sixthboxEl, listEl);

// Orange 클래스를 가지는 첫번째 DOM 요소를 선택한 다음,
// 해당 요소가 orange 클래스를 가지는지 if 문으로 확인 후,
// 가지고 있으면 orange 클래스를 제거해 주세요.
if (boxEl.classList.contains("orange") === true) {
  boxEl.classList.remove("orange");
}

console.log(boxEl);
