import React from 'react';
import s from './Articules.module.scss';
import art1 from '../../../../img/articules1.png'
import art2 from '../../../../img/articules2.png'

const Articules: React.FC = () => {
    return (
        <div className={s.articules}>
            <div className="wrapper">
                <div className={s.articulesContent}>
                    <div className={s.articulesText}>
                        <h1 className={s.articulesTextH1}>Useful articles</h1>
                        <p className={s.articulesTextP}>View all articles   {'>'}</p>
                    </div>
                    <div className={s.articulesCarts}>
                        <div className={s.articulesCartImg}>
                            <img src={art1} alt="" />
                        </div>
                        <div className={s.articulesCartText}>
                            <h1 className={s.articulesCartTextH1}>Discover Architecture</h1>
                            <p className={s.articulesCartTextP}>Projects for many large domestic and foreign corporations, enterprises in many elds such</p>
                            <button className={s.articulesCartTextButton}>Learn more  {'>'}</button>
                        </div>
                        <div className={s.articulesCartImg}>
                            <img src={art2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articules;