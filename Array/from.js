// ES2015 from method
// arguments > 들어올 값이 얼마나 들어올지 모를때?,  arguments에 대한 내용도 정리를 해야한다.
// Array로 바꿀 수 있는 방법들을 정리한다.
// Array.from(); 배열로 만든 것
// 유사배열, nodelist > 관련하여 내용을 정리한다.

function addMark() {
  let newData = [];

  for(let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + '!');
  }
  console.log(newData);
}

addMark(1, 2, 3, 4, 5);

// map method를 사용하는 것 순회를 하면서 적용한다.
function addMark2() {
  let newData2 = Array.from(arguments);// Array로 변환하는 방법들 생각한다.
  console.log(Array.isArray(newData2));
  
  newData2.map(function(value) {
    return value + '!';
  });
  
  console.log(newData2);
}

addMark2(1, 2, 3, 4, 5);

