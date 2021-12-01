import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie (props) {
  return (
    <Link
      to={`/${props.id}`}
      state={{ movieData: { ...props } }}
      className="movie"
    >
      <img src={props.posterPath} alt="" />
    </Link>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired
}

export default Movie
