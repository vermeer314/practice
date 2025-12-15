//트리거를 눌렀을 때 모달 창이 열린다
//모달 창 외의 부분은 흐릿하게 처리한다
//모달 창 외의 부분을 클릭하거나, esc를 입력할 경우 모달 창이 닫한디

//모달을 미리 만들어 두고 display를 건드릴 것인가
//아니면 눌렀을 때 동적으로 생성하고, 동적으로 제거할 것인가? (이 방식으로)

//모달이 여러개 있을 수 있으니 스택을 사용해서 관리한다

const modalStack = [];
const trigger = document.getElementById('modal-trigger');
const wrapper = document.getElementById('wapper');
const body = document.querySelector('body');

function createModalContainer(str) {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  modalContainer.textContent = str;
  modalStack.push(modalContainer);

  return modalContainer;
}

function closeModal(modalContainer) {
  body.removeChild(modalContainer);
}
function createModalAcceptButton(modalContainer) {
  const modalAcceptButton = document.createElement('button');
  modalAcceptButton.classList.add('modal-accept-btn');
  modalAcceptButton.textContent = 'ACCEPT';
  modalAcceptButton.addEventListener('click', alert);
  modalContainer.appendChild(modalAcceptButton);
}
function createModalCloseButton(modalContainer) {
  const modalCloseButton = document.createElement('button');
  modalCloseButton.classList.add('modal-close-btn');
  modalCloseButton.textContent = 'CLOSE';
  modalCloseButton.addEventListener('click', closeModal);
  modalContainer.appendChild(modalCloseButton);
}
function openModal() {
  //모달 컨테이너 생성
  //모달 닫기 버튼 생성 후 컨테이너에 넣기
  //yes, no 버튼 생성 후 컨테이너에 넣기
  const modalContainer = createModalContainer('동의하십니까?');
  body.appendChild(modalContainer);
  createModalCloseButton(modalContainer);
  createModalAcceptButton(modalContainer);
  wrapper.style.opacity = '80';
}

function alert() {
  console.log('accepted');
}
