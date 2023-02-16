const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

function deleteTask(t) {
  t.parentNode.remove();
}
// 아래에 써도 hoisting 으로 문제 없지만 위에 작성

// addList 목록 추가 메서드
function addList() {
  if (inputTask.value === "") // 아무런 내용도 없이 '추가' 버튼을 눌렀을 시 실행
  {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
    // inputTask placeholder에 속성 추가하는 것임
    // return; 그냥 이렇게 먹여버리기도 한다.
    // 그럼 종료가 된다. else 안쓰고 return 해서 함수 종료.
    return;
  };

  const addLi = document.createElement("li"); // todolist 작성한 목록이 되는거임
  const checkBtn = document.createElement("input"); // 체크 버튼 칸
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
  // 체크버튼을 만들고, 그 뒤에 글자칸에 내용
  addLi.append(deleteBtn);

  todoList.appendChild(addLi);
  // <li><checkbox /> 할일 <삭제버튼> </li>

  inputTask.value = "";
  // 빈 문자열로 만들어서 지워준다.

}
addBtn.addEventListener("click", addList);
// addList 갖다 쓰는게 아니라, 새롭게 객체로써 생성이 되는거임.
// 그래서 checkBtn 등 새로운 addList 가 만들어지는거고,
// 어느 addList 소속인지 알려주는거고 삭제할려고 할 때 그래서
// this 같은 것을 쓰는 것이다. 특정지을 수 있으니까.

