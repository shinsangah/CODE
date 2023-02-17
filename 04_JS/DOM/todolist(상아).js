const addBtn = document.querySelector(".input-btn") // '추가' 버튼
const todoList = document.querySelector(".todo-list")
const inputTask = document.querySelector(".input-task") // 텍스트 입력하는 창

function deleteTask(t) {
  t.parentNode.remove()
}

// addList 목록 추가 메서드
function addList() {

  if (inputTask.value === "") { // 글자버튼 위에 아무런 내용 없이 '추가' 버튼을 눌렀을 시 실행
    inputTask.setAttribute("placeholder", "내용을 입력하세요"); // placeholder에 속성 추가
    return; // else 안쓰고 그냥 이렇게 return; 먹여버리고 종료시킬 수 있음
  };

  const addLi = document.createElement("li"); // todolist 작성한 목록됨
  const checkBtn = document.createElement("input"); // 체크버튼
  
  checkBtn.setAttribute("type", "checkbox");
  // 미리 addEventListender 걸어줘야 얘가 할 일을 기억하고 붙게 된다.
  checkBtn.addEventListener("click", function () {
    if (checkBtn.checked === true) { // .checked 체크카 되어있으면! 내장함수
      checkBtn.parentNode.style.textDecoration = "line-through";
    } else {
      checkBtn.parentNode.setAttribute("style", "text-decoration: none")
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";

  // 이벤트 객체를 통해서 누가 delete 버튼이 클릭되었는지 확인
  // deleteBtn.addEventListener("click", function (e) {
  //   e.target.parentNode.remove(); // 부모 요소인 li 요소가 지워지게 됨
  // })

  // [다른 방법]
  deleteBtn.setAttribute("onclick", "deleteTask(this)")
  // 삭제 버튼에 onclick 속성 추가해서 this 자기를 삭제시키는 것

  addLi.append(checkBtn); // 체크 버튼
  addLi.append(inputTask.value); // 체크버튼을 만들고, 그 뒤에 글자칸에 내용
  addLi.append(deleteBtn); // 삭제 버튼

  todoList.appendChild(addLi);
  // <li><checkbox/>할 일<삭제버튼></li>

  inputTask.value = ""; // 글자 입력하는 창, 빈 문자열로 민들어서 지워주기

}

// 미리 addEventListender 걸어줘야 얘가 할 일을 기억하고 붙게 된다.
addBtn.addEventListener("click", addList);
// '추가' 버튼에 클릭 누르면 목록추가 메서드 실행

