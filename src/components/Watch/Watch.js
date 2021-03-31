import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addFilm } from '../../actions/film';
import { getData, throwErr } from '../../helper/main';
import Loading from '../Loading/Loading';
import NotFound from '../Notfound/Notfound';
import { Card, Comment } from '../Cinema/UI/UI';
import Video from './Video';

const Watch = () => {
  const param = useParams();

  // State
  const [film, setFilm] = useState({});
  const [isErr, setIsErr] = useState(false);

  // Redux
  const filmStored = useSelector(state => state.filmStored);
  const filmsStored = useSelector(state => state.filmsStored);
  const disPatch = useDispatch();

  // Custom
  const findByID = ele => ele.id === param.id;
  const filmWithRef = (film) => {
    return new Promise((resolve, reject) => {
      const query = film.film__categories.map( ele => "&categories="+ele).join("");
      getData("http://localhost:5000/api/v.1/films?limit=7"+query)
        .then( res => {
          film.film__ref = res.data;
          film.film__ref.splice(0,1);
          resolve(film)
        }).catch( err => {
          reject(err)
        })
    })
  };

  // Effect
  useEffect(() => {
    (async () => {
      try {
        // Kiểm tra trong store đã get film đó chưa bằng id
        const filmInStore = filmStored.find(findByID);
        const filmsInStore = filmsStored.find(findByID);
        
        if (filmInStore) return setFilm(filmInStore);
        if (filmsInStore) {
          const newFilm = await filmWithRef(filmsInStore);
          setFilm(newFilm);
          disPatch(addFilm(newFilm));
          return;
        }
        // Get film
        const res = await getData("http://localhost:5000/api/v.1/films/" + param.id);
        const newFilm = await filmWithRef(res.data);
    
        setFilm(newFilm);
        disPatch(addFilm(newFilm));
      } catch (error) {
        setIsErr(true);
        throw throwErr(error);
      }
      
    })();
    
  }, [param])

  return (
    (film.id !== param.id) && !isErr ? <Loading /> 
    : isErr ? <NotFound /> : 
    <>
      <section className="section section--details">
        <div className="header__bg--wrap">
          <div className="header__bg">
            <div 
            className="header__bg--item header__bg--active"
            style={{
              background: `url(${film.film__bg}) center center / cover no-repeat`,
            }}
            >
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section--wrap">
                <div className="section__title">Bạn đang xem: {film.film__title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <Video src={film.film__video} />
              <div className="comments">
        <ul className="comments__list">
          <li className="comments__item">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          <li className="comments__item --answer">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          <li className="comments__item --answer">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          <li className="comments__item">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          <li className="comments__item">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          <li className="comments__item --answer">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          
        </ul>
      </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="row">
                {film.film__ref.map( film => (
                  <div className="col-6" key={film.id}>
                    <Card 
                      to={"/cinema/detail/"+film.id} 
                      title={film.film__title} 
                      categories={film.film__categories} 
                      image={film.film__cover} rate="10"></Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Watch
