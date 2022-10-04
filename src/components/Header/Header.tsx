import React from 'react';
import s from './header.module.scss'
import logoRec from '../../img/logoRec.svg'

const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <div className="wrapper">
                <div className={s.headerContent}>
                    <div className={s.headerLeft}>
                        <div className={s.logo}>
                            <p className=""></p>
                            <p className=""></p>
                        </div>
                        <nav className={s.nav}></nav>
                    </div>
                    <div className={s.headerRight}></div>
                </div>
            </div>
        </div>
    );
};

export default Header;