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

function stringFilter(arr, str) {
  return arr.filter((word) => word.includes(str));
}

function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function makeList(arr) {
  const ul = document.getElementById('ul');
  removeAllChild(ul);

  arr.forEach((v) => {
    const li = document.createElement('li');
    li.textContent = v;
    ul.appendChild(li);
  });
}

function noResult() {
  const ul = document.getElementById('ul');
  removeAllChild(ul);

  const li = document.createElement('li');
  li.textContent = 'No result';
  ul.appendChild(li);
}

makeList(words); //초기화면 생성

function searchFilterList() {
  const inputValue = document.getElementById('input').value;

  const filteredList = stringFilter(words, inputValue);
  filteredList.length != 0 ? makeList(filteredList) : noResult();
}
