// 14. JS LECTURE (P.60 실습)

const pororo = {
  name: '뽀로로',
  age: 7,
}

// 접근
console.log(pororo['name']);
console.log(pororo.age);

// 추가
pororo['gender'] = 'none';
pororo['height'] = '90cm';

// 삭제
delete pororo.gender;

// 출력
console.log(pororo)

console.log(pororo.age);
console.log('name' in pororo);
console.log('height' in pororo);

