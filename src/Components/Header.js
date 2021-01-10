import React , {useState} from 'react'

import {connect} from 'react-redux'

import {sortAmount, sortName} from '../services/names'

const Header = (props) => {
  const [sort, setSort] = useState('Sort')
  // Render if data is loaded
  if (props.namesRecuder.isLoading) {
    return <span></span>
  } else {

    // Handle sorting selection
    const handleChange = (e) => {
      setSort(e.target.value)

      if (e.target.value === 'name') {
        props.sortName()
      } else if (e.target.value === 'amount') {
        props.sortAmount()
      }

    }
    return (
      <div className="headerContainer">
        <h2>Name Application</h2>
        <div className="sort">
          <select value={sort} onChange={(e) => handleChange(e)} id="sort" name="sort">
            <option value="sort">Sort</option>
            <option value="name">Name</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    namesRecuder: state.namesRecuder,
}}

export default connect(mapStateToProps, {sortAmount, sortName})(Header) 