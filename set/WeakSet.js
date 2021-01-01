// weakset
// 참조를 가지고 있는 객체만 저장이 가능하다.
// 객체형태를 중복없이 저장하려고 할대 유용하다.

let arr = [1, 2, 3];
let arr2 = [5, 6, 7];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
// ws.add(111); 기본형이기 때문이다.
// ws.add('111'); 기본형이기 때문이다.
ws.add(function(){}); // 참조형 타입이기 때문이다. 객체 타입이기 때문에 가능한 것이다.

ws.add(arr2);
ws.add(obj);

arr = null;
arr2 = null;
ws.delete(obj); 

// WeakSet의 저장된 것 처럼 보이지만 G.C 대상이되어 유효하지 않는 값으로 처리가 된다. 
// 객체 타입을 중복없이 저장해서 자료구조를 사용할때 유용하다.

console.log(ws.has(obj));
console.log(ws);




// WeakSet vs set 차이점을 정리한다.
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakSet