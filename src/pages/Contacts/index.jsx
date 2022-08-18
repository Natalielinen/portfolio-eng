import React from 'react';
import styles from './styles.module.scss';
import {contactsList} from '../../data';

const Contacts = () => {
    return (
        <main>
            <section className={styles.contacts}>
                <h2>Contacts</h2>
                <div className={styles.contactsList}>
                    {
                        contactsList.map(item => <div key={item.contactType} className={styles[item.contactClass]}>

                            {item.icon}
                            <span>{item.contactType}</span>
                            <div className={styles.contact}>
                                <a href={`${item.linkType}${item.contact}`}>{item.contact}</a>
                            </div>
                        </div>)
                    }
                </div>

            </section>
        </main>
    );
};

export default Contacts;
