const boxEl = document.querySelector(".box");
boxEl.classList.add("orange");
/* <div class="box orange">box</div> 검사, 요소가서 보면 orange 추가되어있음 */

const thirdBoxEL = document.getElementById("third");
thirdBoxEL.classList.remove("box");
// box 라는 클래스명이 제거됨을 요소 검사창에서 볼 수 있음
{/* <div class id="third">box3</div> */ }

console.log(boxEl.classList.contains("box")); //true
// box 라는 클래스 가지고 있으니까 true
console.log(thirdBoxEL.classList.contains("box")); //false
// remove box 했으니까 false가 뜸

