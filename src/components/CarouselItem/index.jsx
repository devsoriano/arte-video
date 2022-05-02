import { useState } from 'react';
import { DetailMovie } from './../DetailMovie';

import "./styles.scss";

export const CarouselItem = ({poster_path, title, release_date, overview}) => {
  const [isOpen, setIsOpen] = useState(false);
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="carousel-item" onClick={toggleModal}>
        <img className="carousel-item__img" src={poster} alt={title} />
        <div className="carousel-item__title">{title}</div>
        <div className="carousel-item__date">{release_date}</div>
      </div>
      <DetailMovie 
        {...{isOpen}} 
        {...{toggleModal}} 
        {...{poster}} 
        {...{overview}}
        {...{title}}
      />
    </>
  )
}
