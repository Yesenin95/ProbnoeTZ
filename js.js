const slides = document.querySelectorAll('.slide');
const sliderControls = document.querySelectorAll('.slider-controls label');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentSlideIndex = 0;

// Функция для обработки события изменения слайда
function changeSlide(slideIndex) {
   // Удаляем класс 'active' у всех слайдов
   slides.forEach((slide) => {
      slide.classList.remove('active');
   });

   // Добавляем класс 'active' для выбранного слайда
   slides[slideIndex].classList.add('active');

   // Устанавливаем checked для выбранной радио-кнопки
   sliderControls.forEach((control) => {
      const radioInput = control.querySelector('input');
      if (Number(radioInput.dataset.slideIndex) === slideIndex) {
         radioInput.checked = true;
      }
   });
}

// Функция для переключения на предыдущий слайд
function goToPrevSlide() {
   currentSlideIndex = (currentSlideIndex === 0) ? slides.length - 1 : currentSlideIndex - 1;
   changeSlide(currentSlideIndex);
}

// Функция для переключения на следующий слайд
function goToNextSlide() {
   currentSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1;
   changeSlide(currentSlideIndex);
}

// Добавляем обработчики событий для стрелок переключения слайдов
arrowLeft.addEventListener('click', goToPrevSlide);
arrowRight.addEventListener('click', goToNextSlide);

// Добавляем обработчик события изменения радио-кнопки для каждой кнопки управления
sliderControls.forEach((control) => {
   control.addEventListener('change', () => {
      currentSlideIndex = Number(control.querySelector('input').dataset.slideIndex);
      changeSlide(currentSlideIndex);
   });
});
