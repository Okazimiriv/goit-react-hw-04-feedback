import React from 'react';
import styles from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.Section}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
