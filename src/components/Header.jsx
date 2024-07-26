import React from 'react'
import '../Css/header.css'

function header() {
  return (
    <header>
    <nav>
      <div className='logo'>
        <h1>Anonime</h1>
      </div>
    <div className="header">
      <ul>
        <li>Home</li>
        <li>List anime</li>
      </ul>
    </div>
        <input className='search-bar' placeholder="Search anime or movie" type="text" /> 
    </nav>
  </header>
  )
}

export default header