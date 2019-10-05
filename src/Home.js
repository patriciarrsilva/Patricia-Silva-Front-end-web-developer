import React from 'react';
import Portfolio from './Portfolio';
import './css/Home.css';

function Home(props) {
    const { handleOutsideClick } = props;

    return (
        <div className="home" onClick={handleOutsideClick}>
            <header className="header">
                <div className="header__titles">
                    <h1 className="header__title">Patrícia Silva</h1>
                    <h2 className="header__subtitle">Front-end Web Developer</h2>
                </div>

                <p className="header__description">I combine my passion for learning with my skills to build interesting applications that create unique user experiences</p>
                <a href="#portfolio" className="button">Check out my portfolio below!</a>
            </header>

            <Portfolio />
        </div>
    )
}
export default Home