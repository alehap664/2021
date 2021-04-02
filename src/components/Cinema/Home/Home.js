import { useEffect, useState } from 'react';
import { getData, throwErr } from '../../../helper/main';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { addFilms } from '../../../actions/film';

import Content from './Content/Content';
import Header from "./Header/Header";
import Section from './Section/Section';
import Loading from '../../Loading/Loading';
import NotFound from '../../Notfound/Notfound';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [filmsSlide, setFilmsSlide] = useState([]);
  const [isErr, setIsErr] = useState(false);

  // Redux
  const filmsStored = useSelector(state => state.filmsStored);
  const disPatch = useDispatch();

  
  useEffect(() => {
    (async () => {
      try {
        // Kiểm tra trong store đã get film đó chưa bằng id
        if (filmsStored.length !== 0) {
          const tripleData = [...filmsStored.slice(0,5), ...filmsStored.slice(0,5), ...filmsStored.slice(0,5)];

          setFilmsSlide(tripleData);
          setFilms(filmsStored);
          return;
        }
        // Get film
        const res = await getData("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/films/");
        const newFilms = res.data;
        const tripleData = [...newFilms.slice(0,5), ...newFilms.slice(0,5), ...newFilms.slice(0,5)];
        
        setFilmsSlide(tripleData);
        setFilms(newFilms);
        disPatch(addFilms(newFilms));
      } catch (error) {
        setIsErr(true);
        throw throwErr(error);
      }
      
    })();

  }, [])

  return (
    isErr 
      ? <NotFound /> 
      : 
        <article className="home">
          {!films[0] ? <Loading /> : <Header films={filmsSlide} /> }
          {!films[0] ? <Loading /> : <Content films={films} /> }
          {!films[0] ? <Loading /> : <Section films={filmsSlide} /> }
        </article>
  )
}

export default Home
