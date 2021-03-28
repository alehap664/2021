import React, {useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import axios from "axios";
// Helper
import { Carousel } from "../../../../helper/main.js";
// UI
import { Card } from "../../UI/UI";
// Icon
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Header = () => {
  const {path} = useRouteMatch();

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const [index, setIndex] = useState(0);
  
  const [img, setImg] = useState([]);

  useEffect(() => {
    (async () => {
      const getData = async () => {
        const res = await axios.get("http://localhost:5000/api/v.1/films");
        return res.data;
      }
      const res = await getData();
      const data = [...res.slice(0,5), ...res.slice(0,5), ...res.slice(0,5)];
      setImg(data);

      const carousel = $("._carousel .card-carousel");
      const cardWrap = $("._carousel .card-carousel__outer"); 
      const cards = $$("._carousel .card__wrap");
      const btnPre = $("._carousel .btn--pre");
      const btnNext = $("._carousel .btn--next");

      Carousel.setCarouselArea(carousel);
      Carousel.setBlockWrapElement(cardWrap);
      Carousel.setElements(cards);
      Carousel.setup();
  
      window.addEventListener("resize", () => {
        Carousel.setup();
      })
      btnNext.addEventListener("click", () => {
        Carousel.next(1);
        setIndex(Carousel.getIndexSlide())
      });
      btnPre.addEventListener("click", () => {
        Carousel.next(-1);
        setIndex(Carousel.getIndexSlide())
      });
    })()
  }, []);

  return (
    <section className="header _carousel">
      <div className="header__bg--wrap">
        <div className="header__bg">
          {img.map( (ele, i) => (
            <div 
              key={i}
              className={`header__bg--item ${i === index ? "header__bg--active" : ""}`} 
              style={{"background": `url("${ele.film__bg}") center center / cover no-repeat`}}>
            </div>
          ))}
          
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
                {img.map( (ele, index) => {
                  if (ele.category) {
                    ele.category.length = 3
                  }
                  return(
                    <Card to={`${path}/detail/${ele.id}` || "#"}
                      title={ele.film__title} 
                      categories={ele.film__categories || []} key={index}
                      image={ele.film__cover}
                      rate={index}
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
