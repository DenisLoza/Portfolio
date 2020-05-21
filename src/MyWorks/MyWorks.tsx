import React from 'react';
import s from './MyWorks.module.css';
import WorksItem from "./WorksItem/WorksItem";


function MyWorks() {
    return (
        <div className={s.myWorks}>
            <div className={s.wrap}>
               <h2 className={s.title}>My Works</h2>
                <div className={s.flexItem}>
                <WorksItem title="My first work"
                      description="Lorem ipsum dolor sit amet"/>
                <WorksItem title="My second work"
                      description="Lorem ipsum dolor sit amet"/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;