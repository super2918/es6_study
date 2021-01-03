// Arrow function & this context

/*const myObj = {
  runTimeout() {
    setTimeout(function(){
      console.log(this === window); // 현재 바라보고 있는 것이 window
      this.printData(); // 지금 현재 this는 window를 바라보고 있기 때문에 error
    });
  }, 
  printData() {
    console.log('print data');
  }
}*/


const myObj = {
  runTimeout() {
    setTimeout(() => {
      console.log(this === window); // 결과값은 false이다.
      this.printData(); //arrow 함수를 사용하면 this는 실행타임을 가르치는데 arrow는 실행 콘텍스트를 기억하고 있기 때문에 this가 된다는 것인가?
    });
  }, 
  printData() {
    console.log('print data');
  }
}

myObj.runTimeout(); // myObj에 있는 runTimeout 함수를 실행한다.


// this의 시점 