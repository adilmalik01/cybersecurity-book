import React from 'react';
import clsx from 'clsx';
import styles from './LabSection.module.css';

export default function LabSection({ title = "Hands-On Lab", purpose, prerequisites, toolsRequired, procedure, expectedOutput, troubleshooting, safetyNotes }) {
  return (
    <div className={clsx('margin-bottom--lg', styles.labContainer)}>
      <h3 className={styles.labTitle}>{title}</h3>
      
      {purpose && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Purpose</h4>
          <p>{purpose}</p>
        </div>
      )}
      
      {prerequisites && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Prerequisites</h4>
          <p>{prerequisites}</p>
        </div>
      )}
      
      {toolsRequired && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Tools Required</h4>
          <p>{toolsRequired}</p>
        </div>
      )}
      
      {procedure && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Step-by-Step Procedure</h4>
          <div className={styles.procedureContent}>{procedure}</div>
        </div>
      )}
      
      {expectedOutput && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Expected Output</h4>
          <div className={styles.expectedOutputContent}>{expectedOutput}</div>
        </div>
      )}
      
      {troubleshooting && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Troubleshooting</h4>
          <div className={styles.troubleshootingContent}>{troubleshooting}</div>
        </div>
      )}
      
      {safetyNotes && (
        <div className={clsx(styles.section, styles.safetySection)}>
          <h4 className={styles.sectionTitle}>⚠️ Safety Notes</h4>
          <div className={styles.safetyContent}>{safetyNotes}</div>
        </div>
      )}
    </div>
  );
}