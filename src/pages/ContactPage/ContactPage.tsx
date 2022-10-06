import React from 'react';
import ContactsIcons from '../../components/ContactsIcons/ContactsIcons';
import s from "./ContactPage.module.scss";

const ContactPage: React.FC = () => {
    return (
        <section>
            <div className='wrapper'>
                <div className={s.contactContent}>
                    <h2 className={s.contactContentTitle}>
                        Contact
                    </h2>
                    <div className={s.contactContentMap}>
                        <div className={s.contactContentMapDescription}>
                            <h3 className={s.contactContentMapDescriptionTitle}>
                                Dubai,<span>UAE</span>
                            </h3>
                                <p className={s.contactContentMapDescriptionSubtitle}>
                                    269 King Str, 05th Floor, Utral Hosue Building, Dubai, VIC 3000, UAE.
                                </p>
                                <a className={s.contactContentMapDescriptionNumber} 
                                    href="tel:+99 (0) 344 956 4050">
                                    +99 (0) 344 956 4050
                                </a>
                                <a className={s.contactContentMapDescriptionEmail}
                                    href="mailto:info@sparch.co">
                                    Email: <span>info@sparch.co</span>
                                </a>
                                <div className={s.contactContentMapDescriptionSocials}>
                                    <p 
                                        className={s.contactContentMapDescriptionSocialsText}>
                                        Follow us: 
                                    </p> 
                                    <ContactsIcons className={s.contactContentMapDescriptionSocialsIcons}/>
                                </div>
                                <p className={s.contactContentMapDescriptionHours}>
                                    Work Hours: <span>Monday - Friday : 08h00 - 17h30</span>
                                </p>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d231220.21212608228!2d55.171250059529086!3d25.10809544887394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1665057716936!5m2!1sru!2sby" loading="lazy"></iframe>
                    </div>
                    <form className={s.contactContentForm}>
                        <h3 className={s.contactContentFormTitle}>
                            <span>Be in touch</span> with us
                        </h3>
                            <div className={s.contactContentFormTop}>
                                <input type="text" required placeholder='Name'/>
                                <input type="email" required placeholder='Email *'/>
                                <input type="text" required placeholder='Subject'/>
                            </div>
                            <textarea className={s.contactContentFormBottom}
                                rows={10}
                                required
                                placeholder="Message *">
                            </textarea>
                            <button 
                                type='submit'
                                className={s.contactContentFormBtn}
                                >
                                SUBMIT
                            </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;