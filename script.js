const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(card => {
    const windowHeight = window.innerHeight;
    const cardTop = card.getBoundingClientRect().top;
    const visiblePoint = 120;

    if (cardTop < windowHeight - visiblePoint) {
      card.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
