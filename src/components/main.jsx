import React from 'react';
import '../scss/main.scss';
import logo from '../images/logo.svg';
import EmailInput from './email-input';
const Main = () => {
    return (
        <div className="main">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="main-title">
                We are launching <span className="bold">soon!</span>
            </div>
            <div className="sub-title">
                Subscribe and get notified
            </div>
            <EmailInput />
        </div>
    );
}

export default Main;