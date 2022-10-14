import React from 'react';
import s from './OffersCard.module.scss'

export interface IoffersCard {
    id:  number,
    img: string,
    textUp: string,
    h1: string
}

const OffersCard: React.FC<IoffersCard> = ({
    img,
    textUp,
    h1
}) => {
    return (
        <div className={s.card}>
            <img src={img} alt="" className={s.cardImg} />
            <div className={s.cardText}>
                <p className={s.cardPU}>{textUp}</p>
                <h1 className={s.cardH1}>{h1}</h1>
                <p className={s.cardPD}>The launch of this community enabled expats to own a luxurious property in Dubai. </p>
                <button className={s.cardButton}>Learn more  {`>`}</button>
            </div>
        </div>
    );
};

export default OffersCard;