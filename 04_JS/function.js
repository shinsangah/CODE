// // 함수

// // function helloFunc() {
// //   console.log('Hello');
// // }

// // function returnFunc() {
// //   console.log('Return');
// //   return 'return';
// // }

// // let str = returnFunc();
// // console.log(str);

// // let str = helloFunc();
// // console.log(str);

// let noNameFunc = function () {
//   console.log('No Name');
//   return 'no name';
// };

// let str2 = noNameFunc();
// console.log(str2);

// // 리턴이 있고, 없고의 차이는 기억해야 한다.
// // 크게 중요한 것은 아니다.

// // helloFunc();
// // helloFunc();
// // helloFunc();
// // helloFunc();

// 함수 - 매개변수와 인자

function sayHello(name = 'friend') {
  console.log(`Hello~ ${name}!`);
}

sayHello('Mike');
sayHello();

// function sum(num1, num2) {
//   return num1 + num2;
// }

// // return이 되서 아래에 남는다.
// console.log(sum(10, 20));
// // 10과 20은 인자 라고 함

// function square(num) {
//   return num ** 2;
// }

// console.log(square(37));