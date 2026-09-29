"use client";

import { useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";


type Project = {
  title: string;
  type: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  visual: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "EnhanceAI",
    type: "AI / FULL STACK",
    description:
      "A full-stack AI-powered career coach built with Next.js. It uses Google Gemini to provide tailored career guidance, from resume building to interview preparation.",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Neon", "Prisma", "Clerk", "Inngest", "Gemini"],
    live: "https://enhance-ai-career-coach.vercel.app/",
    github: "https://github.com/ayushchand18/EnhanceAI",
    visual: "01",
    image: "/projects/enhanceai.PNG",
  },
  {
    title: "Mealio",
    type: "FULL STACK",
    description:
      "A dynamic food ordering website built with the MERN Stack, providing a user-friendly platform for seamless online food ordering.",
    tech: ["React.js", "CSS", "Express.js", "MongoDB", "Node.js", "Stripe", "Multer", "JWT"],
    live: "https://food-delivery-app-beta-eight.vercel.app/",
    github: "https://github.com/ayushchand18/Food-Delivery-Website",
    visual: "02",
    image: "/projects/mealio.PNG",
  },
  {
    title: "JARVIS",
    type: "AI / PYTHON",
    description:
      "An intelligent voice assistant using Python capable of performing tasks via speech recognition and natural language processing.",
    tech: ["Python", "SpeechRecognition", "NLP"],
    visual: "03",
    image: "/projects/jarvis.png",
  },
  {
    title: "Lecture Summarizer",
    type: "NLP / AI",
    description:
      "A tool to transcribe and summarize educational audio/video lectures using natural language processing techniques.",
    tech: ["Python", "NLTK", "Transformers"],
    visual: "04",
    image: "/projects/lecture.jpg",
  },
  {
    title: "3D Solar System",
    type: "INTERACTIVE WEB",
    description:
      "An interactive 3D Solar System simulation using Three.js with realistic planetary orbits, dynamic lighting, and real-time speed controls.",
    tech: ["HTML", "CSS", "Three.js"],
    live: "https://ayushchand18.github.io/3D-Solar-System/",
    github: "https://github.com/ayushchand18/3D-Solar-System",
    visual: "05",
    image: "/projects/solar.PNG",
  },
  {
    title: "Login & Registration System",
    type: "FULL STACK",
    description:
      "A secure user authentication system with database connectivity for user management.",
    tech: ["HTML", "CSS", "Node.js", "MongoDB"],
    visual: "06",
    image: "/projects/login.gif",
  },
];

const experiences = [
  {
    date: "MAR 2024 — APR 2024",
    role: "Web Development Intern",
    company: "CollegeTips Ed. Tech. Media Pvt. Ltd.",
    description:
      "Designed and developed responsive front-end components using HTML, CSS, and JavaScript. Collaborated with the development team to debug and optimize existing code.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    date: "MAR 2024 — JUL 2025",
    role: "Community Captain",
    company: "Zuno by foundit",
    description:
      "Led community initiatives and managed team activities to enhance user engagement and platform growth.",
    tags: ["Leadership", "Team Management"],
  },
  {
    date: "FEB 2024 — MAR 2024",
    role: "Intern",
    company: "Zidio Development",
    description:
      "Gained hands-on experience in software development and project management practices.",
    tags: ["Software Development"],
  },
];

const skillGroups = [
  {
    name: "PROGRAMMING",
    skills: [
      ["C++", "85"],
      ["Python", "90"],
      ["JavaScript", "80"],
      ["Java", "75"],
    ],
  },
  {
    name: "FRONTEND",
    skills: [
      ["React", "85"],
      ["Next.js", "85"],
      ["HTML", "95"],
      ["CSS", "95"],
    ],
  },
  {
    name: "BACKEND & DATABASES",
    skills: [
      ["Node.js", "80"],
      ["MongoDB", "75"],
      ["MySQL", "70"],
    ],
  },
];

const skillIcons: Record<string, IconType> = {
  "C++": SiCplusplus,
  Python: SiPython,
  JavaScript: SiJavascript,
  Java: SiOpenjdk,
  React: SiReact,
  "Next.js": SiNextdotjs,
  HTML: SiHtml5,
  CSS: SiCss,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
};

export default function Home() {
  const [night, setNight] = useState(true);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [query, setQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        document.getElementById("project-search")?.focus();
      }
      if (e.key === "Escape") {
        setActiveProject(null);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const visibleProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesFilter =
        filter === "ALL" ||
        (filter === "AI / ML" && p.type.includes("AI")) ||
        (filter === "FULL STACK" && p.type.includes("FULL STACK")) ||
        (filter === "NLP / AI" && p.type.includes("NLP"));
      const matchesSearch =
        !q ||
        [p.title, p.type, p.description, ...p.tech].join(" ").toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [filter, query]);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-mark">AC</div>
        <div className="loader-line"><span /></div>
        <div className="loader-copy">initializing portfolio</div>
      </div>
    );
  }

  return (
    <main className={night ? "site night" : "site"}>
      <nav className="nav">
        <a href="#home" className="brand">AYUSH<span>.portfolio</span></a>
        <div className={menu ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#experience" onClick={() => setMenu(false)}>Experience</a>
          <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenu(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </div>
        <div className="nav-right">
          <button onClick={() => document.getElementById("project-search")?.focus()}>Grep <kbd>⌘K</kbd></button>
          <button onClick={() => setNight(!night)}>{night ? "Night" : "Day"}</button>
          <button className="menu" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? "×" : "☰"}</button>
        </div>
      </nav>

      <div className="shell">
        <div className="system">
          <span className="pulse" /> SRC idle <span>/ portfolio</span>
        </div>

        <section className="hero" id="home">
          <div className="hero-top">
            <div className="hero-copy">
              <div className="eyebrow">FULL STACK DEVELOPER / AI ENTHUSIAST</div>
              <h1>AYUSH<span> CHAND</span></h1>
              <p className="lead">
                I&apos;m Ayush Chand, a Computer Science graduate building
                practical full-stack applications and AI-powered products.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">Explore work <span>↓</span></a>
                <a className="button" href="#contact">Contact me <span>→</span></a>
              </div>
              <div className="social-row">
                <a href="https://github.com/ayushchand18" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://linkedin.com/in/ayush-chand-46000722a" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://leetcode.com/u/_ORbit_/" target="_blank" rel="noreferrer">LeetCode ↗</a>
                <a href="/resume/Ayush_Chand_Resume.pdf" target="_blank">Resume ↗</a>
              </div>
            </div>

            <div className="hero-terminal">
              <div className="terminal-bar"><span>ayush@portfolio</span><span>~/home</span></div>
              <pre>{`$ whoami
ayush

$ role
full stack developer

$ interests
ai / web / data

$ status
open to opportunities`}</pre>
              <div className="terminal-foot"><span>● available</span><span>2026</span></div>
            </div>
          </div>

          <div className="hero-stats">
            <div><span>Projects</span><strong>06</strong></div>
            <div><span>Experience</span><strong>03</strong></div>
            <div><span>Primary stack</span><strong>MERN + Next.js</strong></div>
            <div><span>Education</span><strong>B.Tech CSE</strong></div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-title">
            <span>01 / ABOUT</span>
            <h2>Get to know me.</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m a Computer Science graduate with a strong foundation in full-stack development and a growing interest in AI and data-driven applications.
              </p>
              <p>
                I&apos;m currently building new projects, exploring modern technologies, and looking for opportunities where I can apply my skills to solve real-world problems.
              </p>
              <div className="signature">AYUSH CHAND / DEVELOPER</div>
            </div>
            <div className="education">
              <div className="card-label">EDUCATION</div>
              <div className="education-item">
                <span>2022 — 2026</span>
                <h3>Bachelor of Technology</h3>
                <p>Computer Science & Engineering</p>
                <strong>IMS Engineering College, Ghaziabad</strong>
                <small>GPA: 8.17</small>
              </div>
              <div className="education-item">
                <span>2020 — 2021</span>
                <h3>XII / PCM</h3>
                <strong>New Rainbow Public School, Ghaziabad</strong>
              </div>
              <div className="education-item">
                <span>2018 — 2019</span>
                <h3>X</h3>
                <strong>New Rainbow Public School, Ghaziabad</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-title">
            <span>02 / EXPERIENCE</span>
            <h2>Professional journey.</h2>
          </div>
          <div className="timeline">
            {experiences.map((exp, i) => (
              <article className="experience" key={exp.company}>
                <div className="exp-index">0{i + 1}</div>
                <div className="exp-date">{exp.date}</div>
                <div className="exp-body">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                  <div className="tags">{exp.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
                <div className="exp-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <div className="section-title">
              <span>03 / PROJECTS</span>
              <h2>Selected work.</h2>
            </div>
            <label className="search">
              <span>$ grep</span>
              <input
                id="project-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search projects"
              />
            </label>
          </div>

          <div className="filters">
            {["ALL", "AI / ML", "FULL STACK", "NLP / AI"].map((f) => (
              <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>

          <div className="projects">
            {visibleProjects.map((project) => (
              <article className="project" key={project.title} onClick={() => setActiveProject(project)}>
                <div className="project-visual">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                />
                </div>
                <div className="project-body">
                  <div className="project-meta"><span>{project.type}</span><span>PROJECT</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tech.slice(0, 5).map((t) => <span key={t}>{t}</span>)}</div>
                  <div className="project-links">
                    {project.live ? <a href={project.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo ↗</a> : <span className="muted-link">Live Demo</span>}
                    {project.github ? <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>GitHub ↗</a> : <span className="muted-link">GitHub</span>}
                    <button onClick={(e) => { e.stopPropagation(); setActiveProject(project); }}>Details +</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-title">
            <span>04 / SKILLS</span>
            <h2>Technical toolkit.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.name}>
                <div className="card-label">{group.name}</div>
                <div className="skill-chips">
                  {group.skills.map(([name]) => (
                    <div className="skill-chip" key={name}>
                      <div className="skill-icon-row" aria-hidden="true">
                        {(() => {
                          const Icon = skillIcons[name];
                          return <Icon className="skill-icon" />;
                        })()}
                      </div>
                      <span className="skill-name">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section recognition">
          <div className="recognition-card">
            <span className="card-label">ACHIEVEMENTS</span>
            <h2>Proof of progress.</h2>
            <div className="recognition-item"><strong>TCS NQT</strong><span>Cleared the TCS National Qualifier Test</span></div>
            <div className="recognition-item"><strong>6151</strong><span>Global Rank in TCS CodeVita Season 13</span></div>
          </div>
          <div className="recognition-card">
            <span className="card-label">CERTIFICATIONS</span>
            <h2>Learning log.</h2>
            <div className="cert">Generative AI Fundamentals <span>DeepLearning.AI</span></div>
            <div className="cert">Journey to Cloud <span>IBM</span></div>
            <div className="cert">Cloud Data Integration for Developers <span>Informatica University</span></div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-title">
            <span>05 / CONTACT</span>
            <h2>Let&apos;s build something.</h2>
          </div>
          <div className="contact-grid">
            <div>
              <p className="contact-lead">
                Have a project, opportunity, or just want to talk tech?
                Send me a message.
              </p>
              <a className="big-email" href="mailto:AyushChand.1809@gmail.com">AyushChand.1809@gmail.com →</a>
              <div className="contact-details">
                <a href="tel:+919958703469">+91 9958703469</a>
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
              <div className="social-row bottom">
                <a href="https://linkedin.com/in/ayush-chand-46000722a" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://github.com/ayushchand18" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://leetcode.com/u/_ORbit_/" target="_blank" rel="noreferrer">LeetCode ↗</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(String(data.get("subject") || "Portfolio contact"));
              const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
              window.location.href = `mailto:AyushChand.1809@gmail.com?subject=${subject}&body=${body}`;
            }}>
              <label>Name<input name="name" required /></label>
              <label>Email<input name="email" type="email" required /></label>
              <label>Subject<input name="subject" required /></label>
              <label>Message<textarea name="message" rows={5} required /></label>
              <button className="button primary" type="submit">Send message <span>→</span></button>
            </form>
          </div>
        </section>

        <footer>
          <span>AYUSH.LOG</span>
          <span>Built with Next.js · 2026</span>
          <span>EOF</span>
        </footer>
      </div>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>×</button>
            <div className="eyebrow">{activeProject.type}</div>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
            <div className="tags">{activeProject.tech.map((t) => <span key={t}>{t}</span>)}</div>
            <div className="modal-actions">
              {activeProject.live && <a className="button primary" href={activeProject.live} target="_blank" rel="noreferrer">Live Demo ↗</a>}
              {activeProject.github && <a className="button" href={activeProject.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
            </div>
          </div>
        </div>
      )}

      <div className="float-command">$ grep <span>⌘K</span></div>
    </main>
  );
}
