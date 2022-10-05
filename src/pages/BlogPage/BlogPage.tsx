import React from 'react';
import s from "./BlogPage.module.scss";
import search from "../../img/BlogPage/Search.svg";

const BlogPage: React.FC = () => {
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
                        <div className={s.blogContentMain}>
                            <div className={s.blogContentMainCard}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;