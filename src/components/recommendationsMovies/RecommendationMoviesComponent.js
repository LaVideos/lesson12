import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux/slices";
import {MovieFromListComponent} from "../index";

import css from '../movieList/moviesList/MoviesList.module.css'

const RecommendationMoviesComponent = ({id}) => {

    const {movies} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(id){
            dispatch(movieActions.getRecommendationMovies({id}));
        }
    },[id])


    return (
        <div className={css.postersWrap}>
            {
                movies.map(movie=><MovieFromListComponent movie={movie} key={movie.id}/>)
            }
        </div>
    );
};

export default RecommendationMoviesComponent;