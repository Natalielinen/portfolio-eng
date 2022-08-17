import React from 'react';
import styles from './styles.module.scss';
import {BsEnvelopeFill, BsHouseFill, BsPhone, BsTelegram} from 'react-icons/bs';

const contactsList = [
    {
        contactClass: 'email',
        icon: <BsEnvelopeFill />,
        contactType: 'E-mail',
        contact: 'nataliech0409@gmail.com',
        linkType: 'mailto:'
    },
    {
        contactClass: 'phone',
        icon: <BsPhone />,
        contactType: 'Phone',
        contact: '+7-953-720-82-44',
        linkType: 'tel:'
    },
    {
        contactClass: 'address',
        icon: <BsHouseFill />,
        contactType: 'Address',
        contact: 'Russia, Michurinsk',
        linkType: ''
    },
    {
        contactClass: 'telegram',
        icon: <BsTelegram />,
        contactType: 'Telegram',
        contact: 'https://t.me/Natalielinen',
        linkType: ''
    }
]

const Contacts = () => {
    return (
        <main>
            <section className={styles.contacts}>
                <h2>Contacts</h2>
                <div className={styles.contactsList}>
                    {
                        contactsList.map(item => <div className={styles[item.contactClass]}>

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
    )
}

export default Contacts;