import React from 'react';
import s from './Baner.module.scss'
import img from '../../../../img/CategoryBanner.png'

const Baner = () => {
    return (
        <div className={s.banner}>
            <div className="wrapper">
                <div className={s.bannerContent}>
                    <img src={img} alt="" className={s.bannerImg} />
                    <h1 className={s.bannerH1}>Apartments <span>in Dubai</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Baner;