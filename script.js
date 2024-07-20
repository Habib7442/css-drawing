document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  const image = document.getElementById("myImage");

  function showVideo() {
    video.style.display = "block";
    image.style.display = "none";
    video.play();
  }

  function showImage() {
    video.style.display = "none";
    image.style.display = "block";
    setTimeout(showVideo, 3000);
  }

  video.addEventListener("ended", showImage);

  showVideo();
});

function checkScreenSize() {
  var message = document.querySelector(".small-device-message");
  var container = document.querySelector(".container");
  if (window.innerWidth <= 1024) {
    message.style.display = "flex";
    container.style.display = "none";
  } else {
    message.style.display = "none";
    container.style.display = "block";
  }
}

checkScreenSize();

window.addEventListener("resize", checkScreenSize);
