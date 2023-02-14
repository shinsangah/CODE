let sayHello = () => {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
}

let sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
}

// 내부에 this가 없으면 외부에 있는 global에서 가지고 옴.
// 그래서 최상위 window 것을 가지고 옴

// 화살표 함수로 this 를 사용하게 될 경우,
// 브라우저에 있는 this를 가지고 온다.
// node.js 같은데서 this를 가지고 있으면
// 백엔드에서는 글로벌 객체를 가지고 옴. 화살표 함수에서 this 사용 매우 위험 *

// 굳이 this를 안써도 되는 함수일 경우에는 화살표 함수가 권장,
// 2015년 이후에는 this가 필요없는 경우에는 많이 쓰인다!

const boy = {
  name: "Mike",
  sayHello,
}

const girl = {
  (property) sayHallo: () => void
sayHallo,
}

boy.sayHello();
girl.sayHallo();