import React from 'react';
import s from './Item.module.css';

type ItemType = {
    title: string
    description: string
}

function Item(props: ItemType) {
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

export default Item;