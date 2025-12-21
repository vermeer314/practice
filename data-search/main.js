//데이터 fetch
//검색어 없을 시 전체 출력
//검색어 있을 시 해당하는 데이터만 출력
//디바운스 500 적용

const searchInput = document.getElementById('search-input');
const userList = document.getElementById('user-list');

let userDataArray = [];

async function getData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('데이터 요청 실패');

    const data = await res.json();
    const handledData = handleUserData(data);
    userDataArray = handledData;
    const userDataItems = createUserListItems(handledData);
    renderUserListItems(userList, userDataItems); //초기화면 렌더
  } catch (err) {
    console.error(err);
  }
}

function handleUserData(users) {
  const userData = users.map((user) => ({
    username: user.username,
    name: user.name,
    phone: user.phone,
    email: user.email,
  }));

  return userData;
}

function createUserListItems(datas) {
  const liArray = datas.map((data) => {
    const li = document.createElement('li');
    li.classList.add('user-data');
    li.innerHTML = `username : ${data.username}<br> 
    name : ${data.name}<br> 
    email : ${data.email}<br> 
    phone : ${data.phone}`;

    return li;
  });

  return liArray;
}

function renderUserListItems(ul, liArray) {
  ul.innerHTML = '';
  liArray.forEach((li) => ul.appendChild(li));
}

function filterInputValue(arr, inputValue) {
  const keyword = inputValue.trim().toLowerCase();
  if (keyword === '') return arr;

  const filteredItems = arr.filter((user) => {
    return (
      user.username.toLowerCase().includes(keyword) ||
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword) ||
      user.phone.toLowerCase().includes(keyword)
    );
  });

  return filteredItems;
}

function renderFilteredItems() {
  const inputValue = searchInput.value;
  const filtered = filterInputValue(userDataArray, inputValue);

  const userDataItems = createUserListItems(filtered);
  renderUserListItems(userList, userDataItems); //초기화면 렌더
}

function debounce(fn, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, timeout);
  };
}

const debouncedRender = debounce(renderFilteredItems, 500);
searchInput.addEventListener('input', debouncedRender);

getData();
