import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Statistics/Statistics.module.css';
// import classNames from 'classnames';

const Statistic = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <div className={styles.Statistics}>
      <p className={styles.good}>Good: {good}</p>
      <p className={styles.neutral}>Neutral: {neutral}</p>
      <p className={styles.bad}>Bad: {bad}</p>
      <p className={styles.total}>Total: {total}</p>
      <p className={styles.feedback}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  // total: PropTypes.number.isRequired,
  // positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
