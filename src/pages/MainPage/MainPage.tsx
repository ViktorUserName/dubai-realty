import React from 'react';
import Banner from './blocks/Banner/Banner';
import Expertise from './blocks/Expertise/Expertise';
import Latest from './blocks/Latest/Latest';
import Limit from './blocks/Limit/Limit';
import data from '../../SharedLogic/LimitData.json'
import ContactUs from '../../components/ContactUs/ContactUs';
import Articules from './blocks/Articules/Articules';
import Workers from './blocks/Worker/Workers';
import Faq from './blocks/Faq/Faq';
import AddFooter from '../../components/AddFooter/AddFooter';
import faqData from '../../SharedLogic/FaqData.json'
import addFooterData from '../../components/AddFooter/SharedLogic/textS.json'


const MainPage = () => {
    const {results: postsLimit} = data;
    const {results: postsFaq} = faqData;
    const {results: postsaddFooter} = addFooterData;
    return (
        <>
        <Banner/>
        <Latest/>
        <Expertise/>
        <Limit cardConfig={postsLimit} /> 
        <ContactUs/>
        <Articules/>
        <Workers/>
        <Faq cardFaqConfig={postsFaq}/>
        {/* <AddFooter IfootAConfig={postsaddFooter}/> */}
        </>
    );
};

export default MainPage;