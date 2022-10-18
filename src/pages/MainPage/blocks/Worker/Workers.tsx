import React from 'react';
import s from './Workers.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Pagination } from 'swiper';
import 'swiper/scss/pagination';
import './workerSlider.scss'
import workers from '../../../../img/workers1.png'

const WorkersCart: React.FC = () => {
    return (
        <div className={s.workersCart}>
            <div className={s.workersCartTop}>
                <img src={workers} alt="" />
                <p>”</p>
            </div>
            <h2 className={s.workersCartH2}>Paul</h2>
            <h3 className={s.workersCartH3}>Owner in <span>Paul.com</span></h3>
            <p className={s.workersCartP}>Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education, communication.</p>
        </div>
    )
}

const Workers: React.FC= () => {
    return (
        <div className={s.workers}>
            {/* <div className={s.workersWrapper}> */}
                <Swiper
                        className={s.workersSwiper}
                        slidesPerView={0.5}
                        spaceBetween={30}
                        breakpoints={{
                            1090: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                                centeredSlides: true,
                            },
                            500: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                                centeredSlides: true,
                            },
                        }}
                        pagination={
                            {clickable: true,
                            modifierClass: 'swiper-pagination-workers-'
                            }
                        }
                        modules={[Pagination]}
                        >
                        <SwiperSlide className='workerSliderSlide'><WorkersCart/><WorkersCart/></SwiperSlide>
                        <SwiperSlide className='workerSliderSlide'><WorkersCart/><WorkersCart/></SwiperSlide>
                        <SwiperSlide className='workerSliderSlide'><WorkersCart/><WorkersCart/></SwiperSlide>
                        <SwiperSlide className='workerSliderSlide'><WorkersCart/><WorkersCart/></SwiperSlide>
                        <SwiperSlide className='workerSliderSlide'><WorkersCart/><WorkersCart/></SwiperSlide>
                        <SwiperSlide className='workerSliderSlide'><WorkersCart/><WorkersCart/></SwiperSlide>
                </Swiper>
            </div>
        // </div>
    );
};

export default Workers;