// 실습

// 1부터 100 까지의 숫자가 들어 있는 배열을 for 문으로 만들기
// Reduce 메소드를 이용하여 해당 배열의 합산을 구하기!
// 단, reduce 메소드의 누산기를 이용하기

const num = [];

for (let i = 1; i <= 100; i++) {
  num[i] = i;
}
const result = num.reduce((acc, item) => {
  return (acc += item);
}, 0)

console.log(result);

// 강사님 정답

const sumResult2 = arr.reduce((acc, item) => acc + item, 0);
// reduce에서는 0 누산기 값 초기화 시켜야 한다.