// default parmaters
function sum(value, size=2) {// 기본값으로 설정이 가능하다.
  //   size = size || 1;
    return value * size;
  }
  
  console.log(sum(3));
  
  // object 값으로 될 경우
  
  function sum(value, size={value: 4}) {// 기본값으로 설정이 가능하다.
    return value * size.value;
  }
  
  console.log(sum(3,{value: 3}));
  console.log(sum(3));
  console.log(sum(0));


  // rest paramaters

