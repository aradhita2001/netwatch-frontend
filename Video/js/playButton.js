// const video = document.querySelector('video');
const playBtn = document.getElementById('playButton');

playBtn.addEventListener('click', () => {
  video.play();
  playBtn.style.display = 'none';
});

video.addEventListener('pause', () => {
  playBtn.style.display = 'block';
});

video.addEventListener('play', () => {
  playBtn.style.display = 'none';
});