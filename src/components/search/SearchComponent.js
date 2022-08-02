import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices";

import {BadgeErrorComponent, BadgeInputTitleComponent, MovieFromListComponent} from "../index";

import css from './Search.module.css';


const SearchComponent = () => {
   const {reset,register,handleSubmit,formState:{errors}} = useForm({mode:'all'});

   const {moviesSearch} = useSelector(state => state.movies);

   const dispatch = useDispatch();


   const submit = async ({title}) => {
        await dispatch(movieActions.getSearchMovie({title}));
       console.log(title)
       reset();
   }

    return (
        <div className={css.searchPage}>
            <div className={css.formWrap}>
                    <BadgeInputTitleComponent handleSubmit={handleSubmit} submit={submit} register={register}/>
                <div>
                    {errors.title&& <div><BadgeErrorComponent/></div>}
                </div>
            </div>

            <div className={css.findMoviesWrap}>
                {moviesSearch&&moviesSearch.map(search_=><MovieFromListComponent movie={search_} key={search_.id}/>)}
            </div>
        </div>

    );
};

export default SearchComponent;