import React from 'react';
import './Header.css'

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''} >
            <div className='header-logo'>
                <a href='/'>
                    <img src='https://user-images.githubusercontent.com/115038212/197913878-c586aa2e-b902-4800-b68c-469ecda70857.png' alt='Logotipo Devflix' />
                </a>
            </div>
            <div className='header-nav'>
                <ul>
                    <a href="#"><li>Início</li></a>
                    <a href="#"><li>Séries</li></a>
                    <a href="#"><li>Filmes</li></a>
                    <a href="#"><li>Bombando</li></a>
                    <a href="#"><li>Minha lista</li></a>
                    <a href="#"><li>Navegar por idiomas</li></a>
                </ul>
            </div>
            <div className="header-user">
                <img src='https://user-images.githubusercontent.com/115038212/197917713-fd8bc850-91b2-470c-a796-421615e24e7c.png' alt='Avatar usuário Devflix' />
            </div>

        </header>
    )
} 