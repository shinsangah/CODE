// 2중 for문 사용하기
// 구구단을 반복문을 이용해서 console.log로 출력해보기
// for (let i = 2; i <= 9; i += 1) {
//   for (let j = 1; j <= 9; j += 1) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// 강사님 정답
// for (let i = 2; i < 10; i++) {
//   console.log(`-------- ${i} 단`);
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// 0~100의 숫자 중에서 2 또는 5의 배수 총합 구하기!
// 힌트1 ; 나머지 연산자 % 사용
// 힌트2 ; 5 % 3 -> 2 (5를 3으로 나눈 나머지인 의 값을 반환)


let sum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i
  }
}

console.log(sum)