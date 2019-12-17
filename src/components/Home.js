import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render = () => {
    return (
      <div className='home-container'>
        <h1>Github Compare: Compare your repos and stuff</h1>
        <Link className='button' to='/compare'>Compare</Link>
      </div>
    )
  }
}

export default Home