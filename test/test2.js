// lotto 번호 만들기

/*
  1. 유일한 값을 추출하는 과정에서 Set을 사용한다.
  2. getRandomNumber함수에 변수를 전달하는 과정에서 destructuring을 사용해 본다.
  
  결과 set이라는 자료구조에 램덤된 6자리로 각기 다른 숫자로 출력이되면 된다.
*/
const button = document.querySelector('button');
const resultDiv = document.querySelector('.result');

const SETTING = {
  name : 'LUCKY LOTTO!', 
  count: 6,
  maxNumber: 45,
  minNumber: 1,
}

function getRandomNumber(max, min) {
  // 램덤한 유일한 숫자 값을 추출
  return Math.floor(Math.random() * (max - min + 1))  + min;
}

function getLottoNumber() {
  // set
  let lottoNumberSet = new Set();
  let {count, maxNumber, minNumber, name } = SETTING;

  // 6자리 번호를 추출한다.
  while(lottoNumberSet.size < count) {
    let randomNum = getRandomNumber(maxNumber, minNumber);
    if(!lottoNumberSet.has(randomNum))  {
      lottoNumberSet.add(randomNum);
    }
    // console.log(randomNum);
  }
  return [...Array.from(lottoNumberSet)];
}

function printLottoResult() {
  resultDiv.textContent = getLottoNumber();
}

function handleClickEvent() {
  printLottoResult();
}

function init() {
  button.addEventListener('click', handleClickEvent);
}

init();