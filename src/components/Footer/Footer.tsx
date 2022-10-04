import React from 'react';
import s from './Footer.module.scss';
import ContactsIcons from '../ContactsIcons/ContactsIcons';

const Footer: React.FC = () => {
    return (
        <div className={s.footer}>
            <div className="wrapper">
                <ContactsIcons className={s.contactsLogos}/>
            </div>
        </div>
    );
};

export default Footer;