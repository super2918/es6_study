
// map & WeakMap 

// Array => set, weakSet 
// Object -> map, weakmap

// map은 key/value구조 이다. key값에 객체여야만 하나 값은 임의 값이 될수 있다.

let wm = new WeakMap();
let myfun = function(){};

// 이 함수가 얼마나 실행됐지?를 알려고 할때.

wm.set(myfun,0);
console.log(wm);

let count = 0;
for(let i = 0; i < 10; i++) {
  count = wm.get(myfun); // get value 얻는 구조
  count++;
  wm.set(myfun, count);
}

console.log(wm.get(myfun));

myfun = null; // 초기화시키면서 가비지 컬렉션의 의해 유효하지 않는 값이 된다.
console.log(wm.has(myfun));

// get, set에 관련하여 정확한 정리

//https://medium.com/@hongkevin/js-5-es6-map-set-2a9ebf40f96b



