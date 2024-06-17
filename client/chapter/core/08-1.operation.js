/* ---------------- */
/* Operators        */
/* ---------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상
let a ='10';
let b = '30';

// 단항 연산자
let unary = +a;
console.log('unary: ', unary);

// 이항 연산자
let binary = a + b;
console.log('binary: ', binary);

let binary2 = Number(a) + Number(b);
console.log('binary2: ', binary2);

// 삼항 연산자
let ternary = a > 10 ? '사실입니다' : '거짓입니다';
console.log('ternary: ', ternary);

// 산술 연산자: 덧셈
let addition = 1 + 2;
console.log(addition);

// 산술 연산자: 뺄셈
let subtraction = 10 - 1;
console.log(subtraction);

// 산술 연산자: 곱셈
let multiplication = 20 * 2;
console.log(multiplication);

// 산술 연산자: 나눗셈
let division = 30 / 2;
console.log(division);

// 산술 연산자: 나머지
let remainder = 10 % 3;
console.log(remainder);

// 산술 연산자: 거듭 제곱
let power = 2 ** 10;
console.log(power);
console.log(Math.pow(2, 10));

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion);

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
console.log(onlyWorkDefaultValues);

let onlyWorkDefaultValues2 = [1,2,3].concat([4,5,6]);
console.log(onlyWorkDefaultValues2);

//spread syntax (전개 구문)
//spread operator (전개 연산자)
let first = [1, 2, 3];
let second = [4, 5, 6];
console.log([...first, ...second]);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --
let counter = 0;
console.log(++counter);
console.log(counter);

let counter2 = 0;
console.log(counter2++);
console.log(counter2);

// 복합 할당 연산자
counter += 1;

// 풀어서
counter = counter + 1

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // 2*5+5**3=135
console.log(total);

let count2 = 10;
let total2 = count2 % 4;
count2 = count2 / 2;
let pow = count2 ** 3;
total2 = total2 * count2 + pow;
console.log(total2);
