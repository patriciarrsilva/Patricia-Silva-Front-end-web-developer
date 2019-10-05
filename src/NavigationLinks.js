import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/NavigationLinks.css';

class NavigationLinks extends Component {
    state = {
        navigationLinks: [
            { name: 'Portfolio', link: '/' },
            { name: 'About Me', link: '/coming-soon' },
            { name: 'Skills', link: '/coming-soon' },
            { name: 'Work Experience', link: '/coming-soon' },
            { name: 'Education', link: '/coming-soon' }
        ]
    }

    render() {
        const { visible } = this.props;
        const { navigationLinks } = this.state;

        let visibility = 'hide';

        if (visible) {
            visibility = 'show';
        }

        return (
            <ul className={`nav-list ${visibility}`}>
                {navigationLinks.map((navigationLink, i) => (
                    <li className="nav-list__item" key={i}>
                        <Link to={navigationLink.link} className="nav-list__link">{navigationLink.name}</Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default NavigationLinks