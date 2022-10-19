import React from 'react';
import s from './Latest.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/grid';
import './sliderLatest.scss'
import latestCard1 from '../../../../img/latestCard1.png'
import latestCard2 from '../../../../img/latestCard2.png'
import latestCard3 from '../../../../img/latestCard3.png'

interface LatestCardProps {
    img: string,
}
const LatestCard: React.FC<LatestCardProps> = ({
    img
}) => {
    return (
        <div className={s.latestCard}>
            <div className={s.latestCardPrev}>
                <img src={img} className={s.latestCardPrevImg} alt="" />
                <h2 className={s.latestCardPrevText}>Villas</h2>
            </div>
            <div className={s.latestCardActive}>
                <h2 className={s.latestCardActiveTitle}>Dubai</h2>
                <p className={s.latestCardActiveSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                <a href='#' className={s.latestCardBackTextButton}>See project   {`>`}</a>
            </div>
        </div>
    )
}

const Latest: React.FC = () => {
    return (
        <div className={s.latest}>  
            <div className="wrapper">
                <div className={s.latestContent}>
                    <div className={s.latestText}>
                        <h1 className={s.latestTextH1}>Latest projects</h1>
                        <div className={s.latestTextExamples}>
                            <a href="">All</a>
                            <a href="">Building</a>
                            <a href="">Interior</a>
                            <a href="">View all projects</a>
                        </div>
                    </div>
                    <Swiper
                        className={s.latestSlider}
                        modules={[Pagination, Grid]}
                        spaceBetween={20}
                        slidesPerView={2}
                        slidesPerGroup={2}
                        pagination={{ 
                            clickable: true,
                            modifierClass: 'swiper-pagination-latest-',
                        }}
                        breakpoints={{
                            768: {
                              slidesPerView: 4,
                              spaceBetween: 10
                            },
                            550: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                                slidesPerGroup: 2,
                            }
                        }}
                        >
                            <SwiperSlide><LatestCard img={latestCard1}/></SwiperSlide>
                            <SwiperSlide><LatestCard img={latestCard2}/></SwiperSlide>
                            <SwiperSlide><LatestCard img={latestCard3}/></SwiperSlide>
                            <SwiperSlide><LatestCard img={latestCard1}/></SwiperSlide>
                            <SwiperSlide><LatestCard img={latestCard2}/></SwiperSlide>
                            <SwiperSlide><LatestCard img={latestCard3}/></SwiperSlide>
                            <SwiperSlide><LatestCard img={latestCard1}/></SwiperSlide>
                            <SwiperSlide><LatestCard img={latestCard2}/></SwiperSlide>
                            <SwiperSlide><LatestCard img={latestCard3}/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Latest;