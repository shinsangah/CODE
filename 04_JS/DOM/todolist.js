const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

function deleteTask(t) {
  t.parentNode.remove();
}
// 아래에 써도 hoisting 으로 문제 없지만 위에 작성

// 버튼이 클릭 됐을 때 실행
function addList() {
  if (inputTask.value === "") // 아무런 내용도 없이 '추가' 버튼을 누르면
  {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
    // return; 그냥 이렇게 먹여버리기도 한다. 그럼 종료가 된다. else 안쓰고 return 해서 함수 종료.
    return;
  };

  const addLi = document.createElement("li");
  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");
  // 미리 addEventListener 걸어줘야 얘가 할 일을 기억하고 붙게된다.
  checkBtn.addEventListener("click", function () {
    if (checkBtn.checked === true) {

      checkBtn.parentNode.style.textDecoration = "line-through";
      // textDecoration; 카멜케이스로 써야함. js는 - 들어가면 마이너스로 인식하기 때문에
      // 귀찮으면 setAttribute 써서 style, line 속성 주면 되는거임. 다양한거 보여주려고 이렇게 씀.
    } else {
      checkBtn.parentNode.setAttribute("style", "text-decoration: none");
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  // deleteBtn.addEventListener("click", function (e)
  // 이벤트 객체 쟤를 통해서 누가 delete 버튼이 클릭되었는지 확인
  // {
  //   e.target.parentNode.remove();
  //   // 부모 요소인 li 요소가 지워지게 되는 것임
  // })

  // 코드는 같은 계열끼리 묶는게 리딩이 편하기 때문에 같이 묶어야 함

  // 다른방법!
  deleteBtn.setAttribute("onclick", "deleteTask(this)")

  addLi.append(checkBtn);
  addLi.append(inputTask.value);
  // 체크버튼을 만들고, 그 뒤에 글자버튼을 만들어라.
  addLi.append(deleteBtn);

  todoList.appendChild(addLi);
  // <li><checkbox /> 할일 <삭제버튼> </li>

  inputTask.value = "";
  // 빈 문자열로 만들어서 지워준다.

}
addBtn.addEventListener("click", addList);