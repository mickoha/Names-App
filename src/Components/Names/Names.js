import React from 'react'
import { connect } from 'react-redux'

import Row from './Row'

import {sortAmount, sortName} from '../../services/names'

const Names = (props) => {
  if (props.namesRecuder.isLoading) {
    return <h2>Loading...</h2>
  } else {
    const handleSortAmount = (e) => {
      e.preventDefault()
      props.sortAmount()
    }

    const handleSortName = (e) => {
      e.preventDefault()
      props.sortName()
    }

    const names = props.namesRecuder.names
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th><button onClick={(e) => handleSortName(e)}>Name</button></th>
              <th><button onClick={(e) => handleSortAmount(e)}>Amount</button></th>
            </tr>
          </thead>
          <tbody>
          {names.map((name) => {
                return <Row info={name}/>
              })}
          </tbody>
        </table>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  namesRecuder: state.namesRecuder
}}

export default connect(mapStateToProps,{sortAmount, sortName})(Names)