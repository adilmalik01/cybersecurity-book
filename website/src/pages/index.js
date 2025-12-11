import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import cyberImg from '@site/static/img/cyber.png';

// import './home.css';

export default function Home() {
  return (
    <Layout title="Cybersecurity Book" description="Learn Ethical Hacking & Defensive Security">
      <main className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">🔒 Professional Cybersecurity Training</span>
              <h1 className="hero-title">
                Master Cybersecurity & Ethical Hacking
              </h1>
              <p className="hero-description">
                Comprehensive hands-on course covering offensive techniques, defensive monitoring,
                digital forensics, and real-world security operations. From fundamentals to advanced
                penetration testing and incident response.
              </p>
              <div className="hero-buttons">
                <Link to="/docs/part-i-foundations" className="btn btn-primary">
                  Start Learning
                  <span className="btn-icon">→</span>
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Hours Content</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Hands-on Labs</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">6</span>
                  <span className="stat-label">Core Modules</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card card-1">
                <div className="card-icon">🛡️</div>
                <div className="card-text">Network Security</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🎯</div>
                <div className="card-text">Penetration Testing</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🔍</div>
                <div className="card-text">Digital Forensics</div>
              </div>
              <div className="hero-image-main">
                <img alt="" src={cyberImg} />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="section-header">
            <h2 className="section-title">What You'll Master</h2>
            <p className="section-subtitle">
              Comprehensive training covering both offensive and defensive security practices
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3 className="feature-title">Network Fundamentals</h3>
              <p className="feature-description">
                Deep dive into TCP/IP, OSI model, routing protocols, and network architecture.
                Master Wireshark for packet analysis and network troubleshooting.
              </p>
              <ul className="feature-list">
                <li>Protocol analysis and packet capture</li>
                <li>Network topology and design</li>
                <li>Traffic monitoring and analysis</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚔️</div>
              <h3 className="feature-title">Penetration Testing</h3>
              <p className="feature-description">
                Learn offensive security with Kali Linux, Metasploit Framework, and industry-standard
                tools. Conduct ethical hacking assessments on various systems.
              </p>
              <ul className="feature-list">
                <li>Reconnaissance and enumeration</li>
                <li>Vulnerability exploitation</li>
                <li>Post-exploitation techniques</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Web Application Security</h3>
              <p className="feature-description">
                Master OWASP Top 10 vulnerabilities, bug bounty hunting, and secure coding practices.
                Learn to identify and exploit web application flaws.
              </p>
              <ul className="feature-list">
                <li>SQL injection and XSS attacks</li>
                <li>Authentication bypass techniques</li>
                <li>API security testing</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Defensive Security</h3>
              <p className="feature-description">
                Build blue team skills with SIEM tools, log analysis, and security monitoring.
                Learn to detect, respond to, and prevent security incidents.
              </p>
              <ul className="feature-list">
                <li>SIEM deployment and configuration</li>
                <li>Threat hunting and detection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3 className="feature-title">Digital Forensics</h3>
              <p className="feature-description">
                Investigate security incidents with forensic tools and methodologies.
                Collect, preserve, and analyze digital evidence following legal standards.
              </p>
              <ul className="feature-list">
                <li>Evidence collection and preservation</li>
                <li>Memory and disk forensics</li>
                <li>Timeline analysis and reporting</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3 className="feature-title">Capstone Project</h3>
              <p className="feature-description">
                Apply all learned skills in a comprehensive security engagement.
                Complete a full penetration test from reconnaissance to final report.
              </p>
              <ul className="feature-list">
                <li>Real-world scenario simulation</li>
                <li>Full engagement lifecycle</li>
                <li>Professional reporting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Course Structure Section */}
        <section className="structure-section">
          <div className="section-header">
            <h2 className="section-title">Course Structure</h2>
            <p className="section-subtitle">
              Six comprehensive parts taking you from beginner to advanced practitioner
            </p>
          </div>
          <div className="structure-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Part I — Foundations</h3>
                <p className="timeline-description">
                  Build a solid foundation in networking, operating systems, and security principles.
                  Understand the fundamentals that underpin all cybersecurity practices.
                </p>
                <div className="timeline-topics">
                  <span className="topic-tag">Networking Basics</span>
                  <span className="topic-tag">Linux/Windows Systems</span>
                  <span className="topic-tag">Security Concepts</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Part II — Threat Landscape</h3>
                <p className="timeline-description">
                  Explore modern cyber threats, attack vectors, and the tactics used by threat actors.
                  Understand the MITRE ATT&CK framework and threat intelligence.
                </p>
                <div className="timeline-topics">
                  <span className="topic-tag">Threat Intelligence</span>
                  <span className="topic-tag">MITRE ATT&CK</span>
                  <span className="topic-tag">Attack Patterns</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Part III — Ethical Hacking</h3>
                <p className="timeline-description">
                  Master offensive security techniques including penetration testing methodologies,
                  exploitation frameworks, and social engineering tactics.
                </p>
                <div className="timeline-topics">
                  <span className="topic-tag">Metasploit Framework</span>
                  <span className="topic-tag">Web Exploitation</span>
                  <span className="topic-tag">Wireless Attacks</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Part IV — Defensive Security</h3>
                <p className="timeline-description">
                  Learn to protect systems and networks through security monitoring, incident response,
                  and implementing defense-in-depth strategies.
                </p>
                <div className="timeline-topics">
                  <span className="topic-tag">SIEM & Logging</span>
                  <span className="topic-tag">IDS/IPS</span>
                  <span className="topic-tag">Hardening</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Part V — Tools & Labs</h3>
                <p className="timeline-description">
                  Hands-on practice with industry-standard tools in controlled lab environments.
                  Build practical skills through guided exercises and challenges.
                </p>
                <div className="timeline-topics">
                  <span className="topic-tag">Kali Linux</span>
                  <span className="topic-tag">Burp Suite</span>
                  <span className="topic-tag">Lab Environments</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">6</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Part VI — Capstone</h3>
                <p className="timeline-description">
                  Complete a comprehensive security engagement that tests all skills learned.
                  Deliver a professional penetration testing report.
                </p>
                <div className="timeline-topics">
                  <span className="topic-tag">Full Engagement</span>
                  <span className="topic-tag">Real Scenarios</span>
                  <span className="topic-tag">Professional Reports</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="section-header">
            <h2 className="section-title">Skills You'll Gain</h2>
            <p className="section-subtitle">
              Industry-relevant competencies for security professionals
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Technical Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Penetration Testing</span>
                <span className="skill-tag">Network Analysis</span>
                <span className="skill-tag">Vulnerability Assessment</span>
                <span className="skill-tag">Exploit Development</span>
                <span className="skill-tag">Malware Analysis</span>
                <span className="skill-tag">Cryptography</span>
                <span className="skill-tag">Cloud Security</span>
                <span className="skill-tag">Scripting & Automation</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Defensive Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">SIEM Management</span>
                <span className="skill-tag">Incident Response</span>
                <span className="skill-tag">Threat Hunting</span>
                <span className="skill-tag">Log Analysis</span>
                <span className="skill-tag">Security Hardening</span>
                <span className="skill-tag">Forensics Investigation</span>
                <span className="skill-tag">Compliance & Auditing</span>
                <span className="skill-tag">Security Architecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Cybersecurity Journey?</h2>
            <p className="cta-description">
              Join thousands of students learning ethical hacking and defensive security.
              Start with the foundations and progress to advanced techniques at your own pace.
            </p>
            <div className="cta-buttons">
              <Link to="/docs/part-i-foundations" className="btn btn-primary btn-large">
                Begin Course Now
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/docs/part-i-foundations" className="btn btn-secondary btn-large">
                View Full Curriculum
              </Link>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}