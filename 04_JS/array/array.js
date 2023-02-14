// Array (배열)
// 중괄호 대신 대괄호로 만들고, 배열 앞에 있는 것은 element 요소라고 불린다.
// 각 안에 순서를 매겨주는 것이 있는데 index == PropertyName 의 역할을 한다.

// indexing (0~..)
console.log(배열이름[index]);

const fruits = ["Pen", "Pineapple", "Apple", "Pen"];
console.log(fruits[0], fruits[1], fruits[2], fruits[3], fruits[4]);
// 없는거는 undefined 가 찍힘.

const dataType = ["String", 1, true, undefined, null]
console.log(dataType[0], dataType[1], dataType[2], dataType[3], dataType[4]);
// 일부로 없앴으면 null 이라고 찍힘.

