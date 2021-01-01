// WeakMap 클래스 인스턴스 변수 보호하기


// 가비지 컬렉션이 되는 저장소를 만든다? 

// const wm = new WeakMap(); // 외부의 전역 공간에 저장을 시키는 것

// function Area(height, width) {
// //   this.height = height;
// //   this.width = width;
  
//  /* */
//   wm.set(this, {height, width}); // 객체의 
// }

// Area.prototype.getArea = function(){
//   const {height, width} = wm.get(this);
//   return height * width;
// //   return this.height * this.width;
// }

// let myarea = new Area(10, 20);
// console.log(myarea.getArea());
// console.log(myarea.height); // 숨기고 싶을 때에 효율적으로 외부에서 접근이 되지 않도록 하는 저장하기 위하여

// console.log(wm.get(myarea));
// console.log(wm);
// console.log(wm.has(myarea));

// // 값의 초기환
// myarea = null;
// console.log(WeakMap);
// console.log(wm.has(myarea));


/* G.C이 안되는 경우*/

const obj = {}; // 빈 배열을 만든다. 전역으로 만들 때

function Area(height, width) {
  obj.height = height;
  obj.width = width;
}

Area.prototype.getArea = function(){
  return obj.height * obj.width;
}

let myArea = new Area(10, 20);

console.log(obj);
