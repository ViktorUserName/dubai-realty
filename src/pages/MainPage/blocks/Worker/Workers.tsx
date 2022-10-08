import React from 'react';
import s from './Workers.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Pagination } from 'swiper';
import 'swiper/scss/pagination';

const WorkersCart: React.FC = () => {
    return (
        <div className={s.workersCart}>
            <div className={s.workersCartTop}>
                <img src="" alt="" />
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
            <div className={s.workersWrapper}>
                <Swiper
                        className={s.workersSwiper}
                        pagination={
                            {clickable: true,
                            modifierClass: 'swiper-pagination-workers-'
                            }
                        }
                        modules={[Pagination]}
                        >
                        <SwiperSlide><WorkersCart/></SwiperSlide>
                        <SwiperSlide>2</SwiperSlide>
                        <SwiperSlide>3</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Workers;