let mathScore = prompt("수학 점수를 입력하세요.");
let engScore = prompt("영어 점수를 입력하세요.");

let mathScoreNum = Number(mathScore);
let engScoreNum = Number(engScore);

let avg = (mathScoreNum + engScoreNum) / 2;

console.log(avg);

// 명시적 형 변환 사용하기

