import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../../redux/slices";
import {MovieFromListComponent, PaginationComponent} from "../../index";
import {useSearchParams} from "react-router-dom";

const MoviesListComponent = ({id}) => {

    const {movies} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query,setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        if (!id) {
            dispatch(movieActions.getAllMovies({page:query.get('page')}));
        } else {
            dispatch(movieActions.getMoviesById({id,page:query.get('page')}));
        }
    }, [query,id, dispatch]);



    return (
        <div>
            <div>{!id && `Popular NOW`}</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>{
                movies.map(movie => <MovieFromListComponent key={movie.id} movie={movie}/>)
            }</div>
            <PaginationComponent query={query} setQuery={setQuery}/>
        </div>
    );
};

export default MoviesListComponent;