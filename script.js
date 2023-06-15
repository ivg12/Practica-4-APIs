// Obtenemos los elementos del DOM
const videoPlayer = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeSlider = document.getElementById('volumeSlider');
const muteButton = document.getElementById('mute-button');
const loadingMsg = document.getElementById('loadingMsg');

// Función para cargar el vídeo seleccionado
function loadVideo(file) {
  const fileURL = URL.createObjectURL(file);
  videoPlayer.src = fileURL;
}

// Evento al hacer clic en el botón Reproducir
playBtn.addEventListener('click', function() {
  if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play();
    playBtn.innerHTML = 'Pausar';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = 'Reproducir';
  }
});

// Evento al hacer clic en el botón Detener
stopBtn.addEventListener('click', function() {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  playBtn.innerHTML = 'Reproducir';
});

// Evento al cambiar el valor del deslizador de volumen
volumeSlider.addEventListener('input', function() {
  videoPlayer.volume = volumeSlider.value;
});

// Evento al hacer clic en el botón de silencio
muteButton.addEventListener('click', function() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    muteButton.innerHTML = '<i class="fa fa-volume-up"></i>';
    volumeSlider.value = videoPlayer.volume;
  } else {
    videoPlayer.muted = true;
    muteButton.innerHTML = '<i class="fa fa-volume-off"></i>';
    volumeSlider.value = 0;
  }
});

// Evento cuando se inicia la carga del vídeo
videoPlayer.addEventListener('loadstart', function() {
  loadingMsg.style.display = 'block';
});

// Evento cuando se ha cargado el vídeo
videoPlayer.addEventListener('loadeddata', function() {
  loadingMsg.style.display = 'none';
});
