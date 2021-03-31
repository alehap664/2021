const addFilm = (film) => {
  return{
    type: "addFilm",
    value: film
  }
}

const addCategories = (categories) => {
  return{
    type: "addCategories",
    value: categories
  }
}

const addCountries = (countries) => {
  return{
    type: "addCountries",
    value: countries
  }
}

const addFilms = (films) => {
  return{
    type: "addFilms",
    value: films
  }
}

export {
  addFilm, addCategories, addCountries, addFilms
}