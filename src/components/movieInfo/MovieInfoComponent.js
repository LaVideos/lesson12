import React from 'react';
import {useSelector} from "react-redux";
import {postersURL} from "../../constants";
import {RecommendationMoviesComponent} from "../index";

const MovieInfoComponent = () => {
    const {movie} = useSelector(state => state.movies)

    return (<div>{movie&&
        <div>
            <div>
                <div>{movie.title}</div>
                <div><img src={`${postersURL + movie.backdrop_path}`} style={{width: '400px'}} alt=""/></div>
                {!movie.genre ?
                    <div>{movie.genre_ids.map((genre, state) => <span key={state}>{genre},</span>)}</div> : "error"}
                <div>{movie.adult}</div>
                <div>{movie.original_language}</div>
                <div>{movie.original_title}</div>
                <div>{movie.overview}</div>
                <div>{movie.popularity}</div>
                <div>{movie.release_date}</div>
                <div>{movie.vote_average}</div>
                <div>{movie.vote_count}</div>
            </div>
            <div>
                 <RecommendationMoviesComponent id={movie.id}/>
            </div>
        </div>}
    </div>);
};

export default MovieInfoComponent;
