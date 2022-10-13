import React, { FC, MouseEventHandler } from 'react';
import s from "./BurgerMenu.module.scss";
import btnStyles from "../Header.module.scss";

interface MenuСondition {
    change?: boolean
    onClick: MouseEventHandler;
}

const BurgerMenu: FC<MenuСondition> = (props) => {

    const handlerStylesBurgerMenu = props.change ? s.burgerMenuActive : s.burgerMenu;

    return (
        <div 
            className={handlerStylesBurgerMenu}
            onClick={props.onClick}
        >
            <div 
                className={s.burgerMenuContent}
                onClick={e => e.stopPropagation()}
            >
                <div className={s.burgerMenuContentTop}>
                    <a className={s.burgerMenuContentTopLink} href="#">
                    Buy
                    </a>
                    <a className={s.burgerMenuContentTopLink} href="#">
                    Blog
                    </a>
                    <a className={s.burgerMenuContentTopLink} href="#">
                    About
                    </a>
                    <a className={s.burgerMenuContentTopLink} href="#">
                    Contact
                    </a>
                </div>
                <div className={s.burgerMenuContentBottom}>
                    <button  
                        className={s.burgerMenuContentBottomBtn}
                        type='button'>
                            Book a consultation
                    </button>
                    <a 
                        className={s.burgerMenuContentBottomNumber}
                        href="tel: +7 (212) 674-25-10">
                            +7 (212) 674-25-10
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;