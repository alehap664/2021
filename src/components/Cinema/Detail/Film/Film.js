import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Loading from '../../../Loading/Loading';
import Header from './Header';
import Section from './Section/Section';

const Film = () => {
  const param = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    (async () => {
      const getData = async () => {
        const res = await axios.get("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/films/" + param.id);
        return res.data
      }
      setFilm( await getData())

    })()
  }, [])

  return (
    !Object.keys(film)[0] ? <Loading /> : 
    <>
      <Header film={film} />
      <Section film={film} />
    </>
  )
}

export default Film
