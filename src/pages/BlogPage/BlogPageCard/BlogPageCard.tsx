import React from 'react';
import s from "./BlogPageCard.module.scss";
import img from "../../../img/BlogPage/CardIMG.png";

interface IBlogCard{
    image: string;
    title: string;
    description: string;
}

const BlogPageCard: React.FC<IBlogCard> = ({
    image, 
    title, 
    description,
}) => {
    return (
        <div className={s.blogContentMainCard}>
            <img src={img} alt="card image"/>
            <div className={s.blogContentMainCardBottom}>
                <h3 className={s.blogContentMainCardBottomTitle}>
                Commercial property in Abu Dhabi
                </h3>
                <p className={s.blogContentMainCardBottomDescription}>
                In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...
                </p>
                <button 
                    className={s.blogContentMainCardBtn} 
                    type='button'>
                        Learn more
                </button>
            </div>
        </div>
    );
};

export default BlogPageCard;