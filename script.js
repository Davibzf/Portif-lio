// Typing effect
const texts = [
  "Software Engineer & Full Stack",
  "Python & Web",
  "Backend | Developer | Automação de Dados | Machine Learning"
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
import { Wrench, Database, Cpu, Code2, GitBranch } from "lucide-react";

export default function TechStack() {
  return (
    <section id="tech" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl font-bold text-white flex items-center gap-3">
          <Wrench className="text-purple-500" />
          Tech Stack
        </h2>
        <p className="text-gray-400 mt-2">
          Tecnologias e ferramentas que utilizo para transformar ideias em soluções.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          
          {/* Languages */}
          <Card title="Languages" icon={<Code2 />}>
            <Tag text="Python" />
          </Card>

          {/* Machine Learning */}
          <Card title="Machine Learning" icon={<Cpu />}>
            <Tag text="Scikit Learn" />
          </Card>

          {/* Database */}
          <Card title="Database" icon={<Database />}>
            <Tag text="MySQL" />
          </Card>

          {/* Backend & Data */}
          <Card title="Backend & Data" icon={<Code2 />}>
            <Tag text="Pandas" />
          </Card>

          {/* DevOps & Tools */}
          <Card title="DevOps & Tools" icon={<GitBranch />}>
            <div className="flex flex-wrap gap-2">
              <Tag text="Git" />
              <Tag text="GitHub" />
              <Tag text="Vercel" />
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}

/* Card */
function Card({ title, icon, children }) {
  return (
    <div className="bg-gradient-to-br from-[#0f0f1a] to-[#151530] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition">
      <div className="flex items-center gap-3 text-white text-xl font-semibold">
        <div className="bg-purple-600/20 p-2 rounded-lg text-purple-400">
          {icon}
        </div>
        {title}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/* Tag */
function Tag({ text }) {
  return (
    <span className="inline-block bg-purple-600/20 text-purple-400 px-4 py-1 rounded-full text-sm">
      {text}
    </span>
  );
}

