//구구단
// 1단부터 9단까지 각 단은  1*1 =1 / 1*2=2..1*9=9 로 출력되게 하기

for (let i = 1; i < 10; i++) {
  console.log(`${i}단======`);
  for (let j = 1; j < 10; j++) {
    // console.log(j);
    console.log(`${i}단 * ${j} = ${i * j}`);
  }
}

/*
1. 입력 : i = 1 ~9단, j = 1 ~ 9
2. 출력 : console.log(`${i}단 * ${j} = ${i * j}')
3. 연산 : i가 1일떄 j가 9번 반복해야한다.
*/

//switch 문
let month = 3;
let monthName;

switch (month) {
  case 1:
    monthName = "j";
    break;

  case 2:
    monthName = "f";
    break;

  case 3:
    monthName = "m";
    break;
}
console.log(monthName);
