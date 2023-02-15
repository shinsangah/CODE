
// add event 지우는 방법 2
// 주석 올려서 공유해주심

const calendar = document.querySelector("table"); //table 태그
const date = document.querySelector("#date"); // id date - 날짜
const input = document.getElementById("content"); // id content - input 내용
// 클릭 된 요소를 저장하기 위한 전역 변수

// 내가 클릭한 td의 위치를 얘가 가지고 있어야 함
let targetEl;

function calendarTask(e) {
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.tagName);
  if (e.target.tagName === "P") {
    date.value = `2023년 2월 ${e.target.textContent}일`;
    //인풋 요소에 데이터 값 넣어주는 방법 value 
    // ${e.target} e.target 여기까지가 p 태그 선택한 것임
    // textContent - date 값으로 선택한 value에 넣어주세요.
    // console.log("parent", e.target.parentNode);
    // e.target은 p의 위치를 가지고 있는 상태,
    // p 태그 요소 구성 td의 자식요소 = p
    // td 를 가지고 오는 방법은 parentnode 가지고 오면 됨.
    targetEl = e.target.parentNode;
    // 얘를 이제 전역변수인 targetEl에 저장시키면 됨.

    // 공간도 눌러야 되는거임
  } else if (e.target.tagName === "TD") {
    // console.log(e.target.children[0]);
    // 콘솔 로그로 찍으면서 어떤 데이터가 들어오는지 확인하면서 진행
    const day = e.target.children[0].textContent;
    // 첫번쨰 자식에게 간다. childNode는 원치않는 정보까지 간다.
    // p 태그 내부에 있는 숫자가 day 라는 값에 들어가게 된다.
    // td의 자식들로 배열로 받았고, p 태그는 첫번째 자식 index 0, 그 다음 숫자값 넣어준거임 (textcontent)
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target; // 위치 지정, targetEl 이라는 전역변수에 넣어주면 됨
  } else if (e.target.tagName === "DIV") {
    e.target.remove(); // 간편하게 지우는 방법
  }
}

// targetEl 여기에다가 이제 내용 추가해줘야함
// 어떤 정보를 가지고 있어야 하냐면, 사용자가 클릭한 td의 위치!

// 내용을 추가하는 칸
// html 상에서 onclick="writeSchedule();
function writeSchedule() {

  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return; // return 해서 중첩. 내용을 입력하지 않고 뭔가를 출력하려고 하면, placeholder에 작동
  }
  // } date 설정은 밑에 따로 하려고 했는데 return 중첩이라 같이 씀
  else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    return;
  } else if (date.value === '') {
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  } // 갖가지 방법으로 실험해보니 다 잘 됨

  // 빈 값에 하면 메시지 뜨는거 그런건 정규식 알려드리고 추가적으로 설명
  // 입력이 안되어있는것만 처리하는 것 정도로만 마무리 함

  const addDiv = document.createElement("div");
  addDiv.textContent = input.value; // 맨 위에 input의 value값 넣어줌
  // 추가를 위한 div 요소를 하나 만들어주기

  // addDiv.addEventListener("click", function () {
  //   addDiv.remove(); // 자기 자신이 클릭되면 지워라. 이벤트객체 따로 e 안줘도 자기 자신을 지우면 됨.
  // }) addevent 걸어서 지우는 방법 2가지가 있다.

  targetEl.append(addDiv);
  // 어느 td에 붙일건 targetEl 이 기억하고 있다.
  // 그러니까 이렇게 붙여주면 스케줄이 추가가 되는거임!
  input.value = ""; // 작성하고 클릭하면 지워짐 (쓴걸 남겨둘 수 없으니까)
  // 추가된 요소를 클릭하면 지워줘야 한다.
}

calendar.addEventListener("click", calendarTask) // 클릭 입력하면 듣겠다.