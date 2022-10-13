import React, { FC } from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import Banner from './blocks/Banner/Banner';
import Challenge from './blocks/Challenge/Challenge';
import Description from './blocks/Description/Description';
import Methods from './blocks/Methods/Methods';
import Package from './blocks/Package/Package';
import Propose from './blocks/Propose/Propose';
import Skills from './blocks/Skills/Skills';
import s from "./ServicesPage.module.scss";

const ServicesPage: FC = () => {
    return (
        <>
            <Banner/>
            <div className='wrapper'>
                <section className={s.servicesConteiner}>
                    <Description/>
                    <Methods/>
                    <Skills/>
                    <Challenge/>
                    {/* <ContactUs/> */}
                    <Package/>
                    <Propose/>
                </section>
            </div>
        </>
    );
};

export default ServicesPage;