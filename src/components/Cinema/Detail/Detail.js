import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Header from './Header/Header';

const Detail = () => {
  const param = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    (async () => {
      const getData = async () => {
        const res = await axios.get("http://localhost:5000/api/v.1/films/" + param.id);
        return res.data
      }
      setFilm( await getData())

    })()
  }, [])

  console.log(param);
  console.log(film);
  return (
    <article>
      <Header film={film} />
    </article>
  )
}

export default Detail
