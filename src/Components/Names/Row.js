import React from 'react'


export default function Row(props) {
  const name = props.info.name
  const amount = props.info.amount
  return (
      <tr key={name}>      
        <td>{name}</td>
        <td>{amount}</td>
      </tr>
    
  )
}
