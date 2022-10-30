import React from "react";
import useTelegram from "../../hooks/useTelegram";
import Button from "../button/Button";
import './Header.css'


const Header = (props) => {

    const {user, onClose, onToggleButton} = useTelegram;

    return(
        <div className={'header'}>
            <Button onclick={onClose} >Закрыть</Button>
            <span className={'username '}>{user?.username}</span>
        </div>
    )
}

export default Header