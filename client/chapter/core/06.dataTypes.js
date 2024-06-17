/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "hello";
const single = 'hello';
const backtick = `hello ${double+single}`;

console.log(backtick);
console.log(typeof backtick);

const str = new String('hello');
// new String() -> String 생성자 함수를 사용하여 문자열 객체를 만든다
// 생성자 함수 앞에는 무조건 new 붙여야 함

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;  // number literal
const floatingPointNumber = 10.5;

console.log(typeof NaN);

const num = new Number(150);
console.log(num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;

console.log(typeof bigInt);

// const b = BigInt(111);
// console.log(b);

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = true;
console.log(typeof isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {name:'tiger'}  //object literal
const object = new Object({name:'seonbeom'}); //constructor function
console.log(obj);
console.log(object);

// 8. 고유한 식별자(unique identifier)
const id = Symbol('uuid');
const id2 = Symbol('uuid'); 
//위 아래 다름
//심볼은 new 안붙임

console.log(typeof id);
console.log(typeof id2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object
const user = {
  name: 'tiger',
  age: 20,
  sum:function(a,b){
    return a+b
  },

  sayHi:function(){ //normal function
    return 'hello'
  },

  sayHi2:()=>{    //arrow funtion
    return this
  },

  sayHi3(){    //concise method / 가장 많이 씀
    return this
  }
};

console.log(user);



// Array
const newArray = new Array(1,2,3);
const arr = [10,100,1000,null,undefined,'hello',{name:'tiger'},function () {}];

// function
function 더하기(a,b){
  return a + b
}
const 결과 = 더하기(1,2);
console.log(결과);

function 붕어빵틀(재료){
  return `따끈 따끈 맛있는 ${재료} 맛 붕어빵`
}

const 팥붕 = 붕어빵틀('팥')
const 슈붕 = 붕어빵틀('슈크림')
const 와붕 = 붕어빵틀('와사비')

console.log(팥붕);
console.log(슈붕);
console.log(와붕);

// this


