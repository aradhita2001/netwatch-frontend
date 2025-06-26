const video = document.querySelector('video');

window.addEventListener('DOMContentLoaded', () => {
  video.focus();
});


document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  if (key === 'f') {
    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(err => {
        console.error('Failed to enter fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  }

  if (key === 'm') {
    video.muted = !video.muted;
  }
});