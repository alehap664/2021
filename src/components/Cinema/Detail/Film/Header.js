import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Detail = ({film}) => {
  console.log(film);
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
                    <span className="card__rate card__rate--green">10</span>
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
                        { render(film.film__categories) }
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
                        { render(film.film__countries) }
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
            <iframe src={film.film__trailer} width="100%" height="100%" title={film.film__title} ></iframe>
            {/* <video autoPlay="autoplay" controls="controls" width="100%" height="100%"> 
                <source src="https://www.googleapis.com/drive/v3/files/1O1ANl0Fp8g9IX6rArP_Tqxh4STad2gFR?alt=media&key=AIzaSyCtPEz4SHnmWA7H2HDgMb5LOCnqPtyLYGM" type="video/mp4" />
            </video> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail
