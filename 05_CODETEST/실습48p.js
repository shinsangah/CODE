// // 코테에서 자주 나오는 형태라 기억 해줘야 함
// // 이참에 확실히 기억해두면 나중에 쓸 일 반드시 있음
// // 실습

// let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// // • 두 배열에서 동일한 요소만을 가지는 배열 sameArr 만들기
// // • 두 배열에서 서로 다른 요소만을 가지는 배열 diffArr 만들기

// // 나의 정답

// // let sameArr = fruits1.filter((item) => {
// //   return fruits2.includes(item) == true;
// // });

// // let diffArr = fruits1.filter((item) => {
// //   return fruits2.includes(item) == false;
// // });

// // console.log(sameArr);
// // console.log(diffArr);


// // 강사님 정답
// // 배열 여집합, 교집합 쓸 때 자주 쓰이니까 외운다.

// const sameArr = fruits1.filter(function (item) {
//   return fruits2.includes(item);
// });

// const diffArr = fruits1.filter(function (item) {
//   return !fruits2.includes(item);
// })


// const sameArr = fruits1.filter(item => fruits2.includes(item));
// const diffArr = fruits1.filter(item => !fruits2.includes(item));

// console.log(sameArr);
// console.log(diffArr);


// // 다른 분 정답
// // fruits1 이 fruits2 보다 데이터가 많은 것을 가정해야 함

// let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// const sameArr2 = [];
// const diffArr2 = [];

// fruits1.map((item) => {
//   if (fruits2.includes(item)) {
//     sameArr2.push(item);
//   } else {
//     diffArr2.push(item);
//   }
// })

// console.log(sameArr2);
// console.log(diffArr2);



const fruits3 = ["Apple", "Banana", "Cherry"];
const findResult = fruits3.find((item) => {
  // return item === "Apple";
  return /^A/.test(item); // 대문자 A로 시작되면 true, 정규식은 일종의 조건, 
});

const findIndexResult = fruits3.findIndex(item => /^B/.test(item));

console.log(findResult); // Apple
console.log(findIndexResult); // 1

// 배열 arr.reduce
// - reduce는 가장 많은 기능을 할 수 있음
// reduce 잘 쓰는 사람은 map 이런거 안쓰는 사람도 많은데
// 그런건 조금 나중에 해도 됨.map이랑 filter 쓰는게 편함..

const numbers5 = [1, 2, 3, 4, 5];
const sumResult = numbers5.reduce(function (acc, item, index, og) {
  return acc += item;
}, 10); // 최종 값을 return 해줌
console.log(sumResult); // 0을 넣으면 15  /  return acc += item;}, 10); 10을 넣으면 25가 됨


const numbers6 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
const resultReduce = numbers6.reduce((acc, item) => {
  if (item < 0) {
    acc[0] += 1;
  } else {
    acc[1] += 1;
  }
  return acc;
}, [0, 0]);

console.log(resultReduce); // [ 4, 5 ]


// 강사님이랑도 이렇게 안팔 것임.
// 이렇게 해도 된다는걸 보고 예제코드 가지고 오심.