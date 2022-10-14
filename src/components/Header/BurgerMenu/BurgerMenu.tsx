import React, { FC, MouseEventHandler, useState } from 'react';
import PopupWindow from '../PopupWindow/PopupWindow';
import s from "./BurgerMenu.module.scss";

interface MenuСondition {
    change?: boolean
    onClick: MouseEventHandler;
}

const BurgerMenu: FC<MenuСondition> = (props) => {

    const [popupActive, setPopupActive] = useState(false);
    const popupMenuActive = () => setPopupActive(!popupActive)

    const handlerStylesBurgerMenu = props.change ? s.burgerMenuActive : s.burgerMenu;

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
                    <a className={s.burgerMenuContentTopLink} href="#" onClick={props.onClick}>
                    Buy
                    </a>
                    <a className={s.burgerMenuContentTopLink} href="#" onClick={props.onClick}>
                    Blog
                    </a>
                    <a className={s.burgerMenuContentTopLink} href="#" onClick={props.onClick}>
                    About
                    </a>
                    <a className={s.burgerMenuContentTopLink} href="#" onClick={props.onClick}>
                    Contact
                    </a>
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