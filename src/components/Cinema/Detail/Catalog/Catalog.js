import { useState, useEffect } from 'react';
import { useRouteMatch, Link, useLocation, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { addFilms } from '../../../../actions/film';

import { Card } from "../../UI/UI";
import Loading from '../../../Loading/Loading';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { getData } from "../../../../helper/main";

const Catalog = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const history = useHistory();

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  // Store
  const filmsStored = useSelector( state => state.filmsStored);
  const categories = useSelector( state => state.categories);
  const countriesStored = useSelector( state => state.countries);
  const dispatch = useDispatch();

  const { path } = useRouteMatch();
  
  // State
  const [films, setFilms] = useState([]);
  const [filmsFilter, setFilmsFilter] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [pageState, setPageState] = useState(1);
  const [countries, setCountries] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const page = +query.get("page") || 1;
  const recordPerPage = 18;
  const start = page * 18 - 18;
  const end = page * 18;

  // query
  const queryCategories = query.get("categories") || "none";
  const queryCountries = query.get("countries") || "none";
  const queryRate =  query.getAll("rate");
  const queryRelease = query.getAll("release");

  const temp_queryCategories2 = queryCategories === "none" ? "" : `&categories=${queryCategories}`;
  const temp_queryCountries2 = queryCountries === "none" ? "" : `&countries=${queryCountries}`;
  const temp_queryRate2 = queryRate.length === 0 ? "" : `&rate=${queryRate[0]}&rate=${queryRate[1]}`;
  const temp_queryRelease2 = queryRelease.length === 0 ?"" : `&release=${queryRelease[0]}&release=${queryRelease[1]}`;

  const queryURL = temp_queryCategories2+temp_queryCountries2+temp_queryRate2+temp_queryRelease2

  useEffect(() => {
    
    const get = async () => {
      if (filmsStored[0]) return filmsStored;
 
      const res = await getData("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/films");
      dispatch(addFilms(res.data));
      setFilms(res.data)
      return res.data;
    }
    const searchCate = key => filmsStored.filter( film => (
      film.film__categories
        .map( ele => ele.toLowerCase())
        .includes(key)
    ))
    
    (async () => {
      if (!isSearch) {
        const data = await get();
        setFilms(data);

        const res = await getData("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/countries");
        setCountries(res.data);

        // $(`#filter__rate--start`).value = 0
        // $(`#filter__rate--end`).value = 10
        // $(`#filter__release--start`).value = 2010
        // $(`#filter__release--end`).value = 2019
      }

      const temp = filmsStored.filter( film => (
        queryCategories === "none" 
          ? true 
          : film.film__categories
            .map( ele => ele.toLowerCase())
            .includes(queryCategories)
        )).filter( film => (
          queryCountries === "none"
          ? true
          : film.film__countries
            .map( ele => ele.toLowerCase())
            .includes(queryCountries)
        )).filter( film => (
          queryRate.length === 0
          ? true
          : +film.film__rate >= queryRate[0] && +film.film__rate <= queryRate[1] 
        )).filter( film => (
          queryRelease.length === 0
          ? true
          : +film.film__release >= queryRelease[0] && +film.film__release <= queryRelease[1] 
        ))
  
      const totalPage = Math.ceil(films.length / recordPerPage);
      const pagination = Array(totalPage).fill(0).map( (ele, index) => index + 1);
      setPagination(pagination);
      setFilms(temp)
    })()
  }, [films])

  const dropDown = (id) => {
    const menus = $$(`.filter__item--menu`);
    const dropdown = $$(`.filter__item--dropdown`);

    dropdown.forEach( (ele, index) => {
      const dropEle = dropdown[index];
      const menuEle = menus[index];

      dropEle.id === id 
        ? dropEle.classList.toggle("--active") 
        : dropEle.classList.remove("--active")

      menuEle.getAttribute("aria-labelledby") === id 
        ? menuEle.classList.toggle("--active") 
        : menuEle.classList.remove("--active")
    });
  }

  const choose = e => {
    const id = e.target.dataset.id;
    const value = e.target.dataset.value;
    const input = $(`input[data-id="${id}"]`);

    input.value = value;
  }

  const filterMinMax = (e, startID, endID) => {
    const filterStart = $(`input#${startID}`);
    const filterEnd = $(`input#${endID}`);
    const inputStart = $(`input[data-id="${startID}"]`);
    const inputEnd = $(`input[data-id="${endID}"]`);

    if (e.target === filterStart) {
      if(+filterStart.value > +filterEnd.value) return filterStart.value = filterEnd.value;
    }
    if (e.target === filterEnd) {
      if(+filterEnd.value < +filterStart.value) return filterEnd.value = filterStart.value;
    }

    inputStart.value = filterStart.value;
    inputEnd.value = filterEnd.value;
  }

  const applyFilter = () => {
    const conditionCategories = $(`input[data-id="filter__categories"]`).value.toLowerCase();
    const conditionCountries = $(`input[data-id="filter__countries"]`).value.toLowerCase();
    const conditionMinRate = $(`input[data-id="filter__rate--start"]`).value.toLowerCase();
    const conditionMaxRate = $(`input[data-id="filter__rate--end"]`).value.toLowerCase();
    const conditionMinRelease = $(`input[data-id="filter__release--start"]`).value.toLowerCase();
    const conditionMaxRelease = $(`input[data-id="filter__release--end"]`).value.toLowerCase();

    const queryCategories = conditionCategories === "none" ? "" : `&categories=${conditionCategories.toLowerCase()}`;
    const queryCountries = conditionCountries === "none" ? "" : `&countries=${conditionCountries.toLowerCase()}`;
    const queryRate = `&rate=${conditionMinRate.toLowerCase()}&rate=${conditionMaxRate.toLowerCase()}`;
    const queryRelease = `&release=${conditionMinRelease.toLowerCase()}&release=${conditionMaxRelease.toLowerCase()}`;

    const query = queryCategories+queryCountries+queryRate+queryRelease;

    history.push(`/cinema/detail?page=1${query}`)
  }
  console.log(queryRate);
  console.log(queryRelease);

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

      {!films[0] || !countries[0] ? <Loading /> : 
      <section className="content">
        <div className="content__head">
          <div className="container">
            <div className="row filter__content">
              <div className="col-2">
                <div className="filter__item">
                  <span className="filter__item--label" aria-labelledby="filter__categories">Categories</span>
                  <div className="filter__item--dropdown" id="filter__categories" onClick={()=>dropDown("filter__categories")}>
                    <input type="button" data-id="filter__categories" value={queryCategories}/>
                    <span></span>
                  </div>
                  <div className="filter__item--menu --active" aria-labelledby="filter__categories">  
                    <ul className="filter__item__scroll">
                      <li 
                        data-value="NONE"
                        data-id="filter__categories" 
                        onClick={choose}>NONE
                      </li>
                      {categories.map( (ele, index) => (
                        <li 
                          key={index}
                          data-value={ele.category} 
                          data-id="filter__categories" 
                          onClick={choose}>{ele.category.toUpperCase()}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="filter__item">
                  <span className="filter__item--label">Countries</span>
                  <div className="filter__item--dropdown" id="filter__countries" onClick={()=>dropDown("filter__countries")}>
                    <input type="button" data-id="filter__countries" value={queryCountries}/>
                    <span></span>
                  </div>
                  <div className="filter__item--menu" aria-labelledby="filter__countries">  
                    <ul className="filter__item__scroll">
                      <li 
                        data-value="NONE"
                        data-id="filter__countries" 
                        onClick={choose}>NONE
                      </li>
                      {countries.map( (ele, index) => (
                        <li
                          key={index}
                          data-value={ele.country} 
                          data-id="filter__countries" 
                          onClick={choose}>{ele.country.toUpperCase()}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="filter__item">
                  <span className="filter__item--label">Rate</span>
                  <div className="filter__item--dropdown" id="filter__rate" onClick={()=>dropDown("filter__rate")}>
                    <input type="button" data-id="filter__rate--start" value={queryRate[0]}/>
                    -
                    <input type="button" data-id="filter__rate--end" value={queryRate[1]}/>
                    <span></span>
                  </div>
                  <div className="filter__item--menu" aria-labelledby="filter__rate">  
                    <div className="filter__item--rate">
                      Min: <input 
                        type="range" id="filter__rate--start" min="0" max="10" step="0.1" 
                        onInput={(e) => filterMinMax(e, "filter__rate--start", "filter__rate--end")} />
                    </div>
                    <div className="filter__item--rate">
                      Max: <input 
                        type="range" id="filter__rate--end" min="0" max="10" step="0.1" 
                        onInput={(e) => filterMinMax(e, "filter__rate--start", "filter__rate--end")} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="filter__item">
                  <span className="filter__item--label">Release</span>
                  <div className="filter__item--dropdown" id="filter__release" onClick={()=>dropDown("filter__release")}>
                    <input type="button" data-id="filter__release--start" value={queryRelease[0]}/>
                    -
                    <input type="button" data-id="filter__release--end" value={queryRelease[1]}/>
                    <span></span>
                  </div>
                  <div className="filter__item--menu" aria-labelledby="filter__release">  
                    <div className="filter__item--rate">
                      Min: <input 
                        type="range" id="filter__release--start" min="2010" max="2021" step="1" 
                        onInput={(e) => filterMinMax(e, "filter__release--start", "filter__release--end")} />
                    </div>
                    <div className="filter__item--rate">
                      Max: <input 
                        type="range" id="filter__release--end" min="2010" max="2021" step="1" 
                        onInput={(e) => filterMinMax(e, "filter__release--start", "filter__release--end")} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 ml-auto">
                <button className="filter__btn" onClick={applyFilter}>Hahaha</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {(films).slice(start, end).map( film => (
              <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-0" key={film.id}>
                <Card
                  to={`${path}/${film.id}`}
                  title={film.film__title}
                  image={film.film__cover}
                  categories={film.film__categories}
                  rate={film.film__rate}
                />
              </div>
            ))}

            <div className="col-12">
              <div className="pagination">
                <Link to={`${path}?page=${page-1}${queryURL}`} 
                  className={`pagination__nav--item ${page <= 1 ? "--disable" : ""}`}
                ><IoIosArrowBack /></Link>
                <ul className="pagination__nav">
                  {(page < 5 ? pagination.slice(0, 5) 
                    : page > pagination.length - 5 ? pagination.slice(pagination.length - 5) 
                    : pagination.slice(page-3, page+2))
                      .map( ele => (
                        <Link to={`${path}?page=${ele}${queryURL}`}
                          key={ele}
                          className={`pagination__nav--item ${ele === page ? "--active --disable" : ""}`}
                        >{ele}</Link>
                      ))
                  }
                </ul>
                <Link to={`${path}?page=${page+1}${queryURL}`} 
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