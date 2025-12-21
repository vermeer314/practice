//fetch로 데이터 가져오기
//가져오는 동안 로딩중 표시
//가져온 데이터로 리스트 만들어 넣기
//에러 처리

const userList = document.getElementById('user-list');
const loadingMessage = document.getElementById('loading-message');
const loader = document.getElementById('loader');

async function getData() {
  loader.style.display = 'block';
  loadingMessage.textContent = 'Loading...';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('데이터 요청 실패!');

    const data = await res.json();

    loader.style.display = 'none';
    loadingMessage.textContent = '';
    const handledData = handleUserData(data);
    const userDataItems = createUserListItems(handledData);
    renderListItems(userList, userDataItems);
  } catch (err) {
    loader.style.display = 'none';
    console.error(err);
    loadingMessage.textContent =
      '에러가 발생했습니다. 잠시 후 다시 시도해주세요.';
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

function renderListItems(ul, liArray) {
  ul.innerHTML = '';
  liArray.forEach((v) => ul.appendChild(v));
}

getData();
