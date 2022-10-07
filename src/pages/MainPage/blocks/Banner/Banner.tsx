import React from 'react';
import s from './Banner.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation, Pagination } from 'swiper';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './slider.scss'
import ContactsIcons from '../../../../components/ContactsIcons/ContactsIcons';

const Card: React.FC = () => {
    return (
        <div className={s.bannerCard}>
            <p className={s.bannerP}>Lorem ipsum</p>
            <h1 className={s.bannerH1}>Welcome Home <span className={s.bannerH1Span}>To</span> Luxury</h1>
            <button className={s.bannerButton}>Book a consultation {'>'}</button>
            
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
                            renderBullet: function (index, className) {
                                    return ('<div class="' + className + '">' +'0'+ (index + 1) + '<p class="sliderText">'+ `Lorem Ipsum Dolorem apset` + "</pс>" +"</div>");
                                },
                            }
                        }
                        modules={[Pagination]}
                        >
                        <SwiperSlide><ContactsIcons className={s.bannerIcons}/><Card/></SwiperSlide>
                        <SwiperSlide><ContactsIcons className={s.bannerIcons}/><Card/></SwiperSlide>
                        <SwiperSlide><ContactsIcons className={s.bannerIcons}/><Card/></SwiperSlide>
                    </Swiper>
            </div>
            </div>
        </main>
    );
};

export default Banner;