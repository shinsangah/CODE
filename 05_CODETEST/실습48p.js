// 코테에서 자주 나오는 형태라 기억 해줘야 함
// 이참에 확실히 기억해두면 나중에 쓸 일 반드시 있음
// 실습

let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// • 두 배열에서 동일한 요소만을 가지는 배열 sameArr 만들기
// • 두 배열에서 서로 다른 요소만을 가지는 배열 diffArr 만들기

let sameArr = fruits1.filter((fruit) => {
  return fruits2.includes(fruit) == true;
});

let diffArr = fruits1.filter((fruit) => {
  return fruits2.includes(fruit) == false;
});

console.log(sameArr);
console.log(diffArr);