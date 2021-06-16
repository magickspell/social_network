import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
      <header className={style.header}>
        <img src='https://i.ytimg.com/vi/UDx6jWdor3o/hqdefault_live.jpg'></img>
          <div className={style.loginBlock}>
              { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
          </div>
      </header>
    );
}

export default Header;