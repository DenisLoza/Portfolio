import React from 'react';
import s from './WorksItem.module.css';


type WorksItemType = {
    title: string
    description: string
}

function WorksItem(props: WorksItemType) {
    return (
        <div className={s.item}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <div className={s.description}>
                {props.description}
            </div>
        </div>
    );
}

export default WorksItem;