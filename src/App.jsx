import { useState } from "react";
import "./App.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "GitHub"];

const projects = [
  {
    title: "Task Manager",
    description: "A simple app to organize daily tasks.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    title: "Developer Portfolio",
    description: "A responsive website showcasing my skills.",
    tech: "React, CSS",
  },
  {
    title: "Weather App",
    description: "A project to display weather information.",
    tech: "JavaScript, API",
  },
];

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        Hi! I'm Anika H P, an aspiring web developer learning
        to build modern, responsive websites with React.
      </p>
    </section>
  );
}

function Skills({ items }) {
  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>
      <div className="skills">
        {items.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Projects({ items }) {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects">
        {items.map((project) => (
          <article className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>{project.tech}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Let's connect and build something amazing!</p>

      <p>
        📧 Email:{" "}
        <a href="mailto:nn25ise030@nmamit.in">
          nn25ise030@nmamit.in
        </a>
      </p>

      <p>
        📱 Phone:{" "}
        <a href="tel:8147898328">
          8147898328
        </a>
      </p>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      <header className="hero">
        <p>HELLO, I'M</p>
        <h1>Anika H P</h1>
        <h2>Aspiring React Developer</h2>
        <p>Building creative and responsive web experiences.</p>
      </header>

      <main>
        <About />
        <Skills items={skills} />
        <Projects items={projects} />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Anika H P | Built with React</p>
      </footer>
    </div>
  );
}