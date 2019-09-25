import React, { Component } from 'react';
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

class Portfolio extends Component {
    state = {
        courses: [
            {
                title: 'Udacity Front-End Nanodegree Program',
                projects: [
                    {
                        image: neighborhoodMap,
                        title: 'Neighborhood Map',
                        description: 'Users can search locations on the map and display information about it on an info window',
                        demo: 'https://patriciarrsilva.github.io/Neighborhood-Map/',
                        code: 'https://github.com/patriciarrsilva/Neighborhood-Map',
                        pass: 'Passed on',
                        datetime: '2018-08-10',
                        date: 'August 10th, 2018',
                        skills: ['React (JSX)', 'Google Maps API', 'FourSquare API', 'PWA', 'Accessibility', 'Responsive', 'JavaScript (ES6)', 'CSS3', 'HTML5']
                    },
                    {
                        image: myReads,
                        title: 'MyReads: A Book Tracking App',
                        description: 'Users can select and categorize books into a virtual bookshelf',
                        demo: 'https://patriciarrsilva.github.io/MyReads-A-Book-Tracking-App/',
                        code: 'https://github.com/patriciarrsilva/MyReads-A-Book-Tracking-App',
                        fork: 'https://github.com/udacity/reactnd-project-myreads-starter',
                        pass: 'Passed on',
                        datetime: '2018-07-30',
                        date: 'July 30th, 2018',
                        skills: ['React (JSX)', 'React Router', 'API', 'JavaScript (ES6)', 'HTML5']
                    },
                    {
                        image: restaurantReviews,
                        title: 'Restaurant Reviews App',
                        description: 'An accessible, responsive and progressive web application',
                        demo: 'https://patriciarrsilva.github.io/Restaurant-Reviews-App-to-host/',
                        code: 'https://github.com/patriciarrsilva/Restaurant-Reviews-App',
                        fork: 'https://github.com/udacity/mws-restaurant-stage-1',
                        pass: 'Passed on',
                        datetime: '2018-07-01',
                        date: 'July 1st, 2018',
                        skills: ['PWA', 'Accessibility', 'Responsive', 'JavaScript (ES6)', 'CSS3', 'HTML5']
                    },
                    {
                        image: feedReader,
                        title: 'Feed Reader Testing',
                        description: 'Comprehensive unit tests',
                        demo: '',
                        code: 'https://github.com/patriciarrsilva/Feed-Reader-Testing',
                        fork: 'https://github.com/udacity/frontend-nanodegree-feedreader',
                        pass: 'Passed on',
                        datetime: '2018-06-04',
                        date: 'June 4st, 2018',
                        skills: ['Jasmine']
                    },
                    {
                        image: arcadeGame,
                        title: 'Classic Arcade Game Clone',
                        description: 'A recreation of the classic arcade game Frogger',
                        demo: 'https://patriciarrsilva.github.io/Classic-Arcade-Game-Clone/',
                        code: 'https://github.com/patriciarrsilva/Classic-Arcade-Game-Clone',
                        fork: 'https://github.com/udacity/frontend-nanodegree-arcade-game',
                        pass: 'Passed on',
                        datetime: '2018-05-21',
                        date: 'May 21st, 2018',
                        skills: ['JavaScript (ES6)']
                    },
                    {
                        image: memoryGame,
                        title: 'Memory Game',
                        description: 'A card matching game (a.k.a Concentration)',
                        demo: 'https://patriciarrsilva.github.io/Memory-Game/',
                        code: 'https://github.com/patriciarrsilva/Memory-Game',
                        fork: 'https://github.com/udacity/fend-project-memory-game',
                        pass: 'Passed on',
                        datetime: '2018-04-02',
                        date: 'April 2nd, 2018',
                        skills: ['Responsive', 'JavaScript', 'CSS3', 'HTML5']
                    },
                    {
                        image: portfolioSite,
                        title: 'Portfolio Site',
                        description: 'A simple portfolio site to keep track of my projects',
                        demo: 'https://patriciarrsilva.github.io/Portfolio-Site/',
                        code: 'https://github.com/patriciarrsilva/Portfolio-Site',
                        pass: 'Passed on',
                        datetime: '2018-03-09',
                        date: 'March 9th, 2018',
                        skills: ['Responsive', 'CSS3', 'HTML5']
                    }
                ]
            },
            {
                title: 'Udacity Front-End Nanodegree Program / Google Developer Challenge Scholarship',
                projects: [
                    {
                        image: tradingCards,
                        title: 'Animal Trading Cards',
                        description: 'A trading card with my favorite animal',
                        demo: 'https://patriciarrsilva.github.io/Animal-Trading-Cards/',
                        code: 'https://github.com/patriciarrsilva/Animal-Trading-Cards',
                        fork: 'https://github.com/udacity/fend-animal-trading-cards',
                        pass: 'Passed on',
                        datetime: '2018-02-16',
                        date: 'February 16th, 2018',
                        skills: ['CSS3', 'HTML5']
                    },
                    {
                        image: pixelArt,
                        title: 'Pixel Art Maker',
                        description: 'Users can draw pixel art on a customizable canvas',
                        demo: 'https://patriciarrsilva.github.io/Pixel-Art-Maker/',
                        code: 'https://github.com/patriciarrsilva/Pixel-Art-Maker',
                        fork: 'https://github.com/udacity/project-pixel-art-maker-starter',
                        pass: 'Exercise completed on',
                        datetime: '2018-01',
                        date: 'January 2018',
                        skills: ['JavaScript']
                    }
                ]
            },
            {
                title: 'EDIT Front-End Development Course',
                projects: []
            },
            {
                title: 'freeCodeCamp Responsive Web Design Certification',
                projects: [
                    {
                        image: surveyForm,
                        title: 'Survey Form',
                        description: 'A simple survey form',
                        demo: 'https://patriciarrsilva.github.io/Survey-form/',
                        code: 'https://github.com/patriciarrsilva/Survey-form',
                        skills: ['Responsive', 'CSS3', 'HTML5']
                    },
                    {
                        image: tributePage,
                        title: 'Tribute Page',
                        description: 'A simple tribute page',
                        demo: 'https://patriciarrsilva.github.io/Tribute-page/',
                        code: 'https://github.com/patriciarrsilva/Tribute-page',
                        skills: ['Responsive', 'CSS3', 'HTML5']
                    }
                ]
            }
        ]
    };

    render() {
        return (
            <main id="portfolio" className="portfolio">
                <h2>Portfolio</h2>

                {this.state.courses.map((course, i) => {
                    return (
                        <section className="portfolio-course" key={i}>
                            <h3 className="portfolio-course__title"><img src="" alt="logo"></img> {course.title}</h3>

                            {course.projects.map((project, i) => {
                                return (
                                    <article className="project" key={i}>
                                        <img src={project.image} alt={`${project.title} project screen`} className="project__image" />
                                        <h4 className="project__title"><a href="">{project.title}</a></h4>
                                        <p className="project__description font-size-xs">{project.description}</p>
                                        <p className="project__links">
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                Demo
                                        </a> | <a
                                                href={project.code}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                Code
                                        </a>
                                        </p>
                                        {project.fork && (
                                            <p>Forked from <a href={project.fork} target="_blank" rel="noopener noreferrer">starter code</a></p>
                                        )}
                                        {project.pass && (
                                            <p>{project.pass} <time datetime={project.datetime}>{project.date}</time></p>
                                        )}
                                        <ul className="project__skills">
                                            {project.skills.map((skill, i) => {
                                                return (
                                                    <li className="project__skills-item" key={i}>
                                                        {skill}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </article>
                                )
                            })}
                        </section >
                    )
                })}

            </main >
        )
    }
}

export default Portfolio