//트리거를 눌렀을 때 모달 창이 열린다
//모달 창 외의 부분은 흐릿하게 처리한다
//모달 창 외의 부분을 클릭하거나, esc를 입력할 경우 모달 창이 닫한디

let isModalOpen = false;
const trigger = document.getElementById('modal-trigger');
const body = document.body;

function createModalContainer(messageText) {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const message = document.createElement('p');
  message.textContent = messageText;

  modalContainer.appendChild(message);

  return modalContainer;
}

function createModalOverlay() {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  return modalOverlay;
}

function createModalButton(text, className, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add(className);
  button.addEventListener('click', onClick);

  return button;
}

function closeModal(modalOverlay) {
  modalOverlay?.remove();
  trigger.focus();
}

function openModal() {
  if (isModalOpen) return;
  isModalOpen = true;

  const modalOverlay = createModalOverlay();
  const modalContainer = createModalContainer('동의하십니까?');

  const escHandler = (e) => {
    if (e.key === 'Escape') close();
  };

  //모달 닫기와 이벤트 제거를 바인드
  function close() {
    closeModal(modalOverlay);
    document.removeEventListener('keydown', escHandler);
    isModalOpen = false;
  }

  const modalAcceptButton = createModalButton(
    'ACCEPT',
    'modal-accept-btn',
    () => {
      alertAccept();
      close();
    }
  );

  const modalCloseButton = createModalButton('CLOSE', 'modal-close-btn', () => {
    close();
  });

  body.appendChild(modalOverlay);
  modalOverlay.addEventListener('click', (e) => {
    if (e.currentTarget === e.target) close();
  });
  modalOverlay.appendChild(modalContainer);

  modalContainer.appendChild(modalAcceptButton);
  modalContainer.appendChild(modalCloseButton);
  modalAcceptButton.focus();

  document.addEventListener('keydown', escHandler);
}

function alertAccept() {
  alert('동의되었습니다');
}
