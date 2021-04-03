import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Detail = ({film}) => {
  const render = key => {
    return key.map( (ele, index) => (
      <span key={index}>{ele}</span>
    ))
  }
  return (
    <section className="section section--details">
      <div className="header__bg--wrap">
        <div className="header__bg">
          <div 
          className="header__bg--item header__bg--active"
          style={{
            background: `url("${film.film__bg}") center center / cover no-repeat`,
          }}
          >
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section__title section__title --mb">
              {film.film__title}
            </h1>
          </div>
          <div className="col-12 col-xl-6">
            <div className="card card--details">
              <div className="row">
                <div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-5">
                  <div className="card__cover">
                    <img alt="" srcSet={film.film__cover} />
                    <span className={`card__rate ${film.film__rate <= 5 ? "card__rate--red" : film.film__rate <= 8 ? "card__rate--orange" : "card__rate--green"}`}>
                      {film.film__rate}
                    </span>
                  </div>
                  <Link to={"/cinema/watch/"+film.id} className="card__watch btn btn-orange">
                    <FaPlay className="mr-2" />Watch
                  </Link>
                </div>

                <div className="col-12 col-md-8 col-lg-9 col-xl-7">
                  <div className="card__content">
                    <ul className="card__detail">
                      <li>
                        <span>Director:</span>
                        { render(film.film__director) }
                      </li>
                      <li>
                        <span>Cast:</span>
                        { render(film.film__cast) }
                      </li>
                      <li>
                        <span>Category:</span>
                        { film.film__categories.map( (ele, index) => (
                          <Link key={index} to={`/cinema/detail?page=1&categories=${ele.toLowerCase()}`}>{ele}</Link>
                        )) }
                      </li>
                      <li>
                        <span>Release year:</span>
                        <span className="text-light">{film.film__release}</span>
                      </li>
                      <li>
                        <span>Running time:</span>
                        <span className="text-light">{film.film__running}</span>
                      </li>
                      <li>
                        <span>Country:</span>
                        { film.film__countries.map( (ele, index) => (
                          <Link key={index} to={`/cinema/detail?page=1&countries=${ele.toLowerCase()}`}>{ele}</Link>
                        )) }
                      </li>
                    </ul>
                    <div className="card__description">
                      <div className="card__description--scroll">
                        <div className="card__description--text">
                          {film.film__description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-6">
            <div className="video__wrap">
              <iframe id="video" src={film.film__trailer} width="100%" height="100%" title={film.film__title} ></iframe>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail
