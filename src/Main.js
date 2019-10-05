import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import ComingSoon from './ComingSoon';
import './css/Main.css';

function Main(props) {
    const { handleOutsideClick } = props;

    return (
        <div className="main">
            <Route exact path="/" render={() => (
                <Home handleOutsideClick={handleOutsideClick} />
            )} />
            <Route path="/coming-soon" component={ComingSoon} />
        </div>
    )
}

export default Main