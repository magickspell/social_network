import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <NavLink to={"/dialogs/1"} activeClassName={style.activeLink}>Shaman</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={"/dialogs/2"} activeClassName={style.activeLink}>Paladin</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={"/dialogs/3"} activeClassName={style.activeLink}> Mage</NavLink>
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to={"/dialogs/4"} activeClassName={style.activeLink}>Programmer</NavLink>
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