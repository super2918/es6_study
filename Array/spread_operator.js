// spread operator  전개 연산자


let pre = ['apple', 'oragne', 'banana'];
let newData = [...pre];

console.log(pre === newData);

// 찾아 볼것 복사를 하는 방법엔 어떤 것이 있는가?
//  - 활용하는 방법 찾아본다.


let pre = [100, 200, 'hello', null];
let newData = [0, 1, 2, 3, ...pre, 4];

console.log(newData);

let pre2 = [ 100, 200, 300];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum.apply(null, pre2));
console.log(sum(...pre2)); // 합쳐서 새로운 값을 파라미터를 전달하거나, 값을 합치거나, 값을 복사할때 등등 할용을 할 수있다.


