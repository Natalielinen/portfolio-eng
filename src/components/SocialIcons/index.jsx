import React from 'react';
import {GrLinkedinOption, GrGithub} from 'react-icons/gr';
import styles from './styles.module.scss';

const SocialIcons = () => {
    return (
        <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/nataliia-chufistova" target="_blank"
               rel="noopener noreferrer"><GrLinkedinOption/></a>
            <a href="https://github.com/Natalielinen" target="_blank" rel="noopener noreferrer"><GrGithub/></a>
        </div>
    );
};

export default SocialIcons;
