import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../../redux/slices";
import {CarouselTopComponent} from "../../index";

const TopRatedFilmsComponent = () => {

    const {topRatedFilm} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(movieActions.getTopRatedFilm());
    }, []);

    return (
        <div>
            <div>20 TOP RATED FILMS</div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <CarouselTopComponent movies={topRatedFilm}/>
            </div>
        </div>
    );
};

export default TopRatedFilmsComponent;