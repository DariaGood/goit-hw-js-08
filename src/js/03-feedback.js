import throttle from 'lodash.throttle';

// Знаходження форми                               
const feedbackForm = document.querySelector('.feedback-form');

// Додавання слухача події для input + throttle
feedbackForm.addEventListener('input', throttle(localData, 500));

// Посилання на  пошту і повідовлення
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

// Передача данних  в локальне сховище                                   
function localData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Створення функції, щоб отримати дані
function getLocalData() {
  let localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData !== null) {
    email.value = localData.email;
    message.value = localData.message;
  }
}

getLocalData();

// Додавання слухача події на клік по кнопці
feedbackForm.addEventListener('submit', submitData);

function submitData(e) {
  e.preventDefault();
  this.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}
