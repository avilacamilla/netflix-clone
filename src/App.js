import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'


export default () => {
  const [blackHeader, setBlackHeader] = useState(false)

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
      <div className='lists'>

      </div>
      
      <footer>
        Inspirado na Netflix<br />
        Dados pegos do site Themoviedb.org <br />
        Direitos de imagem para Netflix. <br />
        Feito por Camilla Avila.
        
      </footer>
    </div>
  )
}