import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices";
import {MovieFromListComponent} from "../index";

const RecommendationMoviesComponent = ({id}) => {

    const {movies} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getRecommendationMovies({id}));
    },[id])


    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                movies.map(movie=><MovieFromListComponent movie={movie} key={movie.id}/>)
            }
        </div>
    );
};

export default RecommendationMoviesComponent;