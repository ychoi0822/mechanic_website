import React, { Component } from 'react';
import '../css/Contact.css';
import FormContainer from './FormContainer';

class Contact extends Component { 

    render() {
        return (
            <div className="contact" id="contact">
                <div className="title">Contact Us</div>
                <div className="contactText"></div>
                <FormContainer />
            </div>
        );
    }
};

export default Contact;
