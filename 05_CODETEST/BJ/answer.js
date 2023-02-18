const fs = require('fs');
// node.js 에 있는 파일 시스템을 불러와주세요.
// fs 라는 변수에 담을게요. fs 컨트롤 할게요.

// const input = fs.
// readfilesync 파일을 읽겠다.파일을 읽는동안 멈춰주겠다.
// dev라는 폴더에 스텐다드인풋 이라는 파일을 만들어준거
// 거기서 백준에서 제공하는 input이 들어가있는거임.거기서 파일읽어들이게 되면
// 사람이 볼 수 있는 문자열로 바꿔주낟 to string
// 거기서 또 배열로 바꿔주는 작업 split 그런것까지 해야 인풋 받아들일 수 있음

const input = fs.readFileSync('./dev/stadin').toString()//위치, 백준 서버랑 다르기 때문에 상대경로로 써준다.
console.log(input);

// const A = parseInt(input[0], 10); // 10 은 저 숫자를 십진법으로 바꿔주세요.
// const B = parseInt(input[1], 10);

// console.log(A, B);
// console.log(A + B);
const num = parsInt(input, 10);