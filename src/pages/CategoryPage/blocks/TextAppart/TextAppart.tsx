import React from 'react';
import s from './TextAppart.module.scss'

const TextAppart: React.FC = () => {
    return (
        <div className={s.text}>
            <h1 className={s.textH1}>Apartments</h1>
            <p className={s.textP}>To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</p>
            <h2 className={s.textH2}>Everything along the way</h2>
            <p className={s.textP}>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p>
        </div>
    );
};

export default TextAppart;