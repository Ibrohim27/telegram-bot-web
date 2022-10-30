import React from "react";
import Button from "../button/Button";
import './Header.css'


const Header = (props) => {
    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close()
    }

    return(
        <div className={'header'}>
            <Button onclick={onClose} >Закрыть</Button>
            <span className={'username '}>{tg.initDataUnsafe?.user?.username}</span>
        </div>
    )
}

export default Header