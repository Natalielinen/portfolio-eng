import React from 'react';
import styles from './styles.module.scss';
import Project from '../../components/Project';
import {projects} from '../../data';
import { useTranslation } from 'react-i18next';

const Projects = () => {

    const {t} = useTranslation();

    return (
        <main>
            <section className={styles.projects}>
                <div className={styles.bioImage}>
                    <h1 className='textSecondary'>{t("Мои проекты")}</h1>
                </div>
                <div className={styles.items}>
                    {
                        projects.map(project => <Project
                            key={project.githubLink}
                            githubLink={project.githubLink}
                            imageAlt={project.imageAlt}
                            imageSrc={project.imageSrc}
                            previewLink={project.previewLink}
                        />)
                    }
                </div>
            </section>
        </main>
    );
};

export default Projects;