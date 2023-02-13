// // 상속, 기존의 틀을 토대로 다른 틀을 만들자!

// // 클래스 선언
// class Car {
//   // 생성자 전달
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   } // 메소드 선언

//   drive() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`)
//   }
// }

// // 클래스 상속
// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }

//   showFuel() {
//     console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다.`);
//   }
// };

// const tesla = new ElecCar('tesla', 'green', 'electricity')
// tesla.drive(); // tesla의 green색 자동차가 주행 중입니다.
// tesla.showFuel(); // 해당 자동차는 electricity의 힘으로 움직입니다.


// 오버라이딩 (over-riding)

// 클래스 선언
// class Car {
//   // 생성자 전달
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   } // 메소드 선언

//   drive() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`)
//   }
// }

// // 클래스 상속

// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }

//   drive() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 움직입니다.`);
//   }
// };

// const hyundai = new Car('hyundai', 'blue')
// hyundai.drive(); // hyundai의 blue색 자동차가 주행 중입니다.

// const tesla = new ElecCar('tesla', 'green', 'electricity')
// tesla.drive(); // tesla의 green색 자동차가 electricity의 힘으로 움직입니다.

// // 같은 drive 메소드를 출력했지만, 이렇게 서로 다르다!


// super

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  showSpec() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`)
  }
}

class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  showSpec() {
    super.showSpec();
    console.log(`그리고 이 차는 ${this.fuel}의 힘으로 움직입니다.`);
  }
};

const hyundai = new Car('hyundai', 'blue')
hyundai.showSpec();

// hyundai의 blue색 자동차가 주행 중입니다.

const tesla = new ElecCar('tesla', 'green', 'electricity')
tesla.showSpec();

//tesla의 green색 자동차가 주행 중입니다.
// 그리고 이 차는 electricity의 힘으로 움직입니다.


// super는 빌려오는게 아니라, 실제로 데이터를 들고 가서 부모한테 실행을 시킨다.
// 이거 실제로 쓴 기억이 없다. 최근에 super 라는 키워드를 통해 개발한 기억에 없다.
// 하지만 알아둬서 나쁠건 없다는 점..

// instanceof

console.log(hyundai instanceof Car) //true
console.log(tesla instanceof Car) //true
// 상속을 받아도 걔는 부모요소를 기억하고 있다.