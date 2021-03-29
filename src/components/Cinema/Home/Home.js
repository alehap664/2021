import { useEffect, useState } from 'react';
import { getData } from '../../../helper/main';
import Content from './Content/Content';
import Header from "./Header/Header";
import Section from './Section/Section';
import Loading from '../../Loading/Loading';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getData("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/films?limit=5")
      .then( res => {
        const tripleData = [...res.data.slice(0,5), ...res.data.slice(0,5), ...res.data.slice(0,5)];
        setFilms(tripleData);
        
      }).catch( rea => {
        console.log(rea);
      })
  }, [])


  return (
    <article className="home">
      {!films[0] ? <Loading /> : <Header films={films} /> }
      
      <Content />
      {!films[0] ? <Loading /> : <Section films={films} /> }
    </article>
  )
}

export default Home
