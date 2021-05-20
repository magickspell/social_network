import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">Shaman</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Paladin</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3"> Mage</NavLink>
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/4">Programmer</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>wat sap</div>
                <div className={style.message}>wake up samurai</div>
            </div>
        </div>
    );
};

export default Dialogs;