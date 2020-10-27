import React, { Component } from 'react';
import '../css/FormContainer.css';

class FormContainer extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            textmessage: ''
        }
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <input type="text" placeholder="NAME" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    <input type="text" placeholder="PHONE" className="form-control" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
                    <input type="email" placeholder="EMAIL" className="form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    <textarea  placeholder="MESSAGE" className="form-control" row="5" value={this.state.textmessage} onChange={this.onMessageChange.bind(this)} />
                </div>
                <input className="submit" type="submit" value="Submit" />
            </form>
        );
    }

    onNameChange = (e) => { this.setState({name: e.target.value}) }
    onPhoneChange = (e) => { this.setState({phone: e.target.value}) }
    onEmailChange = (e) => { this.setState({email: e.target.value}) }
    onMessageChange = (e) => { this.setState({textmessage: e.target.value}) }
    
    handleFormSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    }
};

export default FormContainer;
