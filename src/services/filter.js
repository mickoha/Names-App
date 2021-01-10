export const setFilter = (filterText) => (dispatch) => {
  dispatch({
    type: 'SET_FILTER',
    filter: filterText
  })
}