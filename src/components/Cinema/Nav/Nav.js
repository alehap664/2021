import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FaSearch, FaSignInAlt } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

import { useDispatch, useSelector } from 'react-redux';
import { addCategories } from "../../../actions/film";

const Nav = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  // const [category, setCategory] = useState([])
  useEffect(() => {
    (async () => {
      const getData = async (url) => {
        const res = await axios.get(url);
        return res.data
      }
      if (!categories[0]) {
        const data = await getData("https://ndthinh-react-cinema.herokuapp.com/films/categories");
        dispatch(addCategories(data));
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
                <NavItem to="#" label="Null" />
                <NavItemDropdown id="dropdownMore" listDropdownItem={[1, 2, 3, 4, 5]} icon={<BsThreeDots />}
                  onDropdown={navDropdown}
                />
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
                  <NavItemDropdown id="dropdownCategory1" label="EN" listDropdownItem={["EN", "VN"]} icon={<RiArrowDownSLine />}
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
              <Link to="#" className="nav--label">{ele?.category}</Link>
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