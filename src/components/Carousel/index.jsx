import { VALUE_NEGATIVE_SCROLL, VALUE_POSITIVE_SCROLL } from './../../utils/constants'
import { useCarouselScroll } from './../../hooks/useCarouselScroll';
import { useGetInfoByCategory } from './../../hooks/useGetInfoByCategory';
import { useViewMovies } from '../../hooks/useViewMovies';
import './styles.scss';

export const Carousel = ({ children, indexCarousel, listMovies }) => {
  const { 
    scrollLeft, 
    // scrollRight,  
    handleScroll,
    scrollWidth,
    counterScroll,
    path,
    page,
  } = useCarouselScroll(indexCarousel);
  
  const {moviesByCategory} = useGetInfoByCategory({scrollWidth, counterScroll, page, path});
  useViewMovies({ moviesByCategory, listMovies, path });
 
  return (
    <>
      <section className='carousel'>
        <div className='carousel__container'>
          {children}
        </div>
      </section>
      <div className='carousel__move'>
        { 
          scrollLeft > 0 ?
          <div onClick={() => handleScroll(VALUE_NEGATIVE_SCROLL)} className="carousel__move--left"></div> :
          <div></div>
        } 
        <div onClick={() => handleScroll(VALUE_POSITIVE_SCROLL)} className="carousel__move--right"></div>
      </div>
    </>
  )
};