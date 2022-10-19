import React from 'react';
import Appartments from './blocks/Appartmens/Appartments';
import Baner from './blocks/Banner/Baner';
import Offers from './blocks/Offers/Offers';
import TextAppart from './blocks/TextAppart/TextAppart';
import ContactUs from '../../components/ContactUs/ContactUs'
import s from './CategoryPage.module.scss'
import DataAppart from './SharedLogic/Appart.json'
import DataOffers from './SharedLogic/offersCard.json'
import AddFooter from '../../components/AddFooter/AddFooter';
import addFooterData from '../../components/AddFooter/SharedLogic/textS.json'


const CategoryPage: React.FC = () => {
    
    const {results: postAppart} = DataAppart;
    const {results: postOffers} = DataOffers;
    const {results: postsaddFooter} = addFooterData;



    return (
        <>
        <Baner/>
        <Appartments cardConfigAppart={postAppart}/>
        <Offers cardConfigOffers={postOffers}/>
        <TextAppart/>
        <ContactUs/>
        {/* <AddFooter IfootAConfig={postsaddFooter}/> */}
        </>
    );
};

export default CategoryPage;