import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie (props) {
  const navigate = useNavigate()

  const showDetails = () => {
    navigate(
      `/${props.id}`,
      { state: { movieData: { ...props } } }
    )
  }

  return (
    <img
      className="movie"
      onClick={showDetails}
      src={props.posterPath}
      alt=""
    />
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired
}

export default Movie
