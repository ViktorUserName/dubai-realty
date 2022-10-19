import React, {useState} from 'react';
import s from './Appartments.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './AppartmentSlider.scss'
import f from './img/1.png';
import sec from './img/2.png'

interface IappartCard {
    id: number,
    img: string,
    textH2: string
}


const AppartCart: React.FC<IappartCard> = ({
    img,
    textH2
}) => {

    // const [isNormal, setIsNormal] = useState(false);

    // const toggleIsNormal = () => {
    //     setIsNormal(current => !current);
    // };

    return (
        <div className={s.cart}>
            <div className={s.cartPrev}>
                <img src={img} alt="" />
                <h2 className={s.cartPrevTitle}>{textH2}</h2>
            </div>
    
            <div className={s.cartActive}>
                <h2 className={s.cartActiveH2}>{textH2}</h2>
                <p className={s.cartActiveP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                <button className={s.cartActiveButton}>Learn more  {`>`}</button>
            </div>
                
        </div>

    )
}

interface IappartCardProps {
    cardConfigAppart: IappartCard[],
}

const Appartments: React.FC<IappartCardProps> = ({cardConfigAppart=[]}) => {
    return (
        <div className={s.appart}>
            <div className="wrapper">
                <div className={s.appartContent}>
                    <h1 className={s.appartH1}>All Apartments Category</h1>
                    <div className={s.appartSlider}>
                        <Swiper
                            className={s.appartSliderInit}
                            slidesPerView={1}
                            spaceBetween={15}
                            pagination={{ 
                                clickable: true,
                                modifierClass: 'swiper-pagination-appart-',
                            }}
                            modules={[Pagination]}
                            breakpoints={{
                                1290: {
                                  slidesPerView: 4,
                                  spaceBetween: 15
                                },
                                830: {
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                  },
                                510: {
                                    slidesPerView: 2,
                                    spaceBetween: 15
                                  },
                            }}
                            >
                            {cardConfigAppart.map((post) => 
                                <SwiperSlide>
                                    <AppartCart
                                    key={post.id}
                                    id={post.id}
                                    img={post.img}
                                    textH2={post.textH2}
                                    />
                                </SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appartments;