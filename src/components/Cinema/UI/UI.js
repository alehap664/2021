import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { MdThumbUp, MdThumbDown, MdFormatQuote, MdShare } from "react-icons/md";
 
const Card = ({to, title, categories, image, rate}) => {
  return (
    <div className="card__wrap">
      <div className="card">
        <div className="card__cover">
          <img className="card__img" alt="" srcSet={image} />
          <Link to={to} className="card__play"><FaPlay className="pl-1"/></Link>
          <span 
            className={`card__rate ${rate <= 5 ? "card__rate--red" : rate <= 8 ? "card__rate--orange" : "card__rate--green"}`}
          >{rate}</span>
        </div>
        <div className="card__content">
          <h3 className="card__title"><Link to={to}>{title}</Link></h3>
          <div className="card__category">
            {categories.map( (ele, index) => (
              <Link to={`/cinema/detail?page=1&categories=${ele.toLowerCase()}`} key={index} className="card__category__item">{ele}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Comment = ({user}) => {
  return(
    <>
      <div className="comments__author">
        <div className="comments__avatar">
          <img srcSet="https://dmitryvolkov.me/demo/hotflix2.1/main/img/user.svg" alt={user.name}/>
        </div>
        <div className="comments__name">{user.name}</div>
        <div className="comments__time">{user.time}</div>
      </div>
      <p className="comments__text">{user.text}</p>
      <div className="comments__action">
        <div className="comments__rate">
          <button>
            <MdThumbUp />
            {user.rate.like}
          </button>
          <button>
            <MdThumbDown />
            {user.rate.dislike}
          </button>
        </div>
        <button><MdShare />Reply</button>
        <button><MdFormatQuote />Quote</button>
      </div>
    </>
  )
}

const Review = ({user}) => {
  return(
    <>
      <div className="reviews__author">
        <div className="reviews__avatar">
          <img srcSet={user.avatar || "https://dmitryvolkov.me/demo/hotflix2.1/main/img/user.svg"} alt={user.name}/>
        </div>
        <div className="reviews__name">{user.name}</div>
        <div className="reviews__time">{user.time}</div>
        <div 
          className={`reviews__rating ${user.rating <= 5 ? "--red" : user.rating <= 8 ? "--orange" : "--green" }`}
        >{user.rating}
        </div>
      </div>
      <p className="reviews__text">{user.text}</p>
    </>
  )
}

export {
  Card, Comment, Review
}