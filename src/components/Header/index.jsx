import React from 'react';
import styles from './style.module.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className={styles.menuBtn}><span className={styles.btnBurger}></span></div>
            <nav className={styles.nav}>
                <ul className={styles.menuNav}>
                    <li className={styles.item}><NavLink className={styles.link} to="/">Home</NavLink></li>
                    <li className={styles.item}><NavLink className={styles.link} to="/about">About</NavLink></li>
                    <li className={styles.item}><NavLink className={styles.link} to="/projects">Projects</NavLink></li>
                    <li className={styles.item}><NavLink className={styles.link} to="/contacts">Contacts</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
