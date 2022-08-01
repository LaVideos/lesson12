import React, {useState} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import './CarouselTop.css'
import {TopRatedFilmComponent} from "../../index";



const CarouselComponent = ({movies}) => {

    const PAGE_WIDTH = 945;

    const [offset, setOffset] = useState(0);

    const PAGE_HEIGHT = 520;


    const handleLeftArrowClick = ()=>{
        setOffset((currentOffset)=>{
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset,0)
        })
    }
    const handleRightArrowClick = ()=>{

        setOffset((currentOffset)=>{
            const newOffset = currentOffset - PAGE_WIDTH;

            const maxOffset = -(PAGE_WIDTH * (movies.length -1));
            console.log(newOffset);
            return Math.max(newOffset,maxOffset)
        })

    }

    return (
        <div>
            <div className={'main-container'}>
                <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}/>
                <div className={'window'}>
                    <div className={'all-pages-container'} style={{transform: `translateX(${offset}px)`}}>
                        {
                            movies.map(movie => <TopRatedFilmComponent movie={movie} key={movie.id}/>)
                        }
                    </div>
                </div>
                <div>
                    <FaChevronRight className="arrow" onClick={handleRightArrowClick}/>
                </div>
            </div>
        </div>
    );
};

export default CarouselComponent;