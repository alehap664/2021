import React from 'react';
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Card = ({to, title, category, image, rate}) => {
  return (
    <div className="card__wrap">
      <div className="card">
        <div className="card__cover">
          <img className="card__img" alt="" srcSet={image} />
          <Link to={to} className="card__play"><FaPlay className="pl-1"/></Link>
          <span className="card__rate card__rate--red">{rate}</span>
        </div>
        <div className="card__content">
          <h3 className="card__title"><Link to="#">{title}</Link></h3>
          <div className="card__category">
            {category.map( (ele, index) => (
              <Link to="#" key={index} className="card__category__item">{ele}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  Card
}