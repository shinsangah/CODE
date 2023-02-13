// if 문

// if (false) {
//   console.log('true 입니다')
// } else if (true) {
//   console.log('elseif 문 내부입니다');
// } else {
//   console.log('false 입니다');
// }

// 조건 비교
// let sangAhAge = 31;
// sangAhAge += 2;

// if (sangAhAge > 40) {
//   console.log('그녀는 늙었습니다.');
// } else if (sangAhAge <= 40 && sangAhAge >= 20) {
//   console.log('그녀는 MZ 입니다');
// }
// else {
//   console.log('그녀는 X세대 입니다');

// // if (sangAhAge <= 34) {
// //   console.log('그녀는 MZ 입니다');
// // } else {
// //   console.log('그녀는 X 세대 입니다');
// // }

// // if문 중첩
// // 2번 이상 중첩된건 하지 말라고 한다.
// // 알고는 계시되, 최대한 덜 쓰는 방법 찾으셈.
// // 중첩이 많으면 코드가 복잡해지고 안좋음.

// let isOld = true;
// let isRich = false;

// if (isOld) {
//   if (isRich) {
//     console.log('망했어요');
//   } else {
//     console.log('낫 베드');
//     // 여기서 true가 나왔으니까 밑에거 안읽음
//   }
// } else {
//   if (isRich) {
//     console.log('대박');
//   } else {
//     console.log('부럽');
//   }
// }

// 우테코;
// for문이 됐건, if문이 됐건 2개 이상 쓰면 탈락함.
// 현업에서는 얼마나 빡셀지

// // NOT 연산자
// let otherAge = 16;
// let isAdult = otherAge > 19;

// if (!isAdult) {
//   console.log('돌아가');
// } else {
//   console.log('통과');
// }

// 다중 비교
// 여성이고, 이름이 Jane 이거나 성인이면 통과

// let gender = 'M';
// let name = 'Tom';
// let isAdultTom = true;

// if (gender === 'F' && name === 'Jane' || isAdultTom === true) {
//   // 컴퓨터다 보니까 2개씩 판단하다.
//   console.log('통과');
// } else {
//   console.log('돌아가');
// }

// if (gender === 'F' && (name === 'Jane' || isAdultTom === true)) {
//   console.log('통과');
// } else {
//   console.log('돌아가');
// }

// let isAdult = true;
// let vip = true;
// let isDrunken = false;
// let money = true;

// if (isAdult || vip === isDrunken || money) {
//   console.log('통과');
// } else {
//   console.log('돌아가');
// }

// let isAdult = true;
// let guest = 'normal';
// let isDrunken = false;
// let money = true;

// if ((isAdult || guest === 'vip') === isDrunken || money) {
//   console.log('통과');
// } else {
//   console.log('돌아가');
// }

// 강사님 정답 (23.02.10)
// 실습 : CLUB
// 변수 겹치는 것 방지, 객체로도 전향

// const 신상아 = {
//   성인인가: true,
//   VIP: false,
//   취했는가: true,
//   돈: false,
// };

// if (((신상아.성인인가 || 신상아.VIP) && 신상아.취했는가 ||)신상아.돈) {
//   console.log(통과);
// } else {
//   console.log('돌아가');
// }

// if (((신상아.돈 || 신상아.취했는가) && 신상아.성인인가) || 신상아.VIP) {
//   // 더 결정적인 FACT 들을 앞에 써준다. 그래서 더 도움이 된다.
//   console.log(통과);
// } else {
//   console.log('돌아가');
// }