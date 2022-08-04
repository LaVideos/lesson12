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
                <NavLink to={'search'}>Search Movie</NavLink>
                <NavLink to={'upcoming'}>Upcoming</NavLink>
            </div>

            <BadgeToggleComponent checked={checked} switchTheme={switchTheme}  />

        </div>
    );
};

export default HeaderComponent;