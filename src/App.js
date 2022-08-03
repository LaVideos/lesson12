import React, {useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {GenresPage, MovieInfoPage, MoviesListPage, SearchPage} from "./pages";
import MainLayout from "./layouts/mainLayouts/MainLayout";
import {darkTheme, GlobalStyles, lightTheme} from "./context/stules";

import './index.css'

import {ThemeContext, ThemeProvider} from 'styled-components';

const App = () => {
    const bodyTheme = localStorage.getItem('theme');

    const [theme, setTheme] = useState('dark');

    let checked = false;

    const switchTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
        localStorage.setItem('theme',theme);
    };

    return (
        <div className={bodyTheme==='dark'?'bodyLight':'bodyDark'}>
            <ThemeContext.Provider value={{checked,switchTheme}}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
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

            </ThemeProvider>
            </ThemeContext.Provider>
        </div>
    );
};

export default App
