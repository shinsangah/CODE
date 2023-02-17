// 절대값
const num1 = -999;
console.log(Math.abs(num1));

// 최대, 최소값 구하기
console.log(Math.min(1, 2, 3, 4, -6, 10, -77, 1000));
// 이 중에서 제일 작은 숫자 찾아줌
console.log(Math.max(1, 2, 3, 4, -6, 10, -77, 1000));
// 이 중에서 제일 큰 숫자 찾아줌

const numArr = [1, 2, 3, -5, 10, 13, -77, 1000];
console.log(numArr); // [  1,  2,   3,   -5, 10, 13, -77, 1000]
console.log(...numArr); // 1 2 3 -5 10 13 -77 1000
console.log(Math.min(numArr[0], numArr[1], numArr[2]));
// 이거 왜 예로 설명해주셨지..?

// 전기 연산자
// 객체가 됐던 배열이 됐건 그 구조를 해체해주고, 각각에 값을 뿌려준다.
// 얘는 꽤나 많이 쓰일 것임. 있다가 제대로 된 chapter 파서 detail 하게 알려주심
const numArr = [1, 2, 3, -5, 10, 13, -77, 1000];
console.log(Math.min(...numArr));
console.log(Math.max(...numArr));

// 소수점 관리
const num3 = 3.14;
console.log(Math.round(num3)); // 3 // Math.round 반올림 함수
console.log(Math.floor(num3)); // 3 // Math.floor 소수점을 바닥까지 버려서 내린다.
console.log(Math.ceil(num3)); // 4 // Math.ceil 올림. 소숫점을 천장까지 올린다.

// 랜덤
console.log(Math.random()); // 자바스크립트에서 가장 많이 나올 수 있는 소숫점 15자리까지 막 밑으로 줄줄이 나온다.
