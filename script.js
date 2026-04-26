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
