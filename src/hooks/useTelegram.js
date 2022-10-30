const tg = window.Telegram.WebApp

export default useTelegram = () => {

    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVissible)
            tg.MainButton.hide();
        else
            tg.MainButton.show();
    }

     return {
        onClose,
        onToggleButton,
        tg,
        user: tg?.initDataUnsafe?.user?.username
     }
}