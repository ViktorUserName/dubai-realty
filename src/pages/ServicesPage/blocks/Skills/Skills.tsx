import React, { FC } from 'react';
import s from "./Skills.module.scss";
import img1 from "../../../../img/ServicesPage/img1.png";
import img2 from "../../../../img/ServicesPage/img2.png";
import img3 from "../../../../img/ServicesPage/img3.png";

const Skills: FC = () => {
    return (
        <div className={s.skillsContent}>
            <div className={s.skillsContentImages}>
                <div className={s.skillsContentImagesLeft}>
                    <img src={img1} alt="img" />
                    <img src={img2} alt="img" />
                </div>
                <div className={s.skillsContentImagesRight}>
                    <img src={img3} alt="img" />
                </div>
            </div>
            <div className={s.skillsContentNumbers}>
                <div className={s.skillsContentNumbersBlock}>
                    <p className={s.skillsContentNumbersCount}>
                    20
                    </p>
                    <p className={s.skillsContentNumbersText}>
                    YEARS WORKING
                    </p>
                </div>
                <div className={s.skillsContentNumbersBlock}>
                    <p className={s.skillsContentNumbersCount}>
                    7
                    </p>
                    <p className={s.skillsContentNumbersText}>
                    TALANTED MANAGERS
                    </p>
                </div>
                <div className={s.skillsContentNumbersBlock}>
                    <p className={s.skillsContentNumbersCount}>
                    100+
                    </p>
                    <p className={s.skillsContentNumbersText}>
                    COMPLITLY PROJECTS
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;