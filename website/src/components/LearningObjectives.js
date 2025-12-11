import React from 'react';
import clsx from 'clsx';
import styles from './LearningObjectives.module.css';

const ObjectiveIcon = ({ type }) => {
  switch(type) {
    case 'understand':
      return '🧠';
    case 'apply':
      return '✅';
    case 'analyze':
      return '🔍';
    default:
      return '📚';
  }
};

export default function LearningObjectives({ objectives, title = "Learning Objectives" }) {
  return (
    <div className={clsx('margin-bottom--lg', styles.objectivesContainer)}>
      <h3 className={styles.objectivesTitle}>{title}</h3>
      <ul className={styles.objectivesList}>
        {objectives.map((objective, index) => {
          // Try to determine the type based on keywords in the objective
          let type = 'other';
          if (objective.toLowerCase().includes('understand') || objective.toLowerCase().includes('explain')) {
            type = 'understand';
          } else if (objective.toLowerCase().includes('apply') || objective.toLowerCase().includes('use')) {
            type = 'apply';
          } else if (objective.toLowerCase().includes('analyze') || objective.toLowerCase().includes('identify')) {
            type = 'analyze';
          }
          
          return (
            <li key={index} className={styles.objectiveItem}>
              <span className={styles.objectiveIcon}>
                <ObjectiveIcon type={type} />
              </span>
              <span className={styles.objectiveText}>{objective}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}