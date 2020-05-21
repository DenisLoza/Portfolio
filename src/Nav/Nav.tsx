import React from 'react';
import s from './Nav.module.css';

function Nav() {
    return (
        <div className={s.nav}>
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">CONTACT</a>
        </div>
    );
}

export default Nav;