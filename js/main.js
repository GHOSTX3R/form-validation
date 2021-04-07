const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('hi');
  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Invalid Email address');
  } else {
    setSuccessFor(email);
  }

  if (password1Value === '') {
    setErrorFor(password1, 'Password1 cannot be blank');
  } else {
    setSuccessFor(password1);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
  } else if (password2Value !== password1Value) {
    setErrorFor(password2, 'Passwords does not match');
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFormat.test(email);
}
