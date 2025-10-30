function demoScore() {
  const score = Math.floor(Math.random() * 51) + 50;
  const el = document.getElementById('demo-score');
  el.textContent = score;
  el.style.transition = 'transform 0.3s ease';
  el.style.transform = 'scale(1.3)';
  setTimeout(() => el.style.transform = 'scale(1)', 300);
}

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function submitForm(event) {
  event.preventDefault();
  alert('Merci pour votre message ! Nous vous répondrons sous peu.');
  event.target.reset();
}