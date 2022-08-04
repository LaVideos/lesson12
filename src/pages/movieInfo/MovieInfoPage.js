import React from 'react';
import {Outlet, useLocation} from 'react-router-dom'


import {MovieInfoComponent} from "../../components";


const MovieInfoPage = () => {
    return (
        <div>
            <MovieInfoComponent/>
            <Outlet/>
        </div>
    );
};

export default MovieInfoPage;