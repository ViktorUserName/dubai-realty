import React from 'react';
import s from './Header.module.scss'
import logoRec from '../../img/logoRec.svg'

const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <div className="wrapper">
                <div className={s.headerContent}>
                    <div className={s.headerLeft}>
                        <div className={s.logo}>
                            <p className={s.logoTextB}>DubaiRealty</p>
                            <p className={s.logoTextS}>Real Estate</p>
                        </div>
                        <nav className={s.headerNav}>
                            <a href="#" className="">BUY</a>
                            <a href="#" className="">BLOG</a>
                            <a href="#" className="">ABOUT</a>
                            <a href="#" className="">CONTACT</a>
                        </nav>
                    </div>
                    <div className={s.headerRight}> 
                        <a href="#">Book a consultation</a>
                        <div>
                            <p>EN</p>
                            <p>RU</p>  
                        </div>
                        <p>+7 (212) 674-25-10</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;