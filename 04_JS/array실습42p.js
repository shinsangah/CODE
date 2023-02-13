// 14. JS LECTURE (P.42 실습)

// 0, 1, 2~ 0부터 시작하는 점

let kdt = ['두루', '인영', '상아', '유림'];

console.log(kdt.push('백진솔'));
// 앞에 6 뜨고, 이름 정렬된다. 주의!
console.log(kdt);

// kdt.pop();
console.log(kdt.pop());
// 백진솔 하나만 뜸. 어떤 값을 빼냈는지만 나옴
console.log(kdt);


// kdt[0] = '진솔'
// console.log(kdt.length);


// const kdt = ['두루', '인영', '상아', '유림', '슬기'];
// console.log(kdt[2])

kdt.unshift('효석');
console.log(kdt);

kdt.shift('효석');
console.log(kdt);

console.log(kdt.unshift('효석'));
// 5 뜸
console.log(kdt);

console.log(kdt.shift(''));
// 효석 만 뜸. 어떤 값을 빼냈는지 나옴
console.log(kdt);

for (let i = 0; i < kdt.length; i++) {
  console.log(kdt[i]);
}

// 배열에 내장된 함수들이 더 많이 있는데,
// 그건 아예 따로 다룰 것임. 꽤나 중요하다.
// 실제로 데이터베이스 받아와서 처리하는거 많다.
// 코테에서도 주구장창 쓰기 때문에..