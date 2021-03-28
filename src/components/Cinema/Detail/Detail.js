import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Loading from '../../Loading/Loading';
import Header from './Header';
import Section from './Section/Section';

const Detail = () => {
  const param = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    (async () => {
      const getData = async () => {
        const res = await axios.get("http://localhost:5000/api/v.1/films/" + param.id);
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

export default Detail
