const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');

let isPlaying = localStorage.getItem('musicPlaying') === 'true';
let lastTime = parseFloat(localStorage.getItem('musicTime')) || 0;


bgMusic.currentTime = lastTime;

function updateMusicState() {
    if (isPlaying) {
        bgMusic.play().catch(error => console.error('Music play failed:', error));
        musicToggle.textContent = 'Stop Music';
    } else {
        bgMusic.pause();
        musicToggle.textContent = 'Play Music';
    }
    localStorage.setItem('musicPlaying', isPlaying);
}

bgMusic.addEventListener('timeupdate', () => {
    localStorage.setItem('musicTime', bgMusic.currentTime);
});

document.addEventListener('DOMContentLoaded', () => {
    updateMusicState();
});

musicToggle.addEventListener('click', () => {
    isPlaying = !isPlaying;
    updateMusicState();
});

const hamburger = document.getElementById('hamburger');
const mainNav = document.querySelector('.main-nav');
hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

const submitBtn = document.querySelector('.submit-btn');
const lottiePlayer = document.getElementById('submit-lottie');
const form = document.getElementById('contact-form');

if (submitBtn && lottiePlayer && form) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            lottiePlayer.play();
            setTimeout(() => {
                form.submit();
            }, 2000);
        } else {
            form.reportValidity();
            alert('Please fill all required fields correctly before submitting.');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
        alert('Please fill all required fields correctly before submitting.');
      }
    });
  }
});
