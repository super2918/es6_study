// rest paramaters
function checkNum(...arg){ // rest paramaters > 가변으로 값으로 들어오거나 그럴 경우 배열을 만들어줄 경우 이런식으로 parmater를 넘겨주면 배열로 전달된다.
  // 유사배열을 배열로 변환하는 것 
  //const argArray = Array.prototype.slice.call(arguments);
  const result = arg.every((value) => typeof value === 'number');
  console.log(result);
}

const result= checkNum(10, 11, 12, '12');

// rest paramaters vs spread 연산자와 
//https://velog.io/@chlwlsdn0828/Js-Spread-%EC%97%B0%EC%82%B0%EC%9E%90-Rest-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0