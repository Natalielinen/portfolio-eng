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
                        <p>Frontend developer</p>
                        <p>Main skills: JavaScript, TypeScript, React, Redux Toolkit, HTML5, CSS3, JSON, REST API</p>
                        <p>Discipline and self-taught frontend developer with 1+ year of experience. Authoring and designing
                            few personal projects. Eager to learn new technologies and improve skills.</p>
                    </div>
                </div>
                <div className={styles.jobs}>
                    {
                        jobs.map(job => <Job key={job.period} period={job.period} company={job.company} functions={job.functions}
                                             position={job.position}/>)
                    }
                </div>
                <SocialIcons/>
            </section>
        </main>
    );
};

export default About;
