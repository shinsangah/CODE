// 화살표 함수

function sayHello() {
  console.log('Hello');
}

let sayHello = function () {
  console.log('Hello');
}

let sayHello = () => {
  console.log('Hello');
}

// 최근에 화살표 함수 쓰는걸 권장하고 있음.
// 디스가 안생기는 함수, 메모리적으로 효율 좋기 때문.
// 디테일은 객체를 배울 때 설명해주신다고 함.

// 매개 변수

function sum(num1, num2) {
  return num1 + num2;
};

let sum = function (num1, num2) {
  return num1 + num2;
};

let sum = (num1, num2) => {
  return num1 + num2;
};

// 자바스크립트 축약하는거 익숙해져야 함
// 화살표 주구장창 쓸 것임