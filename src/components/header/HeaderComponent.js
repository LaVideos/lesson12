import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css'
import {ThemeContext} from "styled-components";
import {BadgeToggleComponent} from "../index";



const HeaderComponent = () => {
    const {checked,switchTheme} = useContext(ThemeContext);
    const theme = localStorage.getItem('theme');
    return (
        <div className={theme === 'dark'? css.headerLight : css.headerDark}>
            <div className={css.link}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
            </div>
            <div className={css.logo}><div></div></div>

            <div className={css.link}>
                <NavLink to={'search'}>Search Movie</NavLink>
            </div>

            <BadgeToggleComponent checked={checked} switchTheme={switchTheme}  />

        </div>
    );
};

export default HeaderComponent;