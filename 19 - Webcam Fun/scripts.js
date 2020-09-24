const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo(params) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((mediastream) => {
      console.log(mediastream);
      video.srcObject = mediastream;
      video.play();
    })
    .catch((err) => {
      console.error(`OH NO!!!`, err);
    });
}
function painttocanvas(params) {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = 640;
  canvas.height = 480;
  //   console.log(width, height, video);
  setInterval(() => {
    ctx.drawImage(video, 0, 0, 640, 480);
  }, 12);
}
function takePhoto(params) {
  snap.currentTime = 0;
  snap.play();
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "you are beautiful");
  link.innerHTML = `<img src=${data} />`;
  strip.insertBefore(link, strip.firstChild);
}
getVideo();
video.addEventListener("canplay", painttocanvas);
