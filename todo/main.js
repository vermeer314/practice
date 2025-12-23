//todo 생성버튼
//todo 제거버튼
//클릭 시 완료효과(색 변경), 다시 클릭 시 돌아옴
//localStorage에 저장 + 새로고침해도 유지
//localStorage는 sessionStorage와 비슷하지만,
//localStorage의 데이터는 만료되지 않고 sessionStorage의 데이터는 페이지 세션이 끝날 때 사라진다
//넣을 때 id, text, state를 객체로 넣어서 관리하기
//{id, text, state}

const todoWrap = document.getElementById('todo-wrap');
const todoAdd = document.getElementById('todo-add');

//초기화면 렌더링
const savedTodoList = JSON.parse(localStorage.getItem('todo-list')) || [];
let currentTodoList = [...savedTodoList]; //배열 형태로
currentTodoList.forEach((todo) => createTODO(todo.id, todo.text, todo.state));

function createTODO(id, text, state = false) {
  let completed = state;
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');
  todoItem.textContent = `${text}`;
  todoItem.id = id;

  if (completed) todoItem.style.backgroundColor = 'lightgreen';

  todoItem.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;

    completed = !completed;
    todoItem.classList.toggle('completed', completed);

    const todoItemIndex = currentTodoList.findIndex((todo) => todo.id === id);
    if (todoItemIndex !== -1) {
      currentTodoList[todoItemIndex].state = completed;
      renewLocalstorage();
    }
  });

  createDeleteButton(todoItem);
  appendBeforeLast(todoItem);
}

function appendBeforeLast(item) {
  const lastElement = todoWrap.lastElementChild; //항상 추가버튼이 맨 밑으로
  todoWrap.insertBefore(item, lastElement);
}

function createDeleteButton(item) {
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('todo-delete-button');
  deleteButton.innerHTML = 'X';

  deleteButton.addEventListener('click', (e) => {
    const result = confirm('삭제하시겠습니까?');
    if (!result) return;

    const idDeleted = e.target.parentNode.id;
    const indexDeleted = currentTodoList.findIndex(
      (todo) => todo.id === idDeleted
    );
    if (indexDeleted === -1) return;

    currentTodoList.splice(indexDeleted, 1);
    e.target.parentNode.remove();
    renewLocalstorage();
  });

  item.appendChild(deleteButton);
}

todoAdd.addEventListener('click', () => {
  const text = prompt('해야할 일을 입력해주세요');
  if (text === null || text.trim() === '') return;

  const trimmed = text.trim();
  const randomId = crypto.randomUUID();
  currentTodoList.push({ id: randomId, text: trimmed, state: false });
  renewLocalstorage();

  createTODO(randomId, trimmed);
});

function renewLocalstorage() {
  localStorage.setItem('todo-list', JSON.stringify(currentTodoList));
}
