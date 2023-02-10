// 실습 : While을 사용해서 구구단 구현하기!

// 내가 한 것

// let i = 1;

// while (i < 9) {
//   console.log(`${i + 1}단`)
//   i++;
//   let j = 0;
//   while (j < 9) {
//     j++;
//     console.log(i + ' X ' + j + ' = ' + (i * j));
//   }
// }

// 강사님 정답

let i = 2;
let j = 1;

while (i < 10) {
  while (j < 10) {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  }
  // +1이 되어라.
  i++;
  j = 1;
}

// for문이 더 편한 것을 느낄 수 있지만,
// while도 알아야 하는 필요성을 느낀다.