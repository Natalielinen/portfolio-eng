import React from 'react';
import styles from './style.module.scss';
import Job from '../../components/Job';
import SocialIcons from '../../components/SocialIcons';

const jobs = [
    {
        period: 'february 2022 to present',
        company: 'Zen Code',
        position: 'frontend developer',
        functions: 'Creating and maintaining front-end code. Assisting the development team in debugging and ' +
            'troubleshooting CMS-system. Working in an Agile, collaborative environment to receive design requirements ' +
            'and test application. Collaborating with stakeholders during development processes to confirm creative' +
            ' proposals and design best practices. Working cooperatively with analytics and design team in deadline-driven ' +
            'environment. Redesining and optimizing old code to enhance application performance and code readability. ' +
            ' Performing user experience quality assurance testing to identify and remedy shortcomings. '
    },
    {
        period: 'november 2021 - february 2022',
        company: 'Zen Code',
        position: 'frontend developer intern',
        functions: 'Collaborated with other interns and team lead to create study projects. Designed, wrote, modified,' +
            ' integrated, and tested website-related code. Provided daily plans and reports'
    },
    {
        period: 'june 2021 - september 2021',
        company: 'KodeFirst',
        position: 'frontend developer intern',
        functions: 'Assisted senior developers in the layout of various interface elements. Refactored and debugged ' +
            'old code. Studied and applied new technologies. Participated in code reviews and provided daily reports'
    }
];

const About = () => {
    return (
        <main>
            <section className={styles.about}>
                <div className={styles.bioImage}>
                    <div className={styles.bio}>
                        <h2 className='textSecondary'>About</h2>
                        <p>Frontend developer
                            <br />
                                <span className={styles.experience}>Total experience <span>1 year</span> </span>
                        </p>
                        <p>Skills: HTML, CSS, Pug, SCSS, JavaScript, React, Redux</p>
                    </div>
                </div>
                <div className={styles.jobs}>
                    {
                        jobs.map(job => <Job period={job.period} company={job.company} functions={job.functions} position={job.position}/>)
                    }
                </div>
                <SocialIcons />
            </section>
        </main>
)
}

export default About;