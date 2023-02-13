// 14. JS LECTURE (129~131p. 실습)
// 강사님 정답

// 실습
// 조건에 부합하는 클래스 코드 짜기

// Shape 클래스
// • 생성자: width, height
// • 메소드
// • getArea() : Shape 의 넓이를 리턴(width * height 로 계산

// Rectangle 클래스
// • Shape 클래스를 상속
// • getArea() 메소드는 사각형의 넓이를 리턴

// Triangle 클래스
// • Shape 클래스를 상속
// • getArea
// () 메소드는 삼각형의 넓이를 리턴

// Circle 클래스
// • Shape 클래스를 상속
// • width, height 이외에 radius 생성자 추가
// • getArea () 메소드는 원의 넓이를 리턴

// • 각각의 클래스로 해당 클래스의 넓이를 Console.log 에 출력하기

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

// Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
    // 슈퍼로 그대로 받겠다. 문제없이 처리.
  }
  // getArea //그대로 받아올 거 없으니까 메소드 오버라이딩 할거 없음!
}

// Triangle
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
    // 얘도 부모랑 동일하게 사용하겠다.
  }

  getArea() {
    return this.width * this.height / 2;
    // 삼각형 넓이가 다르니까 넓이랑 높이가 다르니까 값을 다르게 오버라이딩
  }
}

// Circle

class Circle extends Shape {
  // 얘는 넓이랑 높이값 받을 거 없고, 반지름 값만 받을게 있다.
  constructor(radius) {
    super(); // 슈퍼는 무조건 콜을 해줘야 함. 부모로부터 값을 받아오지 않아도.
    this.radius = radius;
  }

  getArea() {
    return this.radius ** 2 * 3.14; // 원의 넓이를 구하는 값
  }

}

const rec = new Rectangle(10, 10);
const tri = new Triangle(10, 10);
const cir = new Circle(3); // 반지름 값만 넣어주면 됨

console.log(rec.getArea()); // 100
console.log(tri.getArea()); // 50
console.log(cir.getArea()); // 28.26
