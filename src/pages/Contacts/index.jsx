import React from 'react';
import styles from './styles.module.scss';
import {contactsList} from '../../data';
import { useTranslation } from 'react-i18next';

const Contacts = () => {

    const {t} = useTranslation();

    return (
        <main>
            <section className={styles.contacts}>
                <h2>{t("Контакты")}</h2>
                <div className={styles.contactsList}>
                    {
                        contactsList.map(item => <div key={item.contactType} className={styles[item.contactClass]}>

                            {item.icon}
                            <span>{item.contactType}</span>
                            <div className={styles.contact}>
                                <a href={item.link} target="_blank" rel="noreferrer">{item.contact}</a>
                            </div>
                        </div>)
                    }
                </div>

            </section>
        </main>
    );
};

export default Contacts;
