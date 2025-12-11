const words = [
  'apple',
  'bird',
  'cat',
  'dog',
  'egg',
  'fish',
  'goat',
  'hand',
  'ice cream',
  'juice',
  'knight',
  'lion',
  'map',
  'nose',
  'orange',
  'pen',
  'queen',
  'rose',
  'sun',
  'tigher',
  'user',
  'vermeer',
  'water',
  'xylophone',
  'yellow',
  'zero',
];

//1. input으로 들어온 문자열을 받는다
//2. data 배열을 돌면서 해당 문자열을 포함한 단어를 필터링하여 배열로 반환한다
//3. 반환된 배열을 가지고 ul의 자식으로 li를 생성한다

const ul = document.getElementById('ul');
const input = document.getElementById('input');

function stringFilter(arr, str) {
  const keyword = str.toLowerCase(); //대소문자 구분 없이
  return arr.filter((word) => word.includes(keyword));
}

function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function makeList(arr) {
  removeAllChild(ul);

  arr.forEach((v) => {
    const li = document.createElement('li');
    li.textContent = v;
    ul.appendChild(li);
  });
}

function noResult() {
  removeAllChild(ul);

  const li = document.createElement('li');
  li.textContent = 'No result';
  li.style.listStyleType = 'none';
  ul.appendChild(li);
}

function searchFilterList() {
  const inputValue = input.value;

  const filteredList = stringFilter(words, inputValue);
  filteredList.length != 0 ? makeList(filteredList) : noResult();
}

makeList(words); //초기 화면 생성
