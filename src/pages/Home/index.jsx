import React from 'react';
import styles from './style.module.scss'
import SocialIcons from '../../components/SocialIcons';

const Home = () => {
    return (
        <main>
            <section className={styles.home}>
                <h2>Hello! My name is </h2>
                <h1 className={styles.name}>Natalie</h1>
                <h2>Frontend developer</h2>
                <SocialIcons/>
            </section>
        </main>
    )
}

export default Home;
