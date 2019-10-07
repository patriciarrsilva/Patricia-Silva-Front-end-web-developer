import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import edit from './img/edit.png';
import udacity from './img/udacity.svg';
import neighborhoodMap from './img/neighborhood-map.png';
import myReads from './img/my-reads.png';
import restaurantReviews from './img/restaurant-reviews.png';
import feedReader from './img/feed-reader.png';
import arcadeGame from './img/arcade-game.png';
import memoryGame from './img/memory-game.png';
import portfolioSite from './img/portfolio-site.png';
import tradingCards from './img/trading-cards.png';
import pixelArt from './img/pixel-art.png';
import blog from './img/blog.png';
import tindeirao from './img/tindeirao.png';
import creative from './img/creative.png';
import surveyForm from './img/survey-form.png';
import tributePage from './img/tribute-page.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import './css/Portfolio.css';

class Portfolio extends Component {
    state = {
        courses: [
            {
                title: 'EDIT Front-End Development Course',
                image: edit,
                link: 'https://edit.com.pt/',
                projects: [
                    {
                        image: blog,
                        title: 'Blog',
                        description: 'A blog that uses an API to fetch data for the posts',
                        demo: 'https://patriciarrsilva.github.io/Blog/',
                        code: 'https://github.com/patriciarrsilva/Blog',
                        pass: 'Developed on',
                        datetime: '2019-08',
                        date: 'August, 2019',
                        skills: 'React (JSX), React Router, API, Responsive, JavaScript (ES6), CSS3, HTML5'
                    },
                    {
                        image: tindeirao,
                        title: 'Tindeirão',
                        description: 'A responsive progressive web app that uses geolocation',
                        demo: 'https://patriciarrsilva.github.io/tindeirao/',
                        code: 'https://github.com/patriciarrsilva/tindeirao',
                        pass: 'Developed on',
                        datetime: '2019-07',
                        date: 'July, 2019',
                        skills: 'PWA, Responsive, JavaScript (ES6), SCSS, CSS3, HTML5, CSS minification, Autoprefixer, Express, Notifications and Push APIs, Web push'
                    },
                    {
                        image: creative,
                        title: 'Creative',
                        description: 'A responsive web page with a mobile first approach',
                        demo: 'https://patriciarrsilva.github.io/Creative-web-page-responsive/',
                        code: 'https://github.com/patriciarrsilva/Creative-web-page-responsive',
                        pass: 'Developed on',
                        datetime: '2019-05',
                        date: 'May, 2019',
                        skills: 'Responsive, SCSS, CSS3, HTML5'
                    }

                ]
            },
            {
                title: 'Udacity Front-End Nanodegree Program',
                image: udacity,
                link: 'https://www.udacity.com/',
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
                        skills: 'React (JSX), Google Maps API, FourSquare API, PWA, Accessibility, Responsive, JavaScript (ES6), CSS3, HTML5'
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
                        skills: 'React (JSX), React Router, API, JavaScript (ES6), HTML5'
                    },
                    {
                        image: restaurantReviews,
                        title: 'Restaurant Reviews App',
                        description: 'An accessible, responsive and progressive web application',
                        demo: 'https://patriciarrsilva.github.io/Restaurant-Reviews-App/',
                        code: 'https://github.com/patriciarrsilva/Restaurant-Reviews-App',
                        fork: 'https://github.com/udacity/mws-restaurant-stage-1',
                        pass: 'Passed on',
                        datetime: '2018-07-01',
                        date: 'July 1st, 2018',
                        skills: 'PWA, Accessibility, Responsive, JavaScript (ES6), CSS3, HTML5'
                    },
                    {
                        image: feedReader,
                        title: 'Feed Reader Testing',
                        description: 'Comprehensive unit tests',
                        code: 'https://github.com/patriciarrsilva/Feed-Reader-Testing',
                        fork: 'https://github.com/udacity/frontend-nanodegree-feedreader',
                        pass: 'Passed on',
                        datetime: '2018-06-04',
                        date: 'June 4st, 2018',
                        skills: 'Jasmine'
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
                        skills: 'JavaScript (ES6)'
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
                        skills: 'Responsive, JavaScript, CSS3, HTML5'
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
                        skills: 'Responsive, CSS3, HTML5'
                    }
                ]
            },
            {
                title: 'Udacity Front-End Nanodegree Program / Google Developer Challenge Scholarship',
                image: udacity,
                link: 'https://www.udacity.com/scholarships',
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
                        skills: 'CSS3, HTML5'
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
                        skills: 'JavaScript'
                    }
                ]
            },
            {
                title: 'freeCodeCamp Responsive Web Design Certification',
                icon: faFreeCodeCamp,
                link: 'https://learn.freecodecamp.org/',
                projects: [
                    {
                        image: surveyForm,
                        title: 'Survey Form',
                        description: 'A simple survey form',
                        demo: 'https://patriciarrsilva.github.io/Survey-form/',
                        code: 'https://github.com/patriciarrsilva/Survey-form',
                        skills: 'Responsive, CSS3, HTML5'
                    },
                    {
                        image: tributePage,
                        title: 'Tribute Page',
                        description: 'A simple tribute page',
                        demo: 'https://patriciarrsilva.github.io/Tribute-page/',
                        code: 'https://github.com/patriciarrsilva/Tribute-page',
                        skills: 'Responsive, CSS3, HTML5'
                    }
                ]
            }
        ]
    };

    render() {
        return (
            <main id="portfolio" className="portfolio">
                <h2 className="portfolio-title">Portfolio</h2>

                {this.state.courses.map((course, i) => (
                    <section className="portfolio-course" key={i}>
                        <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio-course__title-link">
                            <h3 className="portfolio-course__title">
                                {course.icon && (
                                    <FontAwesomeIcon icon={course.icon} className="portfolio-course__icon" />
                                )}
                                {course.image && (
                                    <img src={course.image} alt="logo" className="portfolio-course__image"></img>
                                )}
                                {course.title}
                            </h3>
                        </a>

                        <div className="projects-container">
                            {course.projects.map((project, i) => (
                                <article className="project" key={i}>
                                    <Link to="/project" className="project__title-link">
                                        <h4 className="project__title">{project.title}</h4>
                                        <img src={project.image} alt={`${project.title} project screen`} className="project__image" />
                                    </Link>
                                    <p className="project__description">{project.description}</p>
                                    <p className="project__links">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="button button--right-margin">
                                                Demo
                                            </a>
                                        )}
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="button">
                                            Code
                                            </a>
                                    </p>
                                    {project.fork && (
                                        <p className="project__fork">
                                            Forked from <a href={project.fork} target="_blank" rel="noopener noreferrer" className="project__fork-link">starter code</a>
                                        </p>
                                    )}
                                    {project.pass && (
                                        <p className="project__pass">{project.pass} <time dateTime={project.datetime}>{project.date}</time></p>
                                    )}
                                    <p className="project__skills">{project.skills}</p>
                                </article>
                            ))}
                        </div>

                        <hr className="hr"></hr>
                    </section>
                ))}
            </main >
        )
    }
}

export default Portfolio