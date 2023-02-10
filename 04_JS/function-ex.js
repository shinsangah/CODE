// 밑변과 높이를 인자로 전달 했을 때 삼각형의 넓이를 구하는 함수를 만들어 봅시다.

// 반지름의 길이를 인자로 전달 했을 때 , 원의 넓이를 구하는 함수를 만들어 봅시다.

// 피타고라스의 정리를 이용해서 직각 삼각형의 밑변과 높이를 인자로 전달 했을 때,
// 빗변의 길이를 구하는 함수를 작성해 봅시다.

// 루트를 씌우는 법  Math.sqrt (9) =3;

// 강사님 정답
// 1
// function triangleArea(num1, num2) {
//   return num1 * num2 / 2;
// };

// 화살표 함수
let triangleArea = (num1, num2) => {
  return num1 * num2 / 2;
}

// // 2
// let circleArea = function (radius = 3) {
//   return 3.14 * radius * radius;
// };
// 화살표 함수
let circleArea = (radius = 3) => {
  return 3.14 * radius * radius;
}

// 3
// a^2 + b^2 = c^2 -> c = root(a^2+b^2)
// function pytha(num1, num2) {
//   return Math.sqrt(num1 ** 2 + num2 ** 2);
// }


// 화살표 함수
let pytha = (num1, num2) => {
  return Math.sqrt(num1 ** 2 + num2 ** 2);
}

console.log(triangleArea(2, 5));
console.log(circleArea());
console.log(pytha(3, 4));