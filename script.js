// Configuração do Typing Effect
const messages: string[] = [
  "Software Engineer Student",
  "Python Developer | Automação",
  "Machine Learning Enthusiast"
];

let msgIndex: number = 0;
let charIndex: number = 0;
let deleting: boolean = false;

function typeEffect(): void {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;

  const current = messages[msgIndex];
  
  if (deleting) {
    typingEl.textContent = current.substring(0, charIndex--);
  } else {
    typingEl.textContent = current.substring(0, charIndex++);
  }

  let speed = deleting ? 40 : 80;

  if (!deleting && charIndex === current.length + 1) {
    speed = 2000;
    deleting = true;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    msgIndex = (msgIndex + 1) % messages.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

// Lógica de Scroll Reveal
function revealSections(): void {
  const sections = document.querySelectorAll(".reveal");
  sections.forEach((s) => {
    const top = s.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      s.classList.add("active");
    }
  });
}

// Inicialização
window.addEventListener("scroll", revealSections);
window.addEventListener("load", () => {
  // @ts-ignore
  lucide.createIcons();
  typeEffect();
  revealSections();
});
