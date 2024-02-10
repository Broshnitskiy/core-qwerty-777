const openModalBtns = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('[data-backdrop]');

openModalBtns.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

function openModal() {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflowY = 'hidden';
  closeModalBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', handleKeyPress);
  backdrop.addEventListener('click', handleBackgropClick);
}

function closeModal() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflowY = 'visible';
  document.removeEventListener('keydown', handleKeyPress);
  closeModalBtn.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', handleBackgropClick);
}

function handleKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function handleBackgropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
