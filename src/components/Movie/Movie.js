import React from 'react'
import { Link } from "react-router-dom"
import './Movie.css'

function Movie(props) {
  return (
    <Link 
      to={`/${props.id}`}
      state={{ movieData: {...props} }}
      className="movie"
    >
      <img src={props.posterPath} alt="" id={props.id} />
    </Link>
  )
}

export default Movie
