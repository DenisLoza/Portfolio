import React from 'react';
import s from './About.module.css';
import Item from "./Item/Item";


function About() {
    return (
        <div className={s.about}>
            <div className={s.wrap}>
                <h2>ABOUT ME</h2>
                <div className={s.gridItem}>
                    <Item title="HTML"
                          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... "/>
                    <Item title="CSS"
                          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... "/>
                    <Item title="JavaScript"
                          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... "/>
                    <Item title="React"
                          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... "/>
                    <Item title="Redux"
                          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... "/>
                    <Item title="Angular"
                          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... "/>
                </div>
            </div>
        </div>
    );
}

export default About;