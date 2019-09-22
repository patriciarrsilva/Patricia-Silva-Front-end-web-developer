import React from 'react';
import './css/Portfolio.css';
import neighborhoodMap from './img/neighborhood-map.png';
import myReads from './img/my-reads.png';
import restaurantReviews from './img/restaurant-reviews.png';
import feedReader from './img/feed-reader.png';
import arcadeGame from './img/arcade-game.png';
import memoryGame from './img/memory-game.png';
import portfolioSite from './img/portfolio-site.png';
import tradingCards from './img/trading-cards.png';
import pixelArt from './img/pixel-art.png';
import surveyForm from './img/survey-form.png';
import tributePage from './img/tribute-page.png';

function Portfolio(props) {
    return (
        <main id="portfolio" className="portfolio">
            <h2>Portfolio</h2>

            <section className="portfolio-course">
                <h3 className="portfolio-course__title"><img src="" alt="logo"></img> Udacity Front-End Nanodegree Program</h3>

                <article className="project">
                    <img src={neighborhoodMap} alt="neighborhood map project screen" className="project__image" />
                    <h4 className="project__title"><a href="">Neighborhood Map</a></h4>
                    <p className="project__description font-size-xs">Users can search locations on the map and display information about it on an info window</p>
                    <p className="project__links">
                        <a
                            href="https://patriciarrsilva.github.io/Neighborhood-Map/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                        </a> | <a
                            href="https://github.com/patriciarrsilva/Neighborhood-Map"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                        </a>
                    </p>
                    <p>Passed on August 10th, 2018</p>
                    <ul className="project__skills">
                        <li className="project__skills-item">React (JSX)</li>
                        <li className="project__skills-item">Google Maps API</li>
                        <li className="project__skills-item">FourSquare API</li>
                        <li className="project__skills-item">PWA</li>
                        <li className="project__skills-item">Accessibility</li>
                        <li className="project__skills-item">Responsive</li>
                        <li className="project__skills-item">JavaScript (ES6)</li>
                        <li className="project__skills-item">CSS3</li>
                        <li className="project__skills-item">HTML5</li>
                    </ul>
                </article>

                <article className="portfolio-course__project">
                    <img src={myReads} alt="my reads project screen" className="project__image" />
                    <h4><a>MyReads: A Book Tracking App</a></h4>
                    <p>Users can select and categorize books into a virtual bookshelf</p>
                    <p>
                        <a
                            href="https://patriciarrsilva.github.io/MyReads-A-Book-Tracking-App/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                        </a> | <a
                            href="https://github.com/patriciarrsilva/MyReads-A-Book-Tracking-App"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                        </a>
                    </p>
                    <p>Forked from <a href="https://github.com/udacity/reactnd-project-myreads-starter" target="_blank" rel="noopener noreferrer">starter code</a></p>
                    <p>Passed on July 30th, 2018</p>
                    <ul>
                        <li>React (JSX)</li>
                        <li>React Router</li>
                        <li>API</li>
                        <li>JavaScript (ES6)</li>
                        <li>HTML5</li>
                    </ul>
                </article>

                <article className="portfolio-course__project">
                    <img src={restaurantReviews} alt="restaurant reviews project screen" className="project__image" />
                    <h4><a>Restaurant Reviews App</a></h4>
                    <p>An accessible, responisve and progressive web application</p>
                    <p>
                        <a
                            href="https://patriciarrsilva.github.io/Restaurant-Reviews-App-to-host/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                        </a> | <a
                            href="https://github.com/patriciarrsilva/Restaurant-Reviews-App"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                        </a>
                    </p>
                    <p>Forked from <a href="https://github.com/udacity/mws-restaurant-stage-1" target="_blank" rel="noopener noreferrer">starter code</a></p>
                    <p>Passed on July 1st, 2018</p>
                    <ul>
                        <li>PWA</li>
                        <li>Accessibility</li>
                        <li>Responsive</li>
                        <li>JavaScript (ES6)</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ul>
                </article>

                <article className="portfolio-course__project">
                    <img src={feedReader} alt="feed reader testing project screen" className="project__image" />
                    <h4><a>Feed Reader Testing</a></h4>
                    <p>Comprehensive unit tests</p>
                    <p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                        </a> | <a
                            href="https://github.com/patriciarrsilva/Feed-Reader-Testing"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                        </a>
                    </p>
                    <p>Forked from <a href="https://github.com/udacity/frontend-nanodegree-feedreader" target="_blank" rel="noopener noreferrer">starter code</a></p>
                    <p>Passed on June 4st, 2018</p>
                    <ul>
                        <li>Jasmine</li>
                    </ul>
                </article>

                <article className="portfolio-course__project">
                    <img src={arcadeGame} alt="classic arcade game clone project screen" className="project__image" />
                    <h4><a>Classic Arcade Game Clone</a></h4>
                    <p>A recreation of the classic arcade game Frogger</p>
                    <p>
                        <a
                            href="https://patriciarrsilva.github.io/Classic-Arcade-Game-Clone/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                            </a> | <a
                            href="https://github.com/patriciarrsilva/Classic-Arcade-Game-Clone"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                            </a>
                    </p>
                    <p>Forked from <a href="https://github.com/udacity/frontend-nanodegree-arcade-game" target="_blank" rel="noopener noreferrer">starter code</a></p>
                    <p>Passed on May 21st, 2018</p>
                    <ul>
                        <li>JavaScript (ES6)</li>
                    </ul>
                </article>

                <article className="portfolio-course__project">
                    <img src={memoryGame} alt="memory game project screen" className="project__image" />
                    <h4><a>Memory Game</a></h4>
                    <p>A card matching game (a.k.a Concentration)</p>
                    <p>
                        <a
                            href="https://patriciarrsilva.github.io/Memory-Game/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                        </a> | <a
                            href="https://github.com/patriciarrsilva/Memory-Game"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                        </a>
                    </p>
                    <p>Forked from <a href="https://github.com/udacity/fend-project-memory-game" target="_blank" rel="noopener noreferrer">starter code</a></p>
                    <p>Passed on April 2nd, 2018</p>
                    <ul>
                        <li>Responsive</li>
                        <li>JavaScript</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ul>
                </article>

                <article className="portfolio-course__project">
                    <img src={portfolioSite} alt="portfolio project screen" className="project__image" />
                    <h4><a>Portfolio Site</a></h4>
                    <p>A simple portfolio site to keep track of my projects</p>
                    <p>
                        <a
                            href="https://patriciarrsilva.github.io/Portfolio-Site/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                        </a> | <a
                            href="https://github.com/patriciarrsilva/Portfolio-Site"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                        </a>
                    </p>
                    <p>Passed on March 9th, 2018</p>
                    <ul>
                        <li>Responsive</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ul>
                </article>

                <article className="portfolio-course__project">
                    <img src={tradingCards} alt="animal trading cards project screen" className="project__image" />
                    <h4><a>Animal Trading Cards</a></h4>
                    <p>A trading card with my favorite animal</p>
                    <p>
                        <a
                            href="https://patriciarrsilva.github.io/Animal-Trading-Cards/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                        </a> | <a
                            href="https://github.com/patriciarrsilva/Animal-Trading-Cards"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                        </a>
                    </p>
                    <p>Udacity Front-End Nanodegree Program / Google Developer Challenge Scholarship (forked from <a href="https://github.com/udacity/fend-animal-trading-cards" target="_blank" rel="noopener noreferrer">starter code</a>)</p>
                    <p>Passed on February 16th, 2018</p>
                    <ul>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ul>

                </article>

                <article className="portfolio-course__project">
                    <img src={pixelArt} alt="pixel art maker project screen" className="project__image" />
                    <h4><a>Pixel Art Maker</a></h4>
                    <p>Users can draw pixel art on a customizable canvas</p>
                    <p>
                        <a
                            href="https://patriciarrsilva.github.io/Pixel-Art-Maker/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                        </a> | <a
                            href="https://github.com/patriciarrsilva/Pixel-Art-Maker"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                        </a>
                    </p>
                    <p>Udacity Front-End Nanodegree Program / Google Developer Challenge Scholarship (forked from <a href="https://github.com/udacity/project-pixel-art-maker-starter" target="_blank" rel="noopener noreferrer">starter code</a>)</p>
                    <p>Exercise completed on January 2018</p>
                    <ul>
                        <li>JavaScript</li>
                    </ul>
                </article>
            </section >

            <section className="portfolio-course">
                <h3><img src="" alt="logo"></img> EDIT Front-End Development Course</h3>
            </section>

            <section className="portfolio-course">
                <h3><img src="" alt="logo"></img>freeCodeCamp Responsive Web Design Certification</h3>

                <article className="portfolio-course__project">
                    <img src={surveyForm} alt="survey form project screen" className="project__image" />
                    <h4><a>Survey Form</a></h4>
                    <p>A simple survey form</p>
                    <p>
                        <a
                            href="https://patriciarrsilva.github.io/Survey-form/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                        </a> | <a
                            href="https://github.com/patriciarrsilva/Survey-form"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                        </a>
                    </p>
                    <ul>
                        <li>Responsive</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ul>
                </article>

                <article className="portfolio-course__project">
                    <img src={tributePage} alt="tribute page project screen" className="project__image" />
                    <h4><a>Tribute Page</a></h4>
                    <p>A simple tribute page</p>
                    <p>
                        <a
                            href="https://patriciarrsilva.github.io/Tribute-page/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Demo
                        </a> | <a
                            href="https://github.com/patriciarrsilva/Tribute-page"
                            target="_blank"
                            rel="noopener noreferrer">
                            Code
                        </a>
                    </p>
                    <ul>
                        <li>Responsive</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ul>
                </article>
            </section >
        </main>
    )
}
export default Portfolio