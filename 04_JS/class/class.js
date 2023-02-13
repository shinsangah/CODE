// 생성자 함수 버전

function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`)
  }
}

const hyundai = new Car('hyundai', 'green');
// const porsche = new Car('porsche', 'red');
// const toyota = new Car('toyota', 'white');

console.log(hyundai); // Car { brand: 'hyundai', color: 'green', drive: [Function (anonymous)] }
hyundai.drive(); // hyundai의 green색 자동차가 주행 중입니다!

// 위와 동일하게
// 클래스 (class) 버전

class ClassCar {
  constructor(brand, color) {
    // 클래스는 이렇게 constructor 키워드를 통해서 받고 있다. 매개변수가 이거임.
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`)
  }
}

const porsche = new ClassCar('porsche', 'black')
console.log(porsche); // ClassCar { brand: 'porsche', color: 'black' }
porsche.drive(); // porsche의 black색 자동차가 주행 중입니다!



// strict mode
// 생성자 함수는 선언전에 사용되어도 자동으로 hoisting 일어나서 문제가 없음.
// 편리는 하겠지만, 위험한 방법 가급적 선언을 하고 사용해야 함.
// Class는 반면에, 선언전에 사용하면 안되서 후에 와야되니까 강제가 되서 안전하다.