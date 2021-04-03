import { useState, useEffect } from 'react';
import { useRouteMatch, Link, useLocation, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { addFilms, addCountries } from '../../../../actions/film';

import { Card } from "../../UI/UI";
import Loading from '../../../Loading/Loading';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { formatString, getData } from "../../../../helper/main";
import NotFound from '../../../Notfound/Notfound';

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
  const countries = useSelector( state => state.countries);
  const dispatch = useDispatch();

  // State
  const [isLoaded, setIsLoaded] = useState(false)

  const { path } = useRouteMatch();

  useEffect(() => {
    (async () => {     
      if (filmsStored.length === 0) {
        const resFilms = await getData("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/films");
        dispatch(addFilms(resFilms.data));
      };

      $(`input#filter__rate--start`).value = queryRate[0]
      $(`input#filter__rate--end`).value = queryRate[1]
      $(`input#filter__release--start`).value = queryRelease[0]
      $(`input#filter__release--end`).value = queryRelease[1]

      setIsLoaded(true)
    })()
  }, [])

  // Pagination
    // Set up
    const page = +query.get("page") || 1;
    const recordPerPage = 24;
    const start = page * recordPerPage - recordPerPage;
    const end = page * recordPerPage;

    // Query filter
    const querySearch = query.get("search") || "none";
    const queryCategories = query.get("categories") || "none";
    const queryCountries = query.get("countries") || "none";
    const queryRate = query.getAll("rate").length === 0 ? [0, 10] : query.getAll("rate");
    const queryRelease = query.getAll("release").length === 0 ? [2000, 2021] : query.getAll("release");
    const querySTR = useLocation().search.replace(/^\?page=\d+/, "");
    
    
    // Apply filter
    const films = filmsStored.filter( film => (
      querySearch === "none"
      ? true
      : !film.film__title
        ? ""
        : formatString(film.film__title).search(querySearch) === -1 ? false : true
    )).filter( film => (
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

      <section className="content">
        <div className="content__head">
          <div className="container">
            <div className="row filter__content">
              <div className="col-12 col-sm-6 col-lg-2">
                <div className="filter__item">
                  <span className="filter__item--label" aria-labelledby="filter__categories">Categories</span>
                  <div className="filter__item--dropdown" id="filter__categories" onClick={()=>dropDown("filter__categories")}>
                    <input type="button" data-id="filter__categories" value={queryCategories}/>
                    <span></span>
                  </div>
                  <div className="filter__item--menu" aria-labelledby="filter__categories">  
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
              <div className="col-12 col-sm-6 col-lg-2">
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
              <div className="col-12 col-sm-6 col-lg-2">
                <div className="filter__item">
                  <span className="filter__item--label">Rate</span>
                  <div className="filter__item--dropdown" id="filter__rate" onClick={()=>dropDown("filter__rate")}>
                    <input type="button" data-id="filter__rate--start" 
                      value={queryRate[0]}/>
                    -
                    <input type="button" data-id="filter__rate--end" 
                      value={queryRate[1]}/>
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
              <div className="col-12 col-sm-6 col-lg-2">
                <div className="filter__item">
                  <span className="filter__item--label">Release</span>
                  <div className="filter__item--dropdown" id="filter__release" onClick={()=>dropDown("filter__release")}>
                    <input type="button" data-id="filter__release--start" 
                      value={queryRelease[0]}
                    />
                    -
                    <input type="button" data-id="filter__release--end" 
                      value={queryRelease[1]}
                    />
                    <span></span>
                  </div>
                  <div className="filter__item--menu" aria-labelledby="filter__release">  
                    <div className="filter__item--rate">
                      Min: <input 
                        type="range" id="filter__release--start" min="2000" max="2021" step="1" 
                        onInput={(e) => filterMinMax(e, "filter__release--start", "filter__release--end")} />
                    </div>
                    <div className="filter__item--rate">
                      Max: <input 
                        type="range" id="filter__release--end" min="2000" max="2021" step="1" 
                        onInput={(e) => filterMinMax(e, "filter__release--start", "filter__release--end")} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2 ml-auto">
                <div className="filter__btn" onClick={applyFilter}>
                  <button>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {!isLoaded
        ? <Loading /> : films.length === 0 || page > totalPage || page < 1
        ? <NotFound />
        : 
        <div className="container">
          <div className="row">
            {films.slice(start, end).map( film => (
              <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-0" key={film.id}>
                <Card
                  to={`${path}/${film.id}`}
                  title={film.film__title}
                  image={film.film__cover}
                  categories={film.film__categories}
                  rate={film.film__rate}
                />
              </div>
              ))
            }

            <div className="col-12">
              <div className="pagination">
                <Link to={`${path}?page=${page-1}${querySTR}`} 
                  className={`pagination--item ${page <= 1 ? "--disable" : ""}`}
                ><IoIosArrowBack /></Link>
                {(page < 5 ? pagination.slice(0, 5) 
                  : page > pagination.length - 4 ? pagination.slice(pagination.length - 5) 
                  : pagination.slice(page-3, page+2))
                    .map( ele => (
                      <Link to={`${path}?page=${ele}${querySTR}`}
                        key={ele}
                        className={`pagination--item ${ele === page ? "--active --disable" : ""}`}
                      >{ele}</Link>
                    ))
                }
                <Link to={`${path}?page=${page+1}${querySTR}`} 
                  className={`pagination--item ${page >= pagination.length ? "--disable" : ""}`}
                ><IoIosArrowForward /></Link>
              </div>
            </div>
          </div>
        </div>
        } 
      </section>    
      
    </>
  )
}

export default Catalog