// Typing effect
const texts = [
  "Transformando problemas em soluções de software",
  "Backend • Python • Machine Learning",
  "Portfólio em constante evolução 🚀"
];

let count = 0;
let index = 0;
let current = "";

const typingEl = document.getElementById("typing");

function type() {
  if (!typingEl) return;

  current = texts[count];
  typingEl.textContent = current.slice(0, index++);

  if (index > current.length) {
    setTimeout(() => {
      index = 0;
      count = (count + 1) % texts.length;
    }, 2000);
  }

  setTimeout(type, 80);
}

type();

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
