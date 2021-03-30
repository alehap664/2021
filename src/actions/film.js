const addVisited = (film) => {
  return{
    type: "addVisited",
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

const getFilms = (films) => {
  return{
    type: "addFilms",
    value: films
  }
}

export {
  addVisited, addCategories, addCountries, getFilms
}