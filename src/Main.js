import React from 'react';
import Home from './Home';
import ComingSoon from './ComingSoon';
import './css/Main.css';

function Main(props) {
    const { handleOutsideClick } = props;

    return (
        <div className="main">
            <Home handleOutsideClick={handleOutsideClick} />
            <ComingSoon />
        </div>
    )
}

export default Main