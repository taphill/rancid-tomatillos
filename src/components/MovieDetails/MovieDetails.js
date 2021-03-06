import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './MovieDetails.css'
import Ordinal from '../../utils/utils'

function MovieDetails () {
  const navigate = useNavigate()
  const data = useLocation().state.movieData

  const formatRating = () => {
    return Math.round(data.averageRating * 100) / 100
  }

  const formatDate = () => {
    const date = new Date(`${data.releaseDate} EST`)
    const month = date.toLocaleString('default', { month: 'long' })
    const day = Ordinal(date.getDate())
    const year = date.getFullYear()

    return `${month} ${day}, ${year}`
  }

  const goBack = () => {
    navigate('/')
  }

  return (
    <>
      <div className="movie-details">
        <img src={data.backdropPath} alt="" />
        <h2>{data.title}</h2>
        <h2>Released: {formatDate()}</h2>
        <h2>Rating: {formatRating()}</h2>
      </div>
      <button className="back-button" onClick={goBack}>
        Go Back
      </button>
    </>
  )
}

export default MovieDetails
