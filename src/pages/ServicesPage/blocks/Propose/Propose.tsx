import React, { FC } from 'react';
import s from "./Propose.module.scss";
import img1 from "../../../../img/ServicesPage/Propose1.png";
import img2 from "../../../../img/ServicesPage/Propose2.png";
import img3 from "../../../../img/ServicesPage/Propose3.png";

const Propose: FC = () => {
    return (
        <div className={s.proposeContent}>
            <h2 className={s.proposeContentTitle}>
                We will also propose
            </h2>
            <div className={s.proposeContentCards}>
                <div className={s.proposeContentCardsCard}>
                    <div className={s.proposeContentCardsCardPrev}>
                        <img src={img1} alt="img" />
                        <h3 className={s.proposeContentCardsCardTitle}>
                        Mortgage Registration
                        </h3>
                    </div>
                    <a  className={s.proposeContentCardsCardActive}
                        href="#">
                        <h3 className={s.proposeContentCardsCardActiveTitle}>
                        Mortgage Registration
                        </h3>
                        <p className={s.proposeContentCardsCardActiveDescription}>
                        A person applying for a mortgage in the United Arab Emirates must meet the following requirements
                        </p>
                    </a>
                </div>

                <div className={s.proposeContentCardsCard}>
                    <div className={s.proposeContentCardsCardPrev}>
                        <img src={img2} alt="img" />
                        <h3 className={s.proposeContentCardsCardTitle}>
                        Mortgage Registration
                        </h3>
                    </div>
                    <a  className={s.proposeContentCardsCardActive}
                        href="#">
                        <h3 className={s.proposeContentCardsCardActiveTitle}>
                        Mortgage Registration
                        </h3>
                        <p className={s.proposeContentCardsCardActiveDescription}>
                        A person applying for a mortgage in the United Arab Emirates must meet the following requirements
                        </p>
                    </a>
                </div>

                <div className={s.proposeContentCardsCard}>
                    <div className={s.proposeContentCardsCardPrev}>
                        <img src={img3} alt="img" />
                        <h3 className={s.proposeContentCardsCardTitle}>
                        Mortgage Registration
                        </h3>
                    </div>
                    <a  className={s.proposeContentCardsCardActive}
                        href="#">
                        <h3 className={s.proposeContentCardsCardActiveTitle}>
                        Mortgage Registration
                        </h3>
                        <p className={s.proposeContentCardsCardActiveDescription}>
                        A person applying for a mortgage in the United Arab Emirates must meet the following requirements
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Propose;