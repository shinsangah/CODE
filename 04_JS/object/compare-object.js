// // 객체의 불변성
// // 원시타입과 비원시타입

// const sangah = {
//   name: "신상아",
//   email: "kr.sangah@gmail.com",
// }

// const 신상아 = {
//   name: "신상아",
//   email: "kr.sangah@gmail.com",
// }

// console.log(sangah === 신상아); //false
// console.log(sangah == 신상아); //false
// 2개가 다르다고 판단하는 이유
// : sangah 라고 객체 시작되는 메모리 주소값과 신상아 주소값이 다르기 때문이다.
// 메모리 주소를 비교하기 때문에 같을 수가 없는 것이다. (객체타입 = 비원시타입)


const sangah = {
  name: "신상아",
  email: "kr.sangah@gmail.com",
};

const sangahCopy = sangah;
sangahCopy.name = "sangah";

console.log(sangahCopy);
console.log(sangah);
console.log(sangah === sangahCopy); // true