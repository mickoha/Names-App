import axios from 'axios'

export const loadNames = () => (dispatch) => {
  axios.get('./names.json').then((res) => {
    dispatch({
      type: 'LOAD_NAMES',
      content: res.data
    })
  })
}

export const sortAmount = () => (dispatch) => {
  dispatch({
    type: 'SORT_AMOUNT'
  })
}

export const sortName = () => (dispatch) => {
  dispatch({
    type: 'SORT_NAME'
  })
}