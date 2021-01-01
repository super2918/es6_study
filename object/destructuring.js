// Destructuring 을 할 경우 어떤 점이 좋은거지?

// Arrray, Object 구조분해 할당 


let obj = {
  name : 'shin',
  address: 'korea',
  age: 10
};

// let {name, age, address} = obj;

// var name = obj.name;
// var age = obj.age;
// var address = obj.address;

// console.log(name, age, address);

// 새롭게 변수를 다시 재할당 할 수 있다.

let {name: newName, age: newAge} = obj;

console.log(newName, newAge);


// Destructuring JSON 파싱을 하는 방법 
var news = [
  {
    'title': 'sbs',
    'imgurl': 'http://static.naver.net/newsstand/2017/0313/article_img/9054/173200/...',
    'newlist': [
      '[가보니] 어쩌라',
      '리탭ㅊ 어쩌라',
      '갤럭시 어쩌라',
      '블로코 어쩌라',
      '[블로체인 오짜러]'
    ]
  },
  {
    'title': 'mbc',
    'imgurl': 'http://static.naver.net/newsstand/2017/0313/article_img/9054/173200/...',
    'newlist': [
      '[가보니] 어쩌라',
      '리탭ㅊ 어쩌라',
      '갤럭시 어쩌라',
      '블로코 어쩌라',
      '[블로체인 오짜러]'
    ]
  },
];


// let [, mbc] = news; // 배열안의 순수 인덱스를 쓴다
     
//  console.log(mbc);
// let {title, imgurl} = mbc; 

// console.log(title, imgurl);

// let [, {title2, imgurl2}] = news; // 두번째 인덱스의 title, imgurl를 가져와라
// console.log(imgurl2);

// function event객체 전달 
// 파라미터로 
function test([, {imgurl}]) {
  console.log(imgurl);
}

console.log(news);

// 이벤트 객체 전달
(function() {
  const textBox = document.querySelector('div');
  
  function handleClick({target, type}) { // 이벤트 객체에서 Target의 대한 정보만 추려서 가지고 온다.
    console.log(target.tagName);
    console.log(target.textContent);
    console.log(type);
  }
  
  function init() {
    textBox.addEventListener('click', handleClick);
  };
  
  init();
})();
