import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import s from './Header.module.scss'
import PopupWindow from './PopupWindow/PopupWindow';

const Header: React.FC = () => {

    const [menuActive, setMenuActive] = useState(false);
    const burgerMenuActive = () => setMenuActive(!menuActive)

    const [popupActive, setPopupActive] = useState(false);
    const popupMenuActive = () => setPopupActive(!popupActive)

    return (
        <div className={s.header}>
            <div className="wrapper">
                <div className={s.headerContent}>
                    <div className={s.headerLeft}>
                        <a href='#' className={s.logo}>
                            <p className={s.logoTextB}>DubaiRealty</p>
                            <p className={s.logoTextS}>Real Estate</p>
                        </a>
                        <nav className={s.headerNav}>
                            <a href="#" className="">BUY</a>
                            <a href="#" className="">BLOG</a>
                            <a href="#" className="">ABOUT</a>
                            <a href="#" className="">CONTACT</a>
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