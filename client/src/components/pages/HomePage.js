import React, { Component } from 'react';
import MainFooter from '../footer/MainFooter';
import axios from 'axios';

export default class  HomePage extends Component {
    state = {
        hello: null
      }
     
      componentDidMount() {
        axios.get('/hello')
        .then(res => this.setState({hello: res.data}))
        .catch(err => console.log(err))
      }
      render() {
    return (
        <div>
            
                <nav className="uk-navbar-container uk-navbar-transparent uk-container" uk-navbar="">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active">
                                <a href="/">LITTLE CREEK ACADEMY</a>
                            </li>
                            <li>
                                <a className="uk-text-light" href="#">About us</a>
                            </li>
                            <li>
                                <a className="uk-text-light" href="#">Curriculum</a>
                            </li>
                            <li>
                                <a className="uk-text-light" href="#">Admission</a>
                            </li>
                            <li>
                                <a className="uk-text-light" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>


                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active register-button">
                                <a href="/login">Log in</a>
                            </li>
                            <li style={orText}>
                                <a className="uk-text-lowercase uk-text-light" href="#">or</a>
                            </li>
                            <p style={registerButton}>
                                <a className="uk-button uk-button-primary uk-text-light" href="/registration">Register</a>
                            </p>
                        </ul>
                    </div>
                </nav>
                
            
            <div style={sectionA} className="Slider">
                <div className="uk-container">
                    <h1 style={sliderContent} className="uk-text-lead uk-text-light">Lorem ipsum dolor</h1>
                    <p style={sliderContent} className="uk-text-meta uk-text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <button style={sliderContent} class="uk-button uk-button-primary uk-text-light">Primary</button>
                </div>
            </div>
            <div className="uk-slideshow">
    <ul class="uk-slideshow-items">
        <li>
            a
        </li>
        <li>
            b
        </li>
    </ul>
</div>

<div>
    <p className="uk-text-meta uk-text-light">{this.state.hello
    ? <p> {this.state.hello} </p>
    :null}</p>
</div>

            
            
            <div style={sectionC}>
                <p></p>
            </div>
            <MainFooter/>
    </div>
    );
      }
}
const navPage = {
    fontSize: "10px"
};

const registerButton = {
    marginTop: "18px"
};

const orText = {
    marginLeft: "-18px",
    marginRight: "-3px"
}

const sliderContent ={
    marginRight: "120px",
    marginLeft: "120px"
}

const sectionA = {
    marginTop: "200px"
}

const sectionC = {
    height: "200px",
    marginTop: "200px"
}

