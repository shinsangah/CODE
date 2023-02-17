const tc = 12;

function solution(num) {
  let answer = 0; // 무지성 답

  for (let i = 1; i <= num; i++) { // 무지성 for문
    if (num % i === 0) answer = answer + i;
  }


  return answer;
}


console.log(solution(tc));