import React, { useState } from 'react';
import s from './Banner.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation, Pagination } from 'swiper';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './slider.scss'
import ContactsIcons from '../../../../components/ContactsIcons/ContactsIcons';
import imgB from '../../../../img/banner.png'
import imgS from '../../../../img/bannerS.png'
import PopupWindow from '../../../../components/Header/PopupWindow/PopupWindow';


const Card: React.FC = () => {

    const [popupActive, setPopupActive] = useState(false);
    const popupMenuActive = () => setPopupActive(!popupActive)

    return (
        <>
            <div className={s.bannerCard}>
            {
                window.innerWidth <= 380 && <img src={imgS} alt="" className={s.bannerI} /> || 
                window.innerWidth >= 381 && <img src={imgB} alt="" className={s.bannerI} />
            }   
            <div className={s.bannerCardInfo}>
                <p className={s.bannerP}>Lorem ipsum</p>
                <h1 className={s.bannerH1}>Welcome Home <span className={s.bannerH1Span}>To</span> Luxury</h1>
                {/* <button onClick= {popupMenuActive}
                className={s.bannerButton}>Book a consultation {'>'}</button> */}
            </div>
            </div>
            <PopupWindow change={popupActive} onClick={popupMenuActive}/>
        </>
    )
}

const Banner: React.FC = () => {
    return (
        <main className={s.banner}>
            <div className="wrapper">
                <div className={s.bannerContent}>
                <Swiper
                        className={s.bannerSwiper}
                        // className="bannerSwiper"
                        pagination={
                            {clickable: true,
                            modifierClass: 'swiper-pagination-banner-',
                            renderBullet: function (index, className) {
                                    return ('<div class="' + className + '">' +'0'+ (index + 1) + '<p class="sliderText">'+ `Lorem Ipsum Dolorem apset` + "</pс>" +"</div>");
                                },
                            }
                        }
                        modules={[Pagination]}
                        >
                        <SwiperSlide><Card/><ContactsIcons className={s.bannerIcons}/></SwiperSlide>
                        <SwiperSlide><Card/><ContactsIcons className={s.bannerIcons}/></SwiperSlide>
                        <SwiperSlide><Card/><ContactsIcons className={s.bannerIcons}/></SwiperSlide>
                    </Swiper>
            </div>
            </div>
            
        </main>
    );
};

export default Banner;