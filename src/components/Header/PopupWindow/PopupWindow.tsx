import React, { FC, MouseEventHandler } from 'react';
import s from "./PopupWindow.module.scss";

interface PopupСondition {
    change?: boolean
    onClick: MouseEventHandler;
}

const PopupWindow: FC<PopupСondition> = (props) => {

    const handlerStylesPopupMenu = props.change ? s.popupWindowActive : s.popupWindow;

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            props.onClick(event)
        }
    }

    return (
        <div className={handlerStylesPopupMenu} onClick={handleClickAway}>
            <div className={s.popupWindowWrapper}>

                <svg onClick={props.onClick}
                    width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.39324 25.6077L25.6064 4.39453" stroke="#FCD54C" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M4.39324 4.39226L25.6064 25.6055" stroke="#FCD54C" strokeWidth="3" strokeLinecap="round"/>
                </svg>

                <div className={s.popupWindowContent}>
                    <p className={s.popupWindowContentTitle}>
                    Leave your contacts
                    </p>
                    <p className={s.popupWindowContentSubtitle}>
                    We will contact you within three hours
                    </p>
                    <form className={s.popupWindowContentForm}>
                        <input type="text" placeholder='Name'/>
                        <input type="tel" placeholder='Phone'/>
                        <button type='reset'>
                        Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PopupWindow;