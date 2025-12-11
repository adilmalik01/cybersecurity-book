---
title: Identity and Access Management
description: Controlling and managing user access to organizational resources
sidebar_position: 2
---

# Identity and Access Management

## Learning Objectives

After completing this chapter, you should be able to:
- Define Identity and Access Management (IAM) and its key components
- Explain different authentication and authorization mechanisms
- Implement multi-factor authentication and single sign-on solutions
- Manage user lifecycle and privileged access
- Understand identity governance and compliance requirements

## Concept Overview

Identity and Access Management (IAM) is a framework of policies, technologies, and processes that ensures the right individuals have access to the right resources at the right times and for the right reasons. IAM systems are critical for maintaining security, ensuring compliance, and protecting organizational assets.

### Core Components of IAM

**Identity Management**: The process of identifying, authenticating, and authorizing individuals to have access to organizational resources.

**Authentication**: The process of verifying the identity of a user, device, or system.

**Authorization**: The process of determining what resources an authenticated identity can access.

**Account Management**: The lifecycle management of user accounts from creation to deletion.

### Authentication Methods

**Single-Factor Authentication (SFA)**: Uses only one type of credential, typically a password or PIN.

**Two-Factor Authentication (2FA)**: Uses two different types of credentials from different categories:
- Something you know (password, PIN)
- Something you have (smart card, token)
- Something you are (biometric)

**Multi-Factor Authentication (MFA)**: Uses two or more different authentication factors simultaneously.

**Password Authentication**: Traditional method using username and password combinations.

**Certificate-Based Authentication**: Uses digital certificates to verify identity.

**Biometric Authentication**: Uses physical characteristics like fingerprints, iris scans, or facial recognition.

**Token-Based Authentication**: Uses physical or software tokens that generate time-based codes.

## Identity Federation

Identity federation enables users to access multiple applications using the same identity. This is achieved through trust relationships between organizations.

**Single Sign-On (SSO)**: Allows users to access multiple applications with one set of login credentials.

**Security Assertion Markup Language (SAML)**: An XML-based standard for exchanging authentication and authorization data between parties.

**OpenID Connect (OIDC)**: Identity layer on top of the OAuth 2.0 protocol.

**OAuth**: Authorization framework that enables applications to obtain limited access to user accounts.

## Access Control Models

### Discretionary Access Control (DAC)
The owner of a resource has complete control over it and can grant access to others.

### Mandatory Access Control (MAC)
Access is controlled by a central authority based on system-wide security policies.

### Role-Based Access Control (RBAC)
Access is granted based on the roles assigned to users, with permissions tied to roles rather than individual users.

### Attribute-Based Access Control (ABAC)
Access decisions are made based on attributes of the user, resource, and environment.

## Identity Governance

Identity governance includes processes and technologies for managing identities, access rights, and compliance with security policies across an organization.

**Access Reviews**: Regular review of user access rights to ensure they remain appropriate.

**Provisioning**: Automated processes for creating, modifying, and deactivating user accounts.

**Privileged Access Management (PAM)**: Special controls for managing access to high-privilege accounts.

**Compliance Management**: Ensuring that access management practices meet regulatory requirements.

## User Lifecycle Management

### Account Provisioning
- Automated creation of user accounts when employees join the organization
- Assignment of appropriate access rights based on role requirements
- Integration with HR systems for streamlined processes

### Account Maintenance
- Regular review and updating of access rights as roles change
- Password policy enforcement
- Multi-factor authentication requirement management

### Account De-provisioning
- Automated removal of access when employees leave the organization
- Immediate revocation of access rights
- Proper handling of user data and resources

## Tools Used

- Active Directory (AD)
- Azure Active Directory (AAD)
- Identity Governance and Administration (IGA) platforms
- Multi-Factor Authentication (MFA) systems
- SSO solutions (SAML, OIDC)
- Role-based access control (RBAC) systems

## Hands-On Lab

### Purpose
Implement identity and access management controls in a test environment.

### Prerequisites
- Computer with internet access
- Virtualization software or cloud access
- Directory services (like Active Directory or OpenLDAP)

### Tools Required
- Directory management tools
- Authentication testing tools
- MFA solution (like Google Authenticator or DUO)
- Identity management software

### Step-by-Step Procedure

1. Set up a directory service (Active Directory or OpenLDAP)
2. Create user accounts with different roles and permissions
3. Implement multi-factor authentication
4. Configure single sign-on for multiple services
5. Set up role-based access controls
6. Test access controls and authentication mechanisms
7. Document the implementation and configuration

### Expected Output
- Configured directory service with user accounts
- Multi-factor authentication implementation
- Single sign-on configuration
- Role-based access controls
- Test results confirming proper functionality

### Troubleshooting
- Verify directory service connectivity
- Check authentication logs for errors
- Validate MFA configuration
- Test access controls with different user accounts

### Safety Notes
- Use a test environment to avoid impacting production systems
- Document all configurations for recovery purposes
- Ensure proper backups before making changes

## Checklist / Summary

- IAM ensures the right individuals have access to right resources at right times
- Includes identity management, authentication, authorization, and account management
- Authentication methods include SFA, 2FA, and MFA
- Access control models include DAC, MAC, RBAC, and ABAC
- Identity governance ensures compliance and proper lifecycle management

## Review Questions

1. What is the difference between authentication and authorization?
2. Explain the three authentication factors used in multi-factor authentication.
3. What are the benefits of implementing single sign-on (SSO) in an organization?

## Citations

1. National Institute of Standards and Technology. (2017). "NIST Special Publication 800-63B: Digital Identity Guidelines." NIST.
2. Chapple, M., & Seidl, D. (2021). "CISSP Official Study Guide." Sybex.
3. Bradbury, J. (2020). "Identity and Access Management Security: A Practical Guide to Controlling User Access." Apress.