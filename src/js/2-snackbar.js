// Імпорт iziToast і стилів
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Отримання форми
const form = document.querySelector('.form');

// Обробник події submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Отримання значень форми
  const delay = parseInt(form.elements.delay.value, 10);
  const state = form.elements.state.value;

  // Створення промісу
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Обробка результатів промісу
  promise
    .then((delay) => {
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${delay}ms`,
      });
    });
});
import 'izitoast/dist/css/iziToast.min.css';
