// 14. JS LECTURE (P.60 실습)

const pororo = {
  name: '뽀로로',
  age: 7,
  height: 110,
  weight: 30,
  // fly: function () {
  //   console.log('뽀로로가 날아갑니다.');
  fly() { // function 글자 없애고 이렇게도 쓸 수 있음!
    console.log('뽀로로가 날아갑니다.');
  }
};
// 객체 안에서는 이꼴 같은 것을 못쓴다.

pororo.fly(); // 뽀로로가 날아갑니다.

for (let key in pororo) {
  console.log(`key는 ${key}, key 안의 값은 ${pororo[key]}`);
  // key는 name, key 안의 값은 뽀로로
  // object실습.js:11 key는 age, key 안의 값은 7
  // object실습.js:11 key는 height, key 안의 값은 110
  // object실습.js:11 key는 weight, key 안의 값은 30

  // console.log(key)
  // console.log("pororo.key", pororo.key);
  // // key의 내부에 key인 걸 찾는거기 때문에 의미가 달라짐.
  // console.log("pororo[key]", pororo[key]);
  // // 객체에 특정값을 전부 접근하고 싶으면 이런 식으로 접근하면 됨
}

// // 접근
// console.log(pororo['name']);
// console.log(pororo.age);

// // 추가
// pororo['gender'] = 'none';
// pororo['height'] = '90cm';

// // 삭제
// delete pororo.gender;

// // 출력
// console.log(pororo)

// console.log(pororo.age);
// console.log('name' in pororo);
// console.log('height' in pororo);

// console.log(pororo.hairColor); // undefined 에러
// console.log('hairColor' in pororo); // false 라고 뜸
// console.log('age' in pororo);

// 객체에서 쓸 때 숫자로 안들어오고 문자로 쓰게
// 문자열 값이 각각 달라져도 값에 접근할 수 있도록
// console.log(superman[key]) 로 작성한다.