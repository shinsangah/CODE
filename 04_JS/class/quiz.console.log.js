// 14. JS LECTURE (129~131p. 실습)
// 128p. QUIZ 직접 쳐봐야 함

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
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`)
  }
}