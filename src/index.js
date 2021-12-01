import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import MoviesGrid from './components/MoviesGrid/MoviesGrid'
import MovieDetails from './components/MovieDetails/MovieDetails'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<MoviesGrid movieData={movieData} />} /> */}
        <Route index element={<MoviesGrid />} />
        <Route path=":movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
