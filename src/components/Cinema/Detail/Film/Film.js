import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { addFilm } from '../../../../actions/film';

// Custom
import { getData, throwErr } from '../../../../helper/main';
import Loading from '../../../Loading/Loading';
import Header from './Header';
import Section from './Section/Section';
import NotFound from '../../../Notfound/Notfound';

const Film = () => {
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
      getData("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/films?limit=7"+query)
        .then( res => {
          film.film__ref = res.data;
          film.film__ref.splice(0,1);
          resolve(film)
        }).catch( err => {
          reject(err)
        })
    })
  };

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
        const res = await getData("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/films/" + param.id);
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
      <Header film={film} />
      <Section film={film} />
    </>
  )
}

export default Film;
