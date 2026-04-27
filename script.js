function toggleChat() {
  const icon = document.querySelector(".widget-body");
  const iconX = document.querySelector(".icon-x");
  const iconMsg = document.querySelector(".icon-msg");
  if (icon.style.display === "flex") {
    icon.style.display = "none";
    iconX.style.display = "none";
    iconMsg.style.display = "flex";
  } else {
    icon.style.display = "flex";
    iconX.style.display = "flex";
    iconMsg.style.display = "none";
  }
}

const chatIcon = document.querySelector(".chat-widget");
chatIcon.addEventListener("click", toggleChat);

const hamBtn = document.querySelector("#hamburger");
const links = document.querySelector(".nav-links");
function toggleHamBtn() {
  if (links.style.display === "flex") {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
}

hamBtn.addEventListener("click", toggleHamBtn);

const closeBtn = document.querySelector(".close-btn-menu");

closeBtn.addEventListener("click", () => {
  links.style.display = "none";
});

// if user resizes reload
// window.addEventListener("resize", () => {
//   if (window.innerWidth > 768) {
//     location.reload();
//   }
// });
