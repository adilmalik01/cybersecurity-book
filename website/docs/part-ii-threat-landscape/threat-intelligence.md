---
title: Threat Intelligence
description: Understanding and utilizing threat intelligence for cybersecurity
sidebar_position: 4
---

# Threat Intelligence

## Learning Objectives

After completing this chapter, you should be able to:
- Define threat intelligence and its value to cybersecurity programs
- Understand different types of threat intelligence
- Identify sources of threat intelligence
- Explain how to integrate threat intelligence into security operations

## Concept Overview

Threat intelligence refers to evidence-based knowledge about existing or emerging threats to assets that can be used to inform decisions regarding an organization's response to those threats. It goes beyond basic security information by providing context, mechanisms, indicators, implications, and actionable advice.

### Types of Threat Intelligence

Threat intelligence can be categorized into three main types based on the intended consumer:

**Strategic Intelligence**: High-level information for executives about trends, risks, and potential impacts to business operations. This includes reports on threat actor motives, industry-specific threats, and regulatory implications.

**Operational Intelligence**: Mid-level information focusing on specific campaigns, tools, tactics, and procedures (TTPs) used by threat actors. This helps security teams understand ongoing attacks and prepares them for potential threats.

**Tactical Intelligence**: Technical details about specific indicators of compromise (IOCs) like IP addresses, domain names, file hashes, and malware signatures. This intelligence is used by security tools and analysts for detection and prevention.

### Threat Intelligence Lifecycle

The threat intelligence lifecycle consists of the following stages:

1. **Planning and Direction**: Define requirements and priorities for intelligence collection
2. **Collection**: Gather raw data from various sources
3. **Processing**: Transform collected data into usable formats
4. **Analysis**: Interpret processed data to produce intelligence
5. **Production**: Package analysis into consumable intelligence products
6. **Dissemination**: Distribute intelligence to appropriate stakeholders
7. **Feedback**: Receive feedback to improve the process

### Intelligence Sources

Threat intelligence comes from various sources, both internal and external:

**Internal Sources**:
- Network logs
- Endpoint detection and response (EDR) tools
- Security incident response records
- Vulnerability scans
- Employee reports

**External Sources**:
- Open source intelligence (OSINT)
- Commercial threat intelligence feeds
- Information sharing and analysis centers (ISACs)
- Government agencies
- Security vendors
- Dark web monitoring

## STIX and TAXII

The Structured Threat Information eXpression (STIX) and Trusted Automated eXchange of Indicator Information (TAXII) are standardized frameworks for describing and sharing cyber threat information:

- **STIX**: Defines a structured language for representing cyber threat information
- **TAXII**: Specifies an application layer protocol for exchanging cyber threat information over HTTPS

## Indicators of Compromise (IoCs)

Indicators of Compromise are pieces of forensic data that can identify potentially malicious activity on systems or networks. Common IoCs include:

- Malicious IP addresses
- Domain names associated with malware
- File hashes of known malware
- URLs of malicious websites
- Registry keys modified by malware

## Tools Used

- ThreatConnect
- MISP (Malware Information Sharing Platform)
- IBM X-Force Exchange
- VirusTotal
- Recorded Future
- Splunk Enterprise Security
- AlienVault OTX

## Hands-On Lab

### Purpose
Practice consuming and applying threat intelligence to enhance security posture.

### Prerequisites
- Computer with internet access
- Access to threat intelligence platforms/feeds
- Basic understanding of network security tools

### Tools Required
- MISP or similar threat intelligence platform
- Network monitoring tools
- IOC analysis tools
- Web browser for accessing threat feeds

### Step-by-Step Procedure

1. Register and access a free threat intelligence platform like MISP or AlienVault OTX
2. Search for current threats related to a specific industry or region
3. Download and analyze a STIX-formatted threat feed
4. Import IOCs into a security tool or SIEM for detection purposes
5. Correlate threat intelligence with internal security logs
6. Create a simple threat profile based on gathered intelligence

### Expected Output
- Account registered on a threat intelligence platform
- Downloaded STIX/TAXII feed analyzed
- List of relevant IOCs identified
- Threat correlation between external intelligence and internal logs
- Basic threat actor profile created

### Troubleshooting
- Verify that threat intelligence sources are reputable
- Validate IOCs before implementing in production security tools
- Update threat feeds regularly to maintain relevance

### Safety Notes
- Only use reputable and legal threat intelligence sources
- Do not share sensitive internal information when using external platforms
- Follow responsible disclosure practices

## Checklist / Summary

- Threat intelligence provides evidence-based knowledge about existing or emerging threats
- Includes strategic, operational, and tactical intelligence for different audiences
- Follows a structured lifecycle from planning to feedback
- Sources include internal logs and external feeds from various providers
- STIX/TAXII standardize threat information exchange
- IOCs enable detection and prevention of specific threats

## Review Questions

1. What is the difference between strategic, operational, and tactical threat intelligence?
2. Explain the threat intelligence lifecycle and its key stages.
3. How can organizations integrate threat intelligence into their security operations?

## Citations

1. Open Group. (2013). "Open C2 Profile. Draft Standard." The Open Group.
2. MITRE. (2019). "Structured Threat Information eXpression (STIX) Version 2.1." MITRE Corporation.
3. OASIS. (2018). "Trusted Automated eXchange of Indicator Information (TAXII) Version 2.1." OASIS.