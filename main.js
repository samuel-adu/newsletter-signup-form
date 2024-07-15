const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailErrorMessageElement = document.getElementById('email-error');
const main = document.getElementById('main');
const dismissBtn = document.getElementById('dismiss-btn');

function isValidEmail(email) {
  const isValidEmail = /^\S+@\S+$/g;
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

  const formData = new FormData(event.target);
  const { email } = Object.fromEntries(formData);

  if (validateEmail(email)) {
    main.innerHTML = `
    <div class="success-page">
      <div class="success-icon">
        <img src="./assets/images/icon-success.svg" alt="" />
      </div>
      <h1>Thanks for subscribing!</h1>
      <p> 
        A confirmation email has been sent to 
        <span class="subscriber-email">${email}</span>. 
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button id="dismiss-btn" class="btn">Dismiss message</button>
    </div> `;
  }
}

form.addEventListener('input', handleInput);

form.addEventListener('submit', handleSubmit);
