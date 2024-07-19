const subscribeForm = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailErrorMessageElement = document.getElementById('email-error');
const main = document.getElementById('main');
const signUpPage = document.getElementById('sign-up-page');
const subsciberEmail = document.getElementById('subscriber-email');
const successModal = document.getElementById('success-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

function isValidEmail(email) {
  // const isValidEmail = /^\S+@\S+$/g;
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/;
  return isValidEmail.test(email);
}

function showError(message) {
  emailErrorMessageElement.innerText = message;
}

function validateEmail(email) {
  let valid = false;
  if (!email) {
    emailInput.classList.remove('formField__input--success');
    emailInput.classList.add('formField__input--error');
    showError('Email is required');
  } else if (!isValidEmail(email)) {
    emailInput.classList.remove('formField__input--success');
    emailInput.classList.add('formField__input--error');
    showError('Valid email required');
  } else {
    emailInput.classList.remove('formField__input--error');
    emailInput.classList.add('formField__input--success');
    showError('');
    valid = true;
  }
  return valid;
}

function handleInput(event) {
  if (event.target.name === 'email') {
    validateEmail(event.target.value);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const subscribeFormData = new FormData(subscribeForm);
  const email = subscribeFormData.get('email');

  if (validateEmail(email)) {
    subsciberEmail.textContent = email;
    successModal.classList.add('show-modal');
  }
}

form.addEventListener('input', handleInput);

form.addEventListener('submit', handleSubmit);

modalCloseBtn.addEventListener('click', function () {
  emailInput.value = '';
  successModal.classList.remove('show-modal');
});
