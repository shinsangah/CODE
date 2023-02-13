// 생성자 함수로도 해보자! (ES5버전)
// ES6 버전 쓰는게 훨씬 낫다.

function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = function () { // 메소드 선언
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`)
  }
}

// 생성자 함수로 상속

function ElecCar(brand, color, fuel) {
  Car.call(this, brand, color);
  // 이게 super랑 같은 역할을 해주게 되는거겠죠.
  this.fuel = fuel;
  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 주행 중입니다.`)
  }
}

ElecCar.prototype = Object.create(Car.prototype);
ElecCar.prototype.constructor = ElecCar;
// 객체 자체를 관리하는 생성자 함수를 통해서.. 골 때리는 부분임. 이래서 Class 쓰라는거임
// 1+1=2 잖아요. 그냥 받아들이셔야 합니다..
const tesla = new ElecCar('tesla', 'white', 'electricity');
tesla.drive(); // tesla의 white색 자동차가 electricity의 힘으로 주행 중입니다.

// 이거 외워서 못침. 코드 보면서 함..
// 이거 외우느니 생성자 함수를 class 함수로 뜯어고칠 것 같다고 함.
// 기능상으로 동일하나 코드가 보기 어렵다.

// 이래서 class가 생성자 함수의 문법적 달콤함 이라고 얘기 하는 것이다.
// ES6는 extends 만 해서 하면 되니까..

