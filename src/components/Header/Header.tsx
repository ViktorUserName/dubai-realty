import React, { useState } from 'react';
import {Link } from "react-router-dom";
import BurgerMenu from './BurgerMenu/BurgerMenu';
import s from './Header.module.scss'
import PopupWindow from './PopupWindow/PopupWindow';

const Header: React.FC = () => {

    const [menuActive, setMenuActive] = useState(false);
    const burgerMenuActive = () => setMenuActive(!menuActive)
    const handlerStylesNav = menuActive ? s.navCont : s.navContNon;
    const [popupActive, setPopupActive] = useState(false);
    const popupMenuActive = () => setPopupActive(!popupActive)

    return (
        <div className={s.header}>
            <div className="wrapper">
                <div className={s.headerContent}>
                    <div className={s.headerLeft}>
                        <a href='/' className={s.headerLeftLogo}>
                            <Link to='..' relative='path'>
                                <p className={s.logoTextB}>DubaiRealty</p>
                                <p className={s.logoTextS}>Real Estate</p>
                            </Link>
                        </a>
                        <nav className={s.headerNav}>
                            <a href="#" className={s.navA}>
                                <span onClick={burgerMenuActive}>buy</span>
                                <div className={handlerStylesNav}>
                                    <a href="#" ><Link to={`/Category`}>Category</Link></a>
                                    <a href="#" ><Link to={`/Services`}>Services</Link></a>
                                    <a href="#">third</a>
                                </div>
                            </a>
                            <a href="#" className={s.navA}><Link to={`/Blog`}>BLOG</Link></a>
                            <a href="#" className={s.navA}>ABOUT</a>
                            <a href="#" className={s.navA}><Link to={`/Contact`}>CONTACT</Link></a>
                        </nav>
                    </div>
                    <div className={s.headerRight}> 
                        <button 
                            className={s.headerRightBtn}
                            onClick= {popupMenuActive}
                            type='button'>
                                Book a consultation
                        </button>
                        <a 
                            className={s.headerRightNumber}
                            href="tel: +7 (212) 674-25-10">
                                +7 (212) 674-25-10
                        </a>
                        <div
                            onClick= {burgerMenuActive}
                            className={s.headerRightBurger}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <PopupWindow change={popupActive} onClick={popupMenuActive}/>
                </div>
            </div>
                <BurgerMenu change={menuActive} onClick={burgerMenuActive}/>
        </div>
    );
};

export default Header;