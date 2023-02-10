// operater (연산자)
// 나머지 연산자

// let num = 10;
// console.log(num % 1);
// 어떤 정수도 1로 나누면 0이 나올 수 밖에 없지
// // console.log(num % 2);

// let num = Math.floor(Math.random() * 10);
// console.log(num);
// console.log(num % 2);

// // Math.random이 소숫점 언제까지 나올지 모름
// // 시발.. 뭔 말이야.. 홀수, 짝수가 나온다.


// // 거듭 제곱
// console.log(2 ** 4);
// console.log(Math.squrt(4));

// // 연산자 줄여쓰기
// let num2 = 5;
// // num2 = num2 + 5;
// num2 = num2 * 5;

// let num3 = 5;
// // num3 += 5;
// num3 *= 5;

// console.log('연산자 줄여쓰기', num2, num3);

// // 증가 감소 연산자
// let num4 = 10;

// // console.log('증가 감소 연산자', num4++);
// // console.log(num4);
// // 해당 줄에서는 반영 안되고 다음 줄에서 반영됨

// // console.log('증가 감소 연산자', ++num4);
// // console.log(num4);
// // // 이렇게 ++ 앞에 써주면 11 나옴

// console.log('증가 감소 연산자', num4 += 1);
// console.log(num4);
// // 이렇게 쓰면 11 됨. 에어비엔비가 이걸 밀고 있음.
// // 근데 C언어 배운 사람들은 ++ 이 익숙함.

// 비교 연산자
// let a = 10;
// let b = 5;

// 그냥 무의식이 3개를 쓰게 만들어야 함
// console.log('비교 연산자', a === b)
// // 10이랑 5는 다른 숫자니까 무조건 false로 뜨겠지.
// console.log('비교 연산자', a !== b)
// console.log('비교 연산자', a > b)
// console.log('비교 연산자', a < b)

let a = 5;
let b = '5';

console.log('비교 연산자', a == b)
console.log('비교 연산자', a === b)