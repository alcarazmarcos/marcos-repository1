import React from 'react';
import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
        <div className='holder'>
            <img src="img/logo1.png" width="100" alt="La Casita del Frances" />
            <h1>La Casita del Francés</h1>
        </div>
        </header>
    );
}

export default Header;