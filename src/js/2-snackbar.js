import iziToast from "https://cdn.jsdelivr.net/npm/izitoast";
import "https://cdn.jsdelivr.net/npm/izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Отримуємо дані з форми
  const delayInput = form.elements['delay'];
  const stateInput = form.elements['state'];
  const delay = parseInt(delayInput.value, 10);
  const state = stateInput.value;

  if (isNaN(delay) || delay <= 0) {
    iziToast.error({
      title: "Error",
      message: "Please enter a valid delay in milliseconds",
      position: "topRight",
    });
    return;
  }

  // Створюємо проміс
  createPromise(delay, state)
    .then((message) => {
      iziToast.success({
        title: "Success",
        message: message,
        position: "topRight",
      });
    })
    .catch((message) => {
      iziToast.error({
        title: "Error",
        message: message,
        position: "topRight",
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else if (state === 'rejected') {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
