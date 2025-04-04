import React from 'react';
import styles from './style.module.scss';
import {NavLink} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {

    const {t} = useTranslation();

    return (
        <header>
            <div className={styles.menuBtn}><span className={styles.btnBurger}></span></div>
            <nav className={styles.nav}>
                <ul className={styles.menuNav}>
                    <li className={styles.item}><NavLink className={styles.link} to="/">{t("Главная")}</NavLink></li>
                    <li className={styles.item}><NavLink className={styles.link} to="/about">{t("Обо мне")}</NavLink></li>
                    <li className={styles.item}><NavLink className={styles.link} to="/projects">{t("Проекты")}</NavLink></li>
                    <li className={styles.item}><NavLink className={styles.link} to="/contacts">{t("Контакты")}</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
