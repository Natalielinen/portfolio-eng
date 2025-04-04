import React from 'react';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

const Job = ({period, company, position, functions, stack}) => {

    const {t} = useTranslation();

    return (
        <div className={styles.job}>
            <h2 className='textSecondary>'>{period}</h2>
            <h3>{company}</h3>
            <h6>{position}</h6>
            <p>
                {functions}
                {' '}
                <a 
                href="https://michurinsk.hh.ru/resume/1b23186fff09226cfa0039ed1f333075673364"
                target="_blank"
                rel="noreferrer"
                className="linkSecondary"
                >
                    {t("Подробнее")}
                </a>
            </p>
            
            <p>{stack}</p>
        </div>
    )
}

export default Job;
