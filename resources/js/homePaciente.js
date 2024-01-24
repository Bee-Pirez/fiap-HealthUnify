document.addEventListener('DOMContentLoaded', function() {
  const userName = localStorage.getItem('userName');
  const welcomeMessage = document.getElementById('welcomeMessage');
  if (userName) {
      welcomeMessage.textContent += userName;
  }
});