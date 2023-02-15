// while 기본 문법
// let index = 0;
// while (index < 10) {
//   console.log(`인사를 ${index + 1} 번째 드립니다. 🙇🏻`)
//   index++;
//   // 얘를 지우면 끔찍한 상황이 벌어짐. 왜?
// }

// let index2 = 0;
// while (true) {
//   // true를 넣으면 무한히 돈다.
//   console.log('인사를 ${index2+1} 번째 드립니다! 😊 ')
//   index2++;
//   if (index2 < 10) {
//     break;
//     // break 라는 명령어가 반복문을 깨주는 역할
//   }
// }
// 위에거 안뜸

// do-while 비교
// let index1 = 0;
// do {
//   console.log(`do-while인덱스는 ${index1} 입니다.`)
//   index1++;
// } while (index1 > 10);
// // 문법적으로 한 번에 처리가 가능하기 때문에 편리하게 사용 가능
// // 조건은 부합하지 않지만 한 번은 찍힘. 레어한 케이스.
// // do-while 써본 적이 없다 거의.. for문만 거의 쓰심

// let index2 = 0;
// while (index2 > 10) {
//   console.log(`while 인덱스는 ${index2} 입니다.`);
//   index2++;
// }
// // 조건이 부합하지 않기 때문에 while문 내부 조건이 실행하지 않았다.

// 실습 : While을 사용해서 구구단 구현하기!

let i = 1;

while (i < 9) {
  console.log(`${i + 1}단`)
  i++;
  let j = 0;
  while (j < 9) {
    j++;
    console.log(i + ' X ' + j + ' = ' + (i * j));
  }
}

// 내가 한 것

