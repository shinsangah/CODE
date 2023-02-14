// 14. JS LECTURE (P.48 실습)

// let kdt = ['두루', '인영', '유림', '슬기'];
const kdt = ['두루', '인영', '유림', '슬기'];

// kdt 라는 배열 제일 마지막에 자신을 추가하기
kdt.push('상아')
// console.log(kdt.push('상아'));
// console.log(kdt);

// kdt 라는 배열에서 자신을 빼기
kdt.pop('상아')
// console.log(kdt.pop('상아'));
// console.log(kdt);

// kdt 배열 제일 앞에 자신을 추가하기
kdt.unshift('상아');
console.log(kdt);

// kdt 배열 전체를 출력하기
// for (let i = 0; i < kdt.length; i++) {
//   console.log(kdt[i]);
// }

for (let i = 0; i < kdt.length; i++) {
  console.log(`kdt 3번째 열의 ${i + 1}번째 사람은 ${kdt[i]} 입니다`);
}

let days = ['월', '화', '수'];
for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}

// 월
// 화
// 수