import React from 'react';
import LimitCard, {IlimitCard} from './LimitCard/LimitCard';
import s from './Limit.module.scss'
import im from '../../../../img/limit1.png'

// interface IlimitCard {
//     id: number,
//     img: string,
//     text: string
// }

// const LimitCard: React.FC<IlimitCard> = ({
//     img,
//     text
// }) => {
//     return (
//         <div className={s.limitCard}>
//             <img src={img} alt="" />
//             <p className={s.limitP}>{text}</p>
//         </div>
//     )
// }
/////--------------- lost for future

interface IlimitCardProps {
    cardConfig: IlimitCard[],
}

const Limit: React.FC<IlimitCardProps> = ({cardConfig=[]}) => {
    return (
        <div className={s.limit}>
            <div className="wrapper">
                <div className={s.limitContent}>
                    <h2 className={s.limitH2}>“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” <span>— Mary Kay Ash </span></h2>
                    <div className={s.limitCards}>
                        {cardConfig.map((post) => 
                        <LimitCard
                        key={post.id}
                        id={post.id}
                        img={post.img}
                        text={post.text}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Limit;