// Fade-in animation for feature cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});
