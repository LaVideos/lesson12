import React from 'react';
import {postersURL} from "../../../constants";

import './TopRatedFilm.css';
import {RateComponent} from "../../index";
import {NavLink} from "react-router-dom";
import BadgeRateComponent from "../../badge/badgeRate/BadgeRateComponent";

const TopRatedFilmComponent = ({movie}) => {

    const {title,backdrop_path,vote_average,id} = movie;


    return (
        <div className={'img-wrap'}>
            <img src={`${postersURL + backdrop_path}`} alt={`${title}`} style={{width: '1450px',height:'800px'}}/>
            <div className={'movieData'}>
                <NavLink to={'/'+id.toString()+'/movieData'} state={movie}><div>{title}</div><BadgeRateComponent item={vote_average}/></NavLink>
                <RateComponent initialRating={vote_average}/>
            </div>
        </div>
    );
};

export default TopRatedFilmComponent;