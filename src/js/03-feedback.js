import throttle from 'lodash.throttle';

// find form
const feedbackForm = document.querySelector('.feedback-form');

// add listener for input + throttle
feedbackForm.addEventListener('input', throttle(localData, 500));

// find inputs data
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

// set data from input to local storage
function localData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// function to get input data from local storage
function getLocalData() {
  let localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData !== null) {
    email.value = localData.email;
    message.value = localData.message;
  }
}

// run function
getLocalData();

// add listener to the submit form button
feedbackForm.addEventListener('submit', submitData);

// run function at submit and console log input data
function submitData(e) {
  e.preventDefault();
  this.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}
