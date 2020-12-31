// var name = "global var";

// function home() {
//   var homevar = "homevar";
//   for(var i = 0; i < 100; i++) { 
   
//   }
//   console.log(i); // 함수단위의 스코프 > 함수안에 지역변수를 찾고 만약 그게 없다면 스코프 체인을 따라 올라가 전역변수를 찾아 올라간다
// }

// home();

// let 블록스코프 사이에서 지역변수를 시킨거와 같은 것이다. 
// 쉽게 사용할 수 있다.
// 클로져에 대한 var i, let i > 차이점을 알아야한다.


// const 
function home() {
  var homename = 'my house';
  // 상수로 변수를 네이밍을 하여 변하지 않는 값을 정했는데 HOME_NAME 
  // const homename = 'my house'; // 재할당할 경우 
  
  homename = 'your house';
  console.log(homanme);
}

home();


// const를 기본으로 사용하고, let 변경이 될 수 있는 변수 let를 사용한다.
// var를 사용하지 않는다.


// const 재할당을 할 수 ㅇ없다.

function home2() {
  const list = ['apple', 'orange', 'watermelon'];
  list.push('banna'); // 
  // const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것이 가능하다.
  // 값을 재할당하는 코드만 안되는 것이다.
  
}
home();


// immutable Array 를 어떻게 만들지?

// 뒤로가기, 앞으로가기 참조가 계속 바뀌는데..?
const list = ['apple', 'orange', 'watermelon']; // 리스트를 보관하는 곳
list2 = [].concat(list, 'banna'); // 원보능ㄹ 그대로 두고 새로운 배열을 만드는 것이다.
console.log(list === list2);

// immutable Array이란?