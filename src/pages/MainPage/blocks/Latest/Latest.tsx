import React, {useState} from 'react';
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

// const [isShown, setIsShown] = useState(false);

// return (
//   <div className="App">
//     <button
//       onMouseEnter={() => setIsShown(true)}
//       onMouseLeave={() => setIsShown(false)}>
const LatestCard: React.FC = () => {
    const [isShown, setIsShown] = useState(false);

    // const toggleIsLoading = () => {
    //   setIsLoading(current => !current);
    // };

    return (
        // <div className={isLoading ? s.latestCardBack : s.latestCard} onClick={toggleIsLoading}>

        <div className={isShown ? s.latestCardBack : s.latestCard}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            <img src={latestCard1} className={s.latestCardImg} alt="" />
            <h2 className={s.latestCardText}>Villas</h2>
            {isShown &&
            //  <div className={s.latestCardBackText}>
            <>
                <h2 className={s.latestCardBackTextH2}>Dubai</h2>
                <p className={s.latestCardBackTextP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                <button className={s.latestCardBackTextButton}>See project   {`>`}</button>
            </>
            // {/* //  </div> */}
            }
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
                            
                        slidesPerView={1}
                        slidesPerGroup={4}
                        pagination={{ 
                            clickable: true,
                            modifierClass: 'swiper-pagination-latest-',
                        }}
                        breakpoints={{
                            768: {
                              slidesPerView: 4,
                              spaceBetween: 10
                            },
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                                slidesPerGroup: 2,
                            }
                        }}
                        >
                            <SwiperSlide><LatestCard/></SwiperSlide>
                            <SwiperSlide><LatestCard/></SwiperSlide>
                            <SwiperSlide><LatestCard/></SwiperSlide>
                            <SwiperSlide><LatestCard/></SwiperSlide>
                            <SwiperSlide><LatestCard/></SwiperSlide>
                            <SwiperSlide><LatestCard/></SwiperSlide>
                            <SwiperSlide><LatestCard/></SwiperSlide>
                            <SwiperSlide><LatestCard/></SwiperSlide>
                            <SwiperSlide><LatestCard/></SwiperSlide>
                            <SwiperSlide><LatestCard/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Latest;