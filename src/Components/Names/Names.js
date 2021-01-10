import React from 'react'
import { connect } from 'react-redux'

import Row from './Row'

import {sortAmount, sortName} from '../../services/names'

const Names = (props) => {
  // Render if data is loaded
  if (props.namesRecuder.isLoading) {
    return <h2>Loading...</h2>
  } else {

    // Count total amount of showing names
    const total = props.visibleNames.reduce((sum, item) => sum + item.amount, 0)

    return (
      <div className="namesContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          {props.visibleNames.map((name, key) => {
                return <Row key={key} info={name}/>
              })}
            <tr key='total'>      
              <td></td>
              <td className="total">{total}</td>
            </tr>    
          </tbody>
        </table>
     
      </div>
    )
  }
}

// Function to show names including given parameter in filter
const namesToShow = ({namesRecuder, filterReducer}) => {
  if (!namesRecuder.isLoading) {
    return namesRecuder.names.filter(item => item.name.toLowerCase().includes(filterReducer.toLowerCase()))

  } 
}

const mapStateToProps = (state) => {
  return {
    namesRecuder: state.namesRecuder,
    filterReducer: state.filter,
    visibleNames: namesToShow(state)
}}

export default connect(mapStateToProps,{sortAmount, sortName})(Names)