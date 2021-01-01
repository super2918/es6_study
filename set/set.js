// set: 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할 때 유용;
console.log(toString.call(mySet)); // type check 

let mySet = new Set();
 
// set : 중복없이 유일한 값을 저장할때. 이미 존재하는지 체크할 때 유용

mySet.add('apple');
mySet.add('banana');
// mySet.add('apple');

// set에서 forEach문을 사용해서 출력을 해볼 수 있다.
mySet.forEach(function(value){
 console.log(value); // 중복된 값이 출력이 안되는 것을 볼 수 있다.
});


console.log(mySet.has('apple')); // 리턴된 값은 Boolean 값으로 출력이 된다.

// 삭제 
mySet.delete('apple'); // 삭제되었다는 것을 알 수 있다.
console.log(mySet.has('apple')); // 리턴된 값은 Boolean 값으로 출력이 된다.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/has