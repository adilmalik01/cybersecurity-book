---
title: Networking Basics
description: Understanding fundamental networking concepts for cybersecurity
sidebar_position: 3
---

# Networking Basics

## Learning Objectives

After completing this chapter, you should be able to:
- Identify the key components of a network
- Explain the OSI and TCP/IP models
- Understand basic network protocols and their functions
- Recognize common network security threats

## Concept Overview

Networking forms the backbone of modern cybersecurity. Understanding how data flows through networks is essential for both defensive and offensive security practices. Networks consist of devices (nodes) connected through communication channels to share resources and information.

### Network Components

Networks comprise several fundamental components:

- **Nodes**: Devices connected to the network (computers, servers, routers, switches)
- **Links**: Communication channels connecting nodes (wired or wireless)
- **Protocols**: Standards governing data transmission
- **Network Interface Cards (NICs)**: Hardware allowing devices to connect to the network
- **Switches**: Devices that connect network segments and direct traffic within a local network
- **Routers**: Devices that connect different networks and route data between them
- **Firewalls**: Security devices that control traffic flow based on security rules

### OSI Model

The Open Systems Interconnection (OSI) model is a conceptual framework used to understand and describe network communications. It divides network communication into seven layers:

1. **Physical Layer**: Hardware, cables, and physical transmission
2. **Data Link Layer**: Node-to-node data transfer, error detection
3. **Network Layer**: Routing, logical addressing, path determination
4. **Transport Layer**: End-to-end communication, error recovery, flow control
5. **Session Layer**: Establishing, managing, and terminating connections
6. **Presentation Layer**: Data translation, encryption, compression
7. **Application Layer**: Network applications and services

### TCP/IP Model

The TCP/IP model is a simplified version of the OSI model with four layers:

1. **Network Interface Layer**: Combines OSI's Physical and Data Link layers
2. **Internet Layer**: Corresponds to OSI's Network layer (IP)
3. **Transport Layer**: Equivalent to OSI's Transport layer (TCP/UDP)
4. **Application Layer**: Combines OSI's Session, Presentation, and Application layers

## Real-World Examples

- **Home Network**: A typical home network includes a router with built-in switch and wireless access point, connecting computers, phones, and IoT devices
- **Enterprise Network**: Large organizations have complex networks with multiple switches, routers, firewalls, and VPNs spanning multiple locations
- **Cloud Networks**: Modern applications utilize cloud infrastructures with virtual networks and software-defined networking

## Tools Used

- Wireshark: Network protocol analyzer
- Nmap: Network discovery and security auditing tool
- Netstat: Network statistics tool
- Ping and traceroute: Basic network diagnostic tools
- Network simulators (GNS3, Packet Tracer)

## Hands-On Lab

### Purpose
Capture and analyze network traffic to understand basic protocols and communications.

### Prerequisites
- Computer with network access
- Wireshark installed

### Tools Required
- Wireshark (network packet analyzer)
- Web browser

### Step-by-Step Procedure

1. Open Wireshark and select your active network interface
2. Start capturing network traffic
3. In another application, open your web browser and visit a website (e.g., http://httpbin.org/)
4. Stop the packet capture in Wireshark after the page loads
5. Identify the following in your capture:
   - TCP handshake (SYN, SYN-ACK, ACK)
   - HTTP request and response
   - IP addresses involved
   - Port numbers used
6. Look for DNS queries if you used a domain name
7. Identify different protocols in the capture (TCP, HTTP, DNS, etc.)

### Expected Output
- A packet capture showing the communication between your computer and the web server
- Clear view of the TCP handshake
- HTTP request and response packets
- Identification of source and destination IP addresses and ports

### Troubleshooting
- If no packets appear, ensure you've selected the correct network interface
- If capturing fails, check Wireshark permissions (may require admin rights)
- If you can't connect to the test site, try a different one or check your network connection

### Safety Notes
- This lab only captures traffic to/from your own computer
- No information about other network users is captured
- All activities are performed on your local network

## Checklist / Summary

- Networks require nodes, links, protocols, and supporting devices
- OSI model (7 layers) and TCP/IP model (4 layers) help understand network communications
- Different protocols operate at different layers
- Network security threats vary by layer
- Understanding networking is fundamental to cybersecurity

## Review Questions

1. What are the seven layers of the OSI model?
2. How does the TCP/IP model differ from the OSI model?
3. What is the purpose of the Network layer in the OSI model?
4. Name at least three network components and their functions.

## Citations

1. NIST. (2020). Guide to Industrial Control Systems (ICS) Security. NIST Special Publication 800-82.
2. Ross, J., et al. (2006). "Guide to Network Security." NIST Special Publication 800-41.