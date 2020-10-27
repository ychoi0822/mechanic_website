import React, { Component } from 'react';
import '../css/Services.css';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: [
                "Check and set tyre pressures",
                "Check and top-up under bonnet fluids",
                "Replace engine oil filter up to $20",
                "Reset service/maintenance light",
                "Replace engine oil up to 4.5L standard oil"
            ]
        }
    }

    render() {
        return (
            <div className="services" id="services">
                <div className="title">Services</div>
                <div className="servicesText">
                    { this.state.services.map(item => (<p>{item}</p>)) }
                </div>
            </div>
        );
    }
};

export default Services;
