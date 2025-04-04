import React from 'react';
import styles from './styles.module.scss';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const Project = ({imageSrc, imageAlt, previewLink, githubLink}) => {

    const {t} = useTranslation();

    return (
        <div className={styles.project}>
            <img src={imageSrc} alt={imageAlt}/>
            <div className={styles.projectBtns}>
                <a className={styles.btn} href={previewLink} target="_blank" rel="noopener noreferrer">
                    <AiFillEye/> {t("проект")}
                </a>
                <a className={styles.btn} href={githubLink} target="_blank" rel="noopener noreferrer">
                    <AiFillGithub/> {t("код")}
                </a>
            </div>

        </div>
    );
};

export default Project;
