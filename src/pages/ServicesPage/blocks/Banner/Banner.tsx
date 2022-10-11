import React, { FC } from 'react';
import s from "./Banner.module.scss";
import banner from "../../../../img/ServicesPage/Banner.png"

const Banner: FC = () => {
    return (
        <div className={s.bannerConteiner}>
            <div className={s.bannerConteinerBanner}>
                <img src={banner} alt="banner img" />
                <div className={s.bannerConteinerText}>
                    <p className={s.bannerConteinerTextSubtitle}>
                    Rent
                    </p>
                    <h1 className={s.bannerConteinerTextTitle}>
                    Furnished Apartments <span>in Dubai</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;