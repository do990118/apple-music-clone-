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


// 16. 로꾸거

// const inputMessage = prompt("문장을 입력해 주세요.");

// function reverse(newMessage) {
//   if (newMessage === null || /\s/g) {
//     throw new Error("공백은 들어갈 수 없습니다");
//   }
//   const result = newMessage.split("").reverse().join("");
//   console.log(result);
// }

// reverse(inputMessage);


// 17. 놀이기구 키 제한

// const inputHeight = +prompt('키를 입력해 주세요');

// if(typeof inputHeight !== 'number'){
//     alert('숫자만 입력해 주세요')
// }else if(inputHeight < 0 || inputHeight > 300){
//     alert('정확한 키를 입력해 주세요')
// }else if(inputHeight >= 150){
//     alert('어서 오세요')
// }else{
//     alert('입장하실 수 없습니다')
// }


// 18. 평균 점수

// const inputKoreanScore = +prompt('국어 점수를 입력해 주세요')
// const inputMathScore = +prompt('수학 점수를 입력해 주세요')
// const inputEnglishScore = +prompt('영어 점수를 입력해 주세요')

// const averageScore = (inputKoreanScore + inputMathScore + inputEnglishScore) / 3

// console.log(averageScore);


// 19. 제곱을 구하자

// const inputBottom = +prompt('밑을 입력해 주세요')
// const inputQuotient = +prompt('지수를 입력해 주세요')

// const power = inputBottom ** inputQuotient

// console.log(power)


// 20. 몫과 나머지

// const inputNumberA = +prompt('나누어질 숫자를 입력하세요');
// const inputNumberB = +prompt('나눌 숫자를 입력하세요');

// const division = Math.floor(inputNumberA / inputNumberB);
// const remainder = inputNumberA % inputNumberB;

// console.log(division, remainder)