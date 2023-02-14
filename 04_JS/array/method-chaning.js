// 메소드 체이닝
// split은 코테할 때 꽤 많이 쓴다.

// --> Hello
let hellotest = "H-e-l-l-o";
let helloTestArr = hellotest.split("-")
// let helloTestArr = hellotest.split("l")

// 하이픈을 잘라주는 기능을 해주는 것
// array 기능을 사용해서 잘라준다.
console.log(helloTestArr);
// [ 'H', 'e', 'l', 'l', 'o' ]


let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);
// [ 'o', 'l', 'l', 'e', 'H' ]

let resultStr = reverseHelloTestArr.join("") // 빈 문자열로 join을 시켜준다.
console.log(resultStr);
// olleH

// split에 반대되는 기능인 join
// 위에 하이픈 뺀거를 join 합쳐줄거야 아무것도 안들어간걸로! ""
// let HelloStr = helloTestArr.join("");
let HelloStr = helloTestArr.join("*");
// o*l*l*e*H
console.log(HelloStr)

// 특정 메소드들이 이렇게 return 값을 남긴다.
// 계속 줄줄이 쓴것을 메소드 체이닝으로 해본다.

let finalStr = hellotest.split("-").reverse().join("");
console.log(finalStr)
// olleH

const obj = {
  arr: ['a', 'b', 'c'],
  number: 10,
};

let testStr = obj.arr.reverse().join("")
console.log(testStr)
// cba

// 주의를 해야 하는 점

let testStr = obj.number.reverse().join("")
console.log(testStr)
// number 는 숫자에 reverse 못거니까 에러 뜬다. 숫자에는 reverse 못걸어요.
// 메소드 체이닝은 무엇이 남는지, 남는 애한테 어떤 메소드를 걸 수 있는지 확인하고 거셔야 함.

let testStr = obj.str.reverse().join("")
console.log(testStr)
// 에러뜬다. str 이란게 없으니까 undefined 한테 이런 reverse 못건다.
// 프론트는 에러가 떠도 무시해도 띄울건 띄우니까, 상관은 없는데
// 백엔드에서 불가능한 메시지 걸면 해당 Node.js 죽어버린다.

let testStr = obj.str?.reverse().join("")
console.log(testStr)
// undefined 라고 뜬다.
// 그래서 물음표 같은게 있다. 앞이 undefined 라서 해주는거
// 긴가민가할 때 ? 같은거 써주면 도움이 된다.물음표에서 코드가 멈춘다.
// 트라이캐치라는 게 있다. 이런것도 있다 정도 알아두면 좋음.