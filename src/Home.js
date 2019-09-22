import React from 'react'
import Portfolio from './Portfolio'

function Home(props) {
    return (
        <div>
            <header>
                <div>
                    <h1>Patrícia Silva</h1>
                    <h2>Front-end Web Developer</h2>
                </div>

                <p>I combine my passion for learning with my skills to build interesting applications that create unique user experiences</p>
                <a href="">Check out my portfolio below!</a>
            </header>

            <Portfolio />
        </div>
    )
}
export default Home