import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  prevArrow: <button className="chevron"><FaChevronLeft /></button>,
  nextArrow: <button className="chevron"><FaChevronRight /></button>
}

const Carousel = ({result}) => {

    const images = result

  return (
    <div className="containerSlide">
            <Slide {...proprietes}>
                {images?.map(image => (
                    <div className="each-slide-effect">
                    <div>
                        <img key={image.id} src={image.url} alt="img"/>
                    </div>
                </div>
                ))}
            </Slide>
        </div>
  )
}

export default Carousel