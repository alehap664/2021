import { useEffect } from "react";
import axios from 'axios';

import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaSearch, FaSignInAlt } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

import { useDispatch, useSelector } from 'react-redux';
import { addCategories, addCountries } from "../../../actions/film";

const Nav = () => {
  const categories = useSelector(state => state.categories);
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

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
        console.log(data);
        dispatch(addCountries(data));
      }
    })()

  }, [])

  const $ = document.querySelector.bind(document);

  const navDropdown = (id) => {
    const menu = $(`[aria-labelledby=${id}]`);
    menu.classList.toggle("active");
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

  return (
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
                <NavItemDropdown id="dropdownCategory" label="category" listDropdownItem={categories} icon={<RiArrowDownSLine />}
                  onDropdown={navDropdown}
                />
                <NavItem to="/cinema/detail" label="View all" />
                {/* <NavItemDropdown id="dropdownMore" listDropdownItem={["Cinema"]} icon={<BsThreeDots />}
                  onDropdown={navDropdown}
                /> */}
              </ul>

              <div className="wrap ml-auto">
                <form id="formSearch" className="nav__form">
                  <div className="grp-inp">
                    <input className="nav__search" type="text" name="" id="" placeholder="Search..." />
                    <button className="nav__btn nav__btn--search"><FaSearch /></button>
                    <button className="nav__btn nav__btn--close"><CgClose onClick={closeSearch} /></button>
                  </div>
                </form>
                <button className="nav__btn nav__btn--search2"><FaSearch onClick={showSearch} /></button>
                <div className="nav__lang d-flex">
                  <NavItemDropdown id="dropdownLangues" label="EN" listDropdownItem={["EN", "VN"]} icon={<RiArrowDownSLine />}
                    onDropdown={navDropdown}
                  />
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
  return (
    <li className="nav__item nav__dropdown">
      <span id={id} className="nav--label" onClick={() => { onDropdown(id) }}>
        {label} {icon}
      </span>
      <div className="nav__dropdown--wrap" aria-labelledby={id}>
        <ul className="nav__dropdown--scroll m-0">
          {listDropdownItem.map((ele, index) => (
            <li className="nav__dropdown__item" key={index}>
              <Link to="#" className="nav--label">{ele?.category || ele}</Link>
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
