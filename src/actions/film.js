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


export {
  addVisited, addCategories, addCountries
}