let currentIndex;
const images = ["1.jpg", "2.jpg", "3.jpg"];
const imgContainer = document.querySelector("#slides");
const nextBtn = document.querySelector("#btnNext");
const prevBtn = document.querySelector("#btnPrev");
currentIndex = 0;
imgContainer.src = images[currentIndex];

function slideImage() {
  if (currentIndex >= images.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = images.length - 1;
  imgContainer.src = images[currentIndex];
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  slideImage();
});
prevBtn.addEventListener("click", () => {
  currentIndex--;
  slideImage();
});

setInterval(() => {
  currentIndex++;
  slideImage();
}, 5000);
