// let tree = '';

// for(let i=1; i<=9; i++){
//   let star = ' ';
//   for(let j=1; j<=9-i/*(전체 - 별 개수)만큼의 공백 개수*/; j++){
//     star += ' ';
//   }
//   for(let k=1; k<=2*i-1/*별이 홀수 개라서*/; k++){
//     star += '*';
//   }
//   tree += star + '\n';
// }

// console.log(tree);

// --------------------- 과제 (2월 5일)

// 첫 번째 패턴(왼쪽 위에서부터 1, 2, 3, 4, 5 개의 별이 찍힘)

// let tree = '';

// for (let i = 1; i <= 5; i++){
//     let star = ''
//     for(let j = 1; j <= i; j++){
//         star += '*'
//     }
//     tree += star + '\n';
// }

// console.log(tree);

// 두 번째 패턴(왼쪽 위에서부터 5, 4, 3, 2, 1 개의 별이 찍힘)

// let tree = '';

// for(let i = 1; i <= 5; i++){
//     let star = '';
//     for(let j = 0; j <= 5 - i; j++){
//         star += '*';
//     }
//     tree += star + '\n'
// }

// console.log(tree);

// 세 번째 패턴(오른쪽 위에서부터 1, 2, 3, 4, 5 개의 별이 찍힘)

// let tree = '';

// for(let i = 1; i <= 5; i++){
//     let star = '';
//     for(let j = 1; j <= 5 - i; j++){
//         star += ' ';
//     }
//     for(let k = 1; k <= i; k++){
//         star += '*';
//     }
//     tree += star + '\n'
// }

// console.log(tree);

// 네 번재 패턴 (오른쪽 위에서부터 5, 4, 3, 2, 1 개의 별이 찍힘)

// let tree = '';

// for(let i = 1; i <= 5; i++){
//     let star = '';
//     for(let j = 1; j <= i; j++){
//         star += ' '
//     }
//     for(let k = 0; k <= 5 - i; k++){
//         star += '*'
//     }

//     tree += star + '\n'
// }

// console.log(tree);

// 다섯 번재 패턴 (좌우 대칭, 위에서부터 1, 3, 5, 7, 9 개의 별이 찍힘)

// let tree = '';

// for(i = 1; i <= 5; i++){
//     let star = '';
//     for(j = 0; j <= 5 - i; j++){
//         star += ' ';
//     }
//     for(k = 1; k <= (2 * i) - 1; k++){
//         star += '*';
//     }
//     tree += star + '\n';
// }

// console.log(tree);

// 여섯 번째 패턴 (좌우 대칭, 위에서부터 9, 7, 5, 3, 1 개의 별이 찍힘)

// let tree = '';

// for(i = 1; i <= 5; i++){
//     let star = '';
//     for(j = 0; j <= i; j++){
//         star += ' ';
//     }
//     for(k = 1; k <= 10 - (2 * i - 1); k++){
//         star += '*'
//     }
//     tree += star + '\n'
// }

// console.log(tree);


// 21. set은 어떻게 만드나요?

/* 
다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();

답: (3), (5)

set는 중복을 허용하지 않으며, 키가 없는 값이 저장된다.

// Set 선언, 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어준다.
let set =new Set(iterable)

생성자 함수의 이름은 대문자로 시작하고, 반드시 'new' 연산자를 붙여 실행한다

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("보라");

 */

// 22. 배수인지 확인하기

/* 

다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

1)  i / 6 == 0
2)  i % 6 == 0
3)  i & 6 == 0
4)  i | 6 == 0
5)  i // 6 == 0

(2)

*/

// 23. OX 문제

// X

// 24. 대문자로 바꿔 주세요!

// const name = prompt('이름을 입력해 주세요');

// console.log(name.toUpperCase());

// 25. 원의 넓이를 구하세요

const inputRadius = prompt('반지름을 입력해 주세요')

function calcCircleArea(r){
    return Math.PI.toFixed(2) * (r * r);
}

console.log(calcCircleArea(inputRadius))