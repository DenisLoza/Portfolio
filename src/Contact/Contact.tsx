import React from 'react';
import s from './Contact.module.css';
import Form from "./Form/Form";


function Contact() {
    return (
        <div className={s.contact}>
            <div className={s.wrap}>
                <h2 className={s.title}>CONTACT</h2>
                <div className={s.form}>
                    <Form />
                </div>

                <button className={s.button}>SEND MESSAGE</button>
            </div>
        </div>
    );
}

export default Contact;