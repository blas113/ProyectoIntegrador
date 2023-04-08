import React, {useLayoutEffect, useRef, useState, useEffect} from 'react'
import '../Css/galery_images.css';
import { FaTimes } from "react-icons/fa";
import Carousel from './Carousel';
import 'react-slideshow-image/dist/styles.css'
import noImage from '../assets/no-image.png'


const GaleryImages = ({result}) => {
  
  const ref = useRef(null);
  const [stateModal, setStateModal] = useState(false); 
  
  return (
    <div ref={ref} style={{'max-width': '1300px', 'margin' : 'auto'}}>
        <div className="galery">
          <div className="image-central">
            <img src={result?.imagenes?.at(0)?.url || noImage} alt="image-hotel"/>
          </div>

          <div className="images">
            {result?.imagenes?.filter((image, index) => index !== 0)?.slice(0,4).length > 0 ?
            result?.imagenes?.filter((image, index) => index !== 0)?.slice(0,4)?.map(imagen => <img src={imagen?.url} />) :
            
            <>
            <img src={noImage} />
            <img src={noImage} />
            </>}
            <p onClick={() => setStateModal(!stateModal)}>Ver Más</p>
          </div>
        </div>

      <div className="galery galery-mobile">
        <Carousel result={result.imagenes}/>
      </div>
      <section className={`${stateModal && 'visible'} galery-desktop fondo`}>
        <div className="modal">
          <div className="imagen-modal">
            <Carousel result={result.imagenes}/>
          
            <div className="button-modal">
            <button onClick={()=> setStateModal(false)}><FaTimes /></button>
            </div>
        </div> 
        </div>
      </section>
    </div>
  )
}

export default GaleryImages