import React from 'react';
import s from '../Limit.module.scss'



export interface IlimitCard {
    id: number,
    img: string,
    text: string
}

const LimitCard: React.FC<IlimitCard> = ({
    img,
    text
}) => {
    return (
        <div className={s.limitCard}>
            <img src={img} alt="" />
            <p className={s.limitCardP}>{text}</p>
        </div>
    )
}

export default LimitCard;