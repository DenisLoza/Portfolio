import React from 'react';
import s from './Footer.module.css';


function Footer() {
    return (
        <div className={s.footerContact}>
            <div className={s.wrap}>
                <h2 className={s.title}>DENIS LOZA</h2>
                <div className={s.links}>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">VKontakte</a>
                    <a href="#">LinkedIn</a>
                </div>
                © 2020 Denis Loza, All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;