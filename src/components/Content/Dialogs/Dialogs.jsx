import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    Shaman
                </div>
                <div className={style.dialog}>
                    Paladin
                </div>
                <div className={style.dialog}>
                    Mage
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    Programmer
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>wazap</div>
                <div className={style.message}>wake up samurai</div>
            </div>
        </div>
    );
};

export default Dialogs;