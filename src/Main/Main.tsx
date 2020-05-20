import React from 'react';
import s from './Main.module.css';


function Main() {
    return (
        <div className={s.main}>
            <div className={s.wrap}>
                <div className={s.text}>
                    <span>Hi there !</span>
                    <h1>I am Denis Loza</h1>
                    A FrontEnd developer.
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default Main;