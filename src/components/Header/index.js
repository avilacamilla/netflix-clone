import React from 'react';
import './header.css'

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''} >
            <div className='header-logo'>
                <a href='/'>
                    <img src='https://user-images.githubusercontent.com/93070498/197669993-de2be1fa-f2a2-422d-bd25-becd8162070e.png' alt='Logotipo Scareflix' />
                </a>
            </div>
            <div className="header-user">
                <img src='https://user-images.githubusercontent.com/93070498/197670887-f8a8d7e3-55f1-4a47-a842-0f5a46721965.png' alt='Avatar usuário Scareflix' />
            </div>

        </header>
    )
} 