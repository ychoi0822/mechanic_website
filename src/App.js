import React, { Component } from 'react';
import './App.css';
import './css/Navbar.css'
import './css/Footer.css'
import About from './components/About.js'
import Services from './components/Services.js'
import Contact from './components/Contact.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.scrollToNode = this.scrollToNode.bind(this);
  }

  scrollToNode(node) {
      node.scrollIntoView({ behavior: 'smooth' });
  }     

  changeColorOnHover = (e) => {
      e.target.style.color = '#5c68ad';
  }

  changeColorOnLeave = (e) => {
      e.target.style.color = '#191970';
  }
   
  render() {
      return (
        <div className="App">
            <div className="navbar">
              <a className="home" href="http://localhost:3000/" onMouseOver={ this.changeColorOnHover } onMouseLeave={ this.changeColorOnLeave }>Auto Mechanics <i className="fas fa-wrench"></i></a>
              <div className="header-space"></div>
              <button onMouseOver={ this.changeColorOnHover } onMouseLeave={ this.changeColorOnLeave } onClick={ () => this.scrollToNode(this.aboutus)}>About Us</button>
              <button onMouseOver={ this.changeColorOnHover } onMouseLeave={ this.changeColorOnLeave } onClick={ () => this.scrollToNode(this.services)}>Our Services</button>
              <button onMouseOver={ this.changeColorOnHover } onMouseLeave={ this.changeColorOnLeave } onClick={ () => this.scrollToNode(this.contact)}>Contact Us <i className="fas fa-paper-plane"></i></button>
            </div>

            <div ref={(node) => this.aboutus = node}>
                <About />
            </div>
            <div ref={(node) => this.services = node}>
                <Services />
            </div>
            <div ref={(node) => this.contact = node}>
                <Contact />
            </div>

            <div className="footer">
                <div className="top">
                  <p><i class="fas fa-phone"></i> 09-xxx-xxxx</p>
                  <p><i class="far fa-envelope"></i> xxxx@gmail.com</p>
                  <p><i class="fab fa-facebook-square"></i> Facebook</p>
                </div>
                <div className="bottom">
                  <p><i class="far fa-clock"></i> Monday to Friday 9am - 5pm</p>
                  <p><i class="fas fa-map-marker-alt"></i> Address</p>
                </div>
            </div>
        </div>
      );
    }
  }

export default App;
