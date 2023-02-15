const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

function deleteTask(t) {
  t.parentNode.remove();
}

//input은 모든 값을 textContent가 아닌 value에 저장
function addList() {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
    return; //else안쓰고 상황종료시키기
  }
  const addLi = document.createElement("li");
  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");
  //미리 addEventListener를 걸면 기억하고 실행
  checkBtn.addEventListener("click", function () {
    if (checkBtn.checked == true) {
      checkBtn.parentNode.style.textDecoration = "line-through"; // setAttribute 해도 됨
    } else {
      checkBtn.parentNode.setAttribute("style", "text-decoration:none");
    }
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  // deleteBtn.addEventListener("click", function (e) {
  //   //이벤트 객체를 통해 어떤 delete버튼이 클릭됐는지 확인
  //   e.target.parentNode.remove();
  // });
  deleteBtn.setAttribute("onclick", "deleteTask(this)");

  addLi.append(checkBtn);
  addLi.append(inputTask.value);
  addLi.append(deleteBtn);
  todoList.appendChild(addLi);
  inputTask.value = ""; //inpuTask 비워주기
}

addBtn.addEventListener("click", addList);