import React from 'react';
import s from './Form.module.css';


function Form() {
    return (
        <div className={s.form}>
            <input className={s.inputName}
                   placeholder="YOUR NAME"/>
            <input className={s.inputEmail}
                   placeholder="YOUR E-MAIL"/>
            <textarea className={s.textarea}
                      placeholder="YOUR MESSAGE"></textarea>
        </div>
    );
}

export default Form;