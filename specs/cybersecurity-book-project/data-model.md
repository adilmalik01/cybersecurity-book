# Data Model for Cybersecurity & Ethical Hacking Book Project

## Entities

### Chapter
- **Fields**: id, title, part, section, wordCount, learningObjectives, prerequisites, toolsRequired
- **Relationships**: belongs to one Part, has many Sections, has many Labs
- **Validation**: title is required, wordCount must be < 3000 (for readability), learningObjectives required

### Part
- **Fields**: id, title, description, chapterCount
- **Relationships**: has many Chapters
- **Validation**: title is required, chapterCount > 0

### Section
- **Fields**: id, title, content, order, type (theory|example|tool|lab)
- **Relationships**: belongs to one Chapter
- **Validation**: title is required, content follows chapter template structure

### Lab
- **Fields**: id, title, purpose, prerequisites, toolsRequired, procedure, expectedOutput, troubleshooting, safetyNotes
- **Relationships**: belongs to one Chapter
- **Validation**: all fields required, safetyNotes must specify ethical use

### Tool
- **Fields**: id, name, description, version, installationGuide, usageExamples, securityConsiderations
- **Relationships**: used by many Labs
- **Validation**: name is required, securityConsiderations must highlight ethical use

### Vulnerability
- **Fields**: id, name, description, severity, CVE, exploitationMethod, mitigation, labReference
- **Relationships**: referenced in many Sections
- **Validation**: name and description required, labReference required for practical examples

### AttackTechnique
- **Fields**: id, name, category (network/web/application/social), description, toolsUsed, defensiveCountermeasures
- **Relationships**: explained in Sections, demonstrated in Labs
- **Validation**: name and description required, defensiveCountermeasures required to ensure balanced content

### DefensiveMeasure
- **Fields**: id, name, description, toolsUsed, implementationGuide, effectiveness
- **Relationships**: related to AttackTechniques, detailed in Sections
- **Validation**: name and description required, implementationGuide required

### Certification
- **Fields**: id, name (CEH, OSCP, CISSP, etc.), requirements, examDetails, studyGuideReference
- **Relationships**: referenced in relevant Chapters
- **Validation**: name and requirements required

## State Transitions

### Content Review Workflow
- Draft → Under Review → Needs Revision → Approved → Published
- All content must pass technical accuracy check before approval
- All labs must pass ethical compliance check before approval

### Lab Validation Process
- Design → Safe Environment Test → Technical Validation → Ethical Review → Approved
- Labs must be tested in isolated VM environment before approval