import React from 'react';
import {NavLink} from "react-router-dom";

import {postersURL} from "../../../constants";

import css from './MoviePoster.module.css'
import {RateComponent} from "../../index";



const MovieFromListComponent = ({movie}) => {
    const {original_title,poster_path,id,vote_average} = movie

    return (
        <div className={css.posterWrap}>
            <NavLink to={'/'+id.toString()+'/movieData'}
                     state={movie}
            ><img src={`${postersURL + poster_path}`} alt={`${original_title}`} className={css.poster} /></NavLink>
            <div className={css.stars}><RateComponent initialRating={vote_average} numTotalStars={10}/></div>
        </div>
    );
};

export default MovieFromListComponent;