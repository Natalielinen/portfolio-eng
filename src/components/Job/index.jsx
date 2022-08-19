import React from 'react';
import styles from './style.module.scss';

const Job = ({period, company, position, functions}) => {

    return (
        <div className={styles.job}>
            <h2 className='textSecondary>'>{period}</h2>
            <h3>{company}</h3>
            <h6>{position}</h6>
            <p>{functions}</p>
        </div>
    )
}

export default Job;
