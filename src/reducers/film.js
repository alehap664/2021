const visitedReducer = (state = [], action) => {
  switch (action.type) {
    case "addVisited":
      return state
    default:
      return state
  }
}

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case "addCategories":
      return state = action.value
    default:
      return state
  }
}

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case "addCountries":
      return state
    default:
      return state
  }
}

const filmsReducer = (state = [], action) => {
  switch (action.type) {
    case "addFilms":
      return state = action.value
    default:
      return state
  }
}

export {
  visitedReducer, categoriesReducer, countriesReducer, filmsReducer
}