<!--
Sync Impact Report
- Version change: N/A → 1.0.0 (Initial version for this project)
- List of modified principles:
  - "Spec-driven writing using Spec-Kit Plus + Gemini" (new)
  - "Technical accuracy (validated cybersecurity concepts & tools)" (new)
  - "Clear educational writing (Grade 9–12)" (new)
  - "Fully reproducible labs with safe/legal environments" (new)
  - "Ethical hacking only — no real-world illegal actions" (new)
  - "Book length constraint" (new)
- Added sections:
  - "Key Standards" with subsections for Book Standards, Cybersecurity Standards, Source Standards, and Chatbot Standards
  - "Success Criteria" with subsections for Book, Chatbot, and Student Learning Outcomes
- Removed sections: None
- Templates requiring updates:
  - `.specify/templates/plan-template.md` ✅ Updated (Constitution Check will now reference cybersecurity principles)
  - `.specify/templates/spec-template.md` ✅ Updated (Requirements should align with cybersecurity standards)
  - `.specify/templates/tasks-template.md` ✅ Updated (Tasks must follow cybersecurity guidelines)
- No files flagged for manual follow-up
- No placeholders intentionally deferred
-->
# AI/Spec-Driven Cybersecurity & Ethical Hacking Book + RAG Chatbot Constitution

## Core Principles

### Spec-driven writing using Spec-Kit Plus + Gemini
All content creation follows spec-driven methodology using Spec-Kit Plus and Gemini AI tools to ensure consistency, traceability, and quality in the development process

### Technical accuracy (validated cybersecurity concepts & tools)
All cybersecurity concepts, tools, and practices described in the book are validated through authoritative sources and tested in safe, legal environments to ensure technical correctness

### Clear educational writing (Grade 9–12)
All content is written to be accessible to readers with Grade 9–12 level education, using clear language and structured explanations that make complex cybersecurity topics understandable

### Fully reproducible labs with safe/legal environments
All labs and exercises must be fully reproducible using safe and legal environments, with no instructions for real-world exploitation or illegal activities

### Ethical hacking only — no real-world illegal actions
All ethical hacking techniques and tools are taught within safe testing environments with explicit focus on responsible use and legal compliance - no real-world unauthorized testing or illegal actions

### Book length constraint
Maintain book length between 40,000–50,000 words distributed across 12–20 chapters to ensure comprehensive coverage without excessive length

## Key Standards

Book Standards:
- Docusaurus v3, deployed on GitHub Pages
- Each chapter includes: intro, outcomes, theory, labs, summary, questions
- Use diagrams, code blocks, and consistent lab structure

Cybersecurity Standards:
- Modules covered:
  - Foundations (networking, CIA triad, OS security, Wireshark)
  - Ethical Hacking & Red Team (Kali, Nmap, Metasploit, OSINT)
  - Web Security & Bug Bounties (OWASP Top 10, Burp Suite, API testing)
  - Forensics & Blue Team (logs, malware, SIEM, MITRE ATT&CK)
  - Capstone (full offensive → defensive engagement)

Source Standards:
- Minimum 50% peer-reviewed or authoritative sources (MITRE, SANS, OWASP, NIST)
- Remaining from official documentation and industry research

Chatbot Standards:
- RAG system built with: FastAPI + Neon Postgres + Qdrant Cloud + OpenAI/ChatKit SDK
- Must answer using book content only, including selected text mode
- Low latency retrieval and zero hallucination on technical content

## Success Criteria

Book:
- Builds & deploys without errors
- Content is accurate, structured, readable, and plagiarism-free
- Claims are cited and source-traceable

Chatbot:
- Retrieves correct book chunks
- Answers based strictly on content
- Supports paragraph-level retrieval
- Passes end-to-end functionality tests

Student Learning Outcomes:
Students can:
- Explain cybersecurity fundamentals
- Perform full pentesting process
- Execute OWASP-based web attacks ethically
- Analyze logs, malware, and forensic artifacts
- Build SIEM detections and IR workflows
- Produce a professional security report

## Governance
All contributions to the book and chatbot must comply with these constitutional principles. Peer reviews are mandatory for all content changes. All labs must undergo safety verification before publication. The constitutional amendments require explicit approval from project maintainers

**Version**: 1.0.0 | **Ratified**: 2025-12-09 | **Last Amended**: 2025-12-09
