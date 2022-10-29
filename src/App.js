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
        Feito por <a href='https://www.linkedin.com/in/avilacamilla'>Camilla Avila</a> <br />
        <i>Inspiração</i> & <b>Direitos</b> <a href='https://www.netflix.com/br/'>Netflix</a> <br />
        Dados pegos do site Themoviedb.org
        
      </footer>

      {movieList.length <= 0 &&
        <div className='Loading'>
          <img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/masterw_2560%2Cc_limit/Netflix_LoadTime.gif' alt='Carregando' />
          </div>
      }
    </div>
  )
}