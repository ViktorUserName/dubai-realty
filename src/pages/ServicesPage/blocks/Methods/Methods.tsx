import React, { FC } from 'react';
import s from "./Methods.module.scss";
import quote from "../../../../img/ServicesPage/quote.svg"

const Methods: FC = () => {
    return (
        <div className={s.methodContent}>
            <div className={s.methodContentText}>
                <h2 className={s.methodContentTextTitle}>
                Methods for Everyone
                </h2>
                <p className={s.methodContentTextDescription}>
                Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.
                One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.
                </p>
            </div>
            <div className={s.methodContentQuote}>
                <img src={quote} alt="quote icon" />
                <div className={s.methodContentQuoteText}>
                    <p className={s.methodContentQuoteTextDescription}>
                    Our greatest weakness lies in giving up. 
                    The most certain way to succeed is always to try just one more time.
                    Emotional sensation of stress from our firs.
                    </p>
                    <div className={s.methodContentQuoteTextAuthor}>
                        <p className={s.methodContentQuoteTextAuthorName}>
                            Paul
                        </p>
                        <p className={s.methodContentQuoteTextAuthorStatus}>
                            Elite Author
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Methods;