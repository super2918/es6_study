
// json으로 응답을 받고, javascript object로 변환한 후에 데이터 처리 조작한 후에 dom애 추가하는 
// 데어터 + HTML문자열의 결합이 필요하기 때문에

const data = [
  { 
    name: 'coffee-bean',
    oder: true,
    items: ['아메리카노', '라떼', '녹차']
  },
  {
    name: 'starbucks',
    oder: false,
  },
  {
    name: '이디아',
    oder: true, 
    items: ['토피넛 라떼', '아이스티', '샷']
  }
];




// const template = printOder`<div>welcome ${data[0].name}
// <h2>주문가능한 항목</h2>
// <div>{data[0].items}</div>
// </div>`;
// console.log(template);


// Tagged template literals

function printOder(tags, name, oder, items) {
  if(typeof items ==='undefined') {
    items = "<span style='color:red'>주문 가능한 상품이 없습니다.</span>"
  }
  
  return (tags[0] + name + tags[1] + oder + tags[2] + items + tags[3]);
}

data.forEach((value) => {
   let template = printOder`<h2>welocme ${value.name}!!!!!</h2>
   <h3>주문 여부</h3><div>${value.oder === true ? '이미 주문하셨습니다.' : '주문하지 않으셨습니다.'}</div>
   <h4>주문가능한 항목</h4><div>${value.items}<div/>`
   
   document.querySelector('div').innerHTML += template;
   
});

