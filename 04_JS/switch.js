// Switch
// if문과 함께 잘 쓰는 switch
// 리액트 리덕트? 에 특정 상황에 잘 씀
// switch문이 if문보다 가독성이 좋다는게 요즘 평이다.

// get day

// console.log(new Date().getDay());
// case 0:
// day = "일요일";
// break;

// let gender = 'X';
// switch (gender) {
//   case 'F':
//     console.log('여성 입니다');
//     break
//   case 'M':
//     console.log('남성 입니다');
//     break;
//   default:
//     console.log('외계인 입니다');
//     break;
//   // default: if문의 else의 개념, 위의 것이 아닐 때 하는 것
// }


// let today = new Date().getDay();

// if (today === 0) {
//   alert('일요일')
// }
// else if (today === 1) {
//   alert('월요일')
// }
// else if (today === 2) {
//   alert('화요일')
// }
// else if (today === 3) {
//   alert('수요일')
// }
// else if (today === 4) {
//   alert('목요일')
// }
// else if (today === 5) {
//   alert('금요일')
// }
// else if (today === 6) {
//   alert('토요일')
// }

// let day = new Date().getDay();

// if (day === 0) {
//   alert("일요일");
// } else if (day === 1) {
//   alert("월요일")
// }
// else if (day === 2) {
//   alert("화요일")
// }
// else if (day === 3) {
//   alert("수요일")
// }
// else if (day === 4) {
//   alert("목요일")
// }
// else if (day === 5) {
//   alert("금요일")
// }
// else {
//   alert("토요일")
//   // 마지막이니까 day===6 안넣어줘도 됨
// }

let day = new Date().getDay();

if (day === 0) alert("일요일");
else if (day === 1) alert("월요일");
else if (day === 2) alert("화요일");
else if (day === 3) alert("수요일");
else if (day === 4) alert("목요일");
else if (day === 5) alert("금요일");
else alert("토요일");

  // 마지막이니까 day===6 안넣어줘도 됨
  // 안뜸