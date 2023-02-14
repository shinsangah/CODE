let boxEl = document.querySelector(".box")
// boxEl EL : 엘리먼트
// CSS 선택자 문법과 동일하게 들어간다.
// let boxEl2 = document.querySelector("#box2")
let listEl = document.querySelector("ul>li:nth-child(2)")

console.log(boxEl); // 같은 box class 면 첫번째 div 요소 box를 가지고 온다.
// console.log(boxEl2);
console.log(listEl);


// id 값을 통해서 가지고 오기
let thirdBoxEL = document.getElementById("third");
console.log(thirdBoxEL);
// div#third.box

// 혹시 같은 id 2개 있으면?
// 동일한 id 를 가진 애가 여러개 있으면
// 문서에 가장 상단에 있는 애를 가져온다.
// 하지만, id는 고유해야 하니까 이렇게 하면 안됨!

