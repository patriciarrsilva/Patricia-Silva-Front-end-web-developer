import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import './css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2>Let's connect!</h2>

            <div className="contacts">
                <a
                    href="https://www.linkedin.com/in/patriciarrsilva/?locale=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts__icon linkedin-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                    href="https://github.com/patriciarrsilva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts__icon github-icon">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="mailto:prrs89@gmail.com"
                    className="contacts__icon email-icon">
                    <FontAwesomeIcon icon={faAt} />
                </a>
            </div>

            <address className="address">
                <p>Patrícia Silva</p>
                <p>Porto, Portugal (2019)</p>
            </address>
        </footer>
    )
}
export default Footer