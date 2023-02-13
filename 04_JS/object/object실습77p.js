// 14. JS LECTURE (P.77 실습)
// pororo
// 객체에 뽀로로의 이름을 출력하는 method 추가하기
// 특정 객체의 height 를 출력하는 showHeight () 함수를 작성하고
// pororo 객체의 메소드로 추가 -> pororo 의 키를 출력하기

function showHeight() {
  console.log(`뽀로로의 키는 ${this.height} 입니다.`)
}

const pororo = {
  name: '뽀로로',
  age: 7,
  height: '110cm',
  weight: 30,
  fly() { // function 글자 없애고 이렇게도 쓸 수 있음!
    console.log('뽀로로가 날아갑니다.');
  },
  say: function () {
    console.log("뽀로로는 귀엽습니다.");
  },
  showHeight, // 객체의 메소드로 추가한 것임
};

pororo.fly();
pororo.say();
pororo.showHeight();


// 강사님 코드 정답

function showHeight() {
  console.log(`뽀로로의 키는 ${this.height} 입니다.`)
}

const pororo = {
  name: "뽀로로",
  height: 110,
  height: '110cm',
  showName() {
    console.log(`해당 객체의 이름은 ${this.name} 입니다.`);
  },
  showHeight,
};

pororo.showName();
pororo.showHeight();

// 실험
pororo.showName() = function () {
  console.log(`해당 객체의 이름은 ${this.name} 입니다.`);
}
pororo.showHeight();