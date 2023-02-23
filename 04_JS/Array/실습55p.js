// 15. JS LECTURE (P.55 실습)
// 메소드 체이닝


// const KdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];
// const Result1 = KdtCurriculum[0].split("").reverse().join("");
// const Result2 = KdtCurriculum[4].split("").reverse().join("");
// console.log(Result1);
// console.log(Result2);

// LMTH
// TCAER


// 강사님 정답

const KdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];
const Result1 = KdtCurriculum.shift().split("").reverse().join("");
// shift() 첫번째 값을 제거
const Result2 = KdtCurriculum.pop().split("").reverse().join("");
// pop() 마지막 값을 제거
console.log(Result1);
console.log(Result2);

// LMTH
// TCAER

// KdtCurriculum.shift()
// KdtCurriculum.pop()

// 얘네가 어떤 리턴값을 갖는지 알고 나서!