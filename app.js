const slides = document.querySelectorAll('.slide');
const loginBtn = document.getElementById('loginBtn');

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  current++;
  if (current < slides.length) {
    showSlide(current);
  } else {
    loginBtn.classList.remove('hidden');
  }
}

showSlide(0);
setInterval(nextSlide, 2500);
