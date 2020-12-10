import React, { useState } from 'react';
import '../scss/main.scss';
import logo from '../images/logo.svg';
import EmailInput from './email-input';
import dashboard from '../images/illustration-dashboard.png';
import facebookIcon from '../icons/facebook.svg';
import twitterIcon from '../icons/twitter.svg';
import instagramIcon from '../icons/instagram.svg';
const Main = () => {
    const [socialIcons, setSocialIcons] = useState([
        { id: 1, src: facebookIcon }, { id: 2, src: twitterIcon }, { id: 3, src: instagramIcon }
    ])
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
            <div className="dashboard-wrap">
                <img src={dashboard} alt="dashboard" className="dashboard-img" />
            </div>
            <div className="social-icons-wrap">

                <div className="social-icons">
                    {socialIcons.map(({ src, id }) => {
                        return <img src={src} key={id} alt="social icon" className="icon" />
                    })}
                </div>
            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
Coded by <a href="https://github.com/ezraguy">Guy Ezra</a>.
</div>
        </div>
    );
}

export default Main;