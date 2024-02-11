const input = document.querySelector('#phone');
const myForm = document.querySelector('.form');
const errorMsg = document.querySelector('#error-msg');

// here, the index maps to the error code returned from getValidationError - see readme
const errorMap = [
  'Invalid number',
  'Invalid country code',
  'Too short',
  'Too long',
  'Invalid number',
];

const iti = window.intlTelInput(input, {
  initialCountry: 'ua',
  showSelectedDialCode: true,
  utilsScript:
    'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js',
});

const reset = () => {
  errorMsg.innerHTML = '';
  errorMsg.classList.add('visually-hidden');
};

myForm.addEventListener('submit', event => {
  event.preventDefault();

  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      myForm.reset();
    } else {
      const errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode] || 'Invalid number';
      errorMsg.classList.remove('visually-hidden');

      setTimeout(() => {
        errorMsg.classList.add('visually-hidden');
      }, 2000);
    }
  }
});

input.addEventListener('change', reset);
input.addEventListener('keyup', reset);
