import React, { useState, useEffect } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'
import MovieRow from './components/MovieRow'


export default () => {
  const [blackHeader, setBlackHeader] = useState(false)
  const [movieList, setMovieList] = useState([])
  const[featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }
    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className='page'>

      <Header black={blackHeader} />

    {featuredData &&
      <FeaturedMovie item={featuredData} />
    }

      <div className='lists'>
        {movieList.map((item, key) =>
          <MovieRow key={key} title={item.title} items={item.items} />
        )}
      </div>
      
      <footer>
        Feito por <a className='links-footer' href='https://www.linkedin.com/in/avilacamilla' target='_blank'>Camilla Avila</a>, <br />
        <i>Inspiração</i> & <b>Direitos</b> <a className='links-footer' href='https://www.netflix.com/br/' target='_blank'>Netflix</a>, <br />
        Dados pegos do site <a className='links-footer' href="https://www.themoviedb.org/" target='_blank'>Themoviedb.org</a>. 
        
      </footer>

      {movieList.length <= 0 &&
        <div className='Loading'>
          <img src='https://user-images.githubusercontent.com/93070498/199291534-fd35d3bd-3305-4394-bdcd-88850343d281.gif' alt='Carregando' />
          </div>
      }
    </div>
  )
}