const initialState = {names: null, isLoading: true};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_NAMES':
      // Count total amount of names
      const total = action.content.names.reduce((sum, item) => sum + item.amount, 0)
      return {
        ...state, 
        // when data is loaded, set isLoading to false.
        isLoading: false,
        names: action.content.names,
        namesAmount: total
      }
    case 'SORT_AMOUNT':
      const sortedByAmount = state.names.sort((a, b) => {
        return b.amount - a.amount;
      })

      return {
        ...state,
        names: sortedByAmount
      }
    case 'SORT_NAME':
      const sortedByName = state.names.sort((a, b) => {
        var nameA = a.name.toLowerCase()
        var nameB = b.name.toLowerCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        return 0
      })

      return {
        ...state,
        names: sortedByName
      }
      

      default:
        return state
  }
}

export default reducer;