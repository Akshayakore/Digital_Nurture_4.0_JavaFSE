import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, status }) {
  const statusColor = status === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: statusColor }}>{name}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
