// 실습
// 1부터 1000까지의 숫자 중에서 짝수의 합을 구하는 프로그램
// 단, continue를 사용하셔야만 합니다.

// 강사님 정답

let sum = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 1) continue;
  sum += i;
}

console.log(sum)

// 250500 값 나옴

// let sum = 0;

// for (let i = 1; i <= 1000; i++) {
//   if (i % 2 === 1) { continue; }
//   else { sum += i; }
// }
// 이런 형태가 정석이기는 하다.

