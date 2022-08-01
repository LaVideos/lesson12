import React from 'react';
import {useSelector} from "react-redux";

import {postersURL} from "../../constants";
import {RateComponent, RecommendationMoviesComponent} from "../index";

import css from './MovieInfo.module.css'

const MovieInfoComponent = () => {
    const {movie} = useSelector(state => state.movies)




    return (<div>{movie&&
        <div>
            <div  className={css.wrap}>
                <div>
                    <div className={css.title}>{movie.title}</div>
                    <RateComponent initialRating={movie.vote_average} numTotalStars={10}/>
                    <img src={`${postersURL + movie.poster_path}`} style={{width: '400px'}} alt=""/>
                    <div className={css.overview}>Overview : {movie.overview}</div>

                </div>
                <div>
                    {/*{!movie.genre ?*/}
                    {/*    <div>{movie.genre_ids.map((genre) => <span></span>)}</div> : "error"}*/}
                    <div>Adult : {movie.adult?'Yes':'No'}</div>
                    <div>Original language : {movie.original_language}</div>
                    <div>Original title : {movie.original_title}</div>
                    <div>Popularity : {movie.popularity}</div>
                    <div>Release date : {movie.release_date}</div>
                    <div>Average vote : {movie.vote_average}</div>
                    <div>Count votes : {movie.vote_count}</div>
                    <div>
                        <img src={`${postersURL + movie.backdrop_path}`} style={{width: '400px'}} alt=""/>
                    </div>
                </div>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <div>
                 <RecommendationMoviesComponent id={movie.id}/>
            </div>
        </div>}
    </div>);
};

export default MovieInfoComponent;
