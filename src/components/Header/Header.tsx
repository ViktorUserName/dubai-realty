import React, { useState } from 'react';
import {Link } from "react-router-dom";
import BurgerMenu from './BurgerMenu/BurgerMenu';
import s from './Header.module.scss'
import PopupWindow from './PopupWindow/PopupWindow';


export const HeaderBlockC: React.FC =()=> {
    const [menuActive, setMenuActive] = useState(false);
    const handlerStylesNav = menuActive ? s.navCont : s.navContNon;
    return (
        <div className={handlerStylesNav}
        onMouseEnter={() => setMenuActive(true)}
        onMouseLeave={() => setMenuActive(false)}
        >
            <Link to={`/Category`}>Category</Link>
            <Link to={`/Services`}>Services</Link>
            <a href="#">third</a>
        </div>
    )
}
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
                        <Link to='..' relative='path' className={s.headerLeftLogo}>
                                <p className={s.logoTextB}>DubaiRealty</p>
                                <p className={s.logoTextS}>Real Estate</p>
                        </Link>
                        <nav className={s.headerNav}>
                            <a href="#" className={s.navA}>
                                <span 
                                onMouseEnter={() => setMenuActive(true)}
                                onMouseLeave={() => setMenuActive(false)}
                                >
                                    buy
                                </span>
                                <div className={handlerStylesNav}
                                onMouseEnter={() => setMenuActive(true)}
                                onMouseLeave={() => setMenuActive(false)}
                                >
                                    <Link to={`/Category`}>Category</Link>
                                    <Link to={`/Services`}>Services</Link>
                                    <a href="#">third</a>
                                </div>
                            </a>
                            <Link to={`/Blog`} className={s.navA}>BLOG</Link>
                            <a href="#" className={s.navA}>ABOUT</a>
                            <Link to={`/Contact`} className={s.navA}>CONTACT</Link>
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