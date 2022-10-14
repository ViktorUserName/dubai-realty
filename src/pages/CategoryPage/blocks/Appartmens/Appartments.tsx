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

    const [isNormal, setIsNormal] = useState(false);

    const toggleIsNormal = () => {
        setIsNormal(current => !current);
    };

    return (
        <div className={isNormal ? s.cartBack : s.cart}>
            <img src={img} alt="" />
            <h2 className={isNormal ? s.cartBackH2 : s.cartH2}>{textH2}</h2>
            {isNormal &&
            <>
            <h1 className={s.cartBackH1}>Apartments</h1>
            <h2 className={s.cartBackH2N}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</h2>
            </>
             }
            <button className={isNormal ? s.cartButton + ' ' + s.cartButtonBack : s.cartButton} onClick={toggleIsNormal}>Learn more  {`>`}</button>
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
                            slidesPerView={4}
                            // slidesPerGroup={4}
                            pagination={{ 
                                clickable: true,
                                modifierClass: 'swiper-pagination-appart-',
                            }}
                            modules={[Pagination]}
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