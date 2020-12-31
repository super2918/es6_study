 // Array 

 var data = [1, 2, undefined, NaN, null, ''];
 Array.prototype.getIndex = function(){};

// 순회

for(let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

data.forEach(function(value){
  console.log(value);
});

// 
for(let value in data) { // for in의 알아둬야 하는 사항은 배열에 추가적으로 넣지 않아도 상위에 있는 결과 같도 넣어질 수도 있다. 
  console.log(value);
}


for(let value of data) { // for in,  for of 확인하기
  console.log(value);
}

// 문자열 순회 
var  str = 'hello word'; // 문자열을 순회하면서 출력하게 된다.

for(let value of str) {
  console.log(value);
}

// for in, for of 관련하여 다시 정리하기