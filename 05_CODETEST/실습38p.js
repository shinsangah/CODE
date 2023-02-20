// 실습 p.38

const { log } = require("console");

const nums = [-1.23, 13, 14.52, -33.53, 30];

// 주어진 배열에서 가장 큰 수와 작은 수의 찾아서 소수점을 버림 처리
console.log(Math.floor(Math.max(...nums)));
console.log(Math.floor(Math.min(...nums)));

// 해당 수 절대값의 평균을 구하기
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += Math.abs(nums[i]); // 단축키 적응 안되면 sum = sum + Math.abs(nums[i]) 적용
};
console.log(sum / nums.length);
// 코딩하다가 절대값 구하는 내용은 거의 안나옴. 많이 안나올것임.

// 0 ~ 100 까지의 숫자 중에서 랜덤한 정수가 나오도록 만들기
console.log(Math.floor(Math.random() * 100));
// 0.1 이 나왔으면 10이 나왔을거고, 1이 나오면 100이 나오겠고 이런 형태로 대충 처리
// 소숫점이 되게 기니까 뒤에 있는 소수점을 잘라줘야 한다.
// 1부터 100까지 숫자면 Math.ceil 을 쓰는게 낫다.
// 근데 0부터 쓰는거니까 Math.floor 쓰는게 나음.
// 100조 분의 1 확률로 101도 뜬다. 100.9 를 곱해도 됨. 아예 101은 안되게 뜸.
// 확률상으로 정확히 동일하진 않다. 확률상으로! 보통은 *100 많이 씀


let sum = 0;
for (let i = 0; i <nums.length; i++) {
  sum += Math.abs(nums[i]);
};
console.log(sum / nums.length);