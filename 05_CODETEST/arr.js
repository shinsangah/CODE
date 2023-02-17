// const fruits = ["사과", "파인애플", "수박", "포도", "아륀지"];

// const fruitsObjArr = fruits.map(function (item, index, origin) {
//   console.log("item", item);
//   console.log("index", index);
//   console.log("origin", origin);
// })

// // 이거와 동일한 기능을 위처럼 해주는 것이다. map 이라는 함수를 사용해서.
// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// //   console.log(i);
// //   console.log(fruits);
// // }

// // 매개변수는 item index origin 3개 받음
// // const fruitsObjArr = fruits.map(function (item, index, origin) {
// //   return {
// //     id: index,
// //     name: item
// //   }
// // });

// // console.log(fruits);
// // console.log(fruitsObjArr);

// // // map 함수 특정 배열에다가 원하는 작업을 시킨 다음에
// // // 그것을 다시 배열로 만들고 싶을 때 많이 사용

// // // const nums = [3, 6, 9, 12, 15, 18, 21];
// // // const divideArr = nums.map(function (item, index) {
// // //   return item / 3;
// // // })

// // // console.log(divideArr);

// // // 가벼운 실습
// // // const nums2 = [1, 2, 3, 4, 5, 6];
// // // const multipleNums2 = nums2.map(function (item, index, origin) {
// // //   return item * 4; //item 값만 있으면 되서 index, origin은 사실상 안써도 됨
// // // })

// // // console.log(multipleNums2);
// // // // [ 4, 8, 12, 16, 20, 24 ]

// // 축약 1.
// const nums2 = [1, 2, 3, 4, 5, 6];
// const multipleNums2 = nums2.map((item, index, origin) => { // function 위치 확인 후 축약! 매개변수 바로 뒤에 => 로 옴!
//   return item * 4; //item 값만 있으면 되서 index, origin은 사실상 안써도 됨
// })

// // // console.log(multipleNums2);
// // // // [ 4, 8, 12, 16, 20, 24 ]


// // // 축약 2.
// // const nums2 = [1, 2, 3, 4, 5, 6];
// // const multipleNums2 = nums2.map((item) => item * 4);
// // // 중괄호 내부에 return 이라는 것 밖에 없으면 생략 가능하다.

// // console.log(multipleNums2);
// // // // [ 4, 8, 12, 16, 20, 24 ]

// // * 화살표 함수! 1단계 -> 2단계 -> 3단계
// // 축약해서 쓰는 법은 많이 익혀야 한다. 후에 es, int 배울거임
// // 실제로 중괄호 외에 다른 코드가 있으면 안됨


// // 작은 실습 (화살표 함수 3단계)
// // const fruits = ["사과", "파인애플", "수박", "포도", "아륀지"];
// // const fruitsObjArr = fruits.map((item, index, origin) => {
// //   return {
// //     id: index,
// //     name: item
// //   }
// // });
// // return이 객체인 경우에는 중괄호 써야함. 이런건 허용하지 않음.

// // const nums = [3, 6, 9, 12, 15, 18, 21];
// // const divideArr = nums.map((item) => item / 3);
// // console.log(divideArr); // [1, 2, 3, 4, 5, 6, 7]

// // // 에어비엔비는 화살표 함수 쓰라고 유도를 한다.
// // // 먼저 화살표 함수 같은 것 보고 이해할 줄 알아야 한다.


// // // 배열함수, filter

// // // const numbers2 = [1, 2, 3, 4, 5, 6];
// // // const filterArr = numbers2.filter(function (item, index, og) {
// // //   return item > 3;
// // // })

// // // console.log(filterArr); // 4, 5, 6

// // const numbers3 = "123456".split(""); // 고인물들 이렇게 하는 사람도 있다.
// // const numbers2 = [1, 2, 3, 4, 5, 6];
// // const filterArr = numbers2.filter((item) => item > 3);

// // console.log(filterArr); // 4, 5, 6

// // 문자 글자 6글자 이상인 애만 뽑아보기
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
// const resultArr = words.filter(function (item) {
//   return item.length > 6;
// })

// console.log(resultArr); // [ 'exuberant', 'destruction', 'present' ]

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
// const resultArr = words.filter((item) => return item.length > 6;);

// console.log(resultArr); // [ 'exuberant', 'destruction', 'present' ]

// // filter는 코테에서 정말 많이 사용된다.

const numbers4 = [1, 2, 3, 4, 5, 6];

console.log(numbers4.includes(3)); //true
console.log(numbers4.includes(7)); //false


