const posterBox = document.querySelector(".poster-box");
const firstPoster = document.getElementById("first-poster");
const secondPoster = document.getElementById("second-poster");
const thirdPoster = document.getElementById("third-poster");

if (window.innerWidth <= 700) {
  firstPoster.src = "./images/mobile-carousel-1.png";
  secondPoster.src = "./images/mobile-carousel-2.png";
  thirdPoster.src = "./images/mobile-carousel-3.png";
}
console.log({ firstPoster, secondPoster, thirdPoster });
