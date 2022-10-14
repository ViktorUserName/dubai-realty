import React from 'react';
import s from './ContactUs.module.scss'


const ContactUs: React.FC = () => {
    return (
        <div className={s.contact}>
            <div className={s.wrapper}>
                <div className={s.contactContent}>
                    <p>Do you have any questions?</p>
                    <h2>Contact us</h2>
                    <div className={s.contactInput}>
                        <input name='message 'type="email" placeholder='Enter your mail'/>
                        <button type="submit" name="submit" value="Send">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;