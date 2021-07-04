import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import logoHeader from "../../assets/images/hqdefault_live.jpg";

const Header = (props) => {
    return<header className={style.header}>
        <img src={logoHeader}></img>

          <div className={style.loginBlock}>
              { props.isAuth
                  ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                  : <NavLink to={'/login'}>Login</NavLink> }
          </div>
      </header>
}

export default Header;