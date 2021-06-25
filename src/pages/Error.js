import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section error-page">

      <div className="error-container">
        <h1>Sorry! Try Again</h1>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>

    </section>
  )
}

export default Error
