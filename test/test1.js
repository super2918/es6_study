/* filter, includes, from를 사용하여 문자열 'e'가 포함된 노드로 구성된 배열을 만들어서 반환한다.*/
/* 아직도 부족한 부분 nodelist를 사용할때에 어떤식으로 값이 출력이 되는지?*/

function print() {
  const list = document.querySelectorAll('li'); // type check > toString.call(list); 
  let newArray = Array.from(list); // li node로 구성된 배열 

  let ResultArray = newArray.filter(function(value) {
    return value.innerText.includes('e'); // 값을 출력하는 부분
  });

  console.log(ResultArray);
}

print();