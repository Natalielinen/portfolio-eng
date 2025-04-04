import React from 'react';
import styles from './style.module.scss';
import Job from '../../components/Job';
import SocialIcons from '../../components/SocialIcons';
import { jobs, skills } from '../../data';
import { useTranslation } from 'react-i18next';

const About = () => {

    const {t} = useTranslation();

    return (
        <main>
            <section className={styles.about}>
                <div className={styles.bioImage}>
                    <div className={styles.bio}>
                        <h2 className="textSecondary">{t("Обо мне")}</h2>
                        <p>{t("Фронтенд разработчик")}</p>
                        <p>{t("Мой стек")}: {skills.join(', ')}</p>
                    </div>
                </div>
                <div className={styles.jobs}>
                    {
                        jobs.map(job => <Job key={job.period} period={job.period} company={job.company} functions={job.functions}
                                             position={job.position} stack={job.stack}/>)
                    }
                </div>
                <SocialIcons/>
            </section>
        </main>
    );
};

export default About;
