import React from 'react';
import Appartments from './blocks/Appartmens/Appartments';
import Baner from './blocks/Banner/Baner';
import Offers from './blocks/Offers/Offers';
import TextAppart from './blocks/TextAppart/TextAppart';
import ContactUs from '../../components/ContactUs/ContactUs'
import s from './CategoryPage.module.scss'
import DataAppart from './SharedLogic/Appart.json'
import DataOffers from './SharedLogic/offersCard.json'


const CategoryPage: React.FC = () => {
    
    const {results: postAppart} = DataAppart;
    const {results: postOffers} = DataOffers;


    return (
        <>
        <Baner/>
        <Appartments cardConfigAppart={postAppart}/>
        <Offers cardConfigOffers={postOffers}/>
        <TextAppart/>
        <ContactUs/>
        //// добавить предфуттер и паддинг
        </>
    );
};

export default CategoryPage;