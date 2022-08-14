import React from 'react';
import styles from './styles.module.scss';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';

const Project = ({imageSrc, imageAlt, previewLink, githubLink}) => {
    return (
        <div className={styles.project}>
            <img src={imageSrc} alt={imageAlt}/>
            <div className={styles.projectBtns}>
                <a className={styles.btn} href={previewLink}  target='_blank' rel="noopener noreferrer">
                    <AiFillEye /> Preview
                </a>
                <a className={styles.btn} href={githubLink}  target='_blank' rel="noopener noreferrer">
                    <AiFillGithub /> Code
                </a>
            </div>

        </div>
    );
};

export default Project;