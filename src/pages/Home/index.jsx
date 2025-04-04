import React from 'react';
import styles from './style.module.scss'
import SocialIcons from '../../components/SocialIcons';
import { useTranslation } from 'react-i18next';

const Home = () => {

    const {t} = useTranslation();

    return (
        <main>
            <section className={styles.home}>
                <h2>{t("Привет! Меня зовут")} </h2>
                <h1 className={styles.name}>{t("Наталия")}</h1>
                <h2>{t("Фронтенд разработчик")}</h2>
                <SocialIcons/>
            </section>
        </main>
    )
}

export default Home;
