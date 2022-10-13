import React, { FC } from 'react';
import s from "./Banner.module.scss";
import banner from "../../../../img/ServicesPage/Banner.png"

const Banner: FC = () => {
    return (
        <div className={s.bannerContent}>
            <div className={s.bannerContentBanner}>
                <img src={banner} alt="banner img" />
                <div className={s.bannerContentText}>
                    <p className={s.bannerContentTextSubtitle}>
                    Rent
                    </p>
                    <h1 className={s.bannerContentTextTitle}>
                    Furnished Apartments <span>in Dubai</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;