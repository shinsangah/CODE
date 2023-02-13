// // 14. JS LECTURE (P.96 실습)

// // 실습

// // Kdt 라는 생성자 함수를 만들어 주세요.
// // 생성자 함수에는 참여자의 이름 / 성별 데이터가 포함 됩니다.
// // 참여자의 이름과 성별을 출력하는 method 도 포함됩니다.
// // 자신과 짝꿍 , 그리고 바로 같은 줄에 있는 참여자 4 명에 대한 정보 를 생성자 함수를 이용하여 5 개의 변수로 저장하세요.
// // 참여자의 이름과 성별을 출력하는 method 를 이용 5 명의 정보를 출력해 보세요.

// let user1 = new Kdt('최두루', 'M');
// let user2 = new Kdt('최인영', 'F');
// let user3 = new Kdt('신상아', 'F');
// let user4 = new Kdt('이유림', 'F');
// let user5 = new Kdt('구슬기', 'F');

// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.showNameGender = function () {
//     console.log(`성함은 ${this.name}이고, 성별은 ${this.gender}입니다.`);
//   }
// }

// // function Kdt(name, gender) {
// //   this.name = name;
// //   this.gender = gender;
// //   this.showNameGender = function () {
// //     console.log(`성함은 ${this.name}이고, 성별은 ${this.gender === 'F' ? '여자' : '남자'}입니다.`);
// //   }
// // }

// user1.showNameGender();
// user2.showNameGender();
// user3.showNameGender();
// user4.showNameGender();
// user5.showNameGender();





// 강사님 정답

// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.showInfo = function () {
//     console.log(`참여자의 이름은 ${this.name}이고, 성별은 ${this.gender}입니다.`);
//   }
// }


function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showInfo = () => { // function 지우고 화살표 넣어보기
    console.log(`참여자의 이름은 ${this.name}이고, 성별은 ${this.gender}입니다.`);
    // 생성자 함수 안에 자체적으로 있는 this로 오는 것 같다. 추측. 왜 되지? ㅎ-ㅎ
  }
}

let user1 = new Kdt('서강준', 'M');
let user2 = new Kdt('신상아', 'F');

user1.showInfo();
user2.showInfo();
