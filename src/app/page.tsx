const projects = [
  { number: "01", title: "Secure Home Lab", summary: "A segmented practice environment for testing Windows administration, identity, patching, and recovery workflows without exposing real business systems.", tags: ["Windows", "Networking", "Security"], outcome: "Documented repeatable build, backup, and restore procedures." },
  { number: "02", title: "IT Automation Toolkit", summary: "A collection of safe, reusable scripts for workstation inventory, health checks, log collection, and routine support tasks.", tags: ["PowerShell", "Automation", "Support"], outcome: "Reduced repetitive checks and produced clearer troubleshooting notes." },
  { number: "03", title: "Network Monitoring Lab", summary: "A small observability stack built to explore availability checks, alert design, baseline performance, and incident triage.", tags: ["Monitoring", "Linux", "Networking"], outcome: "Created actionable alerts and a simple incident-response runbook." },
];

const capabilities = ["End-user support", "Windows administration", "Identity & access", "Network troubleshooting", "Security fundamentals", "Technical documentation"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Joshua home">J<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a className="nav-cta" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> IT professional · systems thinker</p>
          <h1>Reliable technology.<br /><em>Thoughtfully delivered.</em></h1>
          <p className="hero-lede">I&apos;m Joshua, an IT professional focused on dependable systems, practical security, and support experiences that make technology easier for people to use.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <span>↘</span></a>
            <a className="text-link" href="#about">More about me <span>→</span></a>
          </div>
        </div>
        <aside className="status-card" aria-label="Professional focus">
          <div className="status-top"><span className="status-dot" /><span>Portfolio / 2026</span></div>
          <p className="terminal-label">CURRENT_FOCUS</p>
          <h2>Support. Systems.<br />Security.</h2>
          <div className="signal-lines" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <p className="status-note">Building practical solutions with clear documentation and measurable outcomes.</p>
        </aside>
      </section>

      <section className="section about" id="about">
        <p className="section-index">01 / ABOUT</p>
        <div>
          <h2>Calm, curious, and<br />committed to the details.</h2>
          <p>I approach IT as a service discipline: understand the person and the problem, reduce risk, communicate clearly, and leave the environment better documented than I found it. This portfolio highlights independent lab work and transferable methods—not employer systems, client data, or confidential implementations.</p>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading">
          <p className="section-index">02 / SELECTED PROJECTS</p><h2>Practice made visible.</h2><p>Sanitized lab projects that show the process, not private infrastructure.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-body"><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <p className="outcome"><strong>OUTCOME</strong>{project.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills" id="skills">
        <div><p className="section-index">03 / CAPABILITIES</p><h2>Useful across the<br />whole support lifecycle.</h2></div>
        <div className="capability-grid">{capabilities.map((capability, index) => <div key={capability}><span>0{index + 1}</span>{capability}</div>)}</div>
      </section>

      <section className="contact" id="contact">
        <p className="section-index">04 / CONTACT</p><h2>Let&apos;s make technology<br /><em>work better.</em></h2>
        <p>I&apos;m interested in connecting with people working on thoughtful IT operations, support, and security.</p>
        <a className="button light" href="mailto:?subject=IT%20portfolio%20connection">Start a conversation <span>↗</span></a>
      </section>

      <footer><a className="brand" href="#top">J<span>.</span></a><p>Designed and built with care. No confidential employer information included.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
