import React from 'react';
import {useSelector} from "react-redux";

import {postersURL} from "../../constants";
import {BadgePaperComponent, RateComponent, RecommendationMoviesComponent} from "../index";

import css from './MovieInfo.module.css'
import {RecommendIcon} from "../badge/badgeIcons";

const MovieInfoComponent = () => {
    const {movie} = useSelector(state => state.movies)

    const theme = localStorage.getItem('theme');

    let bg = '#4a4d4e';
    let color = 'lightYellow';

    if(theme === 'dark'){
        bg = 'white';
        color = '#fffb00';
    }


    return (<div>{movie&&
        <div>
            <div  className={theme === 'dark'? css.wrapLight : css.wrapDark}>
                <div className={css.titlePoster}>
                    <div className={css.title}>{movie.title}</div>
                    {movie.vote_average && <RateComponent initialRating={movie.vote_average} numTotalStars={10} color={color}/>}
                    <img src={`${postersURL + movie.poster_path}`} style={{width: '400px'}} alt=""/>
                </div>


                <div className={css.data}>
                    <div>Adult : {movie.adult?'Yes':'No'}</div>
                    <div>Original language : {movie.original_language}</div>
                    <div>Original title : {movie.original_title}</div>
                    <div>Popularity : {movie.popularity}</div>
                    <div>Release date : {movie.release_date}</div>
                    <div>Average vote : {movie.vote_average}</div>
                    <div>Count votes : {movie.vote_count}</div>
                    <div className={css.overview}><p>Overview :</p> {movie.overview}</div>
                    <div className={css.img}><img src={`${postersURL + movie.backdrop_path}`} style={{width: '400px'}} alt=""/></div>
                </div>
                {/*<div className={css.posterGenre}>*/}
                {/*    /!*<img src={`${postersURL + movie.backdrop_path}`} style={{width: '400px'}} alt=""/>*!/*/}

                {/*    {!movie.genre ?*/}
                {/*        <div>{movie.genre_ids.map((genre,state) => <span key={state}>{genre}</span>)}</div> : "error"}*/}
                {/*</div>*/}
            </div>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <div className={css.recommend}><BadgePaperComponent data={'Recommendation'} width={300} color={'orange'} bg={bg} height={50}/><RecommendIcon/></div>
            <div>
                <RecommendationMoviesComponent id={movie.id}/>
            </div>
        </div>}
    </div>);
};

export default MovieInfoComponent;
