// Light/Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', function (e) {
  const body = document.body;
  const current = body.getAttribute('data-theme') || 'default';
  const next = current === 'default' ? 'light' : 'default';
  body.setAttribute('data-theme', next);
  e.target.textContent = next === 'default' ? 'Light Mode' : 'Dark Mode';
});

// Scroll-Animation (für Cards und Bilder)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .gallery .image-row img').forEach(el => {
  observer.observe(el);
});

// Galerie-Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery .image-row img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
