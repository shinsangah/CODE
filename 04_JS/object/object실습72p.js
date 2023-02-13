// 14. JS LECTURE (P.72 실습)
// pororo 객체에 "뽀로로는 귀엽습니다!" 를 출력하는 method 추가하기

const pororo = {
  name: '뽀로로',
  age: 7,
  height: 110,
  weight: 30,
  fly() { // function 글자 없애고 이렇게도 쓸 수 있음!
    console.log('뽀로로가 날아갑니다.');
  },
  say: function () {
    console.log("뽀로로는 귀엽습니다.");
  }
};

pororo.fly(); // 뽀로로가 날아갑니다.
pororo.say(); // 뽀로로가 날아갑니다.