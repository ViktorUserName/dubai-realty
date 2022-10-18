import React from 'react';
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


const Card: React.FC = () => {
    return (
        <div className={s.bannerCard}>
            {
                window.innerWidth <= 380 && <img src={imgS} alt="" className={s.bannerI} /> || 
                window.innerWidth >= 381 && <img src={imgB} alt="" className={s.bannerI} />
            }   
            <div className={s.bannerCardInfo}>
                <p className={s.bannerP}>Lorem ipsum</p>
                <h1 className={s.bannerH1}>Welcome Home <span className={s.bannerH1Span}>To</span> Luxury</h1>
                <button className={s.bannerButton}>Book a consultation {'>'}</button>
            </div>
        </div>
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