function toggleChat() {
  const icon = document.querySelector('.widget-body');
  if (icon.style.display === 'flex') {
    icon.style.display = 'none';
  } else {
    icon.style.display = 'flex';
  }
}

const chatIcon=document.querySelector(".chat-widget")
chatIcon.addEventListener("click",toggleChat)