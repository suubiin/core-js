/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log('AandB:', AandB);

// 논리곱 할당 연산자 Logical AND Assignment
// a &&= b

// 논리합(또는) 연산자
let AorB = a || b;
console.log('AorB:', AorB);

// 논리합 할당 연산자 Logical OR Assignment
// a ||= b

// 부정 연산자
let reverseValue = !value;

console.log('reverseValue:', reverseValue);


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};



// 로그인 구현하기
let userName = prompt('누구세요??');

if(userName?.toLowerCase() === 'admin'){
  let pwd = prompt('비밀번호를 입력하세요');

  if (pwd?.toLowerCase() === 'themaster'){
    console.log('환영합니다!');
  }
  else if (pwd?.replace(/\s*/g,'') === '' || pwd === null){
    console.log('취소되었습니다');
  }
  else{
    console.log('인증에 실패하였습니다');
  }
}
else if(userName?.replace(/\s*/g,'') === '' || userName === null){
  console.log('취소되었습니다');
}
else{
  console.log('인증에 실패하였습니다');
}