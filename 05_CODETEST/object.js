// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// // 객체 2개를 합쳐주는 역할
// const resultObj = Object.assign(obj1, obj2);
// // 합칠 데이터를 제공하는 애를 두번째에 넣어줌. obj2

// console.log('obj1', obj1); // obj1 { a: 1, b: 3, c: 4 }
// console.log('obj2', obj2); // obj2 { b: 3, c: 4 }
// console.log('resultObj', resultObj); // resultObj { a: 1, b: 3, c: 4 }
// console.log(obj1 === resultObj); // true resultObj 메모리 값을 합친 다음에 obj1 에 전달해주는 것 // resultObj { a: 1, b: 3, c: 4 }
// resultObj.a = 10;
// console.log(obj1); // { a: 10, b: 3, c: 4 }

const sangahObj = {
  name: "신상아",
  age: "30",
  brain: full,
};

// 객체에 있는 하나하나의 값이 바깥에서 변수로 만들고 싶어졌다면?

// const name = tetzObj.name; // 옛날 사람이라 이게 더 편하다고 함.
// 자바스크립트를 이끌어나가고 있는 airBnb 에서는 구조분해할당을 써야 한다 라고 핍박
// const age = tetzObj.age;
const { name: sangahName, age, brain, boyFriend = "없음" } = sangahObj; // 위와 아래는 같은 방식. 구조분해할당이라는 것이 들어간 방법.
// 이거 안쓰면 ex int 라는 친구가 난리를 침
console.log(sangahName, age, brain, boyFriend);

// 왜 안뜨냐!