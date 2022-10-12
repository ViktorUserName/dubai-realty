import React, { FC } from 'react';
import s from "./Challenge.module.scss";

const Challenge: FC = () => {
    return (
        <div className={s.challengeContent}>
            <div className={s.challengeContentText}>
                <h2 className={s.challengeContentTextTitle}>
                Challenge
                </h2>
                <p className={s.challengeContentTextDescription}>
                To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.
                </p>
            </div>
            <div className={s.challengeContentText}>
                <h2 className={s.challengeContentTextTitle}>
                Everything along the way
                </h2>
                <p className={s.challengeContentTextDescription}>
                One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.
                </p>
            </div>
            <ol className={s.challengeContentTextList}> 
                <li className={s.challengeContentTextDescription}>
                Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken.
                </li >
                <li className={s.challengeContentTextDescription}>
                Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.
                </li>
                <li className={s.challengeContentTextDescription}>
                One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule.
                </li>
                <li className={s.challengeContentTextDescription}>
                We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.
                </li>
            </ol>
        </div>
    );
};

export default Challenge;