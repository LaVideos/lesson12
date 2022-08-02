import React from 'react';
import {BadgeButtonNavComponent} from "../index";
import BadgePaginationComponent from "../badge/badgePagination/BadgePaginationComponent";

import css from './Pagination.module.css'

const PaginationComponent = ({query,setQuery,id}) => {

    // const nextPage = ()=>{
    //     const next_ = +query.get('page')+1;
    //     setQuery({page:`${next_}`});
    // };
    //
    // const prevPage = () => {
    //     if(+query.get('page') > 1){
    //         const prev_ = +query.get('page')-1;
    //         setQuery({page:`${prev_}`});}
    // }

    const nextTenPage = ()=>{
        const next_ = +query.get('page')+10;
        setQuery({page:`${next_}`});
    }

    const prevTenPage = () => {
        if(+query.get('page') > 10){
            const prev_ = +query.get('page')-10;
            setQuery({page:`${prev_}`});}
        else {
            setQuery({page:`${1}`});
        }
    }

    const paginate = page => setQuery({page:`${page}`});

    let count = 500;

    if(id){
        count = 300;
    }

    return(
        <div className={css.paginationWrap}>
            <BadgeButtonNavComponent data={'Prev 10'} disabled={+query.get('page')===1} onclick={prevTenPage} />
            {/*<BadgeButtonNavComponent data={'Prev'} disabled={+query.get('page') === 1} onclick={prevPage}/>*/}

            <BadgePaginationComponent currentPage={ +query.get('page')} paginate={paginate} count={count}/>

            {/*<BadgeButtonNavComponent data={'Next'} disabled={+query.get('page') === 100} onclick={nextPage}/>*/}
            <BadgeButtonNavComponent data={'Next 10'} disabled={+query.get('page')===100} onclick={nextTenPage} />
        </div>
    )

};

export default PaginationComponent;