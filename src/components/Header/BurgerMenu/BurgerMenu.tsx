import React, { FC, MouseEventHandler, useState } from 'react';
import {Link } from "react-router-dom";
import PopupWindow from '../PopupWindow/PopupWindow';
import s from "./BurgerMenu.module.scss";

interface MenuСondition {
    change?: boolean
    onClick: MouseEventHandler;
}

// const buyDivCont: React.FC = () => {
//     return (

//     )
// }

const BurgerMenu: FC<MenuСondition> = (props) => {

    const [popupActive, setPopupActive] = useState(false);
    const popupMenuActive = () => setPopupActive(!popupActive)
    const [buyActive, setBuyActive] =useState(false);
    const buyMenuActive = () => setBuyActive(!buyActive);

    const handlerStylesBurgerMenu = props.change ? s.burgerMenuActive : s.burgerMenu;
    const handlerStylesBuyMenu = buyActive ? s.burgerMenuBuyActive : s.burgerMenuBuy;


    return (
        <>
        <div 
            className={handlerStylesBurgerMenu}
            onClick={props.onClick}
        >
            <div 
                className={s.burgerMenuContent}
                onClick={e => e.stopPropagation()}
            >
                <div className={s.burgerMenuContentTop}>
                    <a className={s.burgerMenuContentTopLink} href="#" onClick={buyMenuActive}>
                    Buy
                    </a>
                        <div className={handlerStylesBuyMenu}>
                                <Link to={`/Category`} onClick={props.onClick}>Category</Link>
                                <Link to={`/Services`} onClick={props.onClick}>Services</Link>
                                <a href="#" onClick={props.onClick}>third</a>
                        </div>
                    <Link to={`/Blog`} className={s.burgerMenuContentTopLink} onClick={props.onClick}>
                    Blog
                    </Link>
                    <Link to={`/About` } className={s.burgerMenuContentTopLink} onClick={props.onClick}>
                    About
                    </Link>
                    <Link to={`/Contact`} className={s.burgerMenuContentTopLink} onClick={props.onClick}>
                    Contact
                    </Link>
                </div>
                <div className={s.burgerMenuContentBottom}>
                    <button  
                        className={s.burgerMenuContentBottomBtn}
                        onClick={popupMenuActive}
                        type='button'>
                            Book a consultation
                    </button>
                    <a 
                        className={s.burgerMenuContentBottomNumber}
                        onClick={props.onClick}
                        href="tel: +7 (212) 674-25-10">
                            +7 (212) 674-25-10
                    </a>
                </div>
            </div>
        </div>
            <PopupWindow change={popupActive} onClick={popupMenuActive}/>
        </>
    );
};

export default BurgerMenu;