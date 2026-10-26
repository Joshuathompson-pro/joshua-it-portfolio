import Image from "next/image";
import ResumeRequest from "./ResumeRequest";

const projects = [
  { number: "01", title: "Secure Home Lab", summary: "A segmented practice environment for testing Windows administration, identity, patching, and recovery workflows without exposing real business systems.", tags: ["Windows", "Networking", "Security"], outcome: "Documented repeatable build, backup, and restore procedures." },
  { number: "02", title: "PowerShell Server Health Monitoring", summary: "A documented monitoring workflow that checks Windows server availability, resource utilization, uptime, and critical services using configurable thresholds and safe synthetic data.", tags: ["PowerShell", "Monitoring", "Automation"], outcome: "Demonstrates proactive incident prevention, repeatable health checks, structured reporting, and privacy-conscious documentation.", github: "https://github.com/Joshuathompson-pro/powershell-server-health-monitoring" },
  { number: "03", title: "Network Monitoring Lab", summary: "A small observability stack built to explore availability checks, alert design, baseline performance, and incident triage.", tags: ["Monitoring", "Linux", "Networking"], outcome: "Created actionable alerts and a simple incident-response runbook." },
];

const experience = [
  { role: "IT Support Specialist II", organization: "Thomas & Hutton", period: "Sep 2024 – Present", detail: "Administer Windows Server, Active Directory, Microsoft Entra ID, Microsoft 365, Hyper-V, endpoint deployment, and multi-site network services supporting 400+ users across 12 offices." },
  { role: "Desktop Support Technician", organization: "Axa Professionals", period: "Oct 2023 – Sep 2024", detail: "Delivered Tier 1 and Tier 2 support in a 2,000+ user environment, deployed Windows endpoints, used PowerShell for support workflows, and managed the lifecycle of 200+ devices." },
  { role: "IT Support Specialist", organization: "The Now Television Network", period: "Jul 2021 – Oct 2023", detail: "Maintained server and desktop infrastructure for a 24/7 broadcast operation, supported 300+ users, and administered Veeam backup testing and recovery." },
];

const valuePoints = [
  ["Infrastructure ownership", "Hands-on administration across servers, identity, endpoints, cloud services, networking, monitoring, and backup operations."],
  ["Automation mindset", "PowerShell and workflow automation that reduce repetitive work, improve visibility, and make troubleshooting more consistent."],
  ["Measurable service", "A record of improving response processes while maintaining clear priorities, dependable follow-through, and strong SLA performance."],
  ["Clear communication", "Practical documentation and plain-language support that help both users and technical teams move forward confidently."],
];

const technicalEnvironment = [
  { level: "Hands-on", items: ["Windows & Windows Server", "Active Directory & Microsoft Entra ID", "Microsoft 365", "PowerShell", "TCP/IP, DNS & DHCP", "Hyper-V", "Ticketing & remote support", "Monitoring & backup tools"] },
  { level: "Working knowledge", items: ["Linux / Ubuntu", "VMware vSphere / ESXi", "Proxmox", "Cisco Meraki & pfSense", "Power Automate"] },
  { level: "Currently learning", items: ["CompTIA Security+", "Deeper Azure administration", "Infrastructure automation"] },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Joshua home">J<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a className="nav-cta" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> System administration · network support</p>
          <h1>Reliable systems.<br /><em>Stronger operations.</em></h1>
          <p className="hero-lede">I&apos;m Joshua Thompson, a systems-focused IT professional pursuing System Administrator and Network Support roles where I can strengthen infrastructure, automate routine work, and deliver dependable technical service.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <span>↘</span></a>
            <ResumeRequest />
          </div>
        </div>
        <aside className="status-card" aria-label="Professional focus">
          <div className="status-top"><span className="status-dot" /><span>Portfolio / 2026</span></div>
          <p className="terminal-label">CURRENT_FOCUS</p>
          <h2>Systems. Networks.<br />Automation.</h2>
          <div className="signal-lines" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <p className="status-note">Building practical solutions with clear documentation and measurable outcomes.</p>
        </aside>
      </section>

      <section className="section about" id="about">
        <div className="portrait-frame"><Image src="/joshua-thompson-headshot.jpeg" alt="Joshua Thompson" fill priority sizes="(max-width: 850px) 88vw, 34vw" /></div>
        <div className="about-copy">
          <p className="section-index">01 / ABOUT</p>
          <h2>Systems-minded.<br />Service-driven.</h2>
          <p>With 5+ years in IT, I bring hands-on experience across Windows infrastructure, identity and access, Microsoft 365, virtualization, networking, automation, monitoring, and backups. I work calmly, document clearly, and focus on solutions that make technology more reliable for both users and the business.</p>
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading experience-heading"><p className="section-index">02 / EXPERIENCE</p><h2>Experience that<br />scales with the work.</h2><p>Progressive IT responsibility across multi-site, enterprise, and always-on environments.</p></div>
        <div className="experience-list">{experience.map((item) => <article key={item.organization}><div><p>{item.period}</p><h3>{item.role}</h3><span>{item.organization}</span></div><p>{item.detail}</p></article>)}</div>
      </section>

      <section className="section value" id="value">
        <div><p className="section-index">03 / WHAT I BRING</p><h2>Practical value,<br />from day one.</h2></div>
        <div className="value-grid">{valuePoints.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading">
          <p className="section-index">04 / SELECTED PROJECTS</p><h2>Practice made visible.</h2><p>Independent projects that show systems thinking, technical process, and operational value.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-body"><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.github && <a className="project-link" href={project.github} target="_blank" rel="noreferrer">View project on GitHub ↗</a>}</div>
              <p className="outcome"><strong>BUSINESS VALUE</strong>{project.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills" id="skills">
        <div><p className="section-index">05 / TECHNICAL ENVIRONMENT</p><h2>Tools I use to<br />keep work moving.</h2></div>
        <div className="environment-grid">{technicalEnvironment.map((group) => <article key={group.level}><h3>{group.level}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="section certifications" id="certifications">
        <div className="section-heading certification-heading">
          <p className="section-index">06 / CERTIFICATIONS</p>
          <h2>Knowledge backed<br />by credentials.</h2>
          <p>Industry-recognized learning across technical support, troubleshooting, networking, security, and operational fundamentals.</p>
        </div>
        <div className="certification-grid">
          <article className="certification-card">
            <div className="vendor-logo google-logo" aria-label="Google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div>
            <div><p>Professional Certificate</p><h3>Google IT Support</h3><span>Technical support · Systems administration · Troubleshooting</span></div>
          </article>
          <article className="certification-card">
            <div className="vendor-logo comptia-logo" aria-label="CompTIA">CompTIA<span>+</span></div>
            <div><p>Professional Certification</p><h3>CompTIA Network+</h3><span>Networking concepts · Operations · Security · Troubleshooting</span></div>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-index">07 / CONTACT</p><h2>Let&apos;s make technology<br /><em>work better.</em></h2>
        <p>I bring a service-first mindset, practical technical skills, clear communication, and careful documentation to every problem. I&apos;m open to conversations with employers, recruiters, and technology teams looking for someone who can strengthen support, systems, and security.</p>
        <div className="contact-grid" aria-label="Joshua Thompson contact information">
          <a href="mailto:Joshuathompson.pro@gmail.com?subject=IT%20portfolio%20connection"><span>Email</span><strong>Joshuathompson.pro@gmail.com</strong></a>
          <a href="https://www.linkedin.com/in/joshuat3/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>linkedin.com/in/joshuat3/ ↗</strong></a>
          <div><span>Location</span><strong>Greenville, SC</strong></div>
        </div>
        <div className="contact-actions">
          <a className="button light" href="mailto:Joshuathompson.pro@gmail.com?subject=IT%20portfolio%20connection">Contact Joshua <span>↗</span></a>
          <ResumeRequest variant="light" />
        </div>
      </section>

      <footer><a className="brand" href="#top">J<span>.</span></a><p>Joshua Thompson · Greenville, SC</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
