function toggleChat() {
  const body = document.querySelector('.widget-body');
  if (body.style.display === 'flex') {
    body.style.display = 'none';
  } else {
    body.style.display = 'flex';
  }
}

const chatIcon=document.querySelector(".chat-widget")
chatIcon.addEventListener("click",toggleChat)