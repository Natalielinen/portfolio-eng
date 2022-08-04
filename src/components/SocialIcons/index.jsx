import React from 'react';
import {GrLinkedinOption, GrGithub} from 'react-icons/gr';
import styles from './styles.module.scss';

const SocialIcons = () => {
    return (
        <div className={styles.socialIcons}>
            <a href="#"><GrLinkedinOption /></a>
            <a href="#"><GrGithub /></a>
        </div>
    )
}

export default SocialIcons;