// // 23.02.17. 금
// // 실습

// // - 1 부터 100 까지의 숫자가 들어 있는 배열을 for 문으로 만들기
// // - Map 메소드를 이용하여 해당 배열의 합산을 구하기!

// const arr = [];
// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }

// // 배열의 합산값을 저장할 변수

// let sum = 0;
// const mapArr = arr.map(function (item) {
//   sum += item; // 이렇게 적어도 합산 구하는데 문제 없음. undefined가 100개 나옴.
//   return sum += item; // 5050 [각각의 합산 값들이 나온다.] // return의 유무에 따라서 달라진다.
// });

// let sum = 0;
// const mapArr = arr.map((item) => sum += item0);

// console.log(sum);

const obj = {
  nba: "lebron",
  soccer: "messi",
  baseball: "TMT",
}

for (item in obj) { // 객체에서는 of 못 쓰고 in만 씀. 배열에서만 of 씀..
  console.log(obj[item]); // lebron messi TMT
}

for (letter in str) {  //배열이면 index, 객체면 key 전달
  console.log(letter);
}
