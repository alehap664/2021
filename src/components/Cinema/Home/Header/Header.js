import {useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';

// Helper
import { Carousel } from "../../../../helper/main.js";
// UI
import { Card } from "../../UI/UI";
// Icon
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Header = ({films}) => {
  const {path} = useRouteMatch();

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const carousel = $("._carousel .card-carousel");
    const cardWrap = $("._carousel .card-carousel__outer"); 
    const cards = $$("._carousel .card__wrap");
    const btnPre = $("._carousel .btn--pre");
    const btnNext = $("._carousel .btn--next");

    const newCarousel = Carousel();
    newCarousel.setCarouselArea(carousel);
    newCarousel.setBlockWrapElement(cardWrap);
    newCarousel.setElements(cards);
    newCarousel.setup();

    window.addEventListener("resize", () => {
      newCarousel.setup();
    })
    btnNext.addEventListener("click", () => {
      newCarousel.next(1);
      setIndex(newCarousel.getIndexSlide())
    });
    btnPre.addEventListener("click", () => {
      newCarousel.next(-1);
      setIndex(newCarousel.getIndexSlide())
    });
  
  }, [])
  
  return (
    <section className="header _carousel">
      <div className="header__bg--wrap">
        <div className="header__bg">
          {films.map( (film, i) => {
            return(
              <div 
                key={i}
                className={`header__bg--item ${i === index ? "header__bg--active" : ""}`} 
                style={{"background": `url("${film.film__bg}") center center / cover no-repeat`}}>
              </div>
            )
          })}
          
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-11">
            <div className="head__title">
              <h1><strong>NEW ITEMS</strong> OF THIS SEASON</h1>
            </div>
          </div>
          <div className="col-1">
            <div className="carousel--btn">
              <button className="btn btn--pre"> <FaLongArrowAltLeft /> </button>
              <button className="btn btn--next"> <FaLongArrowAltRight /> </button>
            </div>
          </div>
          <div className="col-12 p-0">
            <div className="card-carousel">
              <div className="card-carousel__outer">
                {films.map( (film, index) => {
                  if (film.film__categories) {
                    film.film__categories.length = 3
                  }
                  return(
                    <Card to={`${path}/detail/${film.id}` || "#"}
                      title={film.film__title} 
                      categories={film.film__categories || []} key={index}
                      image={film.film__cover}
                      rate={film.film__rate}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
