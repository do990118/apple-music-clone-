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

// const inputRadius = prompt('반지름을 입력해 주세요')

// function calcCircleArea(r){
//     return Math.PI.toFixed(2) * (r * r);
// }

// console.log(calcCircleArea(inputRadius))

// function calc(){
//     const n = prompt('반지름 입력');
//     return 3.14 * (n**2);
// }

// 26. 행성 문제2

// const planetName = {
//   '수성': 'Mercury',
//   '금성': 'Venus',
//   '지구': 'Earth',
//   '화성': 'Mars',
//   '목성': 'Jupiter',
//   '토성': 'Saturn',
//   '천왕성': 'Uranos',
//   '해왕성': 'Neptune'
// }

// const input = prompt('태양계 행성의 이름을 입력하세요');

// if(input in planetName){
//   console.log(planetName[input]);
// }else if(!(input in planetName)){
//   console.log('태양계를 벗어났습니다')
// }

// 27. 객체 만들기

// const inputName = prompt('두 학생의 이름을 입력해 주세요').split(' ');
// const inputScore = prompt('두 학생의 수학 점수를 입력해 주세요').split(' ');

// const obj = {};

// inputScore.forEach((item, index)=>{
//   obj[inputName[index]] = item;
// })

// console.log(obj);

// 28. 2-gram

// const str = prompt('문자열을 입력해 주세요').split('');

// for(i=0; i<str.length-1; i++){
//   console.log(str[i] + ' ' + str [i+1])
// }

// 29. 대문자만 지나가세요

// const str = prompt('알파벳을 입력해 주세요');

// if (str === str.toUpperCase()){
//   console.log('YES');
// }else{
//   console.log('NO');
// }

// 30. 문자열 속 문자 찾기

// const inputStr = prompt("문자열을 입력해 주세요");
// const str = prompt("찾을 문자열을 입력해 주세요");

// const firstIndex = inputStr.indexOf(str);
// // const last = str[str.length - 1];
// // const lastIndex = inputStr.lastIndexOf(last);

// // console.log(inputStr.slice(firstIndex, lastIndex + 1));

// if(firstIndex >= 0){
//   alert(
//     `귀하가 찾는 문자열은 인덱스 번호 ${firstIndex} 번째부터 존재합니다`
//   );
// }else{
//   alert(
//     '귀하가 찾는 문자열이 존재하지 않습니다'
//   );
// }