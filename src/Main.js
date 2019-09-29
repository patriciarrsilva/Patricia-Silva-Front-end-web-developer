import React from 'react';
import Home from './Home';
import './css/Main.css';

function Main(props) {
    const { handleOutsideClick } = props;

    return (
        <div className="main">
            <Home handleOutsideClick={handleOutsideClick} />
        </div>
    )
}
export default Main