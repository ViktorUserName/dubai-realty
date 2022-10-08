import React from 'react';
import Banner from './blocks/Banner/Banner';
import Expertise from './blocks/Expertise/Expertise';
import Latest from './blocks/Latest/Latest';
import Limit from './blocks/Limit/Limit';
import data from '../../SharedLogic/LimitData.json'
import ContactUs from '../../components/ContactUs/ContactUs';

const MainPage = () => {
    const {results: posts} = data;
    return (
        <>
        <Banner/>
        <Latest/>
        <Expertise/>
        <Limit cardConfig={posts} /> 
        <ContactUs/>
        </>
    );
};

export default MainPage;