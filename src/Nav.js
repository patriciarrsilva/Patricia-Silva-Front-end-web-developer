import React, { Component } from 'react';
import './css/Nav.css';

class Nav extends Component {
    state = {
        visible: false
    }

    handleClick = (e) => {
        this.setState({ visible: !this.state.visible })
        e.stopPropagation();
    }

    render() {

        let visibility = 'hide';
        let animation = ''

        if (this.state.visible) {
            visibility = 'show';
            animation = 'change';
        }

        return (
            <div className="nav-container">
                <nav className="nav">
                    <a href="" className="nav-home">
                        <h1 className="nav-home__title font-size-m">Patrícia Silva</h1>
                        <h2 className="nav-home__subtitle font-size-xs">Front-end web developer</h2>
                    </a>

                    <ul className={`nav-list font-size-xs ${visibility}`}>
                        <li className="nav-list__item"><a href="" className="nav-list__link">Portfolio</a></li>
                        <li className="nav-list__item"><a href="" className="nav-list__link">About Me</a></li>
                        <li className="nav-list__item"><a href="" className="nav-list__link">Skills</a></li>
                        <li className="nav-list__item"><a href="" className="nav-list__link">Work Experience</a></li>
                        <li className="nav-list__item"><a href="" className="nav-list__link">Education</a></li>
                    </ul>

                    <button onClick={this.handleClick} className={`menu-icon ${animation}`}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </button>
                </nav>
            </div>
        )
    }
}

export default Nav