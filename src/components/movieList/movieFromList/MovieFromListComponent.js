import React from 'react';
import {NavLink} from "react-router-dom";

import {postersURL} from "../../../constants";

import css from './MoviePoster.module.css'
import {RateComponent} from "../../index";

import {FiberNewIcon} from "../../badge/badgeIcons";


const MovieFromListComponent = ({movie}) => {
    const {original_title,poster_path,id,vote_average,release_date} = movie

    const theme = localStorage.getItem('theme');


    return (
        <div className={theme === 'dark'? css.posterWrapLight : css.posterWrapDark}>
            <div className={css.badgeNew}>{release_date.includes('2022') && <FiberNewIcon/>}</div>
            <NavLink to={'/movie/'+id.toString()+'/movieData'}
                     state={movie}
            > {poster_path?<img src={`${postersURL + poster_path}`} alt={`${original_title}`} className={theme === 'dark'? css.posterLight : css.posterDark}/>:
                <img src="https://phti.by/wp-content/themes/bb/acf-blocks/blocks/block-9/img/not-found.png" alt="" className={theme === 'dark'? css.posterLight:css.posterDark}/>}</NavLink>
            <div className={css.stars}><RateComponent initialRating={vote_average} numTotalStars={10}/></div>
        </div>
    );
};

export default MovieFromListComponent;