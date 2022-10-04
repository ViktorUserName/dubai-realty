import React from 'react';
import s from './ContactUs.module.scss'


const ContactUs: React.FC = () => {
    return (
        <div className={s.contact}>
            <div className="wrapper">
                <div className={s.contactContent}>
                    <h1>Contact us</h1>
                    <div className={s.contactInput}>
                        <input name='message 'type="email" placeholder='Enter your mail' className="" />
                        <button type="submit" name="submit" value="Send">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;