import React from 'react'
import {connect} from 'react-redux'

import {setFilter} from '../services/filter'

const FinderBanner = (props) => {
  // Render if data is loaded
  if (props.namesRecuder.isLoading) {
    return <span></span>
  } else {
    const namesAmount = props.namesRecuder.namesAmount

    const handleFilter = (e) => {
      props.setFilter(e.target.value)
    } 
    return (
      <div className="finderContainer">
        <div className="finder">
          <label>Search:</label>
          <input type="text" onChange={(e) => handleFilter(e)}></input>
        </div>
        <div className="namesAmout">
          <span>{namesAmount}</span>
          <span> names in total</span>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  namesRecuder: state.namesRecuder
}}

export default connect(mapStateToProps, {setFilter})(FinderBanner)