import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home    
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/search'>
          Search  
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/compare'>
          Compare   
        </NavLink>
      </li>

    </ul>
  )
}