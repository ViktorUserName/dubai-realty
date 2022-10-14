import React from 'react';
import s from './Offers.module.scss'
import OffersCard, {IoffersCard} from './OffersCard/OffersCard';

interface IofferCardProps {
    cardConfigOffers: IoffersCard[]
}

const Offers: React.FC<IofferCardProps> = ({cardConfigOffers=[]}) => {
    return (
        <div className={s.offers}>
            <div className="wrapper">
                <div className={s.offersContent}>
                    <h1 className={s.offersH1}>Best Offers</h1>
                    <div className={s.offersCarts}>
                        {cardConfigOffers.map((post) => 
                        <OffersCard
                        key={post.id}
                        id={post.id}
                        img={post.img}
                        textUp={post.textUp}
                        h1={post.h1}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;