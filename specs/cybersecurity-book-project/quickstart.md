# Quickstart Guide for Cybersecurity & Ethical Hacking Book Project

## Getting Started

### Prerequisites
- Git installed on your system
- Node.js (v16 or higher) and npm
- VirtualBox or VMware for running lab environments
- Basic familiarity with Markdown syntax

### Setting Up the Repository

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cybersecurity-book.git
   cd cybersecurity-book
   ```

2. Install dependencies for the Docusaurus website:
   ```bash
   cd website
   npm install
   ```

### Running the Book Locally

1. Navigate to the website directory:
   ```bash
   cd website
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser to `http://localhost:3000` to view the book

### Setting Up Lab Environments

1. Download and import the provided VMs (Kali Linux, Windows, and vulnerable targets) from the `labs/` directory
2. Ensure your VM software is properly configured with network settings (typically host-only or NAT)
3. Follow the specific setup instructions in each lab procedure before attempting exercises

## Content Structure

The book is organized into 6 main parts:

1. **Foundations** - Core cybersecurity principles and concepts
2. **Threat Landscape** - Types of threats and attack vectors
3. **Ethical Hacking** - Offensive security techniques and tools
4. **Defensive Security** - Blue teaming and incident response
5. **Tools & Labs** - Practical tool usage and lab exercises
6. **Capstone** - Comprehensive real-world scenario

Each chapter follows a consistent structure:
- Learning Objectives
- Concept Overview
- Deep Explanation
- Real-World Examples
- Tools Used
- Hands-On Lab
- Checklist / Summary
- Review Questions
- Citations

## Contributing Content

1. Create a new branch for your contribution:
   ```bash
   git checkout -b feature/chapter-title
   ```

2. Add your chapter in the `website/docs/` directory, following the chapter template
3. Update `website/sidebars.js` to include your new chapter in the navigation
4. Verify your changes by running the development server

## Building the Website

To build the static website for deployment:

```bash
cd website
npm run build
```

The static files will be generated in the `build/` directory and can be served by any static hosting service.

## Testing Lab Procedures

1. Before submitting any lab procedure, test it in your local VM environment
2. Verify that all commands work as expected
3. Ensure the lab meets ethical and legal compliance (no real-world attacks)
4. Document any troubleshooting steps that might help other users

## Quality Standards

All content must meet these standards:
- Written at Grade 9-12 reading level
- Technically accurate (verify with authoritative sources)
- Ethically compliant (safe, legal activities only)
- Follow APA citation format
- Include hands-on lab exercises

## Deployment

The website is automatically deployed to GitHub Pages when changes are merged to the main branch. Ensure all tests pass before merging.

For manual deployment:
1. Build the website: `npm run build`
2. The deployment will happen automatically via GitHub Actions