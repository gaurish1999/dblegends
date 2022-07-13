import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './Slider.css'
import data from './data.json';

export default function Slider() {

    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);
  
    const movePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
      }
    };

    const moveNext = () => {
        if (
          carousel.current !== null &&
          carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
          setCurrentIndex((prevState) => prevState + 1);
        }
      };

    // const isDisabled = (direction) => {
    // if (direction === 'prev') {
    //     return currentIndex <= 0;
    // }

    // if (direction === 'next' && carousel.current !== null) {
    //     return (
    //     carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
    //     );
    // }

    // return false;
    // };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
          carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
      }, [currentIndex]);
    
      useEffect(() => {
        maxScrollWidth.current = carousel.current
          ? carousel.current.scrollWidth - carousel.current.offsetWidth
          : 0;
      }, []);

  return (

    <>
        <div className='slider'>

            <div className="char-images">            

                <div className="l-r-btns">
                    <button
                    onClick={movePrev}
                    // disabled={isDisabled('prev')}
                    >
                        <span> &lt; </span>
                    </button>
                    <button
                        onClick={moveNext}
                        // disabled={isDisabled('next')}
                    >
                        <span> &gt; </span>
                    </button>
                </div>

                <div
                ref={carousel}
                className="carousel-container"
                >
                    {data.resources.map((resource, index) => {
                        return (
                            <div
                            key={index}
                            className="carousel-item"
                            >
                                <a className="chars">
                                    <img src={resource.imgurl}
                                    // alt={resource.title}
                                    className="char-img"
                                    />
                                </a>

                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    </>
  )
}
