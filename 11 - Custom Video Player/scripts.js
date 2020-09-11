const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const foll = player.querySelector(".fullscr");
var fullscreen = false;

function togplay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updateButton() {
  const icon = this.paused ? "▶" : "⏸";
  toggle.textContent = icon;
}
function skip() {
  console.log(this.dataset);
  video.currentTime += parseInt(this.dataset.skip);
}
function updateRange() {
  video[this.name] = this.value;
  console.log(this.value, this.name);
}

function handprogress() {
  const perc = (video.currentTime / video.duration) * 100;
  //   console.log(perc, video.currentTime, video.duration);
  progressBar.style.flexBasis = `${perc}%`;
}
function scrub(e) {
  console.log(e);
  const tii = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(e.offsetX, tii);

  video.currentTime = tii;
}
function fulll() {
  if (!fullscreen) {
    fullscreen = !fullscreen;
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
      /* Firefox */
      player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) {
      /* IE/Edge */
      player.msRequestFullscreen();
    }
  } else {
    fullscreen = !fullscreen;

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  }
  console.log("hhhh");
}
foll.addEventListener("click", fulll);
video.addEventListener("click", togplay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handprogress);
toggle.addEventListener("click", togplay);
ranges.forEach((r) => r.addEventListener("change", updateRange));
skipButtons.forEach((button) => button.addEventListener("click", skip));
progress.addEventListener("click", scrub);
