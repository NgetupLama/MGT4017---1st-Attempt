// Placeholder sign-up handler: replace with your real form service (Formspree, Buttondown, etc.)
document.getElementById('join-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('join-msg').textContent = "You're on the list. We'll email you when your first 40 credits are ready.";
  this.reset();
});
