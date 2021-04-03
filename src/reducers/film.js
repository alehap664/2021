const filmStoredReducer = (state = [], action) => {
  switch (action.type) {
    case "addFilm":
      state.push(action.value)
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
      return state = action.value
    default:
      return state
  }
}

const filmsStoredReducer = (state = [], action) => {
  switch (action.type) {
    case "addFilms":
      return state = action.value
    default:
      return state
  }
}

export {
  filmStoredReducer, categoriesReducer, countriesReducer, filmsStoredReducer
}