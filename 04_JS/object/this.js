// this

// const user = {
//   name: "신상아",
//   sayHello: function () {
//     console.log(`안녕하세요. ${user.name} 님`);
//   }
// }

// user.sayHello(); //안녕하세요. 신상아 님


// this 라는 것은 user와 동일한 것!
// 자신이 속한 객체 전체에 객체 값을 가지고 오겠다.

const user = {
  name: "신상아",
  sayHello: function () {
    console.log(`안녕하세요. ${this.name} 님`);
  }
}

user.sayHello();


// 호이스팅 선언이기 때문에 아래에서 선언해도
// 문제 없이 작동은 한다. (ppt의 위치와 다른 이유)
function sayHello() {
  console.log(`Hello, I'm ${this.name}`)
}

// 소괄호를 치는 순간 실행이 되기 때문에
// 객체의 값으로 가져오는 경우에는 소괄호를 제거해야한다.

const boy = {
  name: "Mike",
  sayHello
}

const girl = {
  name: "Sally",
  sayHello
}

boy.sayHello(); //Hello, I'm Mike
girl.sayHello(); //Hello, I'm Sally
sayHello(); //Hello, I'm undefined