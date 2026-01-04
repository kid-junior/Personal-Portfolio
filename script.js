// Music Toggle
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;
musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.textContent = 'Play Music';
    } else {
        bgMusic.play();
        musicToggle.textContent = 'Stop Music';
    }
    isPlaying = !isPlaying;
});
// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mainNav = document.querySelector('.main-nav');
hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    hamburger.classList.toggle('active');
});
// Lottie for Submit (plays on click before submit)
const submitBtn = document.querySelector('.submit-btn');
const lottiePlayer = document.getElementById('submit-lottie');
const form = document.getElementById('contact-form');

if (submitBtn && lottiePlayer && form) {
  submitBtn.addEventListener('click', (e) => {
    lottiePlayer.play();
    setTimeout(() => {
      form.submit();
    }, 2000);
  });
}
