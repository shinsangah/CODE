// JS 구현

const calendar = document.querySelector("table"); //table 태그
const date = document.querySelector("#date"); // id date
const inputField = document.querySelector("#content"); // id content
const all = document.querySelector("p");
// 클릭 된 요소를 저장하기 위한 전역 변수

let targetEl;

calendar.addEventListener("click", function (e) {
  targetEl = e.target;
  if (e.target.tagName === "P") {
    let targetHTML = e.target.innerHTML
    console.log(targetHTML)
    date.setAttribute("value", `2023년 2월 ${targetHTML}일`)
  }
})

let writeSchedule = function () {
  const divEl = document.createElement('div');
  divEl.innerText = inputField.value;
  divEl.addEventListener('click', function (el) {
    el.target.remove();
  });
  targetEl.parentNode.appendChild(divEl); // td에다가 appendchild
  // HTML 구조상 paretNode 있어야 편하기 때문에 써줌

  inputField.value = "";
  inputField.focus(); // 마우스 포커스 계속 가있게
}

// 이벤트 리스너
// calendar.addEventListener('click', clickDate)


// 강사님과 함께 공이 이렇게 굴러가는구나 감 잡아야 함..