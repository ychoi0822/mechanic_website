import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {

    aboutText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."; 

    render() {
        return (
            <div className="aboutus">
                <div className="title">About Us</div>
                <div className="aboutText">{ this.aboutText }</div>
            </div>
        );
    }
};

export default About;
