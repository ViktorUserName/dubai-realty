import React from 'react';
import s from "./BlogPageCard.module.scss";

export interface IBlogCard{
    id: number;
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
            <img src={image} alt="card image"/>
            <div className={s.blogContentMainCardBottom}>
                <h3 className={s.blogContentMainCardBottomTitle}>
                    {title}
                </h3>
                <p className={s.blogContentMainCardBottomDescription}>
                    {description}
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