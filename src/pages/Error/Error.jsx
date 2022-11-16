import React from 'react'

import { Link } from 'react-router-dom'

import './error.css'

const Error = () => {
  return (
    <div className='error'>
        <h2>Error 404, page not found</h2>
        <Link to="/">Volte para a home</Link>
    </div>
  )
}

export default Error
