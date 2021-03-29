import { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Carousel } from '../../../../helper/main';
import { Card } from '../../UI/UI';
const Section = ({films}) => {
  const { path } = useRouteMatch();

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  useEffect(() => {
    const carousel = $(".section .card-carousel");
    const cardWrap = $(".section .card-carousel__outer"); 
    const cards = $$(".section .card__wrap");
    const btnPre = $(".section__nav--btn.--pre");
    const btnNext = $(".section__nav--btn.--next");

    const newCarousel = Carousel();
    newCarousel.setCarouselArea(carousel);
    newCarousel.setBlockWrapElement(cardWrap);
    newCarousel.setElements(cards);
    newCarousel.setTransition(1)
    newCarousel.setup();

    window.addEventListener("resize", () => {
      newCarousel.setup();
      
    })
    btnNext.addEventListener("click", () => {
      newCarousel.next(1);
    });
    btnPre.addEventListener("click", () => {
      newCarousel.next(-1);
    });
  
  }, [])
  return (
    <div className="section section--border">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__title--wrap">
              <h1 className="section__title">Expected premiere</h1>
              <div className="section__nav--wrap">
                <Link to={path+"/detail"} className="view_all"> View all </Link>
                <button className="section__nav--btn --pre"><IoIosArrowBack /></button>
                <button className="section__nav--btn --next"><IoIosArrowForward /></button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card-carousel">
              <div className="card-carousel__outer">
                {films.map( (film, index) => {
                  if (film.film__categories) {
                    film.film__categories.length = 3
                  }
                  console.log(film.film__categories);
                  return(
                    <Card to={`${path}/detail/${film.id}` || "#"}
                      title={film.film__title} 
                      categories={film.film__categories || []} key={index}
                      image={film.film__cover}
                      rate={index}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
