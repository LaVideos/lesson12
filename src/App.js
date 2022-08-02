import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {GenresPage, MovieInfoPage, MoviesListPage, SearchPage} from "./pages";
import MainLayout from "./layouts/mainLayouts/MainLayout";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/movies'}/>}></Route>
                    <Route path={'/movies'} element = {<MoviesListPage/>}>
                    </Route>
                    <Route path={'/genres'} element = {<GenresPage/>}>
                        <Route path={':id/moviesByGenre'} element = {<MoviesListPage/>}></Route>
                    </Route>
                    <Route path={'/movie/:movieId/movieData'} element={<MovieInfoPage/>}></Route>
                    <Route path={'/search'} element={<SearchPage/>}></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;