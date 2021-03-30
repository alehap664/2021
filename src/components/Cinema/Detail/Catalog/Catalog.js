import { useState, useEffect } from 'react';
import { useRouteMatch, Link, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { getFilms } from '../../../../actions/film';

import { Card } from "../../UI/UI";
import Loading from '../../../Loading/Loading';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { getData } from "../../../../helper/main";

const Catalog = () => {
  // Store
  const storeFilms = useSelector( state => state.films);
  const dispatch = useDispatch();

  const { path } = useRouteMatch();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  
  // State
  const query = useQuery();
  const [films, setFilms] = useState([]);
  const [pagination, setPagination] = useState([]);

  const page = +query.get("page") || 1;
  console.log(page);
  const recordPerPage = 18;
  const start = page * 18 - 18;
  const end = page * 18;

  useEffect(() => {
    const get = async () => {
      if (storeFilms[0]) return storeFilms;
 
      const res = await getData("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/films");
      dispatch(getFilms(res.data));
      setFilms(res.data)
      return res.data;
    }
    (async () => {
      const data = await get();
      setFilms(data);

      const totalPage = Math.ceil(films.length / recordPerPage);
      const pagination = Array(totalPage).fill(0).map( (ele, index) => index + 1);
      setPagination(pagination)
    })()
    
  }, [films])

  return (
    <>
      <section className="section section--details">
        <div className="header__bg--wrap">
          <div className="header__bg">
            <div 
            className="header__bg--item header__bg--active"
            style={{
              background: `url("https://lh3.google.com/u/0/d/1VxjniMxY8M9CP9YN6fCQAlXU5mpS0LNM=w0-nu-iv1") center center / cover no-repeat`,
            }}
            >
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section--wrap">
                <div className="section__title">Catalog</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!films[0] ? <Loading /> : 
      <section className="catalog">
        <div className="container">
          <div className="row">
            {films.slice(start, end).map( film => (
              <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-0" key={film.id}>
                <Card
                  to={`${path}/${film.id}`}
                  title={film.film__title}
                  image={film.film__cover}
                  categories={film.film__categories}
                  rate={"10"}
                />
              </div>
            ))}

            <div className="col-12">
              <div className="pagination">
                <Link to={`${path}?page=${page-1}`} 
                  className={`pagination__nav--item ${page <= 1 ? "--disable" : ""}`}
                ><IoIosArrowBack /></Link>
                <ul className="pagination__nav">
                  {pagination.map( ele => (
                    <Link to={`${path}?page=${ele}`}
                      key={ele}
                      className={`pagination__nav--item ${ele === page ? "--active --disable" : ""}`}
                    >{ele}</Link>
                  ))}
                </ul>
                <Link to={`${path}?page=${page+1}`} 
                  className={`pagination__nav--item ${page >= pagination.length ? "--disable" : ""}`}
                ><IoIosArrowForward /></Link>
              </div>
            </div>
          </div>
        </div>
      </section> }    
      
    </>
  )
}

export default Catalog