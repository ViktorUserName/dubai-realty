import React from 'react';
import BlogPageCard, { IBlogCard } from './BlogPageCard/BlogPageCard';
import s from "./BlogPage.module.scss";
import search from "../../img/BlogPage/Search.svg";

interface IBlogCardProps{
    cardConfig: IBlogCard[],
}

const BlogPage: React.FC<IBlogCardProps> = ({cardConfig=[]}) => {
    return (
        <section>
            <div className='wrapper'>
                <div className={s.blogContent}>
                    <div className={s.blogContentTop}>
                        <h2 className={s.blogContentTopTitle}>
                            Blog
                        </h2>
                        <div className={s.blogContentTopSearch}>
                            <input type="text" placeholder='Search...'/>
                            <button>
                                <img src={search} alt="search icon" />
                            </button>
                        </div>
                    </div>
                    <div className={s.blogContentMain}>
                        {cardConfig.map((post) => 
                            <BlogPageCard 
                                key={post.id}
                                id={post.id} 
                                image={post.image} 
                                title={post.title} 
                                description={post.description}
                        />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;