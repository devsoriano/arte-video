import { Carousel } from './../../components/Carousel';
import { CarouselItem }  from '../../components/CarouselItem';
import { Categories } from './../../components/Categories';
import { useMovies } from './../../hooks/useMovies'
import './styles.scss'

export const Home = () => {  
  const {listMovies, loading} = useMovies();

  return (
    <>
      <div className='hero'></div>
      <main>
        { loading ? <div>loading...</div> :
          Object.keys(listMovies).map((key, index) => (
            <Categories title={listMovies[key].nameCategory} key={index}>
              <Carousel indexCarousel={index} {...{listMovies}}>
              {
                listMovies[key].data.map((item, idx) => (
                  <CarouselItem 
                    key={idx} 
                    {...item} 
                  />
                ))
              }
              </Carousel>
            </Categories>
          ))
        }
      </main>
    </>
  )
}