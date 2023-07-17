import React from 'react';
import styles from './style.module.scss';
import Job from '../../components/Job';
import SocialIcons from '../../components/SocialIcons';
import { jobs, skills } from '../../data';

const About = () => {
    return (
        <main>
            <section className={styles.about}>
                <div className={styles.bioImage}>
                    <div className={styles.bio}>
                        <h2 className="textSecondary">About</h2>
                        <p>Frontend developer</p>
                        <p>Main skills: {skills.join(', ')}</p>
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
