import React from 'react';
import './css/MenuIcon.css';

function MenuIcon(props) {
    const { visible, handleMenuClick } = props;

    let animation = ''

    if (visible) {
        animation = 'change';
    }

    return (
        <button onClick={handleMenuClick} className={`menu-icon ${animation}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </button>
    )
}

export default MenuIcon