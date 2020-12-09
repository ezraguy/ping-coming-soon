import React from 'react'
import '../scss/email-input.scss'
const EmailInput = () => {
    return (
        <div className="email-input-wrap">
            <input type="text" placeholder="Your email address..." title="email" className="email-input" />
            <div className="notify-btn-wrap">
                <button className="notify-btn">Notify Me</button>
            </div>
        </div>
    );
}

export default EmailInput;