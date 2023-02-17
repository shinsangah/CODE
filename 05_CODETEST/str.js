// // 문자열
const str = "Hello, World! World"; // -> H + e + l + l + o , 
// // 단어들이 연속되어있는 일종의 배열, 문자열의 길이를 알고 싶으면
// // 배열 길이를 아는 것처럼 하면 된다.

// 문자열 길이
console.log(str.length); // 13 공백도 문자열임


// const str = "Hello, World!";
// for (let i = 0; i < str.length; i++) {
//   console.log((str[i]));
// }

// 문자열에는 배열과 같은 함수 거는거 안된다.
// 문자열에 배열 함수 거는 방법 따로 있음.


// 특정 문자열 찾기
// const str = "Hello, World! World"; // 제일 처음 만난 단어 World 만 인식된다. 7번째로!
console.log(str.indexOf("World")); // 7 (0 부터 시작해서 7번째!)

// 문자열 자르기
console.log(str.slice(0, 6)); // 6번째 직전 까지 나오게 해라.
console.log(str.slice(0, str.indexOf("World"))) // Hello, 콤마 뒤에 공백까지 짤린 상태로 return. World 까지 나오게 해라!

// 문자열 바꾸기
console.log(str.replace("World", "뽀로로")); // World 라는 단어를 뽀로로로 바꿔주세요.
console.log(str); // 위를 작업했을 때, 원본은 바뀌지 않음.
// 문자열 관련 메소드를 봤을 때 원본에다가 뭔가 변화하는 건 없다. 바꾼 값을 return 해주는구나.

// 문자열 반복
const str2 = "우영";
const longStr = str2.repeat(10) + "우";
console.log(longStr) // 우영우영우영우영우영우영우영우영우영우영우

// 공백 제거 (trim)
const str3 = "     Hello, World     "
console.log(str3.trim()); // Hello, World (앞 뒤 공백없이 나옴)
// trim은 slice나 indexof 사용 안하고 고통스럽지 않게 사용할 수 있음
