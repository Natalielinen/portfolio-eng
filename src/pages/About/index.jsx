import React from 'react';
import styles from './style.module.scss';
import Job from '../../components/Job';
import SocialIcons from '../../components/SocialIcons';
import {jobs} from '../../data';

const About = () => {
    return (
        <main>
            <section className={styles.about}>
                <div className={styles.bioImage}>
                    <div className={styles.bio}>
                        <h2 className="textSecondary">About</h2>
                        <p>Frontend developer
                            <br/>
                            <span className={styles.experience}>Total experience <span>1 year</span> </span>
                        </p>
                        <p>Skills: HTML, CSS, Pug, SCSS, JavaScript, React, Redux</p>
                    </div>
                </div>
                <div className={styles.jobs}>
                    {
                        jobs.map(job => <Job period={job.period} company={job.company} functions={job.functions}
                                             position={job.position}/>)
                    }
                </div>
                <SocialIcons/>
            </section>
        </main>
    );
};

export default About;
