// 생성자 함수
// function 첫 글자는 대문자로!

function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
}

// const user1 = {
//   name: '신상아',
//   gender: 'F',
// }

// 이렇게 작성해야 할 코드를 아래처럼 간단하게 작성하는 것임

let user1 = new Kdt('신상아', 'F');
let user2 = new Kdt('최인영', 'F');
let user3 = new Kdt('이유림', 'F');
let user4 = new Kdt('구슬기', 'F');
let user5 = new Kdt('최두루', 'M');

// new 연산자를 사용해서 호출

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);


// 생성자 함수에 method 추가
// key는 this에다가 붙여주면 된다.

function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showName = function () {
    console.log(`성함은 ${this.name} 입니다.`);
  }
}


user1.showName();
user2.showName();
user3.showName();
user4.showName();
user5.showName();


