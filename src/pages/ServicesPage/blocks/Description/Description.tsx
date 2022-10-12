import React, { FC } from 'react';
import s from "./Description.module.scss";
import img from "../../../../img/ServicesPage/DescriptionImg.png"

const Description: FC = () => {
    return (
        <div className={s.descriptionContent}>
            <div className={s.descriptionContentText}>
                <h2 className={s.descriptionContentTextTitle}>
                Real estate investment in Dubai, UAE
                </h2>
                <p className={s.descriptionContentTextDescription}>
                    This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring.
                    One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: 
                </p>
                <p className={s.descriptionContentTextDescription}>
                    This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring.
                    One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: 
                </p>
            </div>
            <img src={img} alt="img" />
        </div>
    );
};

export default Description;