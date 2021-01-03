//arrow function

setTimeout(function(){
  console.log('setTimeout');
},1000);


// arrow function 활용
setTimeout(() => {
  console.log('settimout arrow');
}, 1000);

let newArr = [1, 2, 3].map(function(value, index, object) {
  return value * 2;
});

console.log(newArr);

// arrow function 활용

let newArr2 = [1, 2, 3].map((v) => {
  return v * 2;
});

// 한 줄일 경우
let newArr3 = [1, 2, 3].map((v) => v * 2);

console.log('newArr3',newArr3);

// 

const element = document.querySelector('p');

const myObj = {
//   resister(){
//     element.addEventListener('click', function() {
//       this.printData();
//     }.bind(this));
//   },
  
  // arrow function
  resister(){
    element.addEventListener('click', (event) => { // 클릭시 this가 바인딩을 사용하지 않아도 되는 이유 정리
      this.printData(event.target);
    });
  },
  printData(element){
    console.log('clicked', element.innerText);
  }                                                      
}

myObj.resister();