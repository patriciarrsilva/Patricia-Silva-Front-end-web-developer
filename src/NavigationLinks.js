import React, { Component } from 'react';
import './css/NavigationLinks.css';

class NavigationLinks extends Component {
    state = {
        navigationLinks: [
            'Portfolio',
            'About Me',
            'Skills',
            'Work Experience',
            'Education'
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
                {navigationLinks.map((link, i) => {
                    return (
                        <li className="nav-list__item" key={i}>
                            <a href="" className="nav-list__link">{link}</a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default NavigationLinks