// const sangahName = '신상아';
// const sangahAge = 31;
// const sangahIsMarried = false;
// 이런 것을 한 번에 넣어준 것이다. ↓ 객체로 선언

const sangah = {
  name: '신상아',
  age: 31,
}

// 접근
console.log(sangah.name); // 신상아
console.log(sangah['age']); // 31

// 추가
sangah.gender = 'F';
console.log(sangah) // { name: '신상아', age: 31, gender: 'F' }

sangah['dog'] = 'none';
console.log(sangah); // { name: '신상아', age: 31, gender: 'F', dog: 'none' }

// 삭제
delete sangah.dog; // { name: '신상아', age: 31, gender: 'F' }
// delete sangah['dog']; // { name: '신상아', age: 31, gender: 'F' }
console.log(sangah); // { name: '신상아', age: 31, gender: 'F' }
