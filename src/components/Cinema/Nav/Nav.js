import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaSearch, FaSignInAlt } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";

import { useDispatch, useSelector } from 'react-redux';
import { addCategories, addCountries } from "../../../actions/film";
import { formatString } from "../../../helper/main";

const Nav = () => {
  const history = useHistory();

  const categories = useSelector(state => state.categories);
  const countries = useSelector(state => state.countries);
  const films = useSelector(state => state.filmsStored);
  const dispatch = useDispatch();

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  useEffect(() => {
    (async () => {
      const getData = async (url) => {
        const res = await axios.get(url);
        return res.data
      }
      if (!categories[0]) {
        const data = await getData("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/categories");
        dispatch(addCategories(data));
      }
      if (!countries[0]) {
        const data = await getData("https://ndthinh48-react-cinema.herokuapp.com/api/v.1/countries");
        dispatch(addCountries(data));
      }
    })()

  }, [])


  const navDropdown = (e) => {
    const id = e.target.id
    const menus = $$(`.nav__dropdown--wrap`);

    menus.forEach( ele => {
      ele.getAttribute("aria-labelledby") === id 
        ? ele.classList.toggle("active") 
        : ele.classList.remove("active")
    });
  };

  const closeSearch = (e) => {
    e.preventDefault()
    const formSearch = $("#formSearch");
    formSearch.classList.toggle("active");
  }
  const showSearch = (e) => {
    e.preventDefault()
    const formSearch = $("#formSearch");
    formSearch.classList.toggle("active");
  }
  const showNav = () => {
    const burger = $(".nav__burger");
    const nav = $(".nav");
    burger.classList.toggle("nav__burger--active");
    nav.classList.toggle("active")
  }
  
  const search = (e) => {

  }
  
  const goToSearch = e => {
    const input = $(`input#searchFilm`);
    const searchSTR = formatString(input.value);
    if (searchSTR.length === 0) return alert("Please input some value");
    console.log(123);
    history.push(`/cinema/detail?page=1&search=${searchSTR}`)
  }

  return categories.length === 0 ? <></> : (
    <header className="navigation bg-main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="nav-bar">
              <Link to="/cinema" className="text-decoration-none nav-bar__logo">
                <p className="text-light m-0 text-size-2rem text-uppercase">
                  <span className="text-orange">BNN</span>Cinema
                </p>
              </Link>

              <ul className="nav">
                <NavItem to="/cinema" label="Home" />
                <li className="nav__item nav__dropdown">
                  <span id="dropdownCategory" className="nav--label" onClick={navDropdown}>
                    category <RiArrowDownSLine />
                  </span>
                  <div className="nav__dropdown--wrap" aria-labelledby="dropdownCategory">
                    <ul className="nav__dropdown--scroll m-0">
                      {categories.map((ele, index) => (
                        <li className="nav__dropdown__item" key={index}>
                          <Link to={`/cinema/detail?page=1&categories=${ele.category.toLowerCase()}`} 
                            className="nav--label">{ele.category}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <NavItem to="/cinema/detail" label="View all" />
                <li className="nav__item nav__dropdown">
                  <span id="dropdownMore" className="nav--label" onClick={navDropdown}>
                    <BsThreeDots />
                  </span>
                  <div className="nav__dropdown--wrap" aria-labelledby="dropdownMore">
                    <ul className="nav__dropdown--scroll m-0">
                      {["contacts"].map((ele, index) => (
                        <li className="nav__dropdown__item" key={index}>
                          <Link to={`/cinema/${ele}`} 
                            className="nav--label">{ele}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                {/* <NavItemDropdown id="dropdownMore" listDropdownItem={["Cinema"]} icon={<BsThreeDots />}
                  onDropdown={navDropdown}
                /> */}
              </ul>

              <div className="wrap ml-auto">
                <form id="formSearch" className="nav__form" onSubmit={(e) => e.preventDefault()}>
                  <div className="grp-inp">
                    <input className="nav__search" id="searchFilm" type="text" placeholder="Search..." onChange={search} />
                    <button className="nav__btn nav__btn--search" data-id="searchFilm" onClick={goToSearch}>
                      <FaSearch />
                    </button>
                    <button className="nav__btn nav__btn--close"><CgClose onClick={closeSearch} /></button>
                  </div>
                </form>
                <button className="nav__btn nav__btn--search2"><FaSearch onClick={showSearch} /></button>
                <div className="nav__lang d-flex">
                  <li className="nav__item nav__dropdown">
                    <span id="dropdownLangues" className="nav--label" onClick={navDropdown}>
                    EN <RiArrowDownSLine />
                    </span>
                    <div className="nav__dropdown--wrap" aria-labelledby="dropdownLangues">
                      <ul className="nav__dropdown--scroll m-0">
                        {["EN", "VN"].map((ele, index) => (
                          <li className="nav__dropdown__item" key={index}>
                            <Link to={`#`} className="nav--label">{ele}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </div>
                <div className="nav__auth">
                  <button className="nav__btn btn-orange nav__auth--btn">
                    <FaSignInAlt />
                    <span className="text-uppercase">Sign in</span>
                  </button>
                </div>
                <div className="nav__burger" onClick={showNav}>
                  <div className="nav__burger--wrap">
                    <div className="nav__burger--line"></div>
                    <div className="nav__burger--line"></div>
                    <div className="nav__burger--line"></div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItemDropdown = ({ id, label = "", listDropdownItem, icon, onDropdown }) => {
  console.log(listDropdownItem);
  return (
    <li className="nav__item nav__dropdown">
      <span id={id} className="nav--label" onClick={() => { onDropdown(id) }}>
        {label} {icon}
      </span>
      <div className="nav__dropdown--wrap" aria-labelledby={id}>
        <ul className="nav__dropdown--scroll m-0">
          {listDropdownItem.map((ele, index) => (
            <li className="nav__dropdown__item" key={index}>
              <Link to={`/cinema/detail/?page=1&catagories=${ele?.category || ele}`} className="nav--label">{ele?.category || ele}</Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <li className="nav__item">
      <Link to={to} className="text-decoration-none">
        <span className="nav--label">{label}</span>
      </Link>
    </li>
  );
};

export default Nav;
